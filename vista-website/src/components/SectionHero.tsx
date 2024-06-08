import React from "react";
import GridPattern from "./magicui/animated-grid-pattern";
import FlipText from "@/components/magicui/flip-text";
import Button from "@/components/ui/Button";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
const words = string.split(" ").map((word) => ({
  text: word,
  className: "text-center text-2xl text-neutral-200",
}));

function SectionHero() {
  return (
    <section className="relative w-full px-5 sm:h-screen sm:px-32">
      {/* <GridPattern
        className="absolute inset-0 z-0 h-full w-full"
        numSquares={10}
        maxOpacity={0.1}
        duration={4}
        repeatDelay={0.5}
        fillColor="3F72AF/30"/> */}

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
          <source src="/v6.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-10  py-24 ">
        <FlipText
          className="text-4xl  font-bold tracking-[-0.1em] text-white md:text-7xl "
          word="Elevate Your Vision Cutting Edge UAV Solutions Await"
        />

        <TypewriterEffectSmooth words={words} />

        <div className="action flex items-center gap-3">
          <Button
            title="Services"
            href={"/services"}
            className="rounded-full bg-accent px-6 py-3 font-bold text-primary shadow-md  transition duration-300 ease-in-out  hover:-translate-y-1 hover:scale-[1.05]"
          />
          <Button
            title="About Us"
            href={"/about"}
            className="rounded-full border  border-white px-6 py-3 font-bold text-white shadow-md  transition duration-300 ease-in-out  hover:-translate-y-1 hover:scale-[1.05]"
          />
        </div>

        {/* <HeroImage className="h-full w-1/2" /> */}
      </div>
    </section>
  );
}

export default SectionHero;
