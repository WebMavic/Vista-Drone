import React from "react";
import dynamic from "next/dynamic";
import { services } from "../../../utils/data";
import { TeamItem } from "@/app/about/(componets)/Team";
import { solarProjects } from "@/constants";
import { Metadata } from "next";

const SectionContent =  dynamic(()=>import("./(components)/SectionContent"));
const SectionContent2 =  dynamic(()=>import("./(components)/SectionContent2"));
const SectionLayout =  dynamic(()=>import("@/components/ui/SectionLayout"));
const SectionHeader =  dynamic(()=>import("@/components/SectionHeader"));
const Benifits = dynamic(()=>import("../(components)/Benifits"));
const SectionFaq = dynamic(()=>import("../(components)/SectionFaq"))
const Deliveries = dynamic(()=>import("../(components)/Deliveries"))
const SectionContact = dynamic(()=>import("@/components/SectionContact"))



import solar2 from '@/assets/images/greenenergy/solar2.jpeg'
import windimg from "@/assets/images/green energy/wind-2.jpg"
import Reveal from "@/components/Reveal";

const service = services[5];

export const metadata: Metadata = {
  title: "Green energy | Vista Drone : Innovate and Improve",
};


const page = async () => {
  return (
    <>
      <SectionHeader title={service.title} image={service.image} />
      <SectionLayout>
        <div className="grid lg:grid-rows-2 gap-6">
          {service.service_description.map(
            ({ content, title }, index) => (
              <Reveal key={index} slide={index === 0 ? 'left' : 'right'}>
              <TeamItem
                
                avatar={index % 2 === 0 ? solar2 : windimg }
                bio={content}
                direction={index % 2 === 0 ? "left" : "right"}
                name={title}
                className="lg:items-center"
              />
              </Reveal>
            ),
          )}
        </div>
      </SectionLayout>
      <SectionContent />
      <Benifits content={service.benefits} />
      <Deliveries projects={solarProjects} />
      <SectionContent2 />
      <SectionContact />
      <SectionFaq faqs={services[5].faq} />
    </>
  );
};

export default page;
