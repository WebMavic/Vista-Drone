import React from "react";
import dynamic from "next/dynamic";
import { services } from "../../../utils/data";
import { constructionProjects } from "@/constants";


import { Metadata } from "next";
const SectionContent =  dynamic(()=>import("./(components)/SectionContent"));
const SectionHeader =  dynamic(()=>import("@/components/SectionHeader"));
const Benifits = dynamic(()=>import("../(components)/Benifits"));
const SectionFaq = dynamic(()=>import("../(components)/SectionFaq"))
const Services = dynamic(()=>import("../(components)/Services"))
const SectionContact = dynamic(()=>import("@/components/SectionContact"))
const SectionAbout = dynamic(()=>import("@/components/SectionAbout"))
const Deliveries = dynamic(()=>import("../(components)/Deliveries"))




import bg from '@/assets/images/construction&realestate/construction4.jpeg'

const service = services[3]

export const metadata: Metadata = {
  title: "Civil Infrastructure | Vista Drone : Innovate and Improve",
};

const page = () => {
  return (
    <>
      <SectionHeader title={service.title} image={bg}/>
      <Services services={service.service_description}/>
      <SectionAbout
        chips="vista drone service"
        cta="/contact"
        image={service.image}
        heading={service.title} 
        para1={service.description1}
        para2={service.description2}
        
      />

      <Deliveries projects={constructionProjects} heading="Our Key Deliverables" chipHeading="VISTA SOLUTIONS FOR CONSTRUCTION AND REAL ESTATE"/>
      <Benifits content={services[3].benefits} />
      {/* <SectionContent/> */}
      <SectionContact/>
      <SectionFaq faqs={services[3].faq} />
     
    </>
  );
};

export default page;
