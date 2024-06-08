"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import SectionLayout from "./ui/SectionLayout";
function SectionAbout() {

  return (
    <SectionLayout className="h-full bg-white">
      <div className="flex h-full  w-full flex-col  items-center justify-center sm:flex-row sm:justify-between">
        <div className="sm:w-1/2">
          <motion.img
            src="https://images.unsplash.com/photo-1555009306-9e3c5b6a66e3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            className="hidden w-2/3 rounded-2xl object-cover shadow-md sm:block"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </div>

        <div className=" flex  h-full flex-col items-center gap-5 sm:w-1/2 sm:items-start">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-medium uppercase text-primary dark:text-white text-6xl"
          >
            About Us
          </motion.h1>
          <img
            src="https://images.unsplash.com/photo-1555009306-9e3c5b6a66e3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            className="block w-2/3 rounded-2xl object-cover shadow-md sm:hidden"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-pretty font-light  text-subheading"
          >
            Our strategic positioning is bolstered by strong support from R&D
            labs and experts at the Indian Institute of Technology, India, and
            its Abu Dhabi branch, as well as the Lima College of Engineering,
            Abu Dhabi. This collaboration enables us to innovate and integrate
            cutting-edge technologies, supported by reputable international
            drone manufacturers.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-pretty font-light  text-subheading"
          >
            Our strategic positioning is bolstered by strong support from R&D
            labs and experts at the Indian Institute of Technology, India, and
            its Abu Dhabi branch, as well as the Lima College of Engineering,
            Abu Dhabi. This collaboration enables us to innovate and integrate
            cutting-edge technologies, supported by reputable international
            drone manufacturers.
          </motion.p>

          <Button
            href="/about"
            title="Learn more"
            className="border border-accent  text-accent hover:bg-accent  hover:text-white "
          />
        </div>
      </div>
    </SectionLayout>
  );
}

export default SectionAbout;
