import React from "react";
import dummy from "@/assets/images/dummy.jpg";
<<<<<<< Updated upstream
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
=======
import {  CubeTransparentIcon} from "@heroicons/react/24/outline";
import Chips from '../ui/Chips';
import SectionLayout from '../ui/SectionLayout';
import Link from 'next/link';

function ServiceCards() {
  return (
    <SectionLayout className="bg-secondary/90">
    <div className="flex flex-col items-center">
      <div className="text-center space-y-2 ">
        <Chips title=" our Services" />
        <h2 className="sm:text-4xl text-2xl font-bold text-primary capitalize ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit Repellendus eos voluptatibus illo corrupti maxime non
        </h2>
      </div>

      <div className="service-cards mt-5 w-full ">
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full">
          {services.map(({title,avatar,description,path}, index) => (
            <Link href={`services/${path}`}  
              className="flex cursor-pointer flex-col p-5 w-80 sm:h-80 sm:w-96 gap-2 text-center relative  justify-center items-center hover:bg-accent/50 hover:backdrop-blur-sm rounded-lg "
              key={index}>
              <div className="image-container">
                {avatar}
              </div>
              <h2 className="text-2xl text-white capitalize ">{title}</h2>
              <p className="text-darksubheading text-sm  w-3/4">
                {description}
              </p>
            </Link>
          ))}
>>>>>>> Stashed changes
        </div>
      </div>
    </SectionLayout>
  );
}

export default ServiceCards;

const services = [
<<<<<<< Updated upstream
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
=======
    {
      title: "construction and progress monitoring",
      avatar: <CubeTransparentIcon height={100} className="text-accent" />,
      description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet ",
      path : 'construction-progress-monitoring'
    },
    {
      title: "planning and survey",
      avatar:<CubeTransparentIcon height={100} className="text-accent" />,
      description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet ",
      path : 'planning-survey'
    },
    {
      title: "Agriculture",
      avatar:<CubeTransparentIcon height={100} className="text-accent" />,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet",
      path : 'agriculture'
    },
    {
      title: "mining and petroleum",
      avatar:<CubeTransparentIcon height={100} className="text-accent" />,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet",
      path : 'mining-petroleum'
    },
  ];
  
>>>>>>> Stashed changes
