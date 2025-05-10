"use client";
import React, { useState } from "react";
import SectionLayout from "@/components/ui/SectionLayout";
import { Button } from "@/components/ui/button";
import dataSharingImg from "@/assets/images/Cloud-Computing.webp"
import Image from "next/image";
import { motion,AnimatePresence } from "motion/react"
import { FaTableCellsLarge } from "react-icons/fa6";


const DataSharing = () => {

  const [isHidden,setHidden] = useState(false);
  
  return (
    <SectionLayout className="h-full">
      <div className="flex h-full w-full flex-col items-center justify-between  lg:flex-row lg:items-start lg:gap-10 gap-5">
        <div className="space-y-5 lg:w-1/2">
          <h1 className="text-center lg:text-6xl text-3xl font-medium  text-primary dark:text-white lg:text-left">
            Smart Use of Data via Point Cloud
          </h1>

          <p className="text-left  text-subheading">
          Drone-captured point cloud data offers high-precision 3D mapping, making it invaluable for sectors like mining, construction, and infrastructure management. By hosting this data in a secure online cloud, teams can remotely collaborate, track project progress, calculate volumes for depletion accounting, assess structural changes, and identify maintenance needs—all with greater speed and accuracy.
          </p>

          <div>
            <AnimatePresence>
              {isHidden && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-left text-subheading overflow-hidden"
                >
                  <h3 className="text-heading text-xl font-medium">Unlock the Power of Point Cloud Data</h3>
                  <p className="text-subheading mt-2">Drones don’t just take pictures—they capture millions of precise data points to create 3D models of your site. This is called point cloud data.</p>

                    <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                                
                                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                 {data.map((item, index) => (
                                   <li className="flex gap-x-3" key={index}>
                                   <FaTableCellsLarge  aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-accent" />
                                   <span className="font-semibold text-gray-900">{item.title}</span>
                                 </li>
                                 ))}
                                 
                                </ul>
                                
                                
                              </div>

                  <p className="text-subheading mt-2">Hosted in the Cloud : Your data lives in a secure, shareable environment—so your engineers, planners, and decision-makers can all work from the same digital reality.
</p>
                </motion.div>
              )}
            </AnimatePresence>
            <Button
              onClick={() => setHidden((prev) => !prev)}
              className="mt-2"
              variant={"outline"}
            >
              {isHidden ? "Learn More" : "Show Less"}
            </Button>
          </div>

          
        </div>

        <div className="lg:flex-1">
          <Image 
            src={dataSharingImg}
            placeholder="blur"
            blurDataURL={dataSharingImg.blurDataURL} 
            alt="image" id="adv-round-rectangle"
            // id="border-style-1"
            className="object-cover h-96 w-full"
          />
        </div>
      </div>
    </SectionLayout>
  );
};

export default DataSharing;




const data = [
  {
    title: "Track material volumes (ideal for mining, stockpiles, and earthworks)",
    icon: <FaTableCellsLarge aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-accent" />,
  },
  {
    title: "Monitor site changes over time",
    icon: <FaTableCellsLarge aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-accent" />,
  },
  {
    title: "Identify areas needing maintenance before problems grow",
    icon: <FaTableCellsLarge aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-accent" />,
  },
  {
    title: "Share accurate visuals with your team, anytime, anywhere",
    icon: <FaTableCellsLarge aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-accent" />,
  },
];