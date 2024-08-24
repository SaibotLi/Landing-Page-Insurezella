import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import FindInsurance from "./sections/FindInsurance";
import AboutUs from "./sections/AboutUs";
import PickInsurance from "./sections/PickInsurance";
import Learn from "./sections/Learn";
import Help from "./sections/Help";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <FindInsurance />
        <AboutUs />
        <PickInsurance />
        <Learn />
        <Help />
      </main>
      <Footer />
    </>
  );
};

export default App;
