import SectionHeader from "@/components/SectionHeader";
import React from "react";
import SectionLayout from "@/components/ui/SectionLayout";
import { services } from "../../../utils/data";
import ServiceItem from "@/components/Services/ServiceItem";
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
      <SectionHeader title="Agriculture" />
      <SectionInfo
        title="Agriculture"
        content={services[2]?.description}
        image={services[2]?.image}
      />

      <SectionLayout>
        {/* <StickyScroll content={content} />*/}
        <div className="flex flex-col gap-5">
          {services[2].service_description.map((item, index) => (
            <div key={index} className="flex justify-between items-center gap-5">

              <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {item.title}
              </h2>
              <p className="text-slate-800 max-w-sm mt-10">{item.content}</p>
            </div>
              <img src={item.image} alt={item.title} className="h-full w-96 rounded-md object-cover" />
              </div>
          ))}
        </div>

      </SectionLayout>

      <Benifits content={services[2].benefits} />

      <SectionFaq faqs={services[2].faq} />
    </>
  );
};

export default page;
