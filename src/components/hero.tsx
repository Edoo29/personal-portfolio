import Arrow from "./arrow";
import LoadAnimation from "./load-animation";
import Translate from "./translate";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col gap-3 justify-center items-center h-screen"
    >
      <LoadAnimation delay={0.2}>
        <AnimatedHeader />
      </LoadAnimation>

      <LoadAnimation delay={0.4}>
        <IntroText />
      </LoadAnimation>

      <LoadAnimation delay={0.6}>
        <Subtitle />
      </LoadAnimation>

      <LoadAnimation delay={0.8}>
        <Description />
      </LoadAnimation>

      <LoadAnimation delay={1}>
        <Arrow direction="down" reference="#about" customClass="mt-24">
          <Translate text="arrowOne" />
        </Arrow>
      </LoadAnimation>
    </section>
  );
}

function AnimatedHeader() {
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
  const introKeys = ["introTextOne", "introTextTwo"];
  return (
    <div className="text-5xl md:text-7xl flex flex-col gap-2 justify-center text-center cursor-default">
      {introKeys.map((key) => (
        <span key={key} className="text-gradient text-glowing transition-all">
          <Translate text={key} />
        </span>
      ))}
    </div>
  );
}

function Subtitle() {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex gap-3 items-center mt-5 cursor-default"
    >
      <Divider />
      <p className="text-[var(--color-shadows)]">Frontend Developer</p>
      <Divider />
    </motion.div>
  );
}

function Divider() {
  return <div className="h-[1px] bg-[var(--color-shadows)] w-20 md:w-40" />;
}

function Description() {
  const descKeys = ["descriptionOne", "descriptionTwo"];
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="text-lg md:text-xl flex flex-col justify-center items-center gap-1 mt-2 md:mt-5 text-[var(--color-shadows)] px-5 md:px-0 text-center cursor-default"
    >
      {descKeys.map((key) => (
        <span key={key}>
          <Translate text={key} />
        </span>
      ))}
    </motion.div>
  );
}
