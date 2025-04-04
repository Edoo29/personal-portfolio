"use client";

import { motion } from "motion/react";

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Particle({ delay }: { delay: number }) {
  const x = randomIntFromInterval(1, 100);
  const y = randomIntFromInterval(1, 100);
  const size = randomIntFromInterval(1, 10);

  return (
    <motion.div
      className="-z-10"
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{ x: `${x}%`, y: `${y}%`, opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeInOut" } }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        delay,
      }}
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "35%",
        backgroundColor: "var(--purple)",
      }}
    />
  );
}
