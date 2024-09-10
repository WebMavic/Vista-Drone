import React from "react";
import { services } from "../../../utils/data";
import SectionHeader from "@/components/SectionHeader";
import SectionAbout from "@/components/SectionAbout";
import Benifits from "../(components)/Benifits";
import SectionFaq from "../(components)/SectionFaq";
import SectionContact from "@/components/SectionContact";
import Services from "../(components)/Services";
import SectionContent from "./(components)/SectionContent";
import bg from '@/assets/images/construction&realestate/construction4.jpeg'

const service = services[3]

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
