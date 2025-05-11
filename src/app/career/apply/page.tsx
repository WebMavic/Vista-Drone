import SectionLayout from "@/components/ui/SectionLayout";
import React from "react";
import Form from "../(components)/Form";
import { Toaster } from "@/components/ui/sonner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply Now | Vista Drone : Innovate and Improve",
};

const page = () => {
  return (
    <SectionLayout className="bg-[#202020]">
      <Form />
      <Toaster />
    </SectionLayout>
  );
};

export default page;
