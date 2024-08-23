function App() {
  return (
    <>
      <header>
        {/* Upper-Nav */}
        <div className="">
          <div className="">
            <p>Want to Connect with us?</p>
            <div className="">
              <span> &#9993; Mail us: support@insurezella.com</span>
              {/* }&#9993; = Unicode for Mail { */}
              <span> &#9742; Call us: (877) 327 0774</span>
              {/* }<!-- &#9742; = Unicode for Telephone--> { */}
            </div>
          </div>
        </div>

        {/* Lower-Nav */}
        <nav>
          <button className="">☰</button>
          <ul className="">
            <li className="">
              <a href="#home">
                <img src="images/logo.png" alt="Logo" />
              </a>
            </li>
            <li className="">
              <a href="#home">Home</a>
            </li>
            <li className="">
              <a href="#findInsurance">Find Insurance &#9662;</a>
              {/* } &#9662; = Unicode for DropDown_Arrow { */}
            </li>
            <li className="">
              <a href="#learn">Learn</a>
            </li>
            <li className="">
              <a href="#about">About</a>
            </li>
            <li className="">
              <button>Call Us Now ---</button>
            </li>
          </ul>
        </nav>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}

export default App;
