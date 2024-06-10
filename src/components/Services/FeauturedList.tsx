"use client"
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { BentoCard,BentoGrid } from "../magicui/bento-grid";
import { Map } from "lucide-react";
import { serviceIcons } from "@/utils/images";
import Image from "next/image";




function FeauturedList() {
  return (
   
    <BentoGrid className="lg:grid-rows-2  flex-1 mt-5 lg:mt-0">
    {services.map((feature) => (
      <BentoCard key={feature.title} {...feature} />
    ))}
  </BentoGrid>

  );
}

export default FeauturedList;



const services = [
 
  {
    title: "Mining and Petroleum",
    href : "/services/mining-petroleum",
    Icon: <Image src={serviceIcons[2]} alt="logo" height={48} width={48}  className="origin-left transform-gpu  transition-all duration-300 ease-in-out group-hover:scale-75"  />,
    className : 'lg:col-span-2',
    background: <img className="filter  group-hover:blur-sm h-full w-full object-cover absolute top-0  [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)]" src="https://www.nanofiltersolutions.com/images/sectors/Mining-Gas-and-Oil-5.jpg"  />,
    description:
      "Our specialized drone solutions provide precise aerial data, helping you streamline exploration, site assessment, and resource management.",
  },
  {
    title: "Planning and Survey",
    Icon: <Map className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75"  />,
    href : "/services/planning-survey",
    background: <img className="filter  group-hover:blur-sm h-full w-full object-cover absolute top-0  [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)]" src=" https://cdn-ikponof.nitrocdn.com/vGqfYAGlOLDkYkJqZhYIYKEsibdbZnkc/assets/images/optimized/wp-content/uploads/2023/08/5ba603bd7973e59b1100415578da3158.using-drone-for-construction.png"  />,
    
    description:
    "Transform your planning and survey processes with our advanced drone technology. ",
    },
    {
      title: "Transportation and Power Industry",
      Icon: <Image src={serviceIcons[4]} alt="logo" height={48} width={48}  className="origin-left transform-gpu  transition-all duration-300 ease-in-out group-hover:scale-75"  />,
      background: <img className="filter  group-hover:blur-sm h-full w-full object-cover absolute top-0 h [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)]" src=" https://www.futureelectronics.com/blog/wp-content/uploads/2023/05/drone-delivery-services.jpg"  />,     
      description:
      "Our drones conduct detailed inspections and provide high-quality visual data for proactive maintenance and compliance.",
    href : "/services/transportation-power-industry",
      },
     
    {
      title: "Construction and Progress Monitoring",
      Icon: <Image src={serviceIcons[1]} alt="logo" height={48} width={48}  className="origin-left transform-gpu  transition-all duration-300 ease-in-out group-hover:scale-75"  />,
    href : "/services/construction-progress-monitoring",
    background: <img className="filter  group-hover:blur-sm h-full w-full object-cover absolute top-0 h [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)]" src="https://parazero.com/wp-content/uploads/2017/07/170201_DJI_0128-Low-res.jpg"  />,
    
    description:
    "We offer comprehensive drone solutions for site planning, progress monitoring, and safety inspections.",
    },
    {
      title: "Agriculture",
      Icon: <Image src={serviceIcons[0]} alt="logo" height={48} width={48}  className="origin-left transform-gpu stroke-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75"  />,
      href : "/services/agriculture",
      background: <img className="filter  group-hover:blur-sm h-full w-full object-cover absolute top-0 h [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)]" src="https://www.cropin.com/hs-fs/hubfs/regenerative-agriculture-photo-depicting-climate-smart-regenerative-agricultural-practices.jpg?width=764&height=507&name=regenerative-agriculture-photo-depicting-climate-smart-regenerative-agricultural-practices.jpg"  />,
      description:
        "Our drone solutions provide actionable insights for crop management, irrigation planning, and pest detection, helping you enhance productivity and sustainability.",
    },
      ];
      
      
