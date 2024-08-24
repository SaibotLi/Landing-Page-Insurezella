import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { logo } from "../images";
const Footer = () => {
  return (
    <footer className="flex w-full justify-start items-center">
      {/* First container */}
      <div className="w-11/12 grid grid-cols-2 justify-items-start border-2 shadow-lg shadow-gray-700 shadow-">
        {/* Logo, span, icons*/}
        <div className="text-right mt-4">
          <img
            src={logo}
            alt="Logo"
            className="h-auto w-20 mx-auto rounded-xl"
          />
          <p className="text-gray-500 w-60 text-center mx-auto">
            "Discover the Peace of Mind You Deserve with Insurezella Your
            Reliable Insurance Umbrella"
          </p>
          <div className="flex space-x-4 mt-4 ml-16">
            <Facebook />
            <Twitter />
            <Instagram />
            <Linkedin />
          </div>
        </div>
        <div className="flex-col justify-self-end mt-4">
          {/* H2, column with <img> icon </img> + <span> */}
          <h2 className="text-blue-900 font-semibold text-2xl">Services</h2>
          <div className="flex-col space-y-2 mt-4 mr-10">
            <div className="flex space-x-2">
              <img src="" alt="icon" />
              <span>Health Insurance</span>
            </div>
            <div className="flex space-x-2">
              <img src="" alt="icon" />
              <span>Life Insurance</span>
            </div>
            <div className="flex space-x-2">
              <img src="" alt="icon" />
              <span>Medicare Supplement</span>
            </div>
            <div className="flex space-x-2">
              <img src="" alt="icon" />
              <span>Medicare Advantage</span>
            </div>
            <div className="flex space-x-2">
              <img src="" alt="icon" />
              <span>(ACA)Obamacare</span>
            </div>
          </div>
        </div>
      </div>
      {/* Second container */}
      <div>
        <div>{/* H2, column with <span> */}</div>
        <div>{/* H2, column with <img> icon + <span> */}</div>
      </div>
    </footer>
  );
};

export default Footer;
