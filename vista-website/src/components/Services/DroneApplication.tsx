import React from "react";
import Chips from "../ui/Chips";
import SectionLayout from "../ui/SectionLayout";
import DroneApplicationCarosual from "./DroneApplicationCarosual";

function DroneApplication() {
  return (
    <SectionLayout>
      <div className="space-y-4 sm:w-1/2 ">
        <Chips title="Applications" />
        <h2 className="text-4xl font-bold text-heading ">
          Experience in Industrial Applications of UAV
        </h2>
      </div>

      <DroneApplicationCarosual />
    </SectionLayout>
  );
}

export default DroneApplication;
