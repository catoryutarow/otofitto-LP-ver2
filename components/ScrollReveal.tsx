"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
  id?: string;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  as = "div",
  id,
}: Props) {
  const MotionTag = as === "section" ? motion.section : motion.div;
  return (
    <MotionTag
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
