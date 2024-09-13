import dynamic from "next/dynamic";
import React from "react";
import { Metadata } from "next";
import { services } from "../../../utils/data";
import bg from "@/assets/images/marinefish/marine2.jpeg";

const SectionHeader = dynamic(() => import("@/components/SectionHeader"));
const SectionFaq = dynamic(() => import("../(components)/SectionFaq"));
const Services = dynamic(() => import("../(components)/Services"));
const SectionAbout = dynamic(() => import("@/components/SectionAbout"));

const service = services[6];

export const metadata: Metadata = {
  title: "Fisheries | Vista Drone : Innovate and Improve",
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
      <SectionFaq faqs={service.faq} />
    </>
  );
};

export default page;
