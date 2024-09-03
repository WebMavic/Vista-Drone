import SectionHeader from "@/components/SectionHeader";
import React from "react";
import SectionInfo from "../(components)/SectionInfo";
import Benifits from "../(components)/Benifits";
import SectionFaq from "../(components)/SectionFaq";
import { services } from "../../../utils/data";
import Services from "../(components)/Services";
import green from '@/assets/images/green energy/green-1.jpg'
const service = services[5]

const page = () => {
  return (
    <>
      <SectionHeader title={service.title} image={service.image}/>
      <SectionInfo
        title={service.title}
        content={services[1]?.description}
        image={green}
      />

    <Services services={service.service_description}/>

      <Benifits content={services[1].benefits} />

      <SectionFaq faqs={services[1].faq} />
      
    </>
  );
};

export default page;
