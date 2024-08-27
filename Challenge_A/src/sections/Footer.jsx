import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  PhoneCall,
  Clock,
  Contact,
} from "lucide-react";
import { logo } from "../images";
import { insuranceTypes } from "../constants/index.jsx";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* First container */}
      <div className="lg:w-4/5 lg:flex lg:mx-auto lg:justify-around w-11/12 grid grid-cols-2 gap-x-4 gap-y-4 justify-items-start border-2 shadow-md translate-y-10 bg-white shadow-gray-700 py-6">
        <div className="text-center lg:text-right">
          <img
            src={logo}
            alt="Logo"
            className="h-auto w-16 lg:w-20 mx-auto rounded-xl"
          />
          <p className="text-gray-500 w-full lg:w-60 text-sm lg:text-base text-center my-2 lg:my-4 mx-auto leading-snug">
            "Discover the Peace of Mind You Deserve with Insurezella Your
            Reliable Insurance Umbrella"
          </p>
          <div className="flex space-x-3 justify-center">
            <Facebook />
            <Twitter />
            <Instagram />
            <Linkedin />
          </div>
        </div>
        <div className="flex flex-col justify-self-end mx-4">
          <h2 className="text-blue-900 font-semibold text-xl lg:text-2xl ml-2">
            Services
          </h2>
          <div className="flex flex-col space-y-2 lg:space-y-4 mt-2 lg:mt-4 ml-2">
            {insuranceTypes.map((insurance, index) => {
              const Icon = insurance.Icon;
              return (
                <div key={index} className="flex space-x-2 items-center">
                  <Icon className="w-5 lg:w-6 h-5 lg:h-6" />
                  <span className="text-gray-600 text-sm lg:text-base">
                    {insurance.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="hidden lg:flex flex-col space-y-4 gap-2">
          <h2 className="text-blue-900 font-semibold text-2xl">Company</h2>
          <span className="text-gray-600">About Us</span>
          <span className="text-gray-600">Careers</span>
          <span className="text-gray-600">Industry news</span>
          <span className="text-gray-600">Privacy Policy</span>
          <span className="text-gray-600">Terms & Conditions</span>
        </div>
        <div className="hidden lg:flex flex-col">
          <h2 className="text-blue-900 font-semibold text-2xl mb-8">
            Get In Touch
          </h2>
          <div className="space-y-2">
            <span className="flex text-gray-600">
              <Mail className="mr-2" />
              Email: support@insurezella.com
            </span>
            <span className="flex text-gray-600">
              <PhoneCall className="mr-2" />
              Tel: +18772270774
            </span>
            <span className="flex text-gray-600">
              <Clock className="mr-2" />
              Hours: Mon-Fri 9:00AM - 5:00PM
            </span>
            <span className="flex text-gray-600">
              <Contact className="mr-2" />
              300 SE 2nd Street Suite 600 Ft. Lauderdale FL 33301
            </span>
          </div>
        </div>
      </div>
      {/* Box Divider */}
      <div className="lg:hidden w-full h-32 bg-indigo-500"></div>
      {/* Second container */}
      <div className="lg:hidden w-full flex justify-end relative">
        <div className="w-11/12 grid grid-cols-2 gap-x-4 gap-y-4 border-2 bg-white shadow-gray-700 shadow-md -translate-y-10 py-6">
          {/* Company Section */}
          <div className="flex flex-col justify-start space-y-2 lg:space-y-4 ml-4">
            <h2 className="text-blue-900 font-semibold text-xl lg:text-2xl">
              Company
            </h2>
            <span className="text-gray-600 text-sm lg:text-base">About Us</span>
            <span className="text-gray-600 text-sm lg:text-base">Careers</span>
            <span className="text-gray-600 text-sm lg:text-base">
              Industry news
            </span>
            <span className="text-gray-600 text-sm lg:text-base">
              Privacy Policy
            </span>
            <span className="text-gray-600 text-sm lg:text-base">
              Terms & Conditions
            </span>
          </div>

          {/* Get In Touch Section */}
          <div className="flex flex-col justify-end ml- lg:ml-0 mr-6 space-y-2 lg:mr-10">
            <h2 className="text-blue-900 font-semibold text-xl lg:text-2xl lg:mb-8">
              Get In Touch
            </h2>
            <div className="space-y-2 lg:space-y-4">
              <span className="flex text-gray-600 text-sm lg:text-base">
                <Mail className="mr-2" />
                Email: support@insurezella.com
              </span>
              <span className="flex text-gray-600 text-sm lg:text-base">
                <PhoneCall className="mr-2" />
                Tel: +18772270774
              </span>
              <span className="flex text-gray-600 text-sm lg:text-base">
                <Clock className="mr-2" />
                Hours: Mon-Fri 9:00AM - 5:00PM
              </span>
              <span className="flex text-gray-600 text-sm lg:text-base">
                <Contact className="mr-2" />
                300 SE 2nd Street Suite 600 Ft. Lauderdale FL 33301
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:bg-blue-600 lg:w-full lg:h-20"></div>
    </footer>
  );
};

export default Footer;
