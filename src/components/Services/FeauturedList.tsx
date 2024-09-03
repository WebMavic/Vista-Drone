"use client"

import React from "react";
import { BentoCard,BentoGrid } from "../magicui/bento-grid";
import { industries} from "@/constants/industries";

function FeauturedList() {
  
  return (
   
    <BentoGrid className="mt-5 lg:grid-rows-2 ">
    {industries.map((feature) => (
      <BentoCard key={feature.title} {...feature} />
    ))}
  </BentoGrid>

  );
}

export default FeauturedList;



