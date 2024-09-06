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
import SectionContact from "@/components/SectionContact";
import Deliveries from "../(components)/Deliveries";
import { solarimages } from "@/utils/images";
import { Project } from "@/types/steps";

const service = services[5];
const projects: Project[] = [
  {
    title: "Cracks",
    avatar: solarimages[0],
    description:
      "",
  },
  {
    title: "Discolorations",
    avatar: solarimages[1],
    description:
      "",
  },
  {
    title: "Mounting Failures",
    avatar: solarimages[2],
    description:
      "",
  },
  {
    title: "Vegetation",
    avatar: solarimages[3],
    description:
      "",
  },
  {
    title: "Delamination",
    avatar: solarimages[4],
    description:
      "",
  },
  {
    title: "Hotspots",
    avatar: solarimages[5],
    description:
      "",
  },
  {
    title: "Reverse Polarity",
    avatar: solarimages[6],
    description:
      "",
  },
  {
    title: "Short-Circuted Module",
    avatar: solarimages[7],
    description:
      "",
  },
  {
    title: "Module Cracking",
    avatar: solarimages[8],
    description:
      "",
  },
  {
    title: "Module Damage",
    avatar: solarimages[9],
    description:
      "",
  },
  {
    title: "Module Obstruction",
    avatar: solarimages[10],
    description:
      "",
  },
  {
    title: "Shading",
    avatar: solarimages[11],
    description:
      "",
  },
  
  {
    title: "Heated Module",
    avatar: solarimages[12],
    description:
      "",
  },{
    title: "Activated Bypass Diode",
    avatar: solarimages[13],
    description:
      "",
  },{
    title: "Optimizer Failure",
    avatar: solarimages[14],
    description:
      "",
  },{
    title: "Offline String",
    avatar: solarimages[15],
    description:
      "",
  },
  {
    title: "Overheadted Junction Box",
    avatar: solarimages[16],
    description:
      "",
  },
  {
    title: "Module Soiling",
    avatar: solarimages[17],
    description:
      "",
  },
];

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

      <Benifits content={services[5].benefits} />
      <Deliveries projects={projects} />
          <SectionContact/>
      <SectionFaq faqs={services[5].faq} />
    </>
  );
};

export default page;
