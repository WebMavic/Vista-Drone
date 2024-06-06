"use client";
import React, { useRef } from "react";
import { CubeTransparentIcon } from "@heroicons/react/24/outline";
import MagneticHover from "@/components/ui/MagneticHover";
import { motion, useScroll, useTransform } from "framer-motion";

interface FeauturedServiceCardsProps {
  service: {
    title: string;
    description: string;
  };
  reference?: React.RefObject<HTMLDivElement>;
}

function FeauturedServiceCardItem({
  service
}: FeauturedServiceCardsProps) {
  // const ref = useRef<HTMLDivElement>(null)

  return (
    <div className="flex h-[300px] w-[274px] flex-col items-center justify-center gap-2 rounded-md bg-white p-5 shadow-md ">
      <div className="image-container rounded-full bg-primary p-2">
        <MagneticHover>
          <CubeTransparentIcon className="h-14 w-14 text-accent" />
        </MagneticHover>
      </div>
      <h3 className="text-2xl">{service.title}</h3>
      <p className="text-justify text-sm text-subheading">
        {service.description}
      </p>
    </div>
  );
}

export default FeauturedServiceCardItem;
