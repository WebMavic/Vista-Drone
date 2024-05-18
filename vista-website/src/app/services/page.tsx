import React from "react";
import SectionProjects from "@/components/SectionProjects";
import SectionHeader from "@/components/SectionHeader";
import ServiceCards from "@/components/Services/ServiceCards";
import DroneApplication from "@/components/Services/DroneApplication";
import DroneTech from "@/components/Services/DroneTech";

function page() {
  return (
    <>
      <SectionHeader title="Discover our services" />
      <ServiceCards />
      <DroneApplication />
      <DroneTech />
      <SectionProjects />
    </>
  );
}

export default page;
