import React from "react";
import Chips from "@/components/ui/Chips";
import SectionLayout from "@/components/ui/SectionLayout";
import Image from "next/image";
import member1 from "@/assets/images/team/t2.jpg";
import member2 from "@/assets/images/team/t1.jpg";
import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";

function Team() {
  return (
    <SectionLayout className="w-full bg-primary2">
      <div className="space-y-4">
        <Chips title="Behind Vista" />
        <h2 className="text-4xl font-bold capitalize text-heading ">
          Meet our team
        </h2>
      </div>

      <div className="mt-10 space-y-10 ">
        {teams.map((team,index) => {
          if (index === 0 ) {
            return <TeamItem key={index} {...team} direction="left"  />
          }
          return <TeamItem key={index} {...team} direction="right" />
        })}
       
      </div>
    </SectionLayout>
  );
}

export default Team;

export const TeamItem = ({bio,className,avatar,name,role,direction,cta}: {
  avatar : StaticImport | StaticImageData | any
  className ?: string
  name :  string
  role? : string
  bio : string
  cta? : string
  direction : 'right' | 'left'
}) => {
  return (
    <div className={cn("flex w-full lg:justify-between lg:items-start justify-center items-center lg:flex-row flex-col gap-6  ",direction === "right" && 'lg:flex-row-reverse',className)}>
      <Image
        src={avatar}
        alt={name+"-avatar"}
        className="size-[300px] overflow-hidden rounded-xl  object-cover"
      />
      <div className="info lg:w-3/5">
        <h3 className="text-2xl font-bold text-heading">{name}</h3>
        {role && <span className="text-sm">{role}</span>}
        <p className=" my-3  text-subheading">{bio}</p>
        {cta && <Link href={"/"+cta} className={buttonVariants()}>{cta.toUpperCase()}</Link>}
      </div>

      
    </div>
  );
};

const teams = [
  {
    name: "S. Sudan",
    role: "Founder and CEO",
    avatar: member1,
    cta : 'contact',
    bio: "An entrepreneur and experienced Geo scientist with experience of over 30 years, spanning two decades in key roles in the Middle East, is marked by expertise in various sectors including mining, geology, oil and gas, ferrous and non-ferrous metal production, trading, export-import, and business development. He holds a Master's degree in Earth Science from IIT(ISM) Dhanbad, India, an MBA and Trained Drone Pilot.",
  },
  {
    name: "Shlok Srivastava",
    role: "Co-Founder & CTO",
    avatar: member2,
    cta : 'contact',
    bio: "A Canadian Citizen & Govt. Certified Petroleum Engineer of Alberta, Canada with a career dedicated to optimizing energy resources. Over eight years, he has excelled in bridging the gap between industry, government, and regulatory bodies to tackle pressing issues of food and energy security. Notably, his contributions include identifying key methane emission reduction opportunities in Canada’s LNG production system, spearheading Canada’s first oil well-to-geothermal conversion project, and developing a geospatial heatmap for CO2 emissions from large-scale energy processes for a feasible CCUS application.",
  },
];
