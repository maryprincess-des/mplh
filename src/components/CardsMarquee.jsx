import Marquee from "react-fast-marquee";
import images from "@js/marquees"

const CardMarquee = () => {
  const cards = images.map((image_source, index) => {
    return <div key={index} className="max-w-md mx-2 lg:mx-5 rounded-md overflow-hidden">
            <img className="w-[650px] h-82 object-cover" src={image_source} alt="image"/>
          </div>
  })

  return (
    <Marquee>
      <div className="flex">
        {cards}
      </div>
    </Marquee>
  );
};

export default CardMarquee;
