import SectionHeader from "@/components/SectionHeader";
import React from "react";
import SectionLayout from "@/components/ui/SectionLayout";
import ServiceItem from "@/components/Services/ServiceItem";
import SectionInfo from "../(components)/SectionInfo";
import Benifits from "../(components)/Benifits";
import SectionFaq from "../(components)/SectionFaq";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { services } from "../../../utils/data";
import { HorizontalScrollCarousel } from "@/components/ui/HorizontalScroll";
import SectionContact from "@/components/SectionContact";

const content = services[1].service_description.map((item) => {
  return {
    title: item.title,
    description: item.content,
    content: (
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-96 rounded-md object-cover"
      />
    ),
  };
});

const page = () => {
  return (
    <>
      <SectionHeader title="Planning and Survey" background={'/v8.mp4'}/>
      <SectionInfo
        title="Planning and Survey"
        content={services[1]?.description}
        image={services[1]?.image}
      />

      <SectionLayout>
        <StickyScroll content={content} />
      </SectionLayout>

      <Benifits content={services[1].benefits} />

      <SectionFaq faqs={services[1].faq} />
      
    </>
  );
};

export default page;
