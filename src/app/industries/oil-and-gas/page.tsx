"use client";

import SectionHeader from "@/components/SectionHeader";
import { services } from "@/utils/data";
import React from "react";
import Benifits from "../(components)/Benifits";
import SectionFaq from "../(components)/SectionFaq";

import oil from "@/assets/images/drones_construction_industry.jpg";
import Services from "../(components)/Services";
import Deliveries from "../(components)/Deliveries";
import { Project } from "@/types/steps";
import { oilDeliveryImages } from "@/utils/images";
import SectionAbout from "@/components/SectionAbout";

const service = services[4];

const projects: Project[] = [
  {
    title: "High-Resolution Aerial Imagery",
    avatar: oilDeliveryImages[0],
    description:
      "Crystal-clear images capturing every detail of oil and gas infrastructure for comprehensive analysis",
  },
  {
    title: "Orthophoto Maps",
    avatar: oilDeliveryImages[1],
    description:
      "Precise, distortion-free maps provide an accurate representation of the surveyed area.",
  },
  {
    title: "Thermal Imaging Reports",
    avatar: oilDeliveryImages[2],
    description:
      "Heat maps identifying temperature variations, enabling the detection of potential issues in equipment and infrastructure.",
  },
  {
    title: "3D Point Clouds",
    avatar: oilDeliveryImages[3],
    description:
      "Detailed three-dimensional representations of the assets, aiding in spatial analysis and visualization.",
  },
  {
    title: "Pipeline Corridor Monitoring",
    avatar: oilDeliveryImages[4],
    description:
      "Regular monitoring and analysis of pipeline corridors for early detection of encroachments or integrity issues.",
  },
  {
    title: "Change Detection Reports",
    avatar: oilDeliveryImages[5],
    description:
      "Identifying and documenting changes in the landscape or infrastructure over time, supporting predictive maintenance.",
  },
  {
    title: "Environmental Impact Assessment (EIA) Data",
    avatar: oilDeliveryImages[1],
    description:
      "Comprehensive data for EIAs, helping oil and gas companies adhere to environmental regulations.",
  },
  {
    title: "Asset Condition Reports",
    avatar: oilDeliveryImages[2],
    description:
      "Detailed assessments of the condition of oil and gas assets, including potential areas of concern and recommendations for maintenance.",
  },
  {
    title: "Emergency Response Maps",
    avatar: oilDeliveryImages[3],
    description:
      "Maps highlighting emergency response routes and access points for quick and efficient crisis management.",
  },
  {
    title: "Data Integration",
    avatar: oilDeliveryImages[4],
    description:
      "Seamless integration of drone-captured data into existing Geographic Information Systems for enhanced data management.",
  },
  {
    title: "Interactive 3D Models",
    avatar: oilDeliveryImages[5],
    description:
      "Engaging 3D models of oil and gas assets, providing a dynamic and interactive way to explore the infrastructure.",
  },
  {
    title: "Regular Monitoring Schedules",
    avatar: oilDeliveryImages[1],
    description:
      "A proposed schedule for routine drone inspections, ensuring consistent data collection and timely maintenance.",
  },
];

const page = () => {
  return (
    <>
      <SectionHeader title={service.title} image={oil} />
      {/* <SectionInfo title={service.title} content={service.description} image={service.image}/> */}
      <Services services={service.service_description} />
      <SectionAbout
        chips="vista drone service"
        cta="/contact"
        heading={service.title}
        image={service.image}
        para={service.description}
      />
      <Deliveries projects={projects} />
      <Benifits content={service.benefits} />
      <SectionFaq faqs={service.faq} />
    </>
  );
};

export default page;
