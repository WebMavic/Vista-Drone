import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import contactbg from "@/assets/images/contact-bg.jpg";
import JobInfoSheet from "./(components)/JobInfoSheet";

const SectionHeader = dynamic(() => import("@/components/SectionHeader"));

export const metadata: Metadata = {
  title: "Career | Vista Drone: Innovate and Improve",
  description: "Contact Vista Drone for all your drone needs.",
};

function page() {
  return (
    <>
      <SectionHeader title="Careers" image={contactbg} />
     <JobInfoSheet/>

    </>
  );
}

export default page;




