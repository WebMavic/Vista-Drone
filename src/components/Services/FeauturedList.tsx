"use client"

import React from "react";
import { BentoCard,BentoGrid } from "../magicui/bento-grid";
import { industries} from "@/constants/industries";

function FeauturedList() {
  
  return (
   
    <BentoGrid className="mt-5">
    {industries.map((feature) => (
      // @ts-ignore
      <BentoCard key={feature.title} {...feature} />
    ))}
  </BentoGrid>

  );
}

export default FeauturedList;



