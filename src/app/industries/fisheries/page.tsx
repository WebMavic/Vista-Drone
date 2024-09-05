import SectionHeader from "@/components/SectionHeader";
import React from "react";
import { services } from "../../../utils/data";
import SectionInfo from "../(components)/SectionInfo";
import Benifits from "../(components)/Benifits";
import SectionFaq from "../(components)/SectionFaq";
import Services from "../(components)/Services";
import SectionAbout from "@/components/SectionAbout";
import  bg from '@/assets/images/cnbg.png'
const service = services[6]

const page = () => {
  return (
    <>
      <SectionHeader title={service.title} image={bg}  />
      <Services services={service.service_description}/>
      <SectionAbout  chips="Vista Drone Services" cta="/contact" heading={service.title} para={service.description} image={service.image}/>
      
      
      <Benifits content={service.benefits} />
      <SectionFaq faqs={service.faq} />
      
    </>
  );
};

export default page;
