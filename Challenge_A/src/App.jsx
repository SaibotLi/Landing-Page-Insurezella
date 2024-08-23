import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import FindInsurance from "./sections/FindInsurance";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <FindInsurance />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
