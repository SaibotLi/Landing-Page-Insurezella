import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { logo } from "../images";
import { insuranceTypes } from "../constants/index.jsx";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* First container */}
      <div className="w-11/12 grid grid-cols-2 justify-items-start border-2 shadow-md translate-y-20 bg-white shadow-gray-700 py-6">
        {/* Logo, span, icons */}
        <div className="text-right mx-4">
          <img
            src={logo}
            alt="Logo"
            className="h-auto w-20 mx-auto rounded-xl"
          />
          <p className="text-gray-500 w-60 text-center pl-4 my-4 mx-auto">
            "Discover the Peace of Mind You Deserve with Insurezella Your
            Reliable Insurance Umbrella"
          </p>
          <div className="flex space-x-4 ml-2">
            <Facebook />
            <Twitter />
            <Instagram />
            <Linkedin />
          </div>
        </div>
        <div className="flex-col justify-self-end mt-4  mx-4s">
          {/* H2, column with <img> icon + <span> */}
          <h2 className="text-blue-900 font-semibold text-2xl">Services</h2>
          <div className="flex-col space-y-2 mt-4 mr-10">
            {insuranceTypes.map((insurance, index) => {
              const Icon = insurance.Icon;
              return (
                <div key={index} className="flex space-x-2 items-center">
                  <Icon className="w-6 h-6" />
                  <span>{insurance.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Second container Blue Box */}
      <div className="w-full h-32 bg-indigo-500">Box</div>
      <div className="w-11/12 grid grid-cols-2 border-2 bg-white shadow-gray-700 shadow-md py-6">
        <div className="flex flex-col space-y-4 ml-20">
          <h2 className="text-blue-900 font-semibold text-2xl">Company</h2>
          <span className="text-gray-600">About Us</span>
          <span className="text-gray-600">Careers</span>
          <span className="text-gray-600">Industry news</span>
          <span className="text-gray-600">Privacy Policy</span>
          <span className="text-gray-600">Terms & Conditions</span>
        </div>
        <div className="flex flex-col space-y-1 mt-0.5 mr-20">
          <h2 className="text-blue-900 font-semibold text-2xl mb-2">
            Get In Touch
          </h2>
          <span className="text-gray-600">Email: support@insurezella.com</span>
          <span className="text-gray-600">Tel: +18772270774</span>
          <span className="text-gray-600">Hours: Mon-Fri 9:00AM - 5:00PM</span>
          <span className="text-gray-600">
            300 SE 2nd Street Suite 600 Ft. Lauderdale FL 33301
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
