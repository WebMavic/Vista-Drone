import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import HeroImage from "./HeroImage";
import GridPattern from "./magicui/animated-grid-pattern";
import FlipText from "@/components/magicui/flip-text";

function SectionHero() {
  return (
    <section className="relative w-full px-5 sm:h-screen sm:px-32">
      {/* Add GridPattern as a background */}
      <GridPattern
        className="absolute inset-0 z-0 h-full w-full"
        numSquares={10}
        maxOpacity={0.1}
        duration={4}
        repeatDelay={0.5}
        fillColor="3F72AF/30"
      />
      <div className="relative z-10 flex h-full w-full flex-wrap items-center gap-4 py-24 sm:flex-nowrap sm:justify-between">
        <div className="space-y-5">
          {/* <h1 className="sm:max:w-3/4 text-3xl font-bold leading-tight text-heading sm:text-6xl">
            Empowering the future with drone technology
          </h1> */}
          <FlipText
            className="text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl "
            word="Empowering the future with drone technology"
          />
          <p className="text text-lg text-subheading sm:w-1/2">
            lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur
            imperdiet.
          </p>

          <Link
            href="/services"
            className="inline-flex flex-row-reverse overflow-hidden rounded-full bg-accent px-4 py-2 text-white"
          >
            <ChevronRightIcon className="h-6" />
            <span className="uppercase tracking-wider">Discover</span>
          </Link>
        </div>

        <HeroImage className="h-full w-1/2" />
      </div>
    </section>
  );
}

export default SectionHero;
