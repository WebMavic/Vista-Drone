"use client";
import React, { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import HeroContent from "./Hero/HeroContent";
import { Hero } from "@/types/steps";
import bg from "@/assets/images/draft.jpg";
import drone from "@/assets/images/drone9.png"
import bg2 from "@/assets/images/ricardo-gomez-angel.jpg";


const heroOptions: Hero[] = [
  {
    title: "Elevate Your Vision Cutting Edge UAV Solutions Await",
    description:
      "Vista Drone captures and maps aerial data in a smart, cost-effective manner, empowering businesses to make informed decisions. We help you unlock the limitless possibilities of the open sky with our top-tier UAV services.",
    background: "/MATRICE.mp4",
    className:'lg:w-1/2'
  },
  {
    title: "Elevate Your Vision",
    description:
      "Vista Drone captures and maps aerial data in a smart, cost-effective manner, empowering businesses to make informed decisions. We help you unlock the limitless possibilities of the open sky with our top-tier UAV services.",
    image: bg,
  },
  {
    title: "Elevate Your Dick",
    description:
      "We help you unlock the limitless possibilities of the open sky with our top-tier UAV services.Vista Drone captures and maps aerial data in a smart",
    background: "/v6.mp4",
    className:'items-center w-full text-center',
    customParaStyle : 'w-1/2 mx-auto'
  },
  {
    title: "Elevate Your Dick with Srijan",
    description:
      "We help you unlock the limitless possibilities of the open sky with our top-tier UAV services.Vista Drone captures and maps aerial data in a smart",
    // background: "/v6.mp4",
    // avatar : drone,
    image : bg2,
    customParaStyle : 'w-1/2 ',
    imageStyle : 'mask-image-hero'
  },

];

function SectionHero() {
  const [hero, setHero] = useState(1);
  return (
    <section className="relative w-full overflow-hidden px-5 lg:h-screen h-[70vh] lg:px-28">
      {hero === 0 && <HeroContent data={heroOptions[0]} />}
      {hero === 1 && <HeroContent data={heroOptions[1]} />}
      {hero === 2 && <HeroContent data={heroOptions[2]} />}
      {hero === 3 && <HeroContent data={heroOptions[3]} />}

      <div className="navigations absolute bottom-5 right-5 z-10">
        <div className="flex w-full items-center gap-5 p-5">
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setHero((prev) => {
                if (prev === 0) {
                  return prev;
                }
                return prev - 1;
              })
            }
            className="rounded-full"
            disabled={hero === 0}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setHero((prev) => {
                if (prev !== heroOptions.length) {
                  return prev + 1;
                }
                return prev;
              })
            }
            className="rounded-full"
            disabled={hero === heroOptions.length - 1}
          >
            <ArrowRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SectionHero;

