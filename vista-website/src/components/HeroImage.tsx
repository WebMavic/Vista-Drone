'use client'
import React from 'react'
import Image from "next/image";
import brandVistaImage from "@/assets/images/sample.png";
import {motion} from 'framer-motion'    


function HeroImage() {
  return (
    <div className="image-container relative">
    <div className="absolute left-0 top-0 sm:block hidden h-96 w-96 rounded-full bg-accent opacity-50 "></div>
    <motion.img initial={{y:-100,x:100}} animate={{y:0,x:0}} transition={{duration : 2 ,type: 'spring'}}
      src= {brandVistaImage.src}
      alt="brand-vista-image "
      className="sm:max-w-[550px] object-cover drop-shadow-drone"
    />
  </div>
  )
}

export default HeroImage