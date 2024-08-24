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
      <div className="bg-indigo-600 lg:bg-blue-500 p-2">
        <div className="flex items-center text-center justify-around text-white">
          <a className="lg:hidden flex translate-y-2/4" href="#home">
            <img src={logo} alt="Logo" className="h-auto w-60" />
          </a>
          {/* Mobile menu */}
          <div>
            <div className="lg:hidden flex flex-col justify-end">
              <button onClick={toggleNavBar} className="py-4 px-8">
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>

            {/*Mobile items */}
            {mobileDrawerOpen && (
              <div className="lg:hidden fixed right-0 z-20 bg-gray-500 w-full p-12 flex flex-col justify-center items-center">
                <ul>
                  <NavItems />
                </ul>
              </div>
            )}
          </div>
          <p className="font-semibold text-base sm:text-xl text-center">
            Want to Connect with us?
          </p>

          <div className="flex flex-col sm:flex-row items-center text-center mt-2 sm:mt-0">
            <span className="text-sm sm:text-base">
              {" "}
              &#9993; Mail us: support@insurezella.com{" "}
            </span>
            <span className="mt-2 sm:mt-0 sm:ml-8 text-sm sm:text-base">
              &#9742; Call us: (877) 327 0774
            </span>
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

        {/* Middle Web Menu */}
        <div className="flex-grow flex justify-center">
          <ul className="hidden lg:flex space-x-4">
            <NavItems />
          </ul>
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
