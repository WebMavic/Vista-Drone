import React from "react";

import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import BreadCrumbs from "./ui/BreadCrumbs";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  image: string | StaticImport | any;
  className?:string;
}

function SectionHeader({ title, image ,className}: SectionHeaderProps) {
  
  return (
    <header className={cn("h-lg relative grid  w-full px-5 lg:h-[60vh] h-80 lg:px-32 ",className)}>
      <div className="hero-video absolute inset-0 left-0 top-0 z-[5] w-full overflow-hidden lg:h-[60vh]">
        <div className="div absolute top-0 z-[1] h-full w-full  bg-black/40 bg-blend-overlay " />
        <Image
          className="size-full object-cover lg:h-screen"
          src={image}
          alt="header-image"
          placeholder="blur"
        />
      </div>

      <div className="z-10 flex flex-col items-center justify-center gap-6">
        <h1 className="text-center text-2xl uppercase leading-relaxed tracking-wider text-white lg:text-[2.5rem]">
          {title}
        </h1>
        <div className="inline-flex  items-center">
          <BreadCrumbs />
        </div>
      </div>
    </header>
  );
}

export default SectionHeader;
