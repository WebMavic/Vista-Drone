import React from "react";
import dynamic from "next/dynamic";

const SectionLayout = dynamic(()=>import("@/components/ui/SectionLayout"))
const FeauturedList = dynamic(()=>import("./FeauturedList"));
const Chips = dynamic(()=>import("@/components/ui/Chips"))


function ServiceCards() {
  return (
    <SectionLayout className="bg-white">
      <div className="space-y-2 text-center ">
        <Chips title="Industries" />
        <h2 className="mx-auto text-2xl font-bold capitalize text-heading lg:w-3/4 lg:text-4xl ">
          Lorem ipsum dolor sit adipisicing
        </h2>
        <p className="text-center text-lg font-light text-subheading lg:mx-auto lg:w-2/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet
          porro molestias
        </p>
      </div>

      <div className="service-cards my-10 w-full ">
        <FeauturedList />
      </div>
    </SectionLayout>
  );
}

export default ServiceCards;
