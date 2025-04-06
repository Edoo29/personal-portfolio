import About from "../components/about";
import ContactMe from "../components/contact-me";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import ScrollProgress from "../components/scroll-progress";

export default function Homepage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ContactMe />
    </>
  );
}
