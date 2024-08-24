import { learnImg } from "../images";

const Learn = () => {
  return (
    <section
      id="about"
      className="bg-white mx-4 my-4 md:my-8 lg:my-12 xl:my-20 lg:mx-20 xl:mx-40"
    >
      {/* Container for Img and Texts */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center">
        {/* Container for Img */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img src={learnImg} alt="learnImg" className="w-full lg:w-auto" />
        </div>

        {/* Container for Text */}
        <div className="flex flex-col w-full lg:w-1/2 lg:ml-8 lg:space-y-12 space-y-6 md:w-2/3 md:self-end">
          <h1 className="font-semibold text-gray-800 text-4xl mt-4 lg:mt-0">
            Protecting people, one <br /> policy at a time.
          </h1>
          <p className="text-gray-500">
            We are committed to delivering the highest standards of protection,
            tailored to meet the unique needs of each individual and family. Our
            dedicated team of professionals works tirelessly to offer
            comprehensive insurance solutions that not only safeguard your
            assets but also offer you the support and assistance you need in
            times of uncertainty.
          </p>
          <button className="bg-blue-700 text-white py-3 w-full lg:w-72 font-semibold rounded-full">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Learn;
