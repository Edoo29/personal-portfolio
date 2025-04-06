import Arrow from "./arrow";
import LoadAnimation from "./load-animation";
import Translate from "./translate";
import { motion } from "motion/react";

function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col gap-3 justify-center items-center h-screen"
    >
      <LoadAnimation delay={0.2} animateWhenVisible>
        <Header />
      </LoadAnimation>
      <LoadAnimation delay={0.4} animateWhenVisible>
        <IntroText />
      </LoadAnimation>
      <LoadAnimation delay={0.6} animateWhenVisible>
        <Subtitle />
      </LoadAnimation>
      <LoadAnimation delay={0.8} animateWhenVisible>
        <Description />
      </LoadAnimation>
      <LoadAnimation delay={1} animateWhenVisible>
        <Arrow direction="down" reference="#about" customClass="mt-24">
          <Translate text="arrowOne" />
        </Arrow>
      </LoadAnimation>
    </section>
  );
}

function Header() {
  return (
    <motion.h1
      whileHover={{ x: 50, rotate: 20, transition: { duration: 0.5 } }}
      whileTap={{ scale: 1.2 }}
      className="text-[var(--purple)] text-xl md:text-2xl cursor-default"
    >
      <Translate text="welcome" />
    </motion.h1>
  );
}

function IntroText() {
  return (
    <p className="text-5xl md:text-7xl flex flex-col gap-2 justify-center text-center cursor-default">
      <span className="text-gradient text-glowing transition-all">
        <Translate text="introTextOne" />
      </span>
      <span className="text-gradient text-glowing transition-all">
        <Translate text="introTextTwo" />
      </span>
    </p>
  );
}

function Subtitle() {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex gap-3 items-center mt-5 cursor-default"
    >
      <div className="h-[1px] bg-[var(--color-shadows)] w-20 md:w-40"></div>
      <p className="text-[var(--color-shadows)]">Frontend Developer</p>
      <div className="h-[1px] bg-[var(--color-shadows)] w-20 md:w-40"></div>
    </motion.div>
  );
}

function Description() {
  return (
    <motion.p
      whileHover={{ scale: 1.1 }}
      className="text-lg md:text-xl flex flex-col justify-center cursor-default items-center gap-1 mt-2 md:mt-5 text-[var(--color-shadows)] p-5 text-center md:p-0"
    >
      <span>
        <Translate text="descriptionOne" />
      </span>
      <span>
        <Translate text="descriptionTwo" />
      </span>
    </motion.p>
  );
}

export default Hero;
