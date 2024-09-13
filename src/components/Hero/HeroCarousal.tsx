"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import Image from "next/image";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  items: StaticImport[];
  className?: string;
}

export const HeroCarousal = ({ items: Images, className }: Props) => {

  return (
    <div className={cn("h-full w-full bg-black ", className)}>
      <Swiper
        className="h-full w-full"
        modules={[Autoplay,Navigation,EffectFade]}
        effect={'fade'}
        // creativeEffect={{
        //     prev : {
        //         shadow : true,
        //         scale  : 0,
        //         translate : [0,0,-400]
        //     },
        //     next : {
        //         scale : 1,
        //         translate : ['100%',0,0]
        //     },
        // }}
        autoplay navigation = {{
            prevEl : ".prev",
            nextEl : '.next'
        }}
      >
        {Images.map((image, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full">
           <div className = "absolute top-0  z-[1] h-full w-full bg-black/50 bg-blend-overlay"/>
            <Image
              src={image}
              placeholder="blur"
              alt={"image-" + i}
              className="h-full relative w-full object-cover"
            />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      
    </div>
  );
};
