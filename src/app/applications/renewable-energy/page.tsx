import React from "react";
import dynamic from "next/dynamic";
import { services } from "../../../utils/data";
import { solarProjects } from "@/constants";
import { Metadata } from "next";

const SectionContent =  dynamic(()=>import("./(components)/SectionContent"));
const SectionContent2 =  dynamic(()=>import("./(components)/SectionContent2"));
const SectionHeader =  dynamic(()=>import("@/components/SectionHeader"));
const Benifits = dynamic(()=>import("../(components)/Benifits"));
const SectionFaq = dynamic(()=>import("../(components)/SectionFaq"))
const Deliveries = dynamic(()=>import("../(components)/Deliveries"))
const SectionContact = dynamic(()=>import("@/components/SectionContact"))
const Services = dynamic(()=>import("../(components)/Services"))
const SectionAbout = dynamic(()=>import("@/components/SectionAbout"))
const service = services[5];

export const metadata: Metadata = {
  title: "Green energy | Vista Drone : Innovate and Improve",
};


const page = () => {
  return (
    <>
      <SectionHeader title={service.title} image={service.image} />
      <Services services={service.service_description}/>
      <SectionAbout 
        chips="vista drone service"
        cta="/contact"
        image={service.image}
        heading={service.title} 
        para1={service.description1}
        para2={service.description2}
      />

      <SectionContent />
      <Deliveries projects={solarProjects} heading="Our key deliverables" chipHeading="vista solutions for Renewable Energy Sector"/>
      <Benifits content={service.benefits} />
      <SectionContent2 />
      <SectionContact />
      <SectionFaq faqs={services[5].faq} />
    </>
  );
};

export default page;
