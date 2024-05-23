"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { droneImage } from "@/utils/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface HeroImageProps {
  className?: string;
}

function HeroImage({ className }: HeroImageProps) {
  const paginationRef = useRef(null);

  return (
    <div className={`${className} relative`}>
      <Swiper
        slidesPerView={1}
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
        {droneImage.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="inline-flex items-center justify-center  h-full">
              <Image
                src={image}
                alt={index + "drone"}
                className="max-w-full h-full drop-shadow-drone animate-wobble object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroImage;

{
  /* <div className="image-container relative">
<div className="absolute left-0 top-0 sm:block hidden h-96 w-96 rounded-full bg-accent opacity-50 "></div>
<motion.img initial={{y:-100,x:100}} animate={{y:0,x:0}} transition={{duration : 2 ,type: 'spring'}}
  src= {brandVistaImage.src}
  alt="brand-vista-image "
  className="sm:max-w-[550px] object-cover drop-shadow-drone"
/>
</div> */
}
