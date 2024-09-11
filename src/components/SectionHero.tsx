"use client";
import React, { useState } from "react";
import { Button} from "@/components/ui/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import HeroContent from "./Hero/HeroContent";
import { heroOptions } from "@/constants";



function SectionHero() {
  const [hero, setHero] = useState(0);
  return (
    <section className="relative w-full overflow-hidden px-5 lg:h-screen h-[70vh] lg:px-28">
      {hero === 0 && <HeroContent data={heroOptions[0]} />}
      {hero === 1 && <HeroContent data={heroOptions[1]} />}
      {hero === 2 && <HeroContent data={heroOptions[2]} />}

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
            <ArrowLeft className="h-4 w-4 text-white" />
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
            <ArrowRight className="h-4 w-4 text-white" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SectionHero;

