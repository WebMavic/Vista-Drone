import React from "react";
import Button from "@/components/ui/Button";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const string = "lorem ipsum dolor sit amet, consectetur adipisicing elit.";
const words = string.split(" ").map((word) => {
  return { text: word };
});

function SectionHero() {
  return (
    <section className="relative w-full overflow-hidden px-5 sm:h-screen sm:px-32 bg-primary2">
      <div className="hero-video absolute inset-0 left-0 top-0 z-[5] w-full overflow-hidden lg:h-screen">
        <div className="div absolute top-0 z-[1] h-full w-full  bg-black/30 bg-blend-overlay " />

        <video
          autoPlay
          width={"100%"}
          muted
          preload="auto"
          loop={true}
          className="h-full w-full object-cover "
        >
          <source src="/v10.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-2  py-24 ">
        <h1 className="text-center  text-2xl  font-bold text-white md:text-7xl">
          Elevate Your Vision Cutting Edge UAV Solutions Await{" "}
        </h1>
        <TypewriterEffectSmooth words={words} />

        <Button
          title="Explore Services"
          href={"/services"}
          className="rounded-full bg-accent py-1  text-white shadow-md transition  duration-300 ease-in-out hover:-translate-y-1  hover:scale-[1.05] sm:px-6 sm:py-3"
        />
      </div>
    </section>
  );
}

export default SectionHero;
