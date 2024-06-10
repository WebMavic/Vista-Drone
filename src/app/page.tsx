import React from "react";
import SectionAbout from "@/components/SectionAbout";
import SectionClient from "@/components/SectionClient";
import SectionExpertise from "@/components/SectionExpertise";
import SectionFeaturedServices from "@/components/SectionFeaturedServices";
import SectionHero from "@/components/SectionHero";
import SectionProjects from "@/components/SectionProjects";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionClient />
      <SectionAbout />
      <SectionFeaturedServices />
      <SectionExpertise />
      <SectionProjects />
    </>
  );
}
