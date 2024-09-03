"use client";
import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface RevealProps extends PropsWithChildren {
  width?: "fit-content" | "100%";
}

const Reveal = ({ children, width = "fit-content" }: RevealProps) => {
  return (
    <motion.div
      style={{ width: width, position: "relative", overflow: "hidden" }}
      variants={
        {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
        }
      }
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5}}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
