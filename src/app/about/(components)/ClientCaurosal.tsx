import React from "react";
import Chips from "@/components/ui/Chips";
import dynamic from "next/dynamic";
import SectionClient from "@/components/SectionClient";

const SectionLayout = dynamic(()=>import("@/components/ui/SectionLayout"))

function ClientCaurosal() {
  return (
    <>
      <SectionLayout className="bg-white">
        <div className="space-y-4">
          <Chips title="Who we have worked with" />
          <h2 className="text-4xl font-bold capitalize text-heading ">
            Our Clients
          </h2>
        </div>
      </SectionLayout>
      <SectionClient />
    </>
  );
}

export default ClientCaurosal;
