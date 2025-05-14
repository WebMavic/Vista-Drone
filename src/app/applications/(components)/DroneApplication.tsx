import React from "react";
import dynamic from "next/dynamic";

const Chips = dynamic(()=>import("@/components/ui/Chips"))
const SectionLayout = dynamic(()=>import("@/components/ui/SectionLayout"))

import StepsCards from "./StepsCards";



function DroneApplication() {
  return (
    <SectionLayout className="bg-primary2 h-auto">
      <div className="space-y-4 lg:w-1/2 ">
        <Chips title="WORKFLOW" />
        <h2 className="text-4xl font-bold text-heading ">How we do it</h2>
        <p className="text-subheading">
        Compared to conventional survey methods, aerial 3D mapping with drones is faster, more convenient, cost-effective, and highly accurate in geo-referencing. Large areas—up to 5 sq. km—can be mapped in a day, with data processing completed in about five working days.
        </p>
      </div>

      <StepsCards/>
    </SectionLayout>
  );
}

export default DroneApplication;
