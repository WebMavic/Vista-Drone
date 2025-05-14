import React from "react";
import { services } from "../../../utils/data";
import dynamic from "next/dynamic";
import bg from "@/assets/images/agriculture/agriculture3.jpeg";
import { Metadata } from "next";
import { agricultureProjects } from "@/constants";

const Deliveries = dynamic(()=>import("../(components)/Deliveries"))
const SectionHeader = dynamic(() => import("@/components/SectionHeader"));
const Benifits = dynamic(() => import("../(components)/Benifits"));
const SectionFaq = dynamic(() => import("../(components)/SectionFaq"));
const Services = dynamic(() => import("../(components)/Services"));
const SectionContact = dynamic(() => import("@/components/SectionContact"));
const SectionAbout = dynamic(() => import("@/components/SectionAbout"));


const service = services[2];

export const metadata: Metadata = {
  title: "Agriculture and Livestock | Vista Drone : Innovate and Improve",
};

const page = () => {
  return (
    <>
      <SectionHeader title="Agriculture and livestock" image={bg} />

      <Services services={service.service_description} />
      <SectionAbout
        chips="vista drone service"
        cta="/contact"
        image={service.image}
        heading={service.title} 
        para1={service.description1}
       
        
      />
      <Deliveries projects={agricultureProjects} heading="Our Key Deliverables" chipHeading="VISTA SOLUTIONS FOR CONSTRUCTION AND REAL ESTATE"/>

      <Benifits content={services[2].benefits} />
      <SectionContact />
      <SectionFaq faqs={services[2].faq} />
    </>
  );
};

export default page;
