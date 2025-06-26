import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
const QuickTabs = dynamic(()=>import("./(components)/QuickTabs"))
const SectionHeader = dynamic(()=>import("@/components/SectionHeader"))
const Form = dynamic(()=>import("./(components)/Form"))
import contactbg from "@/assets/images/contact-bg.jpg";


export const metadata: Metadata = {
  title: "Contact Us | Vista Drone: Innovate and Improve",
  description: "Contact Vista Drone for all your drone needs.",
};

function page() {
  return (
    <>
      <SectionHeader title="Lets Talk" image={contactbg} />
      <QuickTabs />
      * <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.8945027709005!2d54.4936327!3d24.3501673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x246ca10cddf90fb%3A0xa86dae99003c233a!2sVista%20Drone%20UAV%20LLC!5e0!3m2!1sen!2sin!4v1750948536879!5m2!1sen!2sin"
         
          className="w-full h-[500px] border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> *

      <Form />

    </>
  );
}

export default page;
