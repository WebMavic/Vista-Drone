import React from "react";
import  HeroCarousal  from "./Hero/HeroCarousal";
import { HeroImages } from "@/utils/images";
import { Button, buttonVariants } from "@/components/ui/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import Link from "next/link";
function SectionHero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden px-5 lg:h-screen lg:px-28">
      <div className="absolute inset-0 left-0 top-0 z-[5] h-full w-full">
        <HeroCarousal items={HeroImages} />
      </div>

      <div
        className={
          "relative z-10 h-full py-24"
        }
      >
        <Reveal>
          <div className="text-center flex h-full lg:text-left lg:w-3/4 flex-col lg:items-start items-center justify-center">
            <h1 className={"relative z-10 text-2xl font-medium text-white md:text-4xl lg:text-5xl"}>
              Elevate Your Vision Cutting Edge UAV Solutions Await
            </h1>

            <p className={"mt-10 lg:text-xl  text-body lg:w-2/3"}>
            Vista Drone captures and maps aerial data in a smart, cost-effective
            manner, empowering businesses to make informed decisions. We help
            you unlock the limitless possibilities of the open sky with our
            top-tier UAV services.
          </p>
          <Link
            href="/industries"
            className={buttonVariants({ className: "mt-6", size: "lg" })}
          >
            Explore
          </Link>
          </div>
        </Reveal>
      </div>

      <div className="navigations absolute bottom-5 lg:left-24 z-10">
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
