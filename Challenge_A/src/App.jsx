import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import FindInsurance from "./sections/FindInsurance";
import AboutUs from "./sections/AboutUs";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <FindInsurance />
        <AboutUs />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
