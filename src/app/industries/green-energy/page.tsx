import SectionHeader from "@/components/SectionHeader";
import React from "react";
import SectionInfo from "../(components)/SectionInfo";
import Benifits from "../(components)/Benifits";
import SectionFaq from "../(components)/SectionFaq";
import { services } from "../../../utils/data";
import Services from "../(components)/Services";
import green from '@/assets/images/green energy/green-1.jpg'
import SectionAbout from "@/components/SectionAbout";

const service = services[5]

const page = () => {
  return (
    <>
      <SectionHeader title={service.title} image={service.image}/>
      <Services services={service.service_description}/>
      <SectionAbout
        chips="vista drone service"
        cta="/contact"
        heading={service.title}
        image={service.image}
        para={service.description}
      />

    

      <Benifits content={services[1].benefits} />

      <SectionFaq faqs={services[1].faq} />
      
    </>
  );
};

export default page;
