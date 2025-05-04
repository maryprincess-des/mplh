import Experience from "@components/Experience"
import resume from "@assets/files/resume.pdf"

const Experiences = () => {
  const experiences = [
    {
      company: "Cebu Doctors University Hospital", 
      position: "Graphic Designer", 
      role: null, 
      duration: { from: "march 2025", to: "present" },
    },
    {
      company: "Zero One Moto Inc.", 
      position: "Video Editor", 
      role: null, 
      duration: { from: "january 2025", to: "march 2025" },
    },
    {
      company: "Generalized Abby Pro Solution LLC", 
      position: "Layout Artist", 
      role: "Project-based", 
      duration: { from: "october 2024", to: "december 2024" },
    },
    {
      company: "Cartruck Ozamiz.", 
      position: "Graphic Designer", 
      role: "Part-time", 
      duration: { from: "october 2023", to: "march 2024" },
    },
  ]

  const internships = [
    {
      company: "Kreative Studio PH", 
      position: "Email Designer Intern", 
      role: null, 
      duration: { from: "january 2025", to: "february 2025" },
    },
    {
      company: "Blueberry Digital Labs PH, Inc", 
      position: "Graphic Designer Intern", 
      role: null, 
      duration: { from: "september 2023", to: "august 2024" },
    },
  ]

  const downloadResume =  () => {
    const downloadLink = document.createElement("a")

    downloadLink.href = resume
    downloadLink.download = "resume.pdf"
    document.body.appendChild(downloadLink)
    downloadLink.click()
  }

  return (
    <>
      <div className="bg-black relative isolate py-6 px-4 lg:px-64">
        <div className="flex flex-col justify-center">

          <div className="flex justify-between">
            <p className="uppercase mb-4 text-white" id="about">about</p>
            <p className="text-white">2022-2025</p>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-12">
            <div className="flex-1">
              <h1 className="uppercase text-5xl lg:text-7xl text-white font-extrabold">my <br /> Experience</h1>
            </div>
          
            <div className="flex flex-col justify-center gap-4 flex-1">
              <p className="text-justify text-white">
                I'm a Graphic Designer with a passion for learning new design skills and exploring various design aspects.
                Eager to take on new challenges and advance my career.
                Looking to join a creative team where i can apply my knowledge in Adobe Creative Suite to produce impactful and engaging projects.
              </p>
              <button className="uppercase text-sm w-22 h-6 p-4 border-none rounded-md bg-zinc-600 text-white flex items-center justify-center hover:cursor-pointer">
                <span onClick={downloadResume}>Resume</span>
              </button>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between mb-12">
            <p className="uppercase flex-1 mb-4 md:mb-0 text-white">work</p>

            <div className="flex-2">
              {experiences.map((experience, index) => {
                return (
                  <div key={index}>
                    <hr className="h-px border-0 bg-iron-smoke mb-4" />

                    <Experience data={experience} />
                  </div>
                )
              })}
            </div>
          </div>
          
          <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between mb-12">
            <p className="uppercase flex-1 mb-4 md:mb-0 text-white">internship</p>

            <div className="flex-2">
              {internships.map((internship, index) => {
                return (
                  <div key={index}>
                    <hr className="h-px border-0 bg-iron-smoke mb-4" />

                    <Experience data={internship} />
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

export default Experiences