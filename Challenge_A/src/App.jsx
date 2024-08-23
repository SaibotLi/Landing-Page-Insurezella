import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import FindInsurance from "./sections/FindInsurance";
import AboutUs from "./sections/AboutUs";
import PickInsurance from "./sections/PickInsurance";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <FindInsurance />
        <AboutUs />
        <PickInsurance />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
