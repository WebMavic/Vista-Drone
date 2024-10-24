import React from "react";
import dynamic from "next/dynamic";
import { services } from "../../../utils/data";


import { Metadata } from "next";
const SectionContent =  dynamic(()=>import("./(components)/SectionContent"));
const SectionHeader =  dynamic(()=>import("@/components/SectionHeader"));
const Benifits = dynamic(()=>import("../(components)/Benifits"));
const SectionFaq = dynamic(()=>import("../(components)/SectionFaq"))
const Services = dynamic(()=>import("../(components)/Services"))
const SectionContact = dynamic(()=>import("@/components/SectionContact"))
const SectionAbout = dynamic(()=>import("@/components/SectionAbout"))


import bg from '@/assets/images/construction&realestate/construction4.jpeg'

const service = services[3]

export const metadata: Metadata = {
  title: "Construction | Vista Drone : Innovate and Improve",
};

const page = () => {
  return (
    <>
      <SectionHeader title={service.title} image={bg}/>
      <Services services={service.service_description}/>
            <SectionAbout  chips="Vista Drone Services" cta="/contact" heading={service.title} para={service.description} image={service.image}/>


      
      <Benifits content={services[3].benefits} />
      <SectionContent/>
      <SectionContact/>
      <SectionFaq faqs={services[3].faq} />
     
    </>
  );
};

export default page;
