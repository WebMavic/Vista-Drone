import React from "react";
import { services } from "../../../utils/data";
import SectionHeader from "@/components/SectionHeader";
import SectionLayout from "@/components/ui/SectionLayout";
import ServiceItem from "@/components/Services/ServiceItem";
import SectionInfo from "../(components)/SectionInfo";
import Benifits from "../(components)/Benifits";
import SectionFaq from "../(components)/SectionFaq";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import SectionContact from "@/components/SectionContact";


const content = services[3].service_description.map((item) => {
  return {
    title: item.title,
    description: item.content,
    content: <img src={item.image} alt={item.title} className="w-96 h-full object-cover rounded-md"/>,
  }
} )

const page = () => {
  return (
    <>
      <SectionHeader title="Construction and Progress Monitoring" background={'/v7.mp4'} />
      <SectionInfo
        title="Construction and Progress Monitoring"
        content={services[3]?.description}
        image={services[3]?.image}
      />

      <SectionLayout>
        <StickyScroll content={content} />
      </SectionLayout>

      <Benifits content={services[3].benefits} />

      <SectionFaq faqs={services[3].faq} />
      <SectionContact/>
    </>
  );
};

export default page;
