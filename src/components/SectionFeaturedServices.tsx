import React from "react";
import Chips from "./ui/Chips";
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
    </SectionLayout>
  );
}

export default SectionFeaturedServices;
