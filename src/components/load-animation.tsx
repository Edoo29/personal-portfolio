import { motion } from "motion/react";

type LoadAnimationProps = {
  children: React.ReactNode;
  delay?: number;
  animateWhenVisible?: boolean;
};

function LoadAnimation({
  children,
  delay,
  animateWhenVisible,
}: LoadAnimationProps) {
  return (
    <>
      {animateWhenVisible ? (
        <AnimateWhenVisibileComponent children={children} delay={delay} />
      ) : (
        <AnimateOnlyOneTimeComponent children={children} delay={delay} />
      )}
    </>
  );
}

function AnimateWhenVisibileComponent({ children, delay }: LoadAnimationProps) {
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

function AnimateOnlyOneTimeComponent({ children, delay }: LoadAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: delay },
      }}
    >
      {children}
    </motion.div>
  );
}

export default LoadAnimation;
