"use client";

import React, { useRef } from "react";
import dummy from "@/assets/images/dummy.jpg";
import Chips from "./ui/Chips";
import SectionLayout from "./ui/SectionLayout";
import { expertiseImage } from "@/utils/images";

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
              <img
                src="https://placehold.co/300x450"
                alt="logo"
                className="rounded-lg object-cover"
              />
              <span className="textStroke absolute  -left-5 -top-5 z-[5] text-6xl font-bold opacity-50">
                0{index + 1}
              </span>
              <div className="relative z-10 mt-3 w-[300px] space-y-5 text-left">
                <h3 className="text-lg font-medium text-heading">
                  {expertise.title}
                </h3>
                <p className="text-sm text-subheading">
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
