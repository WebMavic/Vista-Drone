
import SectionHeader from "@/components/SectionHeader";
import React from "react";
import SectionInfo from "../(components)/SectionInfo";
import windimg from "@/assets/images/green energy/wind-2.jpg"
import Benifits from "../(components)/Benifits";
import SectionFaq from "../(components)/SectionFaq";
import { services } from "../../../utils/data";
import SectionAbout from "@/components/SectionAbout";
import { TeamItem } from "@/app/about/(componets)/Team";
import SectionLayout from "@/components/ui/SectionLayout";  
import SectionContact from "@/components/SectionContact";
import Deliveries from "../(components)/Deliveries";
import { solarimages } from "@/utils/images";
import { Project } from "@/types/steps";
import SectionContent from "./(components)/SectionContent";
import SectionContent2 from "./(components)/SectionContent2";

const service = services[5];
const projects: Project[] = [
  {
    title: "Cracks",
    avatar: solarimages[0],
    description: "Common defects caused by handling, packaging, transport, and harsh climates over time.",
  },
  {
    title: "Discolorations",
    avatar: solarimages[1],
    description: "Internal or external factors causing reduced sunlight entry and significant losses.",
  },
  {
    title: "Mounting Failures",
    avatar: solarimages[2],
    description: "Failures in mounting can cause structural issues and lead to decreased panel efficiency.",
  },
  {
    title: "Vegetation",
    avatar: solarimages[3],
    description: "Overgrown vegetation can obstruct panels, reducing overall efficiency.",
  },
  {
    title: "Delamination",
    avatar: solarimages[4],
    description: "Moisture in PV modules leading to delamination, often due to improper lamination methods.",
  },
  {
    title: "Hotspots",
    avatar: solarimages[5],
    description: "Overloaded regions causing warm spots, leading to increased resistance and short circuits.",
  },
  {
    title: "Reverse Polarity",
    avatar: solarimages[6],
    description: "Incorrect wiring can cause reverse polarity, leading to system inefficiencies.",
  },
  {
    title: "Short-Circuited Module",
    avatar: solarimages[7],
    description: "Short circuits in modules can cause significant safety and efficiency issues.",
  },
  {
    title: "Module Cracking",
    avatar: solarimages[8],
    description: "Cracks in modules can reduce efficiency and lead to further damage.",
  },
  {
    title: "Module Damage",
    avatar: solarimages[9],
    description: "Physical damage to modules often results in decreased energy output.",
  },
  {
    title: "Module Obstruction",
    avatar: solarimages[10],
    description: "Obstructions like dirt and debris can block sunlight, reducing energy production.",
  },
  {
    title: "Shading",
    avatar: solarimages[11],
    description: "Shade on panels can drastically reduce efficiency and energy output.",
  },
  {
    title: "Heated Module",
    avatar: solarimages[12],
    description: "Excessive heat can damage modules and reduce overall system efficiency.",
  },
  {
    title: "Activated Bypass Diode",
    avatar: solarimages[13],
    description: "Bypass diodes activate to prevent overheating, but frequent use indicates a system issue.",
  },
  {
    title: "Optimizer Failure",
    avatar: solarimages[14],
    description: "Failures in optimizers can lead to significant energy losses across the system.",
  },
  {
    title: "Offline String",
    avatar: solarimages[15],
    description: "An offline string of panels indicates a connectivity issue, reducing system output.",
  },
  {
    title: "Overheated Junction Box",
    avatar: solarimages[16],
    description: "Excessive heat in junction boxes can cause safety risks and damage to connections.",
  },
  {
    title: "Module Soiling",
    avatar: solarimages[17],
    description: "Accumulation of dirt and debris on modules can significantly reduce efficiency.",
  },
];

const page = () => {
  return (
    <>
      <SectionHeader title={service.title} image={service.image} />
      <SectionLayout>
        <div className="grid lg:grid-rows-2 gap-6">
          {service.service_description.map(
            ({ content, image, title }, index) => (
              <TeamItem
                key={index}
                avatar={image}  // Ensure this is the correct image type
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
      <Deliveries projects={projects} />
      <SectionContent2 />
      <SectionContact />
      <SectionFaq faqs={services[5].faq} />
    </>
  );
};

export default page;
