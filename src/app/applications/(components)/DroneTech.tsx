import React from "react";
import {
  VideoCameraIcon,
  CameraIcon,
  EyeIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";

const Chips = dynamic(()=>import("@/components/ui/Chips"))
const SectionLayout = dynamic(()=>import("@/components/ui/SectionLayout"))

import drone from '@/assets/images/img_drone_featured.png'
import Image from "next/image";

function DroneTech() {
  return (
    <SectionLayout className="bg-white">
      <div className="content space-y-4  ">
        <Chips title="Technology" />
        <h2 className="text-4xl font-bold text-heading ">
        Cutting-Edge Features of Vista Drones
        </h2>
      </div>
      <div className="container h-full w-full py-10">
        <div className="flex h-full w-full flex-wrap items-center justify-center sm:justify-between">
          <div className="left flex h-full gap-4 text-center sm:text-right lg:flex-col">
            <div className="f1 sm:w-52">
              <span className="inline-flex items-end">
                <CameraIcon height={50} />
              </span>
              <h4 className="text-xl font-semibold text-heading">RGB</h4>
              <p className="my-2 text-sm  text-subheading">
              Aerial mapping, high-resolution imaging, plant counting, and land surveying.
              </p>
            </div>
            <div className="f1 sm:w-52">
              <span className="inline-flex items-end">
                <VideoCameraIcon height={50} />
              </span>
              <h4 className="text-xl font-semibold text-heading">THERMAL</h4>
              <p className="my-2 text-sm   text-subheading">
              Heat signature detection, livestock tracking, surveillance, and water source identification.
              </p>
            </div>
          </div>

          <div className="image-middle max-w-96 ">
            <Image src={drone}
              alt="ico"
              className="animate-wobble object-cover"
            />

          
          </div>

          <div className="right flex  gap-4 text-center sm:text-left lg:flex-col">
            <div className="f1 sm:w-52">
              <span className="inline-flex items-end">
                <EyeIcon height={50} />
              </span>
              <h4 className="text-xl font-semibold text-heading">
                MULTISPECTRAL
              </h4>
              <p className="my-2 text-sm   text-subheading">
              Plant health monitoring, water quality assessment, vegetation index analysis, and full-spectrum sensing.
              </p>
            </div>
            <div className="f1 sm:w-52">
              <span className="inline-flex items-end">
                <CubeTransparentIcon height={50} />
              </span>
              <h4 className="text-xl font-semibold text-heading">
                LiDAR
              </h4>
              <p className="my-2 text-sm  text-subheading">
              Advanced 3D surface modelling in dense forest or vegetation, terrain variation detection, and flood mapping.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default DroneTech;
