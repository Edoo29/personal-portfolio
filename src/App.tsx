import About from "./components/about.tsx";
import ContactMe from "./components/contact-me.tsx";
import Hero from "./components/hero.tsx";
import Navbar from "./components/navbar.tsx";
import Projects from "./components/projects.tsx";
import ScrollProgress from "./components/scroll-progress.tsx";

function App() {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <Hero />
      <About />
      <Projects />
      <ContactMe />
    </>
  );
}

export default App;
