import React from "react";
import FeauturedServiceCardItem from "./FeauturedServiceCardItem";

function FeauturedList() {
  return (
    <div className="service-cards content mt-5 space-y-4 text-center sm:mt-0">
      <h2 className="text-5xl font-bold text-heading ">
        Elevating Industries with Next Gen UAV Solutions
      </h2>
      <div
        className="mx-10 flex flex-wrap items-center justify-center gap-12 space-y-4 text-center
      "
      >
        {services.map((service, index) => (
          <FeauturedServiceCardItem service={service} key={index} />
        ))}
      </div>
    </div>
  );
}

export default FeauturedList;

const services = [
  {
    title: "Mining and Petroleum",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
  {
    title: "Planning and Survey",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
  {
    title: "Agriculture",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
  {
    title: "Construction and Progress Monitoring",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
  {
    title: "Transportation and Power Industry",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
];
