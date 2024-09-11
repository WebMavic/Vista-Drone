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
  title: "About Us",
};


function page() {
  return (
    <>
      <SectionHeader title="About Vista" image={aboutbg} />
      <AboutUs/>
      <Team/>
      <SectionContact/>
      <Certification/>
      
    </>
  );
}

export default page;

