import About from "../components/about";
import ContactMe from "../components/contact-me";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Projects from "../components/projects";

function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ContactMe />
    </>
  );
}

export default Homepage;
