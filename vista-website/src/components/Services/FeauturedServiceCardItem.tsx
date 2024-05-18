'use client'
import React, { useRef } from "react";
import { CubeTransparentIcon } from "@heroicons/react/24/outline";
import MagneticHover from "@/components/ui/MagneticHover";
import { motion, useScroll,useTransform } from "framer-motion";

interface FeauturedServiceCardsProps {
  service: {
    title: string;
    description: string;
  };
  reference? : React.RefObject<HTMLDivElement>
}


function FeauturedServiceCardItem({ service,reference}: FeauturedServiceCardsProps) {
  // const ref = useRef<HTMLDivElement>(null)


  return (
    <div 
      className="flex flex-col p-5 w-[274px] h-[300px] rounded-md shadow-md gap-2 bg-white justify-center items-center "
      
    >
      <div className="image-container rounded-full bg-primary p-2">
        <MagneticHover>
          <CubeTransparentIcon className="w-14 h-14 text-accent" />
        </MagneticHover>
      </div>
      <h3 className="text-2xl">{service.title}</h3>
      <p className="text-subheading  text-sm text-center">
        {service.description}
      </p>
    </div>
  );
}

export default FeauturedServiceCardItem;
