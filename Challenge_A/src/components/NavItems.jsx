const NavItems = () => {
  return (
    <>
      <li>
        <a href="#home" className="hover:text-blue-600 hover:underline">
          Home
        </a>
      </li>
      <span className="hidden lg:flex">|</span>
      <li>
        <a
          href="#findInsurance"
          className="hover:text-blue-600 hover:underline"
        >
          Find Insurance &#9662;
        </a>
      </li>
      <span className="hidden lg:flex">|</span>
      <li>
        <a href="#learn" className="hover:text-blue-600 hover:underline">
          Learn
        </a>
      </li>
      <span className="hidden lg:flex">|</span>
      <li>
        <a href="#about" className="hover:text-blue-600 hover:underline">
          About
        </a>
      </li>
    </>
  );
};

export default NavItems;
