import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import lines from "@/assets/images/constantin.jpg";
import Image from "next/image";
import bgvideo1 from "@/assets/images/bgvideo1.mp4";

interface SectionHeaderProps {
  image?: any;
  title: string;
}

function SectionHeader({ image, title }: SectionHeaderProps) {
  return (
    <header className="relative grid h-56 w-full  place-items-center overflow-hidden bg-[#0e0d0d] px-5 sm:h-96 sm:px-32 ">
      {/* <Image
        src={image || lines}
        alt="ds"
        className="absolute -z-0 left-0 object-contain  opacity-10"
      /> */}

      <video>
        <source src={bgvideo1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="z-10 flex flex-col items-center justify-center gap-3">
        <h1 className="text-2xl font-bold uppercase text-white sm:text-4xl">
          {title}
        </h1>
        <div className="inline-flex animate-pulse items-center rounded-full bg-white p-1">
          <ChevronDownIcon className="h-10  dark:text-heading" />
        </div>
      </div>
    </header>
  );
}

export default SectionHeader;
