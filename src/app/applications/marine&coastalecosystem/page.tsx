import dynamic from "next/dynamic";
import React from "react";
import { Metadata } from "next";
import { services } from "../../../utils/data";
import bg from "@/assets/images/marinefish/maine1.jpeg";

const SectionHeader = dynamic(() => import("@/components/SectionHeader"));
const SectionFaq = dynamic(() => import("../(components)/SectionFaq"));
const Services = dynamic(() => import("../(components)/Services"));
const SectionAbout = dynamic(() => import("@/components/SectionAbout"));
const Benifits = dynamic(()=>import("../(components)/Benifits"));


const service = services[6];

export const metadata: Metadata = {
  title: "Marine & Coastal Ecosystem | Vista Drone : Innovate and Improve",
};

const page = () => {
  return (
    <>
      <SectionHeader title={service.title} image={bg} />
      <Services services={service.service_description} />
      <SectionAbout
        chips="Vista Drone Services"
        cta="/contact"
        heading={service.title}
        para={service.description}
        image={service.image}
      />
      <Benifits content={service.benefits} />
      <SectionFaq faqs={service.faq} />
    </>
  );
};

export default page;
