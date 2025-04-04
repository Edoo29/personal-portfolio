import Hero from "./components/hero.tsx";
import Navbar from "./components/navbar.tsx";
import useParticles from "./hooks/useParticles.tsx";

function App() {
  const particles = useParticles();
  return (
    <>
      {particles}
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
