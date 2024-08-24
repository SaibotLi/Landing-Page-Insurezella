import { helpImgs } from "../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Help = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    customPaging: () => (
      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
    ),
    dotsClass: "slick-dots flex justify-center space-x-3 mt-4",
  };

  return (
    <section className="p-6">
      {/* Mobile View: Carousel */}
      <div className="block lg:hidden">
        <Slider {...settings}>
          {helpImgs.map((img) => (
            <div
              className="flex flex-col shadow-gray-400 w-full h-auto overflow-hidden p-4"
              key={img.alt}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-40 object-cover mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{img.title}</h2>
              <p className="text-gray-600 text-md mb-4">{img.description}</p>
              <span className="flex items-center text-blue-600 cursor-pointer">
                View plans
                <span className="ml-2 text-xl">→</span>
              </span>
            </div>
          ))}
        </Slider>
      </div>

      {/* Web View: Grid Layout */}
      <div className="hidden lg:grid lg:place-items-center lg:grid-cols-2 lg:gap-x-8 lg:gap-y-4 lg:w-full mx-auto">
        {helpImgs.map((img) => (
          <div
            className="flex flex-col shadow-gray-400 w-96 h-auto overflow-hidden p-4"
            key={img.alt}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="self-center w-full h-40 object-cover mb-4"
            />
            <h2 className="text-xl text-gray-700 mt-4 font-semibold mb-2 ml-4">
              {img.title}
            </h2>
            <p className="text-gray-600 text-md mb-4 ml-4 mt-4">
              {img.description}
            </p>
            <span className="flex items-center mt-4 text-blue-700 ml-4 cursor-pointer">
              Compare plans
              <span className="ml-2 text-xl">→</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Help;
