import SectionHeader from "@/components/SectionHeader";
import React from "react";
import SectionInfo from "../(components)/SectionInfo";
import Benifits from "../(components)/Benifits";
import SectionFaq from "../(components)/SectionFaq";
import { services } from "../../../utils/data";
import green from "@/assets/images/green energy/green-1.jpg";
import SectionAbout from "@/components/SectionAbout";
import { TeamItem } from "@/app/about/(componets)/Team";
import SectionLayout from "@/components/ui/SectionLayout";

const service = services[5];

const page = () => {
  return (
    <>
      <SectionHeader title={service.title} image={service.image} />
      {/* <SectionAbout
        chips="01"
        cta="/contact"
        heading={service.service_description[0].title}
        mirror
        className="lg:h-[50vh]"
        para={service.service_description[0].content}
      />
      <SectionAbout
        chips="02"
        cta="/contact"
        heading={service.service_description[1].title}
        image={service.image}
        className="lg:h-[50vh]"
        para={service.service_description[1].content}
      /> */}
      <SectionLayout>
        <div className="grid lg:grid-rows-2 gap-6">
          {service.service_description.map(
            ({ content, image, title }, index) => (
              <TeamItem
                key={index}
                avatar={service.image}
                bio={content}
                direction={index % 2 === 0 ? "left" : "right"}
                name={title}
                className="lg:items-center"
              />
            ),
          )}
        </div>
      </SectionLayout>

      <Benifits content={services[1].benefits} />

      <SectionFaq faqs={services[1].faq} />
    </>
  );
};

export default page;
