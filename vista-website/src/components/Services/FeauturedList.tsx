import React from "react";
import FeauturedServiceCardItem from "./FeauturedServiceCardItem";

function FeauturedList() {
  return (
    <div className="h-[28rem] overflow-y-scroll no-scrollbar">
      {/* <h2 className="text-5xl font-bold text-heading ">
        Elevating Industries with Next Gen UAV Solutions
      </h2> */}
      <div
        className="mx-10 flex flex-wrap items-center justify-center gap-5  text-center
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
      "Our specialized drone solutions provide precise aerial data, helping you streamline exploration, site assessment, and resource management.",
  },
  {
    title: "Planning and Survey",
    description:
      "Transform your planning and survey processes with our advanced drone technology. ",
  },
  {
    title: "Agriculture",
    description:
      "Our drone solutions provide actionable insights for crop management, irrigation planning, and pest detection, helping you enhance productivity and sustainability.",
  },
  {
    title: "Construction and Progress Monitoring",
    description:
      "We offer comprehensive drone solutions for site planning, progress monitoring, and safety inspections.",
  },
  {
    title: "Transportation and Power Industry",
    description:
      "Our drones conduct detailed inspections and provide high-quality visual data for proactive maintenance and compliance.",
  },
];
