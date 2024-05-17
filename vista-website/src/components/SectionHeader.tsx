import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import lines from "@/assets/images/constantin.jpg";
import Image from "next/image";


interface SectionHeaderProps {
    image?: any;
    title: string;
}

function SectionHeader({ image, title}: SectionHeaderProps) {
  return (
    <header className="sm:h-96 h-56 px-5 sm:px-32  w-full grid place-items-center relative bg-[#0e0d0d] overflow-hidden ">
      <Image
        src={image || lines}
        alt="ds"
        className="absolute -z-0 left-0 object-contain  opacity-10"
      />
      <div className="flex flex-col items-center justify-center gap-3 z-10">
        <h1 className="uppercase font-bold sm:text-4xl text-2xl text-white">
          {title}
        </h1>
        <div className="bg-white rounded-full p-1 inline-flex items-center animate-pulse">
          <ChevronDownIcon className="h-10  dark:text-heading" />
        </div>
      </div>
    </header>
  );
}

export default SectionHeader;
