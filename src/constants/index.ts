import { Hero, Project, Steps } from "@/types/steps";
import bg from "@/assets/images/draft.jpg";
import { miningDeliveryImages } from "@/utils/images";
import { solarimages } from "@/utils/images";
import { oilDeliveryImages } from "@/utils/images";


import member1 from "@/assets/images/team/t2.jpg";
import member2 from "@/assets/images/team/t1.jpg";
import {
  PresentationChartBarIcon,
  ArrowTrendingUpIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";


import { GiThunderStruck } from "react-icons/gi";
import { HiMiniDocumentMagnifyingGlass } from "react-icons/hi2";
import { GoRocket } from "react-icons/go";
import { FaHandshake } from "react-icons/fa";


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



export const heroOptions: Hero[] = [
    {
      title: "Elevate Your Vision Cutting Edge UAV Solutions Await",
      description:
        "Vista Drone captures and maps aerial data in a smart, cost-effective manner, empowering businesses to make informed decisions. We help you unlock the limitless possibilities of the open sky with our top-tier UAV services.",
      background: "/MATRICE.mp4",
      className:'lg:w-1/2'
    },
    {
      title: "Elevate Your Vision Cutting Edge UAV Solutions Await",
      description:
        "Vista Drone captures and maps aerial data in a smart, cost-effective manner, empowering businesses to make informed decisions. We help you unlock the limitless possibilities of the open sky with our top-tier UAV services.",
      image: bg,
    },
    {
      title: "Elevate Your Vision Cutting Edge UAV Solutions Await",
      description:
        "We help you unlock the limitless possibilities of the open sky with our top-tier UAV services.Vista Drone captures and maps aerial data in a smart",
      background: "/v6.mp4",
      className:'items-center w-full text-center',
      customParaStyle : 'w-1/2 mx-auto'
    },
    // {
    //   title: "Elevate Your Vision Cutting Edge UAV Solutions Await",
    //   description:
    //     "We help you unlock the limitless possibilities of the open sky with our top-tier UAV services.Vista Drone captures and maps aerial data in a smart",
    //   // background: "/v6.mp4",
    //   // avatar : drone,
    //   image : bg2,
    //   customParaStyle : 'w-1/2 ',
    //   imageStyle : 'mask-image-hero'
    // },
  
  ];


  export const expertises = [
    {
      title: "Successfully projects delevering",
      avatar: ArrowTrendingUpIcon,
      description:
        "Expertise and proficiency in Civil & Steel, Oil & Gas, Agriculture, Green Energy, Mining & Real Estate.",
    },
    {
      title: "Sound technical expertise in  UAV market",
      avatar: PresentationChartBarIcon,
      description:
        "The team is well-versed in the UAE government's long-term UAV policy and market landscape. Consequently",
    },
    {
      title: "Outstanding team of  professionals",
      avatar: UserIcon,
      description:
        "Includes experts with decades of experience in academia, complementing operational skills delivering end to end solution.",
    },
  ];



  
export const teams = [
  {
    name: "S. Sudan",
    role: "Founder and CEO",
    avatar: member1,
    email : 'lorem.me@gmail.com',
    bio: "An entrepreneur and experienced Geo scientist with experience of over 30 years, spanning two decades in key roles in the Middle East, is marked by expertise in various sectors including mining, geology, oil and gas, ferrous and non-ferrous metal production, trading, export-import, and business development. He holds a Master's degree in Earth Science from IIT(ISM) Dhanbad, India, an MBA and Trained Drone Pilot.",
  },
  {
    name: "Shlok Srivastava",
    role: "Co-Founder & CTO",
    avatar: member2,
    email : 'shlok@gmail.com',
    bio: "A Canadian Citizen & Govt. Certified Petroleum Engineer of Alberta, Canada with a career dedicated to optimizing energy resources. Over eight years, he has excelled in bridging the gap between industry, government, and regulatory bodies to tackle pressing issues of food and energy security. Notably, his contributions include identifying key methane emission reduction opportunities in Canada’s LNG production system, spearheading Canada’s first oil well-to-geothermal conversion project, and developing a geospatial heatmap for CO2 emissions from large-scale energy processes for a feasible CCUS application.",
  },
];





export const factorsArray = {
  trends: [
    {
      id: 1,
      content:
      
        "Miniaturization and portability are two key trends driving the unmanned aerial vehicle (UAV) industry.",
    },
    {
      id: 2,
      content:
        "UAVs are becoming more compact, lightweight, and portable, making them more accessible to a wider range of users.",
    },
  ],
  challenges: [
    {
      id: 1,
      content:
        "Ethical considerations about the use of UAVs and strict government regulations regarding the use of the devices may restrain the market growth.",
    },
    {
      id: 2,
      content:
        "In addition, unmanned aerial vehicles generate kinetic energy after crashes. This poses a threat to these technologies and might hamper market growth.",
    },
  ],
};




export const contacts = [
  {
    icon: PhoneIcon,
    title: "Call Us",
    description: "+971 56 440 1460",
  },
  {
    icon: EnvelopeIcon,
    title: "Quote",
    description: "ceo@bdrone.org",
  },
  {
    icon: MapPinIcon,
    title: "Address",
    description:"Vista Drone UAV LLC | Office No 403, Tower 1 | Mazyad Mall | MBZ City | Street 28, Musaffah | Abu Dhabi(UAE)",
  },
];


export const factors = [
  {
    title: "Disaster Relief",
    description:
      "The use of drones to deliver detailed information for disaster relief and the use of unmanned aerial vehicle to investigate natural disasters are expected to drive the market forward",
    icon: GiThunderStruck,
  },
  {
    title: "Research and Development",
    description:
      "Furthermore, the increasing use of unmanned aerial vehicles for scientific exploration and defense research, in addition to government initiatives to support unmanned aerial vehicle research and development, are creating lucrative opportunities for market expansion.",
    icon: HiMiniDocumentMagnifyingGlass,
  },
  {
    title: "Remote Sensing",
    description:
      "Sensor and camera development and design are critical for UAV/drone-based remote sensing technology development. Sensor and technology development lead to lower prices for drone components such as ICs (controllers, GPS)",
    icon: GoRocket,
  },
  {
    title: "Affordable Integrated Chips",
    description:
      " Drones are becoming more affordable as the costs of various ICs (controllers, GPS), IoT sensors,MEMSsensors, and batteries fall while their performance improves, such as GPS accuracy.",
    icon: FaHandshake,
  },
];


export const projects: Project[] = [
  {
    title: "Digital Terrain Model",
    avatar: miningDeliveryImages[0],
    description: "Digital Terrain model here",
  },
  {
    title: "Contours",
    avatar: miningDeliveryImages[1],
    description: "Digital Terrain model here",
  },
  {
    title: "Digital Surface Model",
    avatar: miningDeliveryImages[2],
    description: "Digital Terrain model here",
  },
  {
    title: "Ortho-mosaic",
    avatar: miningDeliveryImages[3],
    description: "Digital Terrain model here",
  },
  {
    title: "Volumetric Analysis",
    avatar: miningDeliveryImages[4],
    description: "Digital Terrain model here",
  },
];


export const solarProjects: Project[] = [
  {
    title: "Cracks",
    avatar: solarimages[0],
    description: "Common defects caused by handling, packaging, transport, and harsh climates over time.",
  },
  {
    title: "Discolorations",
    avatar: solarimages[1],
    description: "Internal or external factors causing reduced sunlight entry and significant losses.",
  },
  {
    title: "Mounting Failures",
    avatar: solarimages[2],
    description: "Failures in mounting can cause structural issues and lead to decreased panel efficiency.",
  },
  {
    title: "Vegetation",
    avatar: solarimages[3],
    description: "Overgrown vegetation can obstruct panels, reducing overall efficiency.",
  },
  {
    title: "Delamination",
    avatar: solarimages[4],
    description: "Moisture in PV modules leading to delamination, often due to improper lamination methods.",
  },
  {
    title: "Hotspots",
    avatar: solarimages[5],
    description: "Overloaded regions causing warm spots, leading to increased resistance and short circuits.",
  },
  {
    title: "Reverse Polarity",
    avatar: solarimages[6],
    description: "Incorrect wiring can cause reverse polarity, leading to system inefficiencies.",
  },
  {
    title: "Short-Circuited Module",
    avatar: solarimages[7],
    description: "Short circuits in modules can cause significant safety and efficiency issues.",
  },
  {
    title: "Module Cracking",
    avatar: solarimages[8],
    description: "Cracks in modules can reduce efficiency and lead to further damage.",
  },
  {
    title: "Module Damage",
    avatar: solarimages[9],
    description: "Physical damage to modules often results in decreased energy output.",
  },
  {
    title: "Module Obstruction",
    avatar: solarimages[10],
    description: "Obstructions like dirt and debris can block sunlight, reducing energy production.",
  },
  {
    title: "Shading",
    avatar: solarimages[11],
    description: "Shade on panels can drastically reduce efficiency and energy output.",
  },
  {
    title: "Heated Module",
    avatar: solarimages[12],
    description: "Excessive heat can damage modules and reduce overall system efficiency.",
  },
  {
    title: "Activated Bypass Diode",
    avatar: solarimages[13],
    description: "Bypass diodes activate to prevent overheating, but frequent use indicates a system issue.",
  },
  {
    title: "Optimizer Failure",
    avatar: solarimages[14],
    description: "Failures in optimizers can lead to significant energy losses across the system.",
  },
  {
    title: "Offline String",
    avatar: solarimages[15],
    description: "An offline string of panels indicates a connectivity issue, reducing system output.",
  },
  {
    title: "Overheated Junction Box",
    avatar: solarimages[16],
    description: "Excessive heat in junction boxes can cause safety risks and damage to connections.",
  },
  {
    title: "Module Soiling",
    avatar: solarimages[17],
    description: "Accumulation of dirt and debris on modules can significantly reduce efficiency.",
  },
];

export const oilProjects: Project[] = [
  {
    title: "High-Resolution Aerial Imagery",
    avatar: oilDeliveryImages[0],
    description:
      "Crystal-clear images capturing every detail of oil and gas infrastructure for comprehensive analysis",
  },
  {
    title: "Orthophoto Maps",
    avatar: oilDeliveryImages[1],
    description:
      "Precise, distortion-free maps provide an accurate representation of the surveyed area.",
  },
  {
    title: "Thermal Imaging Reports",
    avatar: oilDeliveryImages[2],
    description:
      "Heat maps identifying temperature variations, enabling the detection of potential issues in equipment and infrastructure.",
  },
  {
    title: "3D Point Clouds",
    avatar: oilDeliveryImages[3],
    description:
      "Detailed three-dimensional representations of the assets, aiding in spatial analysis and visualization.",
  },
  {
    title: "Pipeline Corridor Monitoring",
    avatar: oilDeliveryImages[4],
    description:
      "Regular monitoring and analysis of pipeline corridors for early detection of encroachments or integrity issues.",
  },
  {
    title: "Change Detection Reports",
    avatar: oilDeliveryImages[5],
    description:
      "Identifying and documenting changes in the landscape or infrastructure over time, supporting predictive maintenance.",
  },
  {
    title: "Environmental Impact Assessment (EIA) Data",
    avatar: oilDeliveryImages[1],
    description:
      "Comprehensive data for EIAs, helping oil and gas companies adhere to environmental regulations.",
  },
  {
    title: "Asset Condition Reports",
    avatar: oilDeliveryImages[2],
    description:
      "Detailed assessments of the condition of oil and gas assets, including potential areas of concern and recommendations for maintenance.",
  },
  {
    title: "Emergency Response Maps",
    avatar: oilDeliveryImages[3],
    description:
      "Maps highlighting emergency response routes and access points for quick and efficient crisis management.",
  },
  {
    title: "Data Integration",
    avatar: oilDeliveryImages[4],
    description:
      "Seamless integration of drone-captured data into existing Geographic Information Systems for enhanced data management.",
  },
  {
    title: "Interactive 3D Models",
    avatar: oilDeliveryImages[5],
    description:
      "Engaging 3D models of oil and gas assets, providing a dynamic and interactive way to explore the infrastructure.",
  },
  {
    title: "Regular Monitoring Schedules",
    avatar: oilDeliveryImages[1],
    description:
      "A proposed schedule for routine drone inspections, ensuring consistent data collection and timely maintenance.",
  },
];