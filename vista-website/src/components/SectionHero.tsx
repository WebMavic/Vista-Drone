import React from "react";
// import GridPattern from "./magicui/animated-grid-pattern";
import FlipText from "@/components/magicui/flip-text";
import Button from "@/components/ui/Button";





function SectionHero() {
  return (
    <section className="relative w-full px-5 sm:h-screen sm:px-32 overflow-hidden">
  
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

        <p className="text-xl text-center text-neutral-100">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>

          <Button title="Explore Services" href={"/services"} className="rounded-full font-bold bg-accent text-black shadow-md hover:-translate-y-1 hover:scale-[1.05]  transition ease-in-out duration-300  px-6 py-3"/>         
      
      </div>
    </section>
  );
}

export default SectionHero;
