import React from "react";
import dummy from "@/assets/images/dummy.jpg";
import { CubeTransparentIcon } from "@heroicons/react/24/outline";
import Chips from "../ui/Chips";
import SectionLayout from "../ui/SectionLayout";

function ServiceCards() {
  return (
    <SectionLayout className="bg-secondary">
      <div className="flex flex-col items-center">
        <div className="space-y-2 text-center ">
          <Chips title=" our Services" />
          <h2 className="text-2xl font-bold capitalize text-primary sm:text-4xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Repellendus
            eos voluptatibus illo corrupti maxime non
          </h2>
        </div>

        <div className="service-cards mt-5 w-full ">
          <div className="flex w-full flex-col items-center justify-center gap-5 sm:flex-row">
            {services.map((service, index) => (
              <div
                className="relative flex w-80 flex-col items-center justify-center gap-2  p-5 sm:w-96 "
                key={index}
              >
                <div className="image-container">{service.avatar}</div>
                <h2 className="text-2xl capitalize text-white">
                  {service.title}
                </h2>
                <p className="w-3/4 text-center text-sm text-darksubheading">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default ServiceCards;

const services = [
  {
    title: "Mining and Petroleum",
    avatar: <CubeTransparentIcon height={100} className="text-accent" />,
    description:
      "Our specialized drone solutions provide precise aerial data, helping you streamline exploration, site assessment, and resource management.",
  },
  {
    title: "Planning and Survey",
    avatar: <CubeTransparentIcon height={100} className="text-accent" />,
    description:
      "Transform your planning and survey processes with our advanced drone technology.",
  },
  {
    title: "Agriculture",
    avatar: <CubeTransparentIcon height={100} className="text-accent" />,
    description:
      "Our drone solutions provide actionable insights for crop management, irrigation planning, and pest detection, helping you enhance productivity and sustainability.",
  },
  {
    title: "Construction and Progress Monitoring",
    avatar: <CubeTransparentIcon height={100} className="text-accent" />,
    description:
      "We offer comprehensive drone solutions for site planning, progress monitoring, and safety inspections.",
  },
  {
    title: "Transportation and Power Industry",
    avatar: <CubeTransparentIcon height={100} className="text-accent" />,
    description:
      "Our drones conduct detailed inspections and provide high-quality visual data for proactive maintenance and compliance.",
  },
];
