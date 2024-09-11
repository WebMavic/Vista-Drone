import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";

import SectionHeader from "@/components/SectionHeader";


const ServiceCards = dynamic(()=>import("./(components)/ServiceCards"))
const WorkFlow = dynamic(()=>import("./(components)/DroneApplication"))
const DroneTech = dynamic(()=>import("./(components)/DroneTech"))
const DataSharing = dynamic(()=>import("./(components)/DataSharing"))
const SectionContact = dynamic(()=>import("@/components/SectionContact"));


import bg from "@/assets/images/Drone-Solution.jpg";
export const metadata: Metadata = {
  title: "Industries | Vista Drone",
};

function page() {
  return (
    <>
      <SectionHeader title="Revolutionizing Industries with Advanced UAV Solutions" image={bg}/>
      <ServiceCards />
      <WorkFlow />
      <DataSharing/>
      <SectionContact/>
      <DroneTech />
    </>
  );
}

export default page;
