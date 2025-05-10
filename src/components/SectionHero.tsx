import React from "react";
import HeroCarousal from "./Hero/HeroCarousal";
import { HeroImages } from "@/utils/images";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import Link from "next/link";
function SectionHero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden px-5 lg:h-screen lg:px-32">
      <div className="absolute inset-0 left-0 top-0 z-[5] h-full w-full">
        <HeroCarousal items={HeroImages} />
      </div>

      <div className={"relative z-10 h-full lg:py-24 py-32 "}>
        <Reveal>
          <div className="flex h-full flex-col items-center justify-center text-center lg:w-3/4 lg:items-start lg:text-left">
            <h1
              className={
                "relative z-10 text-[30px] font-medium text-white lg:text-[38px]"
              }
            >
              Elevate Your Vision<br/>Cutting-Edge UAV Solutions Are Here!
            </h1>

            <p className={"mt-10 lg:text-[20px] text-lg  font-light text-body lg:w-2/3"}>
              Vista Drone captures and maps aerial data in a smart,
              cost-effective manner, empowering businesses to make informed
              decisions. We help you unlock the limitless possibilities of the
              open sky with our top-tier UAV services.
            </p>

            <Link
              href="/applications"
              className={buttonVariants({ className: "mt-6", size: "lg" })}
            >
              Explore
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="navigations absolute bottom-5 z-10 lg:left-24">
        <div className="flex w-full items-center gap-5 lg:p-5">
          <Button variant="outline" size="icon" className="prev rounded-full">
            <ArrowLeft className="h-4 w-4 text-white" />
          </Button>
          <Button variant="outline" size="icon" className="next rounded-full">
            <ArrowRight className="h-4 w-4 text-white" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SectionHero;
