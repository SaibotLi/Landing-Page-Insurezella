import { heroImg } from "../images";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row items-center bg-gray-300 mb-4"
    >
      <div className="w-full lg:text-start text-center lg:w-1/2 p-6 lg:pl-60 flex flex-col space-y-6 lg:space-y-20">
        <h1 className="font-bold text-blue-600 text-4xl lg:text-6xl">
          YOUR GUIDE TO <br />
          QUALITY COVERAGE
        </h1>
        <p className="text-gray-600 text-lg lg:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Quibusdam dolorem, atque enim aliquid laboriosam <br />
          dolore magna aliqua.
        </p>
        <button className="bg-sky-500 lg:self-start self-center rounded-full text-white font-bold text-lg lg:text-2xl py-3 w-40 lg:w-56">
          FIND PLANS
        </button>
      </div>

      <div className="w-full lg:w-1/2 p-4">
        <img src={heroImg} className="w-full h-auto" />
      </div>
    </section>
  );
};

export default Hero;
