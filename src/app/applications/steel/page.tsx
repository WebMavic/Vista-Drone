import SectionHeader from "@/components/SectionHeader";
import React from "react";
import dynamic from "next/dynamic";
import { services } from "@/utils/data";
import { steelProjects } from "@/constants";
import { Metadata } from "next";



const Benifits = dynamic(() => import("../(components)/Benifits"));
const SectionFaq = dynamic(() => import("../(components)/SectionFaq"));
const Services = dynamic(() => import("../(components)/Services"));
const SectionAbout = dynamic(() => import("@/components/SectionAbout"));
const SectionContact = dynamic(() => import("@/components/SectionContact"));
const Deliveries = dynamic(()=>import("../(components)/Deliveries"))
import  bg from '@/assets/images/steel/steel2.jpeg'
const service = services[1]

export const metadata: Metadata = {
  title: "Steel Industry | Vista Drone : Innovate and Improve",
};

const page = () => {
  return (
    <>
      <SectionHeader title={service.title} image={bg}  />
      <Services services={service.service_description}/>
      <SectionAbout  chips="Vista Drone Services" cta="/contact" heading={service.title} para1={service.description1} image={service.image}/>
      <Deliveries projects={steelProjects} heading="Our Key Deliverables" chipHeading="vista solutions in steel industry"/>
      <Benifits content={service.benefits} />
      <SectionContact/>
      <SectionFaq faqs={service.faq} />
      
    </>
  );
};

export default page;
