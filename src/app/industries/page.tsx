import React from "react";
import SectionProjects from "@/components/SectionProjects";
import SectionHeader from "@/components/SectionHeader";
import ServiceCards from "@/components/Services/ServiceCards";
import DroneApplication from "@/components/Services/DroneApplication";
import DroneTech from "@/components/Services/DroneTech";
import { Metadata } from "next";
import bg from "@/assets/images/Drone-Solution.jpg";
import DataSharing from "@/components/Services/DataSharing";

export const metadata: Metadata = {
  title: "Industries",
};
function page() {
  return (
    <>
      <SectionHeader title="Revolutionizing Industries with Advanced UAV Solutions" image={bg}/>
      <ServiceCards />
      <DroneApplication />
      <DroneTech />
      <DataSharing/>
      <SectionProjects />
  
      
    </>
  );
}

export default page;
