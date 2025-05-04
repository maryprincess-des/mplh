import { useEffect, useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavigationBar from '@components/NavigationBar';
import { loadProjectImages } from '@js/categories';

const generateFilters = (images) => {
  const extractedFilters = images.map((image) => image.filter.replace(/_/g, ' '));
  return ['All', ...Array.from(new Set(extractedFilters))];
};

const filterImages = (images, selectedFilter) => {
  if (selectedFilter.toLowerCase() === 'all') {
    return images;
  }
  return images.filter((image) => image.filter.toLowerCase() === selectedFilter.toLowerCase());
};

const CategoryPage = () => {
  const { category } = useParams();
  const [projectImages, setProjectImages] = useState([]);
  const [availableFilters, setAvailableFilters] = useState(['All']);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    if (category) {
      fetchProjectImages(category);
    }
  }, [category]);

  const fetchProjectImages = async (categoryName) => {
    try {
      const images = await loadProjectImages(categoryName);
      setProjectImages(images);
      setAvailableFilters(generateFilters(images));
    } catch (error) {
      console.error('Failed to load project images:', error);
    }
  };

  const filteredImagePaths = useMemo(() => {
    const filteredImages = filterImages(projectImages, activeFilter);
    return filteredImages.map((image) => image.fullPath);
  }, [projectImages, activeFilter]);

  return (
    <section className="flex flex-col min-h-screen bg-iron-smoke text-white">
      <NavigationBar className="flex-1" />

      <div className="relative isolate px-4 py-6 lg:px-24">
        <Link to="/" className="text-gray-400 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 19.5 4.5 12l6.75-7.5M4.5 12h15" />
          </svg>
          <p className="uppercase">Back</p>
        </Link>

        <div className="flex flex-col gap-2">
          <h1 className="uppercase text-4xl lg:text-8xl font-extrabold">{category}</h1>

          <div className="flex gap-2 lg:gap-6 flex-wrap mb-6">
            {availableFilters.map((filterName) => (
              <button
                key={filterName}
                className={`w-fit h-auto uppercase text-[8.5px] lg:text-sm border-1 border-solid rounded-md px-3 lg:px-6 py-1 hover:cursor-pointer ${
                  activeFilter === filterName ? 'bg-white text-black' : ''
                }`}
                onClick={() => setActiveFilter(filterName)}
              >
                {filterName}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImagePaths.map((path, index) => (
              <div key={index} className="w-full aspect-[4/3] lg:aspect-[8/9] overflow-hidden rounded-md  flex items-center justify-center">
                <img
                  src={path}
                  alt={`Project ${index}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
