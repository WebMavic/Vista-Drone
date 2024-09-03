import { StaticImport } from "next/dist/shared/lib/get-img-props"

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