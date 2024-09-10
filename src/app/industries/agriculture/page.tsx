import React from "react";
import { services } from "../../../utils/data";
import dynamic from "next/dynamic";
import bg from "@/assets/images/agriculture/agriculture3.jpeg";

const SectionHeader = dynamic(() => import("@/components/SectionHeader"));
const Benifits = dynamic(() => import("../(components)/Benifits"));
const SectionFaq = dynamic(() => import("../(components)/SectionFaq"));
const Services = dynamic(() => import("../(components)/Services"));
const SectionContact = dynamic(() => import("@/components/SectionContact"));
const SectionAbout = dynamic(() => import("@/components/SectionAbout"));

const service = services[2];

const page = () => {
  return (
    <>
      <SectionHeader title="Agriculture" image={bg} />

      <Services services={service.service_description} />
      <SectionAbout
        chips="Vista Drone Services"
        cta="/contact"
        heading={service.title}
        para={service.description}
        image={service.image}
      />

      <Benifits content={services[2].benefits} />
      <SectionContact />
      <SectionFaq faqs={services[2].faq} />
    </>
  );
};

export default page;
