import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import lines from "@/assets/images/constantin.jpg";
import Image from "next/image";


interface SectionHeaderProps {
  image?: any;
  title: string;
}

function SectionHeader({ image, title }: SectionHeaderProps) {
  return (
    <header className="relative grid h-56 w-full heropattern object-cover bg-opacity-60 bg-center place-items-center overflow-hidden px-5 sm:h-96 sm:px-32 ">
      {/* <Image
        src={image || lines}
        alt="ds"
        className="absolute -z-0 left-0 object-contain "
      /> */}
      {/* <div className="div z-[5] absolute h-full w-full top-0 filter bg-black/50 bg-blend-overlay "></div> */}
        {/* 
      <video autoPlay  muted  preload='auto' height={'auto'} width={'auto'} className="absolute -z-10 -top-40 bg-center object-cover ">
        <source src='/bgvideo1.mp4' type="video/mp4"/>
      </video> */}
      

      <div className="z-10 flex flex-col items-center justify-center gap-3">
        <h1 className="text-2xl font-bold uppercase dark:text-white sm:text-4xl">
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
