import React from "react";
import SectionHeader from "@/components/SectionHeader";
import SectionLayout from "@/components/ui/SectionLayout";
import { services } from "../../../utils/data";
import SectionInfo from "../(components)/SectionInfo";
import Benifits from "../(components)/Benifits";
import SectionFaq from "../(components)/SectionFaq";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";



const content = services[0].service_description.map((item) => {
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
      <SectionHeader title="Mining and Petroleum" background={'/v10.mp4'}/>
      <SectionInfo
        title="Mining and Petroleum"
        content={services[0].description}
        image={services[0].image}
      />

      <SectionLayout className="bg-primary2 relative">
        <StickyScroll content={content} />
      </SectionLayout>

      <Benifits content={services[0].benefits} />

      <SectionFaq faqs={services[0].faq} />
  
    </>
  );
};

export default page;
