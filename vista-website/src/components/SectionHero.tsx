import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import HeroImage from "./HeroImage";


function SectionHero() {
  return (
    <section className="w-full  px-5 sm:h-screen sm:px-32 heropattern bg-opacity-[10%] bg-center bg-contain bg-no-repeat">
      <div className="flex h-full w-full flex-wrap items-center gap-4 py-24 sm:flex-nowrap sm:justify-between  ">
        <div className="space-y-5">
          <h1 className="text-3xl font-bold leading-tight text-heading  sm:max:w-3/4 sm:text-6xl">
            Empowering the future with drone technology
          </h1>
          <p className="text text-lg text-subheading sm:w-1/2">
            lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur
            imperdiet.
          </p>

          <Link
            href="/services"
            className="inline-flex flex-row-reverse overflow-hidden rounded-full bg-accent  px-4 py-2 text-white"
          >
            <ChevronRightIcon className="h-6" />
            <span className="uppercase tracking-wider">Discover</span>
          </Link>
        </div>
       
        <HeroImage className="w-1/2 h-full"/>

      </div>
    </section>
  );
}

export default SectionHero;
