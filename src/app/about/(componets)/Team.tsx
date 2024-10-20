import React from "react";
import Chips from "@/components/ui/Chips";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props";
const SectionLayout = dynamic(()=>import("@/components/ui/SectionLayout"))
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";
import { teams } from "@/constants";
import Reveal from "@/components/Reveal";

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
        {teams.map((team,index) => (
          <Reveal key={index} slide={index === 0 ? 'left' : 'right'} once={false}>
            <TeamItem {...team} direction={index === 0 ? 'left' : 'right'} />
          </Reveal>
        )
      )
        }
      
       
      </div>
    </SectionLayout>
  );
}

export default Team;

export const TeamItem = ({bio1,bio2,className,avatar,name,role,direction,cta,email}: {
  avatar : StaticImport | StaticImageData | any
  className ?: string
  name :  string
  role? : string
  bio1 : string
  bio2 : string
  cta? : string
  email ?: string
  direction : 'right' | 'left'
}) => {
  return (
    <div className={cn("flex w-full lg:justify-between lg:items-center justify-center items-center lg:flex-row flex-col gap-6", direction === "right" && 'lg:flex-row-reverse', className)}>
  <Image
    src={avatar}
    placeholder="blur"
    alt={avatar}
    className="size-[300px] overflow-hidden rounded-xl object-cover"
  />
  
  <div className="info lg:w-3/5 flex flex-col justify-center lg:items-start items-center text-center lg:text-left">
    <h3 className="text-2xl font-bold text-heading">{name}</h3>
    {role && <span className="text-sm">{role}</span>}
    <p className="my-3 text-subheading">{bio1}</p>
    <p className="my-3 text-subheading">{bio2}</p>
    
    <div className="flex flex-col items-center lg:items-start">
    {cta && <Link href={"/"+cta} className={buttonVariants()}>{cta.toUpperCase()}</Link>}
      {email && <Link target="_blank" href={`mailto:${email}`} className={buttonVariants()}>Contact</Link>}
    </div>
  </div>
</div>

  );
};
