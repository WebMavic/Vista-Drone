import React from "react";
import {  CubeTransparentIcon} from "@heroicons/react/24/outline";
import Chips from '../ui/Chips';
import SectionLayout from '@/components/ui/SectionLayout';
import Link from 'next/link';


function ServiceCards() {
  return (
   
    <SectionLayout className="">
      <div className="text-center space-y-2 ">
        <Chips title="Our Service" />
        <h2 className="sm:text-4xl text-2xl w-3/4 mx-auto font-bold text-heading capitalize ">
          Lorem ipsum dolor sit adipisicing elit Repellendus eos voluptatibus illo corrupti maxime non
        </h2>
      </div>

      <div className="service-cards mt-5 w-full ">
        <div className="flex flex-col sm:flex-row gap-5 items-center flex-wrap justify-center w-full">
          {services.map(({title,avatar,description,path}, index) => (
            <Link href={`services/${path}`}  
              className="flex cursor-pointer flex-col p-5 w-80 sm:h-80 sm:w-96 sm:gap-3 text-center group justify-center items-center hover:bg-white hover:shadow-md rounded-lg "
              key={index}>
              <div className="image-container">
                {avatar}
              </div>
              <h2 className="text-2xl text-heading capitalize ">{title}</h2>
              <p className="text-heading text-sm  w-3/4">
                {description}
              </p>
            </Link>
          ))}
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
    path: "mining-petroleum",
    description:
      "Our specialized drone solutions provide precise aerial data, helping you streamline exploration, site assessment, and resource management.",
  },
  {
    title: "Planning and Survey",
    avatar: <CubeTransparentIcon height={100} className="text-accent" />,
    description:
      "Transform your planning and survey processes with our advanced drone technology.",
      path: "planning-survey",
  },
  {
    title: "Agriculture",
    avatar: <CubeTransparentIcon height={100} className="text-accent" />,
    path : "agriculture",
    description:
      "Our drone solutions provide actionable insights for crop management, irrigation planning, and pest detection, helping you enhance productivity and sustainability.",
  },
  {
    title: "Construction and Progress Monitoring",
    path: "construction-progress-monitoring",
    avatar: <CubeTransparentIcon height={100} className="text-accent" />,
    description:
      "We offer comprehensive drone solutions for site planning, progress monitoring, and safety inspections.",
  },
  {
    title: "Transportation and Power Industry",
    path: "transportation-power-industry",
    avatar: <CubeTransparentIcon height={100} className="text-accent" />,
    description:
      "Our drones conduct detailed inspections and provide high-quality visual data for proactive maintenance and compliance.",
  },
];
