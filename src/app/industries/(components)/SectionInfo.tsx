import React from "react";
import Image from "next/image";
import SectionLayout from "@/components/ui/SectionLayout";
import Chips from "@/components/ui/Chips";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface SectionInfoProps {
  title: string;
  content: string;
  image: StaticImport;
}

function SectionInfo({ title, content, image }: SectionInfoProps) {
  return (
    <SectionLayout className="space-y-10 bg-white">
      <div className="space-y-2 text-center  ">
        <Chips title="Vista Drone Services" />
        <h2 className="text-2xl font-bold capitalize text-heading lg:text-4xl ">
          {title}
        </h2>
      </div>
      <div className="lg:w-3/4 lg:h-[500px] mx-auto relative">
      <Image
        src={image}
        alt={title}
        placeholder="blur"
        sizes="100vw"
        className="rounded-xl object-cover size-full"
      />
      </div>

      <p className="mx-auto text-[16px] tracking-wider text-heading lg:w-3/4">
        {content}
      </p>
    </SectionLayout>
  );
}

export default SectionInfo;
