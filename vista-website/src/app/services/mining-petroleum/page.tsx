import React from "react";
import SectionHeader from "@/components/SectionHeader";
import SectionLayout from "@/components/ui/SectionLayout";
import Chips from "@/components/ui/Chips";
import  {services} from '../../../utils/data'

import ServiceItem from "@/components/Services/ServiceItem";
import SectionInfo from "../(components)/SectionInfo";
import Benifits from "../(components)/Benifits";
import SectionFaq from "../(components)/SectionFaq";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = services[0].service_description.map((item) => {
  return {
    title: item.title,
    description: item.content,
    content: <img src={item.image} alt={item.title} className="w-96 h-full object-cover rounded-md"/>,
  }
} )

const page = () => {
  return (
    <>
      <SectionHeader title="Mining and Petroleum" />
    <SectionInfo title="Mining and Petroleum" content={services[0].description} image={services[0].image}/>

      <SectionLayout>
        <StickyScroll content={content} />
      </SectionLayout>

      <Benifits content={services[0].benefits} />

      <SectionFaq faqs={services[0].faq}/>
    </>
  );
};

export default page;

