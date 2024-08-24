import Slider from "react-slick";
import { icons } from "../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FindInsurance = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    customPaging: () => (
      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
    ),
    dotsClass: "slick-dots flex justify-center space-x-3 mt-4",
  };

  return (
    <section>
      {/* Mobile View: Carousel */}
      <div className="block lg:hidden p-6">
        <Slider {...settings}>
          {icons.map((icon) => (
            <div
              className="flex flex-col mb-4 justify-center border-2 items-center bg-white shadow-lg shadow-gray-400 rounded-lg p-4 w-60 h-60 font-semibold"
              key={icon.alt}
            >
              <img src={icon.src} alt={icon.alt} className="mx-auto" />
              <p
                className="mt-2 text-center text-2xl"
                dangerouslySetInnerHTML={{
                  __html: icon.title,
                }}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Web View */}
      <div className="hidden lg:flex space-x-8 justify-around p-6">
        {icons.map((icon) => (
          <div
            className="flex flex-col justify-center items-center bg-white shadow-lg shadow-gray-400 rounded-lg p-4 w-60 h-60 font-semibold"
            key={icon.alt}
          >
            <img src={icon.src} alt={icon.alt} />
            <p
              className="mt-2 text-center text-2xl"
              dangerouslySetInnerHTML={{
                __html: icon.title,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FindInsurance;
