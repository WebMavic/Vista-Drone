import { ClassValue } from "clsx"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { HTMLAttributes, HTMLProps } from "react"

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
    className? : HTMLProps<HTMLElement>["className"] ,
    customParaStyle? : ClassValue
}