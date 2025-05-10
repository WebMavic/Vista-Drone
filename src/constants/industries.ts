import { bentoImages } from './../utils/images';
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { serviceIcons } from "@/utils/images";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { LucideProps } from "lucide-react";
import { MdOilBarrel,MdOutlineWindPower } from "react-icons/md";
import { GiGoldMine, GiSteelClaws} from "react-icons/gi";
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
    title: "Mining & Geology",
    href: "/applications/mining",
    Icon: GiGoldMine,
    background:bentoImages[1],
    className: "lg:col-span-2 lg:row-span-1",
    description:
      "Comprehensive mapping and surveying of topography for both brownfield and greenfield open-cast quarry/mining projects.",
  },

  {
    title: "Steel Industry",
    Icon: GiSteelClaws,
    href: "/applications/steel",
    background:bentoImages[0],
    className: "lg:row-span-1 ",
    description:
      "Our specialized drone solutions provide precise aerial data, helping you streamline exploration",
  },

  

  
  {
    title: "Green Energy",
    Icon: MdOutlineWindPower,
    href: "/applications/renewable-energy",
    background:bentoImages[2],
    className: "lg:row-span-1",
    description:
      "Real time inspection and monitoring of wind turbine blade, solar farm, detection of defects and AI enabled analysis to enhance performance and operational efficiency.",
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
    href: "/applications/construction",
    background: bentoImages[3],

    description:
      "Improving efficiency, safety, and precision in civil construction projects.",
  },
  {
    title: "Oil and Gas",
    href: "/applications/oil-and-gas",
    Icon: MdOilBarrel,
    className: "lg:col-span-2",
    background:bentoImages[4],
      description:
      "Efficient HSE Management vis-à-vis cost optimization during scheduled inspection of the assets and monitoring of exploration and production facilities.",
  },
  {
    title: "Agriculture",
    icon: serviceIcons[0],
    href: "/applications/agriculture",
    background:bentoImages[5],
    description:
      "Advanced data collection and analysis for crop health, soil conditions and yield optimization.",
  },
];

