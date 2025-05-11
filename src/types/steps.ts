import { ClassValue } from "clsx"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { HTMLProps } from "react"

export type Steps = {
    id : string,
    title : string
    desc : string
}

export type Project = {
    title : string,
    description : string,
    avatar : StaticImport | string
}

export type Hero = {
    title: string
    description: string
    background?: string
    avatar ?:StaticImport
    image?: StaticImport;
    imageStyle?: string
    className? : HTMLProps<HTMLElement>["className"] ,
    customParaStyle? : ClassValue
}


export type Job = {
  title: string;
  location: string;
  joining: string;
  jobPosted: string;
  qualification: string;
  applyBy: string;
  rolesAndResponsibilities: string[];
  desiredCandidateProfile: string[];
  from: {
    title: string;
    address: string;
  };
};


