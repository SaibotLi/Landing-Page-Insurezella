import { logo } from "../images";

const NavBar = () => {
  return (
    <header className="w-full">
      {/* Upper-Nav */}
      <div className="bg-blue-500 p-3">
        <div className="flex items-center text-center justify-around text-white">
          <p className="font-semibold text-xl">Want to Connect with us?</p>
          <div>
            <span> &#9993; Mail us: support@insurezella.com </span>
            {/* &#9993; = Unicode for Mail */}
            <span className="ml-4"> &#9742; Call us: (877) 327 0774</span>
            {/* &#9742; = Unicode for Telephone */}
          </div>
        </div>
      </div>

      {/* Lower-Nav */}
      <nav className="sticky top-0 z-50 bg-gray-100 flex items-center justify-between px-4 py-4">
        {/* Left Logo */}
        <div className="flex-shrink-0 ml-20">
          <a href="#home">
            <img src={logo} alt="Logo" className="h-auto w-16 rounded-lg" />
          </a>
        </div>

        {/* Middle Nav Items */}
        <ul className="flex space-x-4">
          <li>
            <a href="#home">Home</a>
          </li>
          <span>|</span>
          <li>
            <a href="#findInsurance">Find Insurance &#9662;</a>
          </li>
          <span>|</span>
          <li>
            <a href="#learn">Learn</a>
          </li>
          <span>|</span>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>

        {/* Right Button */}
        <div className="flex-shrink-0 mr-20">
          <button className="bg-blue-600 rounded-full text-white font-semibold py-3 px-5">
            Call Us Now -&#9654;
          </button>
          {/* &#9654; UniCode for Right Arrow */}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
