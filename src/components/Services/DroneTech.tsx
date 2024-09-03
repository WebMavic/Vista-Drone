import React from "react";
import {
  VideoCameraIcon,
  CameraIcon,
  EyeIcon,
  MapPinIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import Chips from "../ui/Chips";
import SectionLayout from "../ui/SectionLayout";

function DroneTech() {
  return (
    <SectionLayout className="bg-white">
      <div className="content space-y-4  ">
        <Chips title="Technology" />
        <h2 className="text-4xl font-bold text-heading ">
        New Technology and Feature Our Drone
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
                Aerial mapping,Imaging,Plant counting, surveying
              </p>
            </div>
            <div className="f1 sm:w-52">
              <span className="inline-flex items-end">
                <VideoCameraIcon height={50} />
              </span>
              <h4 className="text-xl font-semibold text-heading">THERMAL</h4>
              <p className="my-2 text-sm   text-subheading">
                Heat signature detection,Livestock detection,Surveillance, Water
                source detection.
              </p>
            </div>
          </div>

          <div className="image-middle max-w-96 ">
            <img
              src="https://templatekit.tokomoo.com/dronekit/wp-content/uploads/sites/27/2021/08/img_drone_featured.png"
              alt="ico"
              className="animate-wobble object-cover"
            />

            {/* <div className="f1 sm:w-52 mx-auto">
              <span className="flex items-center flex-col justify-center">
                <EyeIcon height={50} />
                <h4 className="text-xl font-semibold text-heading">IR Sensor</h4>
              </span>
            </div> */}
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
                Plant health measurement Water quality assessment Vegetation
                index calculation Full spectral sensing
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
                Useful in 3D digital surface modelling in thick
                forest/vegetation Surface variation detection Flood mapping
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default DroneTech;
