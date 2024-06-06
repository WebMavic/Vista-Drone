import React from "react";
import SectionLayout from "@/components/ui/SectionLayout";
import Chips from "@/components/ui/Chips";

interface SectionInfoProps {
  title: string;
  content: string;
  image: string;
}

function SectionInfo({ title, content, image }: SectionInfoProps) {
  return (
    <SectionLayout className="space-y-10 bg-white">
      <div className="space-y-2 text-center  ">
        <Chips title="Vista Drone Services" />
        <h2 className="text-2xl font-bold capitalize text-heading sm:text-4xl ">
          {title}
        </h2>
      </div>
      <img
          src={image}
          alt={title}
          className="mx-auto  sm:w-3/4 rounded-xl object-cover"
        />

      <p className="mx-auto sm:w-3/4  text-[16px] tracking-wider text-heading">
        {content}
      </p>
    </SectionLayout>
  );
}

export default SectionInfo;
