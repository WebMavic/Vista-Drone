import React from "react";
import dynamic from "next/dynamic";
import { services } from "@/utils/data";
import oil from "@/assets/images/oil&gas/oil3.jpeg";
import { oilProjects } from "@/constants";


const SectionHeader =  dynamic(()=>import("@/components/SectionHeader"));
const Benifits = dynamic(()=>import("../(components)/Benifits"));
const SectionFaq = dynamic(()=>import("../(components)/SectionFaq"))
const Services = dynamic(()=>import("../(components)/Services"))
const Deliveries = dynamic(()=>import("../(components)/Deliveries"))
const SectionContact = dynamic(()=>import("@/components/SectionContact"))
const SectionAbout = dynamic(()=>import("@/components/SectionAbout"))


const service = services[4];

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
        para={service.description}
        
      />
      <Deliveries projects={oilProjects} />
      <Benifits content={service.benefits} />
      <SectionContact/>
      <SectionFaq faqs={service.faq} />
    </>
  );
};

export default page;
