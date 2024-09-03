"use client"

import SectionHeader from "@/components/SectionHeader";
import { services } from "@/utils/data";
import React from "react";
import SectionInfo from "../(components)/SectionInfo";
import Benifits from "../(components)/Benifits";
import SectionFaq from "../(components)/SectionFaq";

import oil from "@/assets/images/oil.png";
import Services from "../(components)/Services";
import Deliveries from "../(components)/Deliveries";
import { Project } from "@/types/steps";
import { oilDeliveryImages } from "@/utils/images";

const service = services[4];

const projects: Project[] = [
  {
    title: "Digital Terrain Model",
    avatar: oilDeliveryImages[0],
    description: "Digital Terrain model here",
  },
  {
    title: "Contours",
    avatar: oilDeliveryImages[1],
    description: "Digital Terrain model here",
  },
  {
    title: "Digital Surface Model",
    avatar: oilDeliveryImages[2],
    description: "Digital Terrain model here",
  },
  {
    title: "Ortho-mosaic",
    avatar: oilDeliveryImages[3],
    description: "Digital Terrain model here",
  },
  {
    title: "Volumetric Analysis",
    avatar: oilDeliveryImages[4],
    description: "Digital Terrain model here",
  },
  {
    title: "Volumetric Analysis",
    avatar: oilDeliveryImages[5],
    description: "Digital Terrain model here",
  },
];


const page = () => {
  return (
    <>
      <SectionHeader title={service.title} image={oil} />
      <SectionInfo title={service.title} content={service.description} image={service.image}/>
      <Services services={service.service_description} />
      <Deliveries projects={projects}/>
      <Benifits content={service.benefits} />
      <SectionFaq faqs={service.faq} />
    </>
  );
};

export default page;
