import { useEffect } from "react";
import { motion, useSpring, useTransform } from "motion/react";

interface AnimatedNumberProps {
  value: number;
  format: (v: number) => string;
}

/** Smoothly animates between numeric values, formatting via the given formatter. */
export function AnimatedNumber({ value, format }: AnimatedNumberProps) {
  const spring = useSpring(value, { stiffness: 80, damping: 20 });
  useEffect(() => {
    spring.set(value);
  }, [spring, value]);
  const text = useTransform(spring, (v) => format(v));
  return <motion.span>{text}</motion.span>;
}
