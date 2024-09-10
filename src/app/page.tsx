import React from "react";

import SectionAbout from "@/components/SectionAbout";
import SectionExpertise from "@/components/SectionExpertise";
import SectionFeaturedServices from "@/components/SectionFeaturedServices";
import SectionHero from "@/components/SectionHero";
import Certification from "./about/(componets)/Certification";
import SectionContact from "@/components/SectionContact";
import DroneApplication from "@/app/industries/(components)/DroneApplication";

export const metadata = {
  title: "Vista Drone",
};

export default function Home() {
  return (
    <React.Fragment>
      <SectionHero />
      <SectionAbout />
      <SectionFeaturedServices />
      <SectionExpertise />
      <SectionContact/>
      <DroneApplication/>
      <Certification/>
    </React.Fragment>
  );
}
