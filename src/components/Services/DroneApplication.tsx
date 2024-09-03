import React from "react";
import Chips from "../ui/Chips";
import SectionLayout from "../ui/SectionLayout";
import StepsCards from "./StepsCards";



function DroneApplication() {
  return (
    <SectionLayout className="bg-primary2 h-auto">
      <div className="space-y-4 lg:w-1/2 ">
        <Chips title="workflow" />
        <h2 className="text-4xl font-bold text-heading ">How we do it</h2>
        <p className="text-subheading">
          Compared to traditional methods of mapping. Aerial 3D mapping is more
          convenient, faster, economical & accurate. Large areas of land can be
          mapped in matter of few hours with the data delivered within 24-48
          hours.
        </p>
      </div>
      {/* <DroneApplicationCarosual /> */}

      <StepsCards/>
    </SectionLayout>
  );
}

export default DroneApplication;
