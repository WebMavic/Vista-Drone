import React from "react";
import Chips from "@/components/ui/Chips";
import SectionLayout from "@/components/ui/SectionLayout";
import SectionClient from "@/components/SectionClient";

function ClientCaurosal() {


  5;
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
