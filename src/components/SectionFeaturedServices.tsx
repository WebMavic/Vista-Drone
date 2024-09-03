import React from "react";
import Chips from "./ui/Chips";
import Button from "./ui/Button";
import FeauturedList from "./Services/FeauturedList";
import SectionLayout from "./ui/SectionLayout";

function SectionFeaturedServices() {
  return (
    <SectionLayout className="w-full  bg-primary2">
      <div className="space-y-3">
          <Chips title="Industries" />
          <h2 className="text-4xl font-bold text-heading ">Feautured Industries</h2>
      </div>
        <FeauturedList />
      {/* <div className="flex flex-col sm:justify-between lg:flex-row gap-5">
        <div className="content flex flex-col items-start space-y-4 lg:w-[30%]">
        
        </div>

      </div> */}
    </SectionLayout>
  );
}

export default SectionFeaturedServices;
