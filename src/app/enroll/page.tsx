import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Trainings from "@/app/enroll/(components)/Trainings"

const SectionHeader = dynamic(()=>import("@/components/SectionHeader"))



import hero from "@/assets/images/trainings/trainingsbg.png";


export const metadata: Metadata = {
  title: "Enroll Now | Drone Pilot Training in Abu Dhabi – Vista Drone",
  description: "Learn to fly drones safely and smartly at an ACTVET Licensed Training Centre of Vista Drone. ",
};

function page() {
  return (
    <>
      <SectionHeader title="Enroll Now" image={hero} />
    
<Trainings/>
  

    </>
  );
}

export default page;
