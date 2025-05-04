import hero from "@assets/images/hero.jpg"

function Hero() {
  const emailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=maryprincesslagura@gmail.com"
  const linkedlnLink = "https://www.linkedin.com/in/mary-princess-lagura/"

  return (
    <>
      <div className="relative isolate py-6 px-4 lg:px-64">
        <div className="flex flex-col md:flex-row md:justify-between">

          <div className="flex flex-col justify-center items-center gap-8 md:gap-12 text-sm md:text-base">
            
            <div className="max-w-md">
              <p className="text-iron-smoke">
                Hey! <br />
                I'm Mary Princess, a <span className="font-semibold">graphic designer</span> who creates eye-catching designs that communicate ideas clearly.
                My work includes digital graphics and print materials.
                I focus on simplicity and effectiveness to make your brand stand out.
              </p>
            </div>

            <div className="self-start flex flex-col">
              <h1 className="uppercase text-iron-smoke">connect</h1>
              <a href={linkedlnLink} target="_blank" className="text-iron-smoke font-semibold">Linkedln</a>
              <a href={emailLink} target="_blank" className="text-iron-smoke font-semibold">Email</a>
            </div>

          </div>

          <div className="hidden md:block w-full md:w-auto md:max-w-2xl xl:max-w-3xl max-h-[500px] overflow-hidden">
            <img
              src={hero}
              alt="Dashboard image"
              className="rounded-3xl object-cover w-full h-full max-h-[500px]"
            />
          </div>

        </div>
      </div>
    </>
  )
}
  
export default Hero
  