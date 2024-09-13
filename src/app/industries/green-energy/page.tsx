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

const service = services[5];

export const metadata: Metadata = {
  title: "Green energy | Vista Drone : Innovate and Improve",
};


const page = () => {
  return (
    <>
      <SectionHeader title={service.title} image={service.image} />
      <SectionLayout>
        <div className="grid lg:grid-rows-2 gap-6">
          {service.service_description.map(
            ({ content, title }, index) => (
              <TeamItem
                key={index}
                avatar={index % 2 === 0 ? solar2 : windimg }
                bio={content}
                direction={index % 2 === 0 ? "left" : "right"}
                name={title}
                className="lg:items-center"
              />
            ),
          )}
        </div>
      </SectionLayout>
      <SectionContent />
      <Benifits content={services[7].benefits} />
      <Deliveries projects={solarProjects} />
      <SectionContent2 />
      <SectionContact />
      <SectionFaq faqs={services[5].faq} />
    </>
  );
};

export default page;
