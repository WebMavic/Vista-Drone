import React from "react";
import SectionLayout from "./ui/SectionLayout";

function SectionClient() {
  return (
    <SectionLayout className="bg-white ">
      <div className="space-y-2 text-center">
        <h2 className="text-4xl font-bold text-heading">Our Clients</h2>
        <p className="text-subheading">
          We believe actions speak louder than words. Here’s a list of some of
          our major clients who trust us to deliver exceptional results.{" "}
        </p>
      </div>
      <div
        className="clients my-10 grid  grid-cols-2 place-items-center  gap-2 sm:grid-cols-8 sm:gap-5 "
       
      >
        <div className="h-32 w-32 bg-gray-300 "> </div>
        <div className="h-32 w-32 bg-gray-300"></div>
        <div className="h-32 w-32 bg-gray-300"></div>
        <div className="h-32 w-32 bg-gray-300"></div>
        <div className="h-32 w-32 bg-gray-300"></div>
        <div className="h-32 w-32 bg-gray-300"></div>
        <div className="h-32 w-32 bg-gray-300"></div>
        <div className="h-32 w-32 bg-gray-300"></div>
      </div>
    </SectionLayout>
  );
}

export default SectionClient;
