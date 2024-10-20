import { bentoImages } from './../utils/images';
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { serviceIcons } from "@/utils/images";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { LucideProps } from "lucide-react";
import { MdOilBarrel,MdOutlineWindPower } from "react-icons/md";
import { GiGoldMine} from "react-icons/gi";
import { IconType } from "react-icons/lib";




type Industry = {
  title: string;
  icon?: string | StaticImport
  Icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>> | IconType;
  description?: string;
  className?: string;
  background?: string | StaticImport;
  href?: string;
  cta?: string;
};


export const industries: Industry[] = [
  {
    title: "Elevating Industries with Next Gen UAV Solutions",
    href: "/industries",
    background:bentoImages[0],
    className: "lg:col-span-2 lg:row-span-1 ",
    description:
      "Our specialized drone solutions provide precise aerial data, helping you streamline exploration, site assessment, and resource management.",
  },

  

  
  {
    title: "Mining",
    href: "/industries/mining",
    Icon: GiGoldMine,
    background:bentoImages[1],
    className: "lg:row-span-1",
    description:
      "Mapping and surveying of the topography of the brownfield and greenfield O/C Mining projects.",
  },
  {
    title: "Renewable Energy",
    Icon: MdOutlineWindPower,
    href: "/industries/green-energy",
    background:bentoImages[2],
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
    background: bentoImages[3],

    description:
      "Enhancing Efficiency, Safety, and Precision in Civil Construction Projects.",
  },
  {
    title: "Oil and Gas",
    href: "/industries/oil-and-gas",
    Icon: MdOilBarrel,
    className: "lg:col-span-2",
    background:bentoImages[4],
      description:
      "Optimizing Efficiency, Safety, and Precision in Oil and Gas Exploration and Production.",
  },
  {
    title: "Agriculture",
    icon: serviceIcons[0],
    href: "/industries/agriculture",
    background:bentoImages[5],
    description:
      "Advance ability to collect and analyze data on crop health and soil conditions.",
  },
];

