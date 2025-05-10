"use client";
import React from "react";
import Chips from "./ui/Chips";
import SectionLayout from "./ui/SectionLayout";
import { motion} from "motion/react";
import Image from "next/image";

import inner from "@/assets/images/home_inner_05.png";
import { expertises } from "@/constants";



function SectionExpertise() {

  return (
    <SectionLayout className="min-h-screen relative ">
      <div className="h-full w-full ">
        <div className="absolute left-0 top-0 h-80 pointer-events-none select-none">
          <Image
            src={inner}
            alt="inner-4"
            className="h-full w-full object-cover opacity-80 mix-blend-darken"
          />
        </div>
        <div className="space-y-3 text-center">
          <Chips className="text-primary" title="Our expertise" />
          <h2 className="text-4xl font-bold text-heading ">Why Choose Us</h2>
          <p className="mx-auto  text-subheading sm:w-2/6 ">
            Cultivating Excellence: Our Areas of Mastery
          </p>
        </div>

        <div className="relative  my-16 grid lg:grid-cols-3  ">
          {expertises.map((expertise, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, }}
              transition={{ delay: index * 0.25, ease: "linear" }}
              className="group flex cursor-pointer  flex-col items-start justify-center gap-5 rounded-md p-6 lg:h-96 "
              key={index}
            >
              <expertise.avatar className="size-16 rounded-full  p-2 text-darksubheading group-hover:bg-accent/80 group-hover:text-white transition duration-300 ease-in" />
              <h2 className="text-xl font-bold uppercase text-heading ">
                {expertise.title}
              </h2>
              <p className="text-left text-subheading ">
                {expertise.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionLayout>
  );
}

export default SectionExpertise;

