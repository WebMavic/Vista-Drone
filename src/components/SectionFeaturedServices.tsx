import React from "react";
import Chips from "./ui/Chips";
import FeauturedList from "@/app/applications/(components)/FeauturedList";
import SectionLayout from "./ui/SectionLayout";

function SectionFeaturedServices() {
  return (
    <SectionLayout className="w-full min-h-screen  bg-primary2">
      <div className="space-y-3">
          <Chips title="Applications" />
          <h2 className="text-4xl font-bold text-heading ">Feautured Applications</h2>
      </div>
        <FeauturedList />
    </SectionLayout>
  );
}

export default SectionFeaturedServices;
