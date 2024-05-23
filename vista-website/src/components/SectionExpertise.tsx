"use client";
import image1 from "@/assets/images/why-choose-us-1.jpeg";
import image2 from "@/assets/images/why-choose-us-2.jpeg";
import image3 from "@/assets/images/why-choose-us-3.jpeg";
import React, { useRef } from "react";
import dummy from "@/assets/images/dummy.jpg";
import Chips from "./ui/Chips";
import SectionLayout from "./ui/SectionLayout";

import { motion, useScroll, useTransform } from "framer-motion";
function SectionExpertise() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "center center"],
  });
  // const scale = useTransform(scrollYProgress,[0,1],['0%','100%'])
  return (
    <SectionLayout className="bg-white">
      <div className="h-full w-full" ref={ref}>
        <div className="space-y-3 text-center">
          <Chips title="Our expertise" />
          <h2 className="text-4xl font-bold text-heading ">Why Choose Us</h2>
          <p className="mx-auto  text-subheading sm:w-2/6 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Minus dolor{" "}
          </p>
        </div>

        <div className="my-10 flex w-full flex-col items-center justify-center gap-5 sm:flex-row ">
          {expertises.map((expertise, index) => (
            <motion.div
              key={index}
              style={{ scale: scrollYProgress, opacity: scrollYProgress }}
            >
              <img src={expertise.avatar.src} alt="dwad" />
              <span className="textStroke absolute  -left-5 -top-5 z-[5] text-6xl font-bold opacity-50">
                0{index + 1}
              </span>
              <div className="z-8 relative mt-3 w-[450px] space-y-5 text-left">
                <h3 className="text text-center text-lg font-medium text-heading">
                  {expertise.title}
                </h3>
                <p className="text-justify text-sm text-subheading">
                  {expertise.description}
                </p>
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
    avatar: image1,

    description:
      "The forthcoming slides will showcase brief of the select projects, demonstrating team's expertise and proficiency in Civil Infrastructure, Oil & Gas, Mining and Geology, and Green Energy.",
  },
  {
    title: "Sound technical expertise in  UAV market",
    avatar: image2,
    description:
      "The team is well-versed in the UAE government's long-term UAV policy and market landscape. Consequently, they actively collaborates with R&D to innovate Drones in line with the demands of the clients.",
  },
  {
    title: "Outstanding team of  professionals",
    avatar: image3,
    description:
      "Includes experts with decades of experience in academia, complementing operational skills. This breadth of expertise enables us to offer comprehensive training programs to embrace the latest technology and drive continual improvement.",
  },
];
