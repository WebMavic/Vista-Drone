import React from "react";
import { services } from "../../../utils/data";
import SectionHeader from "@/components/SectionHeader";
import SectionInfo from "../(components)/SectionInfo";
import Benifits from "../(components)/Benifits";
import SectionFaq from "../(components)/SectionFaq";
import Services from "../(components)/Services";
import bg from '@/assets/images/construction/const-2.jpg'

const service = services[3]

const page = () => {
  return (
    <>
      <SectionHeader title={service.title} image={service.image}/>
      <SectionInfo
        title={service.title}
        content={services[3]?.description}
        image={bg}
      />

      <Services services={service.service_description}/>
      <Benifits content={services[3].benefits} />

      <SectionFaq faqs={services[3].faq} />
     
    </>
  );
};

export default page;
