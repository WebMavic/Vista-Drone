'use client'


import React, { useRef } from "react";
import dummy from "@/assets/images/dummy.jpg";
import Chips from "./ui/Chips";
import SectionLayout from "./ui/SectionLayout";

import {motion,useScroll,useTransform} from 'framer-motion'
function SectionExpertise() {

    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
      target: ref,
      offset:['0 1','center center']
    })
    // const scale = useTransform(scrollYProgress,[0,1],['0%','100%'])
  return (
    <SectionLayout className="bg-white" >
      <div className="h-full w-full" ref={ref} >
        <div className="text-center space-y-3">
          <Chips title="Our expertise"/>
          <h2 className="text-4xl font-bold text-heading ">Why Choose Us</h2>
          <p className="text-subheading  sm:w-2/6 mx-auto ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Minus dolor{" "}
          </p>
        </div>

        <div className="flex gap-5 my-10 flex-col sm:flex-row w-full items-center justify-center ">
          {expertises.map((expertise, index) => (
            <motion.div  key={index}  style={{scale:scrollYProgress,opacity:scrollYProgress}}>
            
              <img
                src="https://placehold.co/300x450"
                alt="logo"
                className="object-cover rounded-lg"
              />
              <span className="absolute z-[5]  -left-5 -top-5 font-bold text-6xl textStroke opacity-50">0{index+1}</span>
              <div className="space-y-5 z-10 text-left w-[300px] mt-3 relative">
                
                <h3 className="text-lg text-heading font-medium">{expertise.title}</h3>
                <p className="text-sm text-subheading">{expertise.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}

export default SectionExpertise;

const expertises = [
  {
    title: "Extensive experience in  successfully delivering projects",
    avatar: dummy,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
  {
    title: "Sound technical expertise in  UAV market",
    avatar: dummy,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
  {
    title: "Outstanding team of  professionals",
    avatar: dummy,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
];
