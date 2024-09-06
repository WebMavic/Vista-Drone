import SectionHeader from "@/components/SectionHeader";
import React from "react";
import { services } from "../../../utils/data";

import Benifits from "../(components)/Benifits";
import SectionFaq from "../(components)/SectionFaq";
import bg from "@/assets/images/agriculture/agriculture3.jpeg";
import Services from "../(components)/Services";
import SectionAbout from "@/components/SectionAbout";
import SectionContact from "@/components/SectionContact";

const service = services[2]

const page = () => {
  return (
    <>
      <SectionHeader title="Agriculture" image={bg}/>
    

      <Services services={service.service_description}/>
      <SectionAbout  chips="Vista Drone Services" cta="/contact" heading={service.title} para={service.description} image={service.image}/>

      <Benifits content={services[2].benefits} />
<SectionContact/>
      <SectionFaq faqs={services[2].faq} />
      
    </>
  );
};

export default page;
