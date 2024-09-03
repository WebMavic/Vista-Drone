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
      desc : "We set up visual ground control points using high accuracy survey grade GPS system to achieve high accuracy geo-referencing to ensure that the data is truly survey grade."
    },
    {
      id:"3",
      title : "flight planning",
      desc : "The survey flight plan is being created to capture the UAV's surveying data. Flight direction, resolution, amount, route and stereo overlap are planned to execute."
    },
    {
      id:"4",
      title : "data acquisition",
      desc : "Once the surveying schedule has been uploaded, data acquisition is completely automatic where the drone follows a pre-programmed waypoints collecting data automatically."
    },
    {
      id:"5",
      title : "post flight data processing",
      desc : "After the flight is complete, we load the data from the drone into our software to verify its quality before we leave the site. Once we have data that meets our quality standards & accuracy, we go back to our office to process the data."
    },
    {
      id:"6",
      title : "final product",
      desc : "Our software generates CAD-ready outputs like ortho-photos, contours, DSM/DTM, point clouds, and 3D models in various formats. These files are compatible with CAD, GIS, and engineering software."
    },
  ]