import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { services } from "../../../utils/data";
import SectionInfo from "../(components)/SectionInfo";
import Benifits from "../(components)/Benifits";
import SectionFaq from "../(components)/SectionFaq";
import bg from "@/assets/images/mining/mine4.jpeg";
import Services from "../(components)/Services";
import Deliveries from "../(components)/Deliveries";
import { Project } from "@/types/steps";
import { miningDeliveryImages } from "@/utils/images";
import SectionContact from "@/components/SectionContact";
import SectionAbout from "@/components/SectionAbout";

const service = services[0];

const projects: Project[] = [
  {
    title: "Digital Terrain Model",
    avatar: miningDeliveryImages[0],
    description: "Digital Terrain model here",
  },
  {
    title: "Contours",
    avatar: miningDeliveryImages[1],
    description: "Digital Terrain model here",
  },
  {
    title: "Digital Surface Model",
    avatar: miningDeliveryImages[2],
    description: "Digital Terrain model here",
  },
  {
    title: "Ortho-mosaic",
    avatar: miningDeliveryImages[3],
    description: "Digital Terrain model here",
  },
  {
    title: "Volumetric Analysis",
    avatar: miningDeliveryImages[4],
    description: "Digital Terrain model here",
  },
];

const page = () => {
  return (
    <>
      <SectionHeader title = {service.title} image={bg} />
      <Services services={service.service_description} />
      <SectionAbout  chips="Vista Drone Services" cta="/contact" heading={service.title} para={service.description} image={service.image}/>
      <Deliveries projects={projects} />
      <Benifits content={service.benefits} />
      <SectionContact/>
      <SectionFaq faqs={service.faq} />
    </>
  );
};

export default page;
