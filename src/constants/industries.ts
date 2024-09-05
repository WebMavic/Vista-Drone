import { serviceIcons } from "@/utils/images";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { FanIcon, LucideProps } from "lucide-react";
import { MdOilBarrel,MdOutlineWindPower } from "react-icons/md";
import { GiGoldMine,GiSteelClaws } from "react-icons/gi";



import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";
import { IconType } from "react-icons/lib";

type Industry = {
  title: string;
  icon?: string | StaticImport
  Icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>> | IconType;
  description?: string;
  className?: string;
  background?: string;
  href?: string;
  cta?: string;
};


export const industries: Industry[] = [
  {
    title: "Elevating Industries with Next Gen UAV Solutions",
    href: "/industries",
    background:
      "https://thisisglance.com/hubfs/Imported_Blog_Media/high-level-technology-drone-for-delivery-service-industry-vers-2.jpg",
    className: "lg:col-span-2 lg:row-span-1 ",
    description:
      "Our specialized drone solutions provide precise aerial data, helping you streamline exploration, site assessment, and resource management.",
  },

  

  
  {
    title: "Mining",
    href: "/industries/mining",
    Icon: GiGoldMine,
    background:
      "https://www.nanofiltersolutions.com/images/sectors/Mining-Gas-and-Oil-5.jpg",
    className: "lg:row-span-1",
    description:
      "Mapping and surveying of the topography of the brownfield and greenfield O/C Mining projects.",
  },
  {
    title: "Green Energy",
    Icon: MdOutlineWindPower,
    href: "/industries/green-energy",
    background: "https://avaada.com/wp-content/uploads/solar-and-wind.jpg",
    className: "lg:row-span-1",
    description:
      "Cleaning of solar panel, wind turbine blade inspection. Solar panel/ farm monitoring, defect detection and analysis",
  },
  
  // {
  //   title: "Steel Industry",
  //   Icon: GiSteelClaws,
  //   background:
  //     " https://www.futureelectronics.com/blog/wp-content/uploads/2023/05/drone-delivery-services.jpg",
  //   description:
  //     "Enhancing Efficiency, Safety, and Compliance with Vista Drone",
  //   href: "/industries/steel",
  // },

  {
    title: "Construction",
    icon: serviceIcons[1],
    href: "/industries/construction",
    background:
      "https://parazero.com/wp-content/uploads/2017/07/170201_DJI_0128-Low-res.jpg",

    description:
      "Enhancing Efficiency, Safety, and Precision in Civil Construction Projects.",
  },
  {
    title: "Oil and Gas",
    href: "/industries/oil-and-gas",
    Icon: MdOilBarrel,
    className: "lg:col-span-2",
    background:
      "https://www.nanofiltersolutions.com/images/sectors/Mining-Gas-and-Oil-5.jpg",
      description:
      "Enhancing Efficiency, Safety, and Precision in Civil Construction Projects.",
  },
  {
    title: "Agriculture",
    icon: serviceIcons[0],
    href: "/industries/agriculture",
    background:
      "https://www.cropin.com/hs-fs/hubfs/regenerative-agriculture-photo-depicting-climate-smart-regenerative-agricultural-practices.jpg?width=764&height=507&name=regenerative-agriculture-photo-depicting-climate-smart-regenerative-agricultural-practices.jpg",
    description:
      "Advance ability to collect and analyze data on crop health and soil conditions.",
  },
];
