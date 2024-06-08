import SectionHeader from "@/components/SectionHeader";
import React from "react";
import SectionLayout from "@/components/ui/SectionLayout";
import { services } from "../../../utils/data";
import SectionInfo from "../(components)/SectionInfo";
import Benifits from "../(components)/Benifits";
import SectionFaq from "../(components)/SectionFaq";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import SectionContact from "@/components/SectionContact";

const content = services[4].service_description.map((item) => {
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
      <SectionHeader title="Transportation and Power Industry" background={'/v10.mp4'} />
      <SectionInfo
        title="Transportation and Power Industry"
        content={services[4]?.description}
        image={services[4]?.image}
      />
      <SectionLayout>
        <StickyScroll content={content} />
      </SectionLayout>
      <Benifits content={services[4].benefits} />
      <SectionFaq faqs={services[4].faq} />
      
    </>
  );
};

export default page;
