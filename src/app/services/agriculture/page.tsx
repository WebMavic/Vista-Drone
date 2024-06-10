import SectionHeader from "@/components/SectionHeader";
import React from "react";
import SectionLayout from "@/components/ui/SectionLayout";
import { services } from "../../../utils/data";
import SectionInfo from "../(components)/SectionInfo";
import Benifits from "../(components)/Benifits";
import SectionFaq from "../(components)/SectionFaq";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";


const content = services[2].service_description.map((item) => {
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
      <SectionHeader title="Agriculture" background={'/v5.mp4'} />
      <SectionInfo
        title="Agriculture"
        content={services[2]?.description}
        image={services[2]?.image}
      />

      <SectionLayout className="bg-primary2">
        <StickyScroll content={content} />
      </SectionLayout>

      <Benifits content={services[2].benefits} />

      <SectionFaq faqs={services[2].faq} />
      
    </>
  );
};

export default page;
