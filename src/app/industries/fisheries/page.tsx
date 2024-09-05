import SectionHeader from "@/components/SectionHeader";
import React from "react";
import { services } from "../../../utils/data";
import SectionInfo from "../(components)/SectionInfo";
import Benifits from "../(components)/Benifits";
import SectionFaq from "../(components)/SectionFaq";
import Services from "../(components)/Services";
import  bg from '@/assets/images/cnbg.png'
const service = services[1]

const page = () => {
  return (
    <>
      <SectionHeader title={service.title} image={bg}  />
      <SectionInfo
        title="Fisheries"
        content={service.description}
        image={service.image}
      />
      <Services services={service.service_description}/>
      <Benifits content={service.benefits} />
      <SectionFaq faqs={service.faq} />
      
    </>
  );
};

export default page;
