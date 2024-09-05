import { Steps } from "@/types/steps";

export const steps: Steps[] = [
    {
      id:"1",
      title : "preperation",
      desc : "To understand the requirements in detail the team Vista Drone(VD) do a recon. of the site before starting to prepare for Data Acquisition."
    },
    {
      id:"2",
      title : "ground control points",
      desc : "We uses a high-accuracy GPS system to set up visual ground control points for precise geo-referencing and survey-grade data quality."
    },
    {
      id:"3",
      title : "flight planning",
      desc : "The survey flight plan is designed to capture UAV data, specifying flight direction, resolution, route, and stereo overlap."
    },
    {
      id:"4",
      title : "data acquisition",
      desc : "After uploading the survey schedule, data acquisition is fully automated, the drone follows a pre-programmed waypoints to collect data."
    },
    {
      id:"5",
      title : "post flight data processing",
      desc : "After the flight, we verify the data quality on-site.If it meets our standards, we proceed with data processing back at the office."
    },
    {
      id:"6",
      title : "final product",
      desc : "Our software produces CAD-ready ortho-photos, contours, DSM/DTM, point clouds, and 3D models, compatible with CAD and GIS."
    },
  ]