import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import lines from "@/assets/images/constantin.jpg";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface SectionHeaderProps {
  title: string;
  image?: string | StaticImport | any;
}

function SectionHeader({ title, image }: SectionHeaderProps) {
  return (
    <header className="h-lg relative grid  w-full px-5 lg:h-[60vh] h-64 lg:px-32 ">
      <div className="hero-video absolute inset-0 left-0 top-0 z-[5] w-full overflow-hidden lg:h-[60vh]">
        <div className="div absolute top-0 z-[1] h-full w-full  bg-black/40 bg-blend-overlay " />
        <Image
          className="size-full object-cover lg:h-screen"
          src={image ? image : lines.src}
          alt="header-image"
          placeholder="blur"
        />
      </div>

      <div className="z-10 flex flex-col items-center justify-center gap-6">
        <h1 className="text-center text-2xl uppercase leading-relaxed tracking-wider text-white lg:text-[2.5rem]">
          {title}
        </h1>
        <div className="inline-flex animate-pulse items-center rounded-full bg-white p-1">
          <ChevronDownIcon className="size-5  dark:text-heading" />
        </div>
      </div>
    </header>
  );
}

export default SectionHeader;
