import { heroImg } from "../images";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row items-center bg-gray-300 mb-4"
    >
      <div className="w-full lg:text-start text-center md:w-1/2 p-6 md:pl-60 flex flex-col space-y-6 md:space-y-20">
        <h1 className="font-bold text-blue-600 text-4xl md:text-6xl">
          YOUR GUIDE TO <br />
          QUALITY COVERAGE
        </h1>
        <p className="text-gray-600 text-lg md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Quibusdam dolorem, atque enim aliquid laboriosam <br />
          dolore magna aliqua.
        </p>
        <button className="bg-sky-500 lg:self-start self-center rounded-full text-white font-bold text-lg md:text-2xl py-3 w-40 md:w-56">
          FIND PLANS
        </button>
      </div>

      <div className="w-full md:w-1/2 p-4">
        <img src={heroImg} className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Hero;
