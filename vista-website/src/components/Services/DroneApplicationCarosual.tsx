"use client"
import React, { ReactNode } from "react";
import { Pickaxe, MapIcon } from "lucide-react";
import { serviceIcons } from "@/utils/images";
import Image from "next/image";
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
              delay: 0.2 * index,
              duration: 0.5,
              type: "tween",

            }}
            key={index}
            className="group flex  cursor-pointer flex-col items-start  justify-center rounded-xl bg-white p-6 transition-all duration-300 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] hover:bg-accent/40"
          >
            {service.image}
            <div className="space-y-2 pt-5">
              <h3 className="text-2xl text-heading group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-sm text-subheading group-hover:text-neutral-200 ">
                {service.content}
              </p>
            </div>
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
  image?: ReactNode;
};

const applications: description[] = [
  {
    title: "Infrastructure and Civil  Construction ",
    image: <Pickaxe className="size-10 text-accent" />,
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
  {
    title: "Oil and Gas",
    image: (
      <Image src={serviceIcons[2].default} alt="oil" height={40} width={40} />
    ),
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
  {
    title: "Mining & Geology",
    image: <MapIcon className="size-10 text-accent" />,
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
  {
    title: "Green Renewable Energy ",
    image: <Pickaxe className="size-10 text-accent" />,
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
  {
    title: "Agriculture and Crop  Management",
    image: (
      <Image src={serviceIcons[0].default} alt="oil" height={40} width={40} />
    ),
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
  {
    title: "Surveying and Mapping",
    image: <Pickaxe className="size-10 text-accent" />,
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
];
