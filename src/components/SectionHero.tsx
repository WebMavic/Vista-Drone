import React from "react";
import {Button} from "@/components/ui/Button";

function SectionHero() {
  return (
    <section className="hero w-full overflow-hidden px-5 lg:h-screen lg:px-28">
      <div className="flex h-full w-full flex-col lg:w-1/2 items-start justify-center gap-6 py-24 ">
        <h1 className="text-3xl font-medium text-white md:text-4xl lg:text-7xl ">
          Elevate Your Vision Cutting Edge UAV Solutions Await
        </h1>
        <p className="text-body font-light  ">
          Vista Drone captures and maps aerial data in a smart, cost-effective
          manner, empowering businesses to make informed decisions. We help you
          unlock the limitless possibilities of the open sky with our top-tier
          UAV services.
        </p>

        <Button>
          Explore
        </Button>
      </div>
    </section>
  );
}

export default SectionHero;

{
  /*
      <div className="hero-video absolute inset-0 left-0 top-0 z-[5] w-full overflow-hidden lg:h-screen">
        <div className="div absolute top-0 z-[1] h-full w-full  bg-black/30 bg-blend-overlay " />
        <Image src={home.src} alt="img" 
        width={0} height={0} sizes="100vw" blurDataURL={home.blurDataURL}
             className="h-full w-full object-cover" />
         <video
          poster={placeholder.src}
          autoPlay 
          width={"100%"}
          muted
          playsInline
          preload="none"
          loop
          className="h-full w-full object-cover"
        >
          <source src="/v10.mp4" type="video/mp4" />
          Your browser does not support the video.
        </video> 
      </div>
      */
}
