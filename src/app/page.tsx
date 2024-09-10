import React from "react";
import SectionAbout from "@/components/SectionAbout";
import SectionClient from "@/components/SectionClient";
import SectionExpertise from "@/components/SectionExpertise";
import SectionFeaturedServices from "@/components/SectionFeaturedServices";
import SectionHero from "@/components/SectionHero";
import Certification from "./about/(componets)/Certification";
import SectionContact from "@/components/SectionContact";
import DroneApplication from "@/components/Services/DroneApplication";


export default function Home() {
  return (
    <>
      <SectionHero />
      {/* <SectionClient /> */}
      <SectionAbout />
      <SectionFeaturedServices />
      
      <SectionExpertise />
      <SectionContact/>
      <DroneApplication/>
      <Certification/>
      
      {/* <SectionProjects /> */}
    </>
  );
}
