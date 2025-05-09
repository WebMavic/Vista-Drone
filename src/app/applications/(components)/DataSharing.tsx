import React from "react";
import SectionLayout from "@/components/ui/SectionLayout";
import { Button } from "@/components/ui/Button";
import dataSharingImg from "@/assets/images/Cloud-Computing.webp"
import Image from "next/image";



const DataSharing = () => {
  return (
    <SectionLayout className="h-full">
      <div className="flex h-full w-full flex-col items-center justify-between  lg:flex-row lg:items-start lg:gap-10 gap-5">
        <div className="space-y-5 lg:w-1/2">
          <h1 className="text-center lg:text-6xl text-3xl font-medium uppercase text-primary dark:text-white lg:text-left">
            Smart Use of Data via Point Cloud
          </h1>

          <p className="text-left  text-subheading">
          Drone-captured point cloud data offers high-precision 3D mapping, making it invaluable for sectors like mining, construction, and infrastructure management. By hosting this data in a secure online cloud, teams can remotely collaborate, track project progress, calculate volumes for depletion accounting, assess structural changes, and identify maintenance needs—all with greater speed and accuracy.
          </p>

          <Button variant={"outline"} className="bg-primary2">
            Learn More
          </Button>
        </div>

        <div className="lg:flex-1">
          <Image 
            src={dataSharingImg}
            placeholder="blur"
            blurDataURL={dataSharingImg.blurDataURL} 
            alt="image" id="adv-round-rectangle"
            // id="border-style-1"
            className="object-cover h-96 w-full"
          />
        </div>
      </div>
    </SectionLayout>
  );
};

export default DataSharing;
