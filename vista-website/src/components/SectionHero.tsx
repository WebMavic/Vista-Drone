import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import HeroImage from "./HeroImage";

function SectionHero() {
  return (
    <section className="heropattern  w-full bg-opacity-[10%] bg-cover bg-no-repeat px-5 sm:h-screen sm:bg-contain sm:bg-center sm:px-32">
      <div className="flex h-full w-full flex-wrap items-center gap-4 py-24 sm:flex-nowrap sm:justify-between  ">
        <div className="space-y-5">
          <h1 className="sm:max:w-3/4 text-3xl font-bold leading-tight  text-heading sm:text-6xl">
            Empowering the future with drone technology
          </h1>
          <p className="text text-lg text-subheading sm:w-1/2">
            Staying competitive in today's market, we must continuously innovate
            and improve our products and services.
          </p>

          <Link
            href="/services"
            className="inline-flex flex-row-reverse overflow-hidden rounded-full bg-accent  px-4 py-2 text-white"
          >
            <ChevronRightIcon className="h-6" />
            <span className="uppercase tracking-wider">Discover</span>
          </Link>
        </div>

        <HeroImage className="w-full sm:w-1/2 " />
      </div>
    </section>
  );
}

export default SectionHero;
