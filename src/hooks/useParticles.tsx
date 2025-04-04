import { useEffect, useState } from "react";
import Particle from "../components/particles";

export default function useParticles() {
  const [particles, setParticles] = useState<React.JSX.Element[]>([]);

  useEffect(() => {
    const createParticles = () => {
      const newParticles = [...Array(50)].map((_, idx) => (
        <Particle key={idx} delay={idx * 0.1} />
      ));
      setParticles(newParticles);
    };

    createParticles();
  }, []);

  return particles;
}
