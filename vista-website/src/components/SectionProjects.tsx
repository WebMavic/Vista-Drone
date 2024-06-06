"use client"
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import dummy from "@/assets/images/dummy.jpg";
import Chips from "./ui/Chips";
import SectionLayout from "./ui/SectionLayout";
import { projectImages } from "@/utils/images";
import "swiper/css";
import "swiper/css/pagination";
function SectionProjects() {
  return (
    <SectionLayout>
      <div className="space-y-4">
        <Chips title="Vista Projects" />
        <h2 className="sm:w-2/3 text-4xl font-bold text-heading">
          Project Delivered in Market
        </h2>
      </div>
      <div className="my-5 w-full hidden lg:block">
        <div className="grid h-[500px] grid-cols-12 gap-2 ">
          <div className="relative col-span-4 overflow-hidden rounded-md  ">
            <div className="absolute grid  h-full w-full place-items-center bg-black/50 opacity-0 transition-all duration-150 ease-in-out hover:opacity-100">
              <div className="text-center">
                <h3 className="text-lg text-white">Overseas Surveying</h3>
                <span className="text-sm text-white">Abu Dhabi,UAE</span>
              </div>
            </div>
            <Image
              src={dummy}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-4 overflow-hidden rounded-md">
            <Image
              src={dummy}
              alt="image"
              className="w-fulll h-full object-cover"
            />
          </div>
          <div className="col-span-4 row-span-2 overflow-hidden rounded-md">
            <Image
              src={dummy}
              alt="image"
              className="h-full w-full object-cover "
            />
          </div>
          <div className="col-span-8 overflow-hidden rounded-md">
            <Image
              src={dummy}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="block lg:hidden my-5">

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
        
        pagination={{
          dynamicBullets: true,
          type: "bullets",
        }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {projectImages.map((image, index) => (
          <SwiperSlide key={index}>
            
              <Image
                src={image}
                alt={index + "drone"}
                className="object-cover h-96 rounded-lg overflow-hidden "
              />
           
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </SectionLayout>
  );
}

export default SectionProjects;




