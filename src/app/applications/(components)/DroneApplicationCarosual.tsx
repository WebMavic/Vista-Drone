"use client"
import React from "react";
import { Pickaxe } from "lucide-react";
import { MapIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

function DroneApplicationCarosual() {
  return (
    <div className="mt-16 w-full">
      <div className="sm:full grid  grid-cols-1  gap-12 sm:grid-cols-3 sm:gap-16">
        {applications.map((service, index) => (
          <motion.div
            initial={{ opacity: 0, scale:0.9}}
            whileInView={{  opacity: 1,scale:1}}
            // viewport={{ once: true }}
            transition={{
              ease: "easeInOut",
              delay: 0.1 * index,
              type: "spring",

            }}
            key={index}
            className="group flex relative overflow-hidden cursor-pointer flex-col items-start  justify-center rounded-xl bg-white p-6 transition-all duration-1000 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] "
          >
            {/* {service.image} */}
            <service.image className = 'size-10 z-10 text-accent group-hover:text-white' />
            <div className="space-y-2 pt-5 z-10">
              <h3 className="text-2xl text-heading group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-sm text-subheading group-hover:text-neutral-200 ">
                {service.content}
              </p>

            </div>
            <div className="circle bg-accent/80 size-5 z-0 absolute group-hover:size-full  transition-all duration-500 ease-in-out top-0 right-0  rounded-bl-md"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default DroneApplicationCarosual;

type description = {
  title: string;
  content: string;
  image?: any;
};

const applications: description[] = [
  {
    title: "Infrastructure and Civil  Construction ",
    image: MapIcon,
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
  {
    title: "Oil and Gas",
    image: MapIcon,
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
  {
    title: "Mining & Geology",
    image: MapIcon,
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
  {
    title: "Green Renewable Energy ",
    image: Pickaxe,
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
  {
    title: "Agriculture and Crop  Management",
    image: Pickaxe,
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
  {
    title: "Surveying and Mapping",
    image: Pickaxe,
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
];
