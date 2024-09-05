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
      {/* <Services services={service.service_description}/> */}
      <SectionAbout
        chips="01"
        cta="/contact"
        heading={service.service_description[0].title}
        mirror
        className="lg:h-[50vh]"
        para={service.service_description[0].content}
      />
      <SectionAbout
        chips="02"
        cta="/contact"
        heading={service.service_description[1].title}
        image={service.image}
        className="lg:h-[50vh]"
        para={service.service_description[1].content}
      />

    

      <Benifits content={services[1].benefits} />

      <SectionFaq faqs={services[1].faq} />
      
    </>
  );
};

export default page;
