"use client";
import React, { PropsWithChildren } from "react";
import { motion } from "motion/react";

interface RevealProps extends PropsWithChildren {
  width ?: "fit-content" | "100%"
  slide ?: 'left' | 'right' | 'top' | 'bottom'
  delay ?: number
  once ?: boolean

}

const Reveal = ({ children,slide,delay = 1 ,once = true}: RevealProps) => {

  const slideVariants = {
    hidden : {opacity:0,x:slide === 'left' ? -100 : 100},
    visible : {opacity : 1,x : 0 },
    
  }

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }




  return (
    <motion.div
      style={{ width: "100%",height:"100%",overflowY:'hidden' }}
      variants={slide ? slideVariants : variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: once,margin: "50%" ,amount: 0.3}}
      transition={{ duration: 0.5,delay:slide ? delay : 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
