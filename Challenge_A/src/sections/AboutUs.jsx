import { aboutUsImg, iconAbout1, iconAbout2 } from "../images";

const AboutUs = () => {
  return (
    <section id="about" className="bg-white mx-40">
      {/* Flex container for the image and text */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        {/* Image container */}
        <div className="lg:w-1/2">
          <img src={aboutUsImg} alt="aboutUsImg" className="w-full lg:w-auto" />
        </div>

        {/* Text container */}
        <div className="flex flex-col items-end space-y-8 w-full lg:w-1/2 lg:ml-8 lg:space-y-12 md:w-2/3 md:self-end md:mr-0 ml-auto">
          <h1 className="font-semibold text-gray-800 text-4xl text-right">
            Committed to help you <br /> find the right plan
          </h1>
          <p className="text-gray-500 text-right">
            Insurance is an important financial tool that can help you protect
            yourself and your loved ones from financial losses in the event of
            an unexpected event. It is important to consider your individual
            needs and circumstances when choosing the right insurance coverage
            for you and your family.
          </p>
          <button className="bg-blue-700 text-white py-3 w-72 font-semibold rounded-full">
            ABOUT INSURELLA
          </button>
          <div className="flex justify-end space-x-8">
            <div className="flex items-center justify-center space-x-4">
              <img src={iconAbout1} alt="icon1" />
              <p className="font-bold ml-4 text-right">
                Save Money <br /> Compare Plans
              </p>
              <img src={iconAbout2} alt="icon2" />
              <p className="font-bold ml-4 text-right">
                Licensed <br /> Agents
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
``;
