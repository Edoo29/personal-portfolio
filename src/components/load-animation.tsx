import { motion } from "motion/react";
import { LoadAnimationProps } from "../types";

export default function LoadAnimation({ children, delay }: LoadAnimationProps) {
  return <AnimatedComponent delay={delay}>{children}</AnimatedComponent>;
}

function AnimatedComponent({ children, delay }: LoadAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: delay },
      }}
    >
      {children}
    </motion.div>
  );
}
