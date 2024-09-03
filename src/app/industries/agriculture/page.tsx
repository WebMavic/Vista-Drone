import SectionHeader from "@/components/SectionHeader";
import React from "react";
import { services } from "../../../utils/data";
import SectionInfo from "../(components)/SectionInfo";
import Benifits from "../(components)/Benifits";
import SectionFaq from "../(components)/SectionFaq";
import bg from "@/assets/images/agriculture/agri-6.jpg";
import Services from "../(components)/Services";

const service = services[2]

const page = () => {
  return (
    <>
      <SectionHeader title="Agriculture" image={bg}/>
      <SectionInfo
        title="Agriculture"
        content={services[2]?.description}
        image={services[2].image} 
      />

      <Services services={service.service_description}/>

      <Benifits content={services[2].benefits} />

      <SectionFaq faqs={services[2].faq} />
      
    </>
  );
};

export default page;
