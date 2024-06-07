import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import GridPattern from "./magicui/animated-grid-pattern";
import FlipText from "@/components/magicui/flip-text";
import Button from "@/components/ui/Button";

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
          

        <div className="hero-video absolute inset-0 z-[5] lg:h-screen w-full overflow-hidden top-0 left-0">
        <div className="div z-[1] absolute h-full w-full top-0  bg-black/30 bg-blend-overlay "/>

          <video autoPlay width={'100%'}  muted   preload='auto' loop={true} className="w-full h-full object-cover ">
              <source src='/v6.mp4' type="video/mp4"/>
            </video>

        </div>
      <div className="relative z-10 flex flex-col gap-10 h-full w-full items-center justify-center  py-24 ">
       

          <FlipText
            className="text-4xl  font-bold tracking-[-0.1em] text-white md:text-7xl "
            word="Elevate Your Vision Cutting Edge UAV Solutions Await"
          />
          <p className="text text-center text-lg text-neutral-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ea.
          </p>

          <div className="action flex gap-3 items-center">

          <Button title="Services" href={"/services"} className="rounded-full  bg-accent text-white shadow-md hover:-translate-y-1 hover:scale-[1.05]  transition ease-in-out duration-300  px-6 py-3"/>
          <Button title="About Us" href={"/about"} className="rounded-full font-bold  border-accent border text-accent shadow-md hover:-translate-y-1 hover:scale-[1.05]  transition ease-in-out duration-300  px-6 py-3"/>
        
      
          </div>

           


        {/* <HeroImage className="h-full w-1/2" /> */}
      
      </div>
    </section>
  );
}

export default SectionHero;
