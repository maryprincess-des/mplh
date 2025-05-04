const allImagePaths = {
  graphic_design: () => import.meta.glob('@assets/images/projects/graphic_design/**/*.jpg'),
  marketing_branding: () => import.meta.glob('@assets/images/projects/marketing_branding/**/*.jpg'),
  publication_layout_design: () => import.meta.glob('@assets/images/projects/publication_layout_design/**/*.jpg'),
  multimedia_video_editing: () => import.meta.glob('@assets/images/projects/multimedia_video_editing/**/*.jpg'),
};

const normalizeCategory = (category) => {
  return category
    .toString()
    .replace(/&/g, '')
    .replace(/\s+/g, '_')
    .toLowerCase();
};

const loadProjectImages = async (category) => {
  const normalizedCategory = normalizeCategory(category);
  const importer = allImagePaths[normalizedCategory];

  if (!importer) {
    console.warn(`No images found for category: "${category}"`);
    return [];
  }

  const modules = importer(); // this returns an object of paths
  const imagePromises = Object.values(modules).map(load => load()); // dynamic imports

  const loadedModules = await Promise.all(imagePromises);
  const images = loadedModules.map(mod => mod.default);

  return images.map((path) => {
    const parts = path.split('/');
    return {
      fullPath: path,
      filter: parts.at(-2) ?? '',
    };
  });
};

export { loadProjectImages };
