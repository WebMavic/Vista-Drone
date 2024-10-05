import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import SectionHeader from "@/components/SectionHeader";
import aboutbg from "@/assets/images/about1.jpeg";


const AboutUs = dynamic(()=>import('./(componets)/AboutUs'));
const Team = dynamic(()=>import('./(componets)/Team'))
const Certification = dynamic(()=>import('./(componets)/Certification'))
const SectionContact = dynamic(()=>import('@/components/SectionContact'))

export const metadata: Metadata = {
  title: "About Us | Vista Drone : Innovate and Improve",
};


function page() {
  return (
    <>
      <SectionHeader title="Vista Drone" image={aboutbg} />
      <AboutUs/>
      <section className="lg:p-16 p-5">
        <div className="aspect-video lg:h-[80vh] h-52 shadow-md border-[5px] border-primary   mx-auto rounded-md overflow-hidden">
        <video
            // poster={background.src}
            autoPlay
            width={"100%"}
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
        </section>
      <Team/>
      <SectionContact/>
      <Certification/>
      
    </>
  );
}

export default page;

