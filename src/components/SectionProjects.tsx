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
import { LayoutGrid } from "./ui/LayoutGrid";
import proj1 from "@/assets/images/projects/project-1.jpg";
import proj2 from "@/assets/images/projects/project-2.jpg";
import proj3 from "@/assets/images/projects/project-3.jpg";
import proj4 from "@/assets/images/projects/project-4.jpg";



const Skeleton = ({title,desc}:{title : string,desc : string}) => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">{title}</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      {desc}
      </p>
    </div>
  );
};




const cards = [
  {
    id: 1,
    content: <Skeleton desc="Rehabilitation and Resettlement of Slums in Dharavi, Mumbai" title="Project Delivered"/>,
    className: "md:col-span-2",
    thumbnail:proj1.src
  },
  {
    id: 2,
    content: <Skeleton desc="Monitoring the progress of the Civil a Projects of Navi Mumbai" title="Project Delivered"/>,
    className: "col-span-1",
    thumbnail:proj2.src
    
  },
  {
    id: 3,
    content: <Skeleton desc="Inspection of rail track in Jharkhand and W.B." title="Project Delivered"/>,
    className: "col-span-1",
    thumbnail:proj3.src
  },
  {
    id: 4,
    content: <Skeleton desc="Crop management in a agriculture field" title="Project Delivered"/>,
    className: "md:col-span-2",
    thumbnail:proj4.src
  },
]


function SectionProjects() {
  return (
    <SectionLayout className="bg-primary2">
      <div className="space-y-4">
        <Chips title="Vista Projects" />
        <h2 className="sm:w-2/3 text-4xl font-bold text-heading">
          Project Delivered in Market
        </h2>
      </div>
      <div className="my-5 w-full h-screen hidden lg:block">
        <LayoutGrid cards={cards} />
      </div>
      <div className="block lg:hidden my-5">

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
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


