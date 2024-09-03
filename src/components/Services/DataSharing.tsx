import React from "react";
import SectionLayout from "../ui/SectionLayout";
import { Button } from "../ui/Button";
const DataSharing = () => {
  return (
    <SectionLayout className="h-full">
      <div className="flex h-full w-full flex-col-reverse items-center justify-between  lg:flex-row lg:items-start lg:gap-10">
        <div className="space-y-5 lg:w-1/2">
          <h1 className="text-center text-6xl font-medium uppercase text-primary dark:text-white lg:text-left">
            Smart Use of Data via Point Cloud
          </h1>

          <p className="text-left  text-subheading">
            Digital drone data, hosted in a secure online cloud environment,
            simplifies collaboration with stakeholders, making it easier to make
            decisions that improve operational planning, depletion accounting,
            monitoring environmental factors, or identifying and agreeing on
            required maintenance work.
          </p>

          <Button variant={"outline"} className="bg-primary2">
            Learn More
          </Button>
        </div>

        <div className="lg:flex-1">
          <img
            src={
              "https://www.infinitivehost.com/blog/wp-content/uploads/2023/12/How-to-understanding-Relationship-Between-Cloud-Computing-and-Data-Centers-1170x700.webp"
            }
            alt="image" id="adv-round-rectangle"
            // id="border-style-1"
            className="object-cover h-96"
          />
        </div>
      </div>
    </SectionLayout>
  );
};

export default DataSharing;
