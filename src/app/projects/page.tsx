import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import contactbg from "@/assets/images/projectbg.png";
const SectionHeader = dynamic(() => import("@/components/SectionHeader"));
const JobInfoSheet = dynamic(() => import("./(components)/ProjectInfoSheet"));

export const metadata: Metadata = {
  title: "Projects | Vista Drone: Innovate and Improve",
  description: "Transforming Ideas into Aerial Reality",
};

function page() {
  return (
    <>
      <SectionHeader title="Projects" image={contactbg} />
      <JobInfoSheet />
    </>
  );
}

export default page;
