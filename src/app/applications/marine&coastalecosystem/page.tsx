import dynamic from "next/dynamic";
import React from "react";
import { Metadata } from "next";
import { services } from "../../../utils/data";
import bg from "@/assets/images/marinefish/maine1.jpeg";
import { constructionProjects, marineProjects } from "@/constants";


const SectionHeader = dynamic(() => import("@/components/SectionHeader"));
const SectionFaq = dynamic(() => import("../(components)/SectionFaq"));
const Services = dynamic(() => import("../(components)/Services"));
const SectionAbout = dynamic(() => import("@/components/SectionAbout"));
const Benifits = dynamic(()=>import("../(components)/Benifits"));
const Deliveries = dynamic(()=>import("../(components)/Deliveries"))


const service = services[6];

export const metadata: Metadata = {
  title: "Marine & Coastal Ecosystem | Vista Drone : Innovate and Improve",
};

const page = () => {
  return (
    <>
      <SectionHeader title={service.title} image={bg} />
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

      <Deliveries projects={marineProjects} heading="Our Key Deliverables" chipHeading="VISTA SOLUTIONS FOR MARINE AND COASTAL ECOSYSTEMS."/>
      
      <Benifits content={service.benefits} />
      <SectionFaq faqs={service.faq} />
    </>
  );
};

export default page;
