import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import aboutbg from "@/assets/images/about1.jpeg";


const SectionHeader  = dynamic(()=>import("@/components/SectionHeader"))
const AboutUs = dynamic(()=>import('./(components)/AboutUs'));
const Team = dynamic(()=>import('./(components)/Team'))
const Certification = dynamic(()=>import('./(components)/Certification'))
const SectionContact = dynamic(()=>import('@/components/SectionContact'))
const Gallery = dynamic(()=>import('./(components)/Gallery'))


export const metadata: Metadata = {
  title: "About Us | Vista Drone : Innovate and Improve",
};


function page() {
  return (
    <>
      <SectionHeader title="Vista Drone" image={aboutbg} />
      <AboutUs/>
      <section className="lg:p-16 p-5">
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="aspect-video shadow-md border-[5px] border-primary mx-auto rounded-md overflow-hidden">
            <video
              autoPlay
              muted
              controls
              playsInline
              preload="none"
              loop
              className="h-full w-full object-center object-cover"
            >
              <source src={'/hero-video.mp4'} type="video/mp4" />
              Your browser does not support the video.
            </video>
          </div>
          <div className="aspect-video shadow-md border-[5px] border-primary mx-auto rounded-md overflow-hidden">
            <video
              autoPlay
              muted
              controls
              playsInline
              preload="none"
              loop
              className="h-full w-full object-center object-cover"
            >
              <source src={'/hero-video2.mp4'} type="video/mp4" />
              Your browser does not support the video.
            </video>
          </div>
        </div>
        </section>
      <Gallery/>  
      <Team/>
      <SectionContact/>
      <Certification/>
      
    </>
  );
}

export default page;

