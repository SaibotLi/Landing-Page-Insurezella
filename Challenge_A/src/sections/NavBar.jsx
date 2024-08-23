import { Menu, X } from "lucide-react";
import { useState } from "react";
import { logo } from "../images";
import NavItems from "../components/navItems";

const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <header className="w-full">
      {/* Upper-Nav */}
      <div className="bg-blue-500 p-3">
        <div className="flex items-center text-center justify-around text-white">
          <a className="lg:hidden sm:flex" href="#home">
            <img src={logo} alt="Logo" className="h-auto w-60" />
          </a>
          <p className="font-semibold text-xl">Want to Connect with us?</p>
          <div>
            <span> &#9993; Mail us: support@insurezella.com </span>
            {/* &#9993; = Unicode for Mail */}
            <span className="ml-8"> &#9742; Call us: (877) 327 0774</span>
            {/* &#9742; = Unicode for Telephone */}
          </div>
        </div>
      </div>

      {/* Lower-Nav */}
      <nav className="hidden lg:flex sticky top-0 z-50 bg-gray-100 items-center justify-between px-4 py-4">
        {/* Left Logo */}
        <div className="flex-shrink-0 ml-28">
          <a href="#home">
            <img src={logo} alt="Logo" className="h-auto w-16 rounded-lg" />
          </a>
        </div>
        {/*
        - MOVE LOGO ABOVE IN CASE OF SM TO LG
        - IN CASE OF SM TO LG - HIDDEN.
        - IN CASE OF LG - FLEX */}
        {/* Middle Web Menu */}
        <div className="flex-grow flex justify-center">
          <ul className="hidden lg:flex space-x-4">
            <NavItems />
          </ul>
        </div>
        {/* Middle Mobile menu */}
        <div>
          <div className="lg:hidden sm:flex flex-col justify-end">
            <button onClick={toggleNavBar} className="p-4">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Adds mobile items */}
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-gray-500 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                <NavItems />
              </ul>
            </div>
          )}
        </div>
        {/* Right Button */}
        <div className="flex-shrink-0 mr-28">
          <button className="bg-blue-600 rounded-full text-white font-semibold py-4 px-4 shadow-lg shadow-gray-400">
            Call Us Now -&#9654;
          </button>
          {/* &#9654; UniCode for Right Arrow */}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
