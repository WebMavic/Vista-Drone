import React from "react";
import dynamic from "next/dynamic";
import { services } from "@/utils/data";
import oil from "@/assets/images/oil&gas/oil3.jpeg";
import { oilProjects } from "@/constants";
import { Metadata } from "next";

const SectionHeader =  dynamic(()=>import("@/components/SectionHeader"));
const Benifits = dynamic(()=>import("../(components)/Benifits"));
const SectionFaq = dynamic(()=>import("../(components)/SectionFaq"))
const Services = dynamic(()=>import("../(components)/Services"))
const Deliveries = dynamic(()=>import("../(components)/Deliveries"))
const SectionContact = dynamic(()=>import("@/components/SectionContact"))
const SectionAbout = dynamic(()=>import("@/components/SectionAbout"))


const service = services[4];

export const metadata: Metadata = {
  title: "Oil & Gas | Vista Drone : Innovate and Improve",
};

const page = () => {
  return (
    <>
      <SectionHeader title={service.title} image={oil} />
      <Services services={service.service_description} />
      <SectionAbout
        chips="vista drone service"
        cta="/contact"
        image={service.image}
        heading={service.title} 
        para1={service.description1}
        para2={service.description2}
        para3={service.description3}
        
      />
      <Deliveries projects={oilProjects} heading="Our key deliverables" chipHeading="vista solutions for Oil and Gas Indsutry"/>
      <Benifits content={service.benefits} />
      <SectionContact/>
      <SectionFaq faqs={service.faq} />
    </>
  );
};

export default page;
