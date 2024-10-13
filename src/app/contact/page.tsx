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
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.2325516577143!2d54.53543277524262!3d24.373212278250534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4724773662f7%3A0xc3e57ade689f9c02!2sMazyad%20Mall!5e0!3m2!1sen!2sin!4v1728283039381!5m2!1sen!2sin"
         
          className="w-full h-[500px] border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Form />

    </>
  );
}

export default page;
