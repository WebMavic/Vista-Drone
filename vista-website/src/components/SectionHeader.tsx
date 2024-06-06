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
    <header className="relative grid h-56 overflow-hidden px-5 sm:h-screen w-full sm:px-32 ">
      {/* <Image
        src={image || lines}
        alt="ds"
        className="absolute -z-0 left-0 object-contain "
      /> */}
      <div className="div z-[1] absolute h-full w-full top-0 filter bg-black/50 bg-blend-overlay "></div>
       
      <video autoPlay  muted   preload='auto' loop={true} className="absolute -z-10 w-full h-full  bg-center sm:object-cover ">
        <source src='/bgvideo1.mp4' type="video/mp4"/>
      </video> 
      

      <div className="z-10 flex flex-col items-center justify-center gap-3">
        <h1 className="text-2xl font-bold uppercase text-white sm:text-5xl">
          {title}
        </h1>
        <div className="inline-flex animate-pulse items-center rounded-full bg-white p-1">
          <ChevronDownIcon className="size-8  dark:text-heading" />
        </div>
      </div>
    </header>
  );
}

export default SectionHeader;
