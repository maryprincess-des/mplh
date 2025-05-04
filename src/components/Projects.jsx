import { Link } from "react-router-dom"
import CardsMarquee from "@components/CardsMarquee"

const Projects = () => {

  const categories = [
    {
      title: "Graphic Design",
      link: "graphic design"
    },
    {
      title: "Marketing & Branding",
      link: "marketing & branding"
    },
    {
      title: "Publication & Layout Design",
      link: "publication & layout design"
    },
    {
      title: "Multimedia & Video Editing",
      link: "multimedia & video editing"
    },
  ]

  return (
    <>
      <div className="relative isolate py-6 px-4 lg:px-64">
        <div className="flex flex-col justify-center">
          
          <div className="flex justify-between">
            <p className="uppercase mb-4 text-iron-smoke" id="works">works</p>
            <p className="text-iron-smoke">2022-2025</p>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-12">
            <div className="flex-1">
              <h1 className="uppercase text-5xl lg:text-7xl text-iron-smoke font-extrabold">my <br /> portfolio</h1>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4">
              <div className="justify-self-center flex flex-col justify-between gap-2 lg:gap-0">
                <p className="text-justify text-iron-smoke">
                  My work blends creativity with strategy to deliver impactful design solutions. From striking logos and engaging
                  digital content to refined print materials. I focus on clear, visually compelling results that elevate brand
                  presence and drive engagement.
                </p>
                <button className="bg-iron-smoke text-white text-sm text-center uppercase w-fit rounded-md px-5 py-2 hover:cursor-pointer">
                  let's discuss
                </button>
              </div>
            </div>
          </div>
          
          <CardsMarquee />

          <div className="flex flex-col lg:flex-row justify-between mt-12">
            <p className="mb-4 lg:mb-0 uppercase grow-4 text-iron-smoke">all categories</p>
            <div className="flex flex-col grow-4">
              {categories.map(({ title, link }, index) => {
                return (
                  <div key={index}>
                    <hr className="h-px border-0 bg-iron-smoke my-4" />
                    
                    <Link to={`/category/${link}`}>
                      <span className="text-iron-smoke">{title}</span>
                    </Link>

                    {index === (categories.length - 1) ? <hr className="h-px border-0 bg-iron-smoke my-4" /> :  ""}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects