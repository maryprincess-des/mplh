
const Services = () => {
  return (
    <>
      <div className="relative isolate my-10 lg:mt-16 lg:mb-28 px-4 lg:px-64">
        <div className="flex flex-col gap-6">
          <h1 className="uppercase text-5xl lg:text-7xl font-extrabold text-iron-smoke" id="services">my <br /> services</h1>

          <div className="flex flex-col gap-6 md:gap-6">

            {/* Row 1 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:basis-[60%] md:flex-grow bg-[#e9e9e8] rounded-2xl shadow-lg p-8 md:p-12">
                <div className="flex flex-col gap-6">
                  <p className="w-10 p-1 text-sm text-center text-[#808081] border border-[#808081] rounded-md">
                    01
                  </p>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-iron-smoke uppercase mb-2">
                      Publication & Layout Design
                    </h2>
                    <p className="text-justify text-[#a1a0a0]">
                      Elevate your editorial projects with expert layouts for magazines, brochures, pitch decks, and company profiles. I combine strategic structure with refined visual design to ensure your message is not seen—but remembered.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:basis-[40%] md:flex-grow bg-[#e9e9e8] rounded-2xl shadow-lg p-8 md:p-12">
                <div className="flex flex-col gap-6">
                  <p className="w-10 p-1 text-sm text-center text-[#808081] border border-[#808081] rounded-md">
                    02
                  </p>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-iron-smoke uppercase mb-2">
                      Visual Design
                    </h2>
                    <p className="text-justify text-[#a1a0a0]">
                      Designs that sell. From eye-catching social posts to high-converting ads and promo graphics—I create visuals that demand attention and drive results.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:basis-[40%] md:flex-grow bg-[#e9e9e8] rounded-2xl shadow-lg p-8 md:p-12">
                <div className="flex flex-col gap-6">
                  <p className="w-10 p-1 text-sm text-center text-[#808081] border border-[#808081] rounded-md">
                    03
                  </p>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-iron-smoke uppercase mb-2">
                      Graphic Design
                    </h2>
                    <p className="text-justify text-[#a1a0a0]">
                      Your ideas, visualized. I turn your vision into bold impactful graphics—crafted to communicate clearly, emotionally connect, and leave a lasting impression.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:basis-[60%] md:flex-grow bg-[#e9e9e8] rounded-2xl shadow-lg p-8 md:p-12">
                <div className="flex flex-col gap-6">
                  <p className="w-10 p-1 text-sm text-center text-[#808081] border border-[#808081] rounded-md">
                    04
                  </p>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-iron-smoke uppercase mb-2">
                      Multimedia & Video Editing
                    </h2>
                    <p className="text-justify text-[#a1a0a0]">
                      Turn clicks into conversion. I transform raw footage into scroll-stopping videos—reels, product showcases, and motion graphics—designed to tell your story and boost engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Services