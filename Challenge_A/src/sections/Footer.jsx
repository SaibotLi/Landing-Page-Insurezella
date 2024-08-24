import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
const Footer = () => {
  return (
    <footer className="flex justify-center items-center">
      {/* First container */}
      <div>
        {/* Logo, span, icons*/}
        <div>
          <Facebook />
          <Twitter />
          <Instagram />
          <Linkedin />
        </div>
        <div>{/* H2, column with <img> icon </img> + <span> */}</div>
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
