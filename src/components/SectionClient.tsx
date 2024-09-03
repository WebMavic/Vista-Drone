"use client"
import React from "react";
import SectionLayout from "./ui/SectionLayout";
import Marquee from "./magicui/marquee";
import Image from "next/image";
import { clientsLogos } from "@/utils/images";



const firstRow = clientsLogos.slice(0, clientsLogos.length / 2);
const secondRow = clientsLogos.slice(clientsLogos.length / 2);


const ClientLogo = ({ src, alt }:{src:any,alt:string}) => {
  return (
    <div className="inline-flex items-center justify-center lg:w-32 size-24 ">
      <Image src={src} alt={alt}  className="object-contain size-full mix-blend-color-burn"/>
    </div>
  )
}


function SectionClient() {
  return (
    
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((client,index) => (
          <ClientLogo key={index} src={client} alt="logos"/>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((client,index) => (
          <ClientLogo key={index} src={client} alt="logos"/>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
    
  );
}

export default SectionClient;
