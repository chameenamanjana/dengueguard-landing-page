import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Feature from "./components/Features/Feature";
import Contact from "./components/Contact/Contact";
import Team from "./components/Team/Team";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About />
      <Feature />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
