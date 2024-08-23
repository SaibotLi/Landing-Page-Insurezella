import { heroImg } from "../images";

const Hero = () => {
  return (
    <div className="flex items-center bg-gray-300">
      <div className="w-1/2 pl-60 flex flex-col space-y-20">
        <h1 className="font-bold text-blue-600 text-6xl">
          YOUR GUIDE TO <br />
          QUALITY COVERAGE
        </h1>
        <p className="text-gray-600 text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Quibusdam dolorem, atque enim aliquid laboriosam <br />
          dolore magna aliqua.
        </p>
        <button className="bg-sky-500 rounded-full text-white font-bold text-2xl py-3 w-56">
          FIND PLANS
        </button>
      </div>

      <div className="w-1/2">
        <img src={heroImg} className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Hero;
