"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

// Opacity-only fade keeps motion.div from acquiring a transform, which would
// otherwise turn it into a containing block for absolutely-positioned children
// (music notes, decorative chars) — breaking their section-relative anchors.
const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
  id?: string;
};

// When `as="section"`, the section element (and its bg color) is rendered
// statically, and only the inner content fades in. This avoids the moment
// where the section's bg color is still transparent and the SectionCurve
// dividers above/below show a visible seam against the page body bg.
export function ScrollReveal({
  children,
  className,
  delay = 0,
  as = "div",
  id,
}: Props) {
  if (as === "section") {
    return (
      <section id={id} className={className}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          variants={fadeIn}
          transition={{ delay }}
        >
          {children}
        </motion.div>
      </section>
    );
  }

  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      variants={fadeIn}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
