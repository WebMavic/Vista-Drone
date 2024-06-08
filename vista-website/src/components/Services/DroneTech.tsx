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
          Innovative Tools & Devices which we use
        </h2>
      </div>
      <div className="container h-full w-full py-10">
        <div className="flex h-full w-full flex-wrap items-center justify-center sm:justify-between">
          <div className="left flex h-full lg:flex-col gap-4 text-center sm:text-right">
            <div className="f1 sm:w-52">
              <span className="inline-flex items-end">
                <CameraIcon height={50} />
              </span>
              <h4 className="text-xl font-semibold text-heading">
                Thermal Camera
              </h4>
              {/* <p className="my-2 text-sm font-light text-subheading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                ipsum!
              </p> */}
            </div>
            <div className="f1 sm:w-52">
              <span className="inline-flex items-end">
                <VideoCameraIcon height={50} />
              </span>
              <h4 className="text-xl font-semibold text-heading">
                Photography
              </h4>
              {/* <p className="my-2 text-sm font-light  text-subheading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                ipsum!
              </p> */}
            </div>
          </div>

          <div className="image-middle max-w-96 ">
      
              <img
                src="https://templatekit.tokomoo.com/dronekit/wp-content/uploads/sites/27/2021/08/img_drone_featured.png"
                alt="ico"
                className="animate-wobble object-cover"
              />

            <div className="f1 sm:w-52 mx-auto">
              <span className="flex items-center flex-col justify-center">
                <EyeIcon height={50} />
                <h4 className="text-xl font-semibold text-heading">IR Sensor</h4>
              </span>
            </div>
          </div>

          <div className="right flex  lg:flex-col gap-4 text-center sm:text-left">
            <div className="f1 sm:w-52">
              <span className="inline-flex items-end">
                <EyeIcon height={50} />
              </span>
              <h4 className="text-xl font-semibold text-heading">UV Camera</h4>
              {/* <p className="my-2 text-sm font-light  text-subheading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                ipsum!
              </p> */}
            </div>
            <div className="f1 sm:w-52">
              <span className="inline-flex items-end">
                <CubeTransparentIcon height={50} />
              </span>
              <h4 className="text-xl font-semibold text-heading">
                LiDAR Sensor
              </h4>
              {/* <p className="my-2 text-sm font-light text-subheading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                ipsum!
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default DroneTech;
