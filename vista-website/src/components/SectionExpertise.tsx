"use client";
import React, { useRef } from "react";
import Chips from "./ui/Chips";
import SectionLayout from "./ui/SectionLayout";
import { PresentationChartBarIcon,ArrowTrendingUpIcon,UserIcon} from "@heroicons/react/24/outline";

function SectionExpertise() {
  
  return (
    <SectionLayout className="bg-white">
      <div className="h-full w-full">
        <div className="space-y-3 text-center">
          <Chips title="Our expertise" />
          <h2 className="text-4xl font-bold text-heading ">Why Choose Us</h2>
          <p className="mx-auto  text-subheading sm:w-2/6 ">
            Cultivating Excellence: Our Areas of Mastery{" "}
          </p>
        </div>

        <div className="my-10  flex w-full flex-col items-center justify-between gap-5 sm:flex-row ">
          {expertises.map((expertise, index) => (
              <div className="flex flex-col lg:h-96 cursor-pointer lg:max-w-96 items-start hover:bg-accent/60 justify-center gap-5 p-6 group [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] rounded-md" key={index}>
                <expertise.avatar className="size-16 text-accent group-hover:text-neutral-100" />
                <h2 className="text-xl font-bold uppercase text-heading group-hover:text-neutral-100">
                  {expertise.title}
                </h2>
                <p className="text-left text-subheading group-hover:text-neutral-200 ">{expertise.description}</p>
              </div>
            
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}

export default SectionExpertise;

const expertises = [
  {
    title: "Successfully projects delevering",
    avatar: ArrowTrendingUpIcon,
    description:
      "Expertise and proficiency in Civil Infrastructure, Oil & Gas, Mining and Geology, and Green Energy",
  },
  {
    title: "Sound technical expertise in  UAV market",
    avatar: PresentationChartBarIcon,
    description:
      "The team is well-versed in the UAE government's long-term UAV policy and market landscape. Consequently",
  },
  {
    title: "Outstanding team of  professionals",
    avatar: UserIcon,
    description:
      "Includes experts with decades of experience in academia, complementing operational skills",
  },
];
