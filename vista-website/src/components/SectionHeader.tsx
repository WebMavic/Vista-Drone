import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import lines from "@/assets/images/constantin.jpg";
import Image from "next/image";

interface SectionHeaderProps {
  background?: any;
  title: string;
  image?: string;
}

function SectionHeader({ background, title, image }: SectionHeaderProps) {
  return (
    <header className="relative grid h-96  w-full px-5 lg:h-screen lg:px-32 ">
      {/* <div className="div absolute top-0 z-[1] h-full w-full bg-black/50 bg-blend-overlay filter " /> */}

      {background ? (
       <div className="hero-video absolute inset-0 z-[5] lg:h-screen w-full overflow-hidden top-0 left-0">
       <div className="div z-[1] absolute h-full w-full top-0  bg-black/30 bg-blend-overlay "/>

         <video autoPlay width={'100%'}  muted   preload='auto' loop={true} className="w-full h-full object-cover ">
             <source src={background} type="video/mp4"/>
           </video>

       </div>
      ) : (
        <div className="hero-video absolute inset-0 z-[5] lg:h-screen w-full overflow-hidden top-0 left-0">
           <div className="div z-[1] absolute h-full w-full top-0  bg-black/40 bg-blend-overlay "/>
          <img
            className="h-full w-full object-cover lg:h-screen"
            src={image ? image : lines.src}
            alt="ds"
          />
        </div>
      )}

      <div className="z-10 flex flex-col items-center justify-center gap-6">
        <h1 className="text-2xl  uppercase text-white sm:text-[2.5rem]">
          {title}
        </h1>
        <p className="text-center text-sm text-white sm:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          imperdiet
        </p>
        <div className="inline-flex animate-pulse items-center rounded-full bg-white p-1">
          <ChevronDownIcon className="size-5  dark:text-heading" />
        </div>
      </div>
    </header>
  );
}

export default SectionHeader;
