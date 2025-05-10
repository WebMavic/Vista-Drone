import { ForwardRefExoticComponent, RefAttributes } from "react";
import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props";
import mine from "@/assets/images/mining/mine1.jpeg";
import agriculture from "@/assets/images/agriculture/agriculture2.jpeg";
import construction from "@/assets/images/construction&realestate/construction1.jpeg";
import oil from "@/assets/images/oil&gas/oil1.jpeg";
import solar1 from '@/assets/images/greenenergy/solar1.jpeg'
import solar3 from '@/assets/images/greenenergy/solar3.jpeg'
import steel from '@/assets/images/steel/steel1.jpeg'
import marine from "@/assets//images/marinefish/marine1.jpeg"

import { Aperture, BarChart, Cctv, Diameter, LucideProps } from "lucide-react";
import {GiWindTurbine , GiSolarPower ,GiArtificialIntelligence,GiEclipseFlare,GiLeadPipe,GiOffshorePlatform,GiMoebiusTrefoil,GiGasMask,GiBarrelLeak,GiMoneyStack,GiBonsaiTree,GiFishBucket,GiPathDistance,GiProgression,GiCargoCrane,GiReceiveMoney,GiSatelliteCommunication,GiPlantRoots,GiWateringCan,GiSpray,GiHealthPotion,GiCctvCamera,GiCrackedGlass } from "react-icons/gi";
import { BsClipboardCheck,BsBuildingsFill ,BsDatabaseFillCheck,BsFillSignYieldFill } from "react-icons/bs";
import { TbClockHour5,TbBrandSnapseed,TbCell } from "react-icons/tb";

import { VscColorMode } from "react-icons/vsc";


import { PiWall,PiPlantLight,PiThermometerHotFill } from "react-icons/pi";
import { VscLightbulbSparkle } from "react-icons/vsc";

import { SiSpond,SiExoscale,SiSubversion  } from "react-icons/si";
import {MdHealthAndSafety ,MdReportProblem, MdSavings,MdSos,MdOutlinePestControl,MdLandscape,Md3dRotation ,MdMap } from "react-icons/md";

import { FaSatelliteDish,FaNoteSticky,FaHelmetSafety,FaMoneyBillTrendUp,FaHotjar,FaClockRotateLeft } from "react-icons/fa6";
import { FaDatabase,FaMapMarkedAlt,FaCheck,FaPlusCircle,FaEye,FaCalendarCheck,FaChartBar,FaChartLine,FaTools,FaSortAmountDown    } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import { RiHotspotFill } from "react-icons/ri";
import { AiFillPicture,AiOutlineAudit ,AiOutlineSafetyCertificate,AiOutlineSafety,AiFillEnvironment  } from "react-icons/ai";

import { ImImage } from "react-icons/im";
import { IoMdDocument } from "react-icons/io";

import { IconType } from "react-icons/lib";



interface Service {
  title: string;
  description1: string;
  description2: string;
  description3: string;
  image: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>> | IconType | StaticImport | StaticImageData;
  service_description: description[];
  benefits: benefits[];
  faq: faq[];
}

export type benefits = {
  title: string;
  content: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>> | IconType ;
};

export type description = {
  title: string;
  content: string;
  image: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>> | IconType ;
  color  : string
};

type faq = {
  question: string;
  answer: string;
};

export const services: Service[] = [
  {
    title: "Mining",
    description1:
      "Enhance the efficiency, safety, and accuracy of your mining operations with Vista Drone’s specialized aerial solutions. Our advanced drone, equipped with high-resolution cameras and cutting-edge sensors, deliver precise geospatial data to support exploration, site assessment, and resource management.",
      description2:
      "We conduct detailed aerial surveys that produce high-resolution maps and 3D models, enabling accurate identification of mineral deposits and comprehensive terrain analysis. By replacing traditional ground surveys with fast, high-coverage aerial data collection, we reduce operational downtime and mitigate risks to on-site personnel.",
      description3:"",
    image: mine,
    
    service_description: [
      {
        title: "Aerial Surveys",
        content:
          "High-resolution drones with AI-enabled sensors and payloads capture real time geo referenced & accurate data, enable deliverables in 2D & 3D maps, DEM/DTM, and ortho-mosaic maps for efficient site planning and decision-making.",
        image: Aperture,
        color : "red"
      },
      {
        title: "Real-time Monitoring",
        content:
          "Our drone shoots real-time monitoring and inspection of drilling operations, pipeline, infrastructure, and environmental conditions—enhancing on-site safety and supporting informed, data-driven decisions.",
          image: Cctv ,
          color : "rose"
      },
      {
        title: "Volumetric Measurements",
        content:
          "We derive measurements of stockpiles and excavation volumes, streamlining inventory control and improving project planning and resource allocation through aerial data captured by Drone.",
          image: SiExoscale,
          color : "rose"
      },
      {
        title: "Environmental Impact Assessments",
        content:
          "Drone with suitable payload helps in monitoring of the environmental pollutants, and water contamination, supporting regulatory compliance and promoting sustainable mining practices.",
          image: GiBonsaiTree,
          color : "rose"
      },
      {
        title: "Exploration & Planning",
        content: "Provide comprehensive solution through aerial data captured by Drone in the leasehold area and provide report viz. Digital Terrain Models (DTM), Digital Surface Models (DSM), excavation analysis, and environmental impact assessments—providing a solid foundation for effective exploration and planning.",
          image: FaMapMarkedAlt,
          color : "rose"
      },
      {
        title: "Slope Analysis",
        content: "Software processed maps visually represent hill slopes using color-coded contour at 2-5 meters interval, offering clear insights for safer and more efficient mine planning.",
          image: BarChart,
          color : "rose"
      },
    ],
    benefits: [
      {
        title: "Enhanced Safety",
        content:
          "Minimize on-ground risks by collecting data remotely via drones, reducing the need for personnel in hazardous or inaccessible areas.",
      icon: AiOutlineSafetyCertificate,
      },
      {
        title: "Cost Efficiency",
        content:
          "Lower operational costs through efficient resource management, improved inventory tracking, and streamlining site assessments.",
        icon: GiMoneyStack,
      },
      {
        title: "Accurate Data",
        content:
          "Capture accurate geospatial data to support better forecasting, planning, and budgeting—leading to smarter, data-driven decisions.",
        icon:BsDatabaseFillCheck,
      },
      {
        title: "Precise Distance Measurement",
        content:
          "Measure horizontal and vertical distances accurately for layout planning, compliance, and construction coordination.",
        icon:GiPathDistance,
      },
      {
        title: "Clear Boundary Mapping",
        content:
          "Generate geo-tagged lease boundaries to clearly define operational zones and plan resource deployment effectively.",
        icon:PiWall,
      },
      {
        title: "Comprehensive Site Intelligence",
        content:
          "Access integrated visual data—maps, models, and measurements—that provide a holistic understanding of your site for ongoing decision-making.",
        icon:GiArtificialIntelligence,
      },
    ],
    faq: [
      {
        question: "What are the benefits of using drones in mining?",
        answer: "Drones provide high-definition imagery, elevation data, and 3D models for better planning, design, operations, and maintenance decisions in mining.",
      },
      {
        question: "How do drones assist in mine planning?",
        answer: "Drones offer tools for surveying, lease area mapping, Digital Terrain Modelling (DTM), Digital Surface Modelling (DSM), and environmental impact assessments.",
      },
      {
        question: "What types of analyses can drones perform for mining operations?",
        answer: "Drones can perform volumetric analysis, slope analysis, contour mapping, distance measurement, and boundary geo-tagging for comprehensive mine assessment.",
      },
      {
        question: "How are drones used for stockpile measurement in mining?",
        answer: "Drones measure the volume of stockpiles, overburdens, or any materials effectively in 3D, aiding in accurate inventory management.",
      },
      {
        question: "What deliverables does Vista Drone provide for mining projects?",
        answer: "Vista Drone provides digital terrain models, digital surface models, ortho-mosaics, 3D models, and point clouds for mining projects.",
      },
      {
        question: "How do drones support safety and surveillance in mining?",
        answer: "Drones monitor blasting sites, capture data for front row burden analysis, and provide real-time surveillance for safety and operational efficiency.",
      },
      {
        question: "What is the workflow for drone data collection in mining?",
        answer: "The workflow includes preparation, flight planning, data acquisition, post-flight data processing, and delivering final products like maps and models.",
      },
      {
        question: "How does Vista Drone ensure collaboration in mining projects?",
        answer: "Vista Drone uses a secure online cloud environment to host drone data, enabling easy sharing and collaboration with stakeholders for better decision-making.",
      }
    ],
    
  },
  
  {
    title: "Steel Industries",
    description1:
      "Transform your planning and survey processes with our advanced drone technology. Vista Drone Services offers comprehensive solutions to support topographic mapping, land surveying, and infrastructure assessment. Our high-resolution drones capture detailed aerial imagery and data, enabling the creation of accurate topographic maps and 3D models. This detailed data collection aids in precise terrain analysis, essential for planning construction projects, land development, and environmental studies. By leveraging our drone technology, you can efficiently gather the necessary data for site evaluations and project planning, reducing the need for traditional ground surveys and enhancing the accuracy of your assessments. ",
      description2:"",
      description3:"",
    image:steel,
      
      
    service_description: [
      {
        title: "Aerial Inspection and Surveillance",
        content:"Routine inspections, real-time monitoring, and high-resolution imagery for infrastructure, security, and detailed maintenance analysis.",
          image: Aperture,
          color : "rose"
      },
      {
        title: "Thermal Imaging",
        content:"Drones equipped with thermal sensors quickly detect heat anomalies in furnaces and pipelines identifying overheating, inefficiencies, and potential failures.",
          image: PiThermometerHotFill,
          color : "rose"
      },
      {
        title: "Mapping and Modeling",
        content:
          "Accurate 3D models for planning, topographic surveys for site analysis, and volumetric calculations for inventory management.",
          image: FaMapMarkedAlt,
          color : "rose"
      },
      {
        title: "Environmental Monitoring",
        content:
          "Drones monitor emissions and environmental impact in steel plants, ensuring regulatory compliance and supporting sustainability thus reducing ecological footprints.",
          image: PiPlantLight,
          color : "rose"
      },
      {
        title: "Emergency Response",
        content:"Drones enable rapid assessment of incidents in steel plants, providing real-time visuals for quick decision-making, disaster response, and enhanced worker safety during emergencies.",
          image: MdSos,
          color : "rose"
      },
      
    ],
    benefits: [
      {
        title: "Increased Efficiency",
        content: "Accelerate inspections and data collection with fast, automated drone surveys that reduce downtime and improve workflow productivity.",
        icon:FaHelmetSafety,
      },
      {
        title: "Enhanced Safety",
        content:"Eliminate the need for personnel in high-risk areas by using drones to access hard-to-reach or hazardous zones safely.",
        icon:MdHealthAndSafety,
      },
      {
        title: "Cost Savings",
        content:
          "Lower operational costs through early issue detection, optimized maintenance schedules, and better resource management.",
        icon:GiReceiveMoney,
      },
      {
        title: "Data-Driven Decisions",
        content:"Gain actionable insights from high-resolution, real-time aerial data to support accurate planning and operational strategies.",
        icon:BsDatabaseFillCheck,
      },
      {
        title: "Regulatory Compliance",
        content:"Ensure consistent monitoring and reporting to meet safety, environmental, and industry compliance standards effortlessly.",
        icon:FaCalendarCheck,
      },
    ],
    faq: [
      {
        question: "What services does Vista Drone offer to the steel industry?",
        answer: "Vista Drone offers aerial inspections, real-time monitoring, thermal imaging, mapping and modeling, environmental monitoring, and emergency response services.",
      },
      {
        question: "How do drones enhance safety in the steel industry?",
        answer: "Drones minimize the need for manual inspections in hazardous areas, reducing risk to personnel and enhancing overall safety.",
      },
      {
        question: "What role do drones play in environmental monitoring for steel industries?",
        answer: "Drones provide real-time monitoring of emissions and environmental impact, helping ensure compliance with regulations and supporting sustainability initiatives.",
      },
      {
        question: "How do drones improve operational efficiency in steel production?",
        answer: "Drones streamline inspection processes, provide accurate data for maintenance planning, and enable quick assessments of incidents, improving operational efficiency.",
      },
      {
        question: "What benefits does thermal imaging by drones provide?",
        answer: "Thermal imaging detects heat anomalies, helps prevent equipment failures, ensures safety compliance, and identifies energy loss and equipment inefficiencies.",
      },
      {
        question: "How do drones support emergency response in the steel industry?",
        answer: "Drones enable rapid deployment for quick incident assessments, support disaster management, and provide real-time situational awareness for decision-making.",
      },
      {
        question: "What is the significance of collaboration via cloud for drone data?",
        answer: "Collaboration via cloud allows stakeholders to access digital drone data, improving decision-making for planning, monitoring, and maintenance.",
      },
      {
        question: "How do drones assist in mapping and modeling for steel industries?",
        answer: "Drones create accurate 3D models, perform topographic surveys, and calculate volumes for inventory management, aiding in planning and construction.",
      }
    ],
    
  },
 
  {
    title: "Agriculture",
    description1:
      "Optimize agricultural operations with Vista Drone Services. The advanced drone solutions deliver actionable insights for crop management, irrigation planning, and early pest detection—helping you boost productivity and sustainability. By analysing detailed imagery, we monitor plant health, pinpoint nutrient deficiencies, and uncover stress factors in real time. On basis of the reports farm manager can make data-driven decisions to maximize yields, minimize input costs, and reduce environmental impact. ",
      description2:"",
      description3:"",
    image: agriculture,
    service_description: [
      {
        title: "Crop Health Monitoring",
        content:
          "Drones use multispectral and thermal imaging to monitor crop health, detect issues, and generate NDVI maps.",
          image: GiPlantRoots,
          color : "rose"
      },
      {
        title: "Irrigation Planning",
        content:
          "Our drones create irrigation maps, analyze soil moisture, and recommend optimal schedules to reduce water waste and improve yields.",
          image: GiWateringCan,
          color : "rose"
      },
      {
        title: "Pest Detection",
        content:
          "Our drones use advanced imaging to detect pest infestations early, enabling targeted control and reducing pesticide use.",
          image: MdOutlinePestControl,
          color : "rose"
      },
      {
        title: "Yield Prediction",
        content:
          "We analyze plant health, soil conditions, and historical data for accurate yield predictions, aiding planning and resource allocation.",
          image: BsFillSignYieldFill,
          color : "rose"
      },
      {
        title : 'Spray Application',
        content : "Equipped with precision tanks, crop-spraying drones efficiently apply fertilizers, nutrients, and herbicides, minimizing waste, resource conservation and yield optimization.",
        image  : GiSpray,
        color : "blue"
        
      },
      {
        title : ' Soil health monitoring',
        content : "Leveraging advanced sensors, drone capture highly accurate data on soil health, enabling precise analysis of moisture levels, and soil composition for taking informed decisions.",
        color :"rose",
        image  : GiHealthPotion 
      }
    ],
    benefits: [
      {
        title: "Field Mapping",
        content:
          "Drones provide high-resolution maps, helping farmers analyze field conditions, optimize land use, and plan efficiently.",
        icon:PiPlantLight,
      },
      {
        title: "Monitoring Field Condition",
        content:
          " Drones offer accurate field mapping, helping determine drainage patterns and wet/dry spots for efficient watering.",
        icon:GrResources,
      },
      {
        title: "Planting And Seeding",
        content:
          "Automated drone seeders, used in forestry, enable planting in hard-to-reach areas without risking farmers' safety.",
        icon:TbBrandSnapseed,
      },
      {
        title: "Fast Disaster Assessment",
        content:
          "Quick aerial surveys assess crop damage after floods or storms, enabling faster recovery planning and insurance claims support.",
        icon:GiSpray,
      },
      {
        title: "Security & Surveillance",
        content:
          "Drones monitor remote farm areas and livestock, enabling frequent and efficient surveillance of inaccessible regions.",
        icon:GiCctvCamera,
      },
      {
        title: "Smart & Sustainable Agriculture",
        content:
          "Drones enable precise use of water, fertilizers, and pesticides, reducing waste, lowering costs, and supporting long-term eco-friendly practices.",
        icon:MdLandscape,
      },
    ],
    faq: [
      {
        question: "What services does Vista Drone offer for agriculture?",
        answer: "Vista Drone provides crop health monitoring, irrigation planning, pest detection, yield prediction, spray application, soil health monitoring, and security surveillance to enhance agricultural productivity and sustainability.",
      },
      {
        question: "How do drones help in crop health monitoring?",
        answer: "Our drones use multispectral and thermal imaging to detect issues early, monitor crop health, and generate NDVI maps for accurate crop analysis.",
      },
      {
        question: "What role do drones play in irrigation planning?",
        answer: "Drones create irrigation maps, analyze soil moisture levels, and recommend optimal watering schedules to minimize water waste and improve crop yields.",
      },
      {
        question: "Can drones help with pest detection?",
        answer: "Yes, our drones use advanced imaging to detect pest infestations early, allowing for targeted control measures and reduced pesticide use.",
      },
      {
        question: "How do drones assist in yield prediction?",
        answer: "We analyze plant health, soil conditions, and historical data to provide accurate yield predictions, helping farmers plan and allocate resources efficiently.",
      },
      {
        question: "What is drone spray application, and how is it beneficial?",
        answer: "Drone spray application involves using drones with liquid storage tanks to safely and efficiently spray water or pesticides, conserving resources and enhancing safety.",
      },
      {
        question: "How do drones monitor soil health?",
        answer: "Using microwave sensing, drones capture accurate soil health data, providing precise information for better soil management.",
      },
      {
        question: "Can drones be used for planting and seeding?",
        answer: "Yes, automated drone seeders are used, especially in forestry, to plant in hard-to-reach areas without risking farmers' safety.",
      },
      {
        question: "How do drones help in monitoring field conditions?",
        answer: "Drones provide accurate field mapping, helping identify drainage patterns, wet/dry spots, and areas needing efficient watering.",
      },
      {
        question: "Are drones useful for security and surveillance on farms?",
        answer: "Absolutely, drones monitor remote farm areas and livestock, providing frequent and efficient surveillance of otherwise inaccessible regions.",
      },
    ],
    
  },
 





  {
    title: "Civil Construction",
    description1:
      "Elevate your construction projects with Vista Drone Services. We offer comprehensive drone solutions for site planning, progress monitoring, and safety inspections — ensuring your projects stay on track and within budget.",
      description2:"Our advanced drones are equipped with high-resolution cameras and sophisticated sensors, allowing us to capture detailed aerial imagery and data for precise site analysis and planning. Whether you're in the initial stages of project development or need ongoing monitoring throughout construction, our drone solutions deliver valuable insights to optimize workflow and streamline operations.",
      description3:"",
    image:construction,
    service_description: [
      {
        title: "Site Planning",
        content: "Detailed site analysis, 3D modeling, and high-resolution maps for effective planning and design.",
        image: VscLightbulbSparkle,
        color: "rose"
      },
      {
        title: "Progress Monitoring",
        content: "Regular aerial updates with high-resolution images and 4D modeling to track project progress.",
        image: GiProgression,
        color: "blue"
      },
      {
        title: "Safety Inspections",
        content: "Aerial inspections to identify hazards, ensure safety compliance, and access hard-to-reach areas.",
        image: AiOutlineSafety,
        color: "rose"
      },
      {
        title: "Quality Control",
        content: "High-resolution imagery and thermal imaging for detecting defects and assessing construction quality.",
        image: FaCheck,
        color: "rose"
      },
      {
        title: "Earthwork and Volume Measurements",
        content: "Accurate volume calculations and tracking of material usage and site changes.",
        image: GiCargoCrane,
        color: "rose"
      },
      {
        title: "Safety and Security",
        content: "Aerial surveillance to enhance site safety, detect unauthorized access, and deter theft.",
        image: FaPlusCircle,
        color: "rose"
      }
    ],
    benefits: [
      {
        title: "Enhanced Project Oversight",
        content:
          "Gain real-time insights into construction progress through visual documentation, facilitating timely decision-making and efficient project management.",
        icon: Aperture,
      },
      {
        title: "Improved Safety and Security",
        content:
          "Mitigate risks by monitoring site safety, detecting unauthorized access, and preventing theft, thereby ensuring a secure construction environment.",
        icon: MdHealthAndSafety,
      },
      {
        title: "Environmental Compliance and Monitoring",
        content:
          "Ensure adherence to environmental regulations by monitoring erosion, drainage, and other ecological factors impacting the construction site.",
        icon: AiFillEnvironment,
      },
      {
        title: "Accurate Volume and Resource Management",
        content:
          "Optimize resource utilization through precise calculations of earthworks and material volumes, leading to efficient resource management.",
        icon: BarChart,
      },
      {
        title: "Cost and Time Efficiency",
        content:
          "Reduce project timelines and expenses by leveraging drones for swift inspections and data collection, enhancing overall project efficiency.",
        icon: GiMoneyStack,
      },
      {
        title: "Enhanced Communication and Marketing",
        content:
          "Utilize high-quality visual content for stakeholder communication and marketing purposes, improving client engagement and project transparency.",
        icon: FaChartLine,
      },
    ],
    
    faq: [
      {
        question: "How do drones benefit civil construction projects?",
        answer: "Drones enhance efficiency, safety, and precision by providing accurate surveying, progress monitoring, inspections, and real-time data sharing.",
      },
      {
        question: "What types of drones are used in civil construction?",
        answer: "We use fixed-wing drones for large area mapping, multi-rotor drones for site inspections, and hybrid drones for versatile applications.",
      },
      {
        question: "How do drones improve safety on construction sites?",
        answer: "Drones enable remote inspections of hard-to-reach areas, reducing the need for manual inspections and minimizing risk to personnel.",
      },
      {
        question: "What deliverables does Vista Drone provide for civil construction projects?",
        answer: "Vista Drone delivers 3D models, topographic maps, inspection reports, thermal imaging, progress monitoring, and real-time data feeds for construction projects.",
      },
      {
        question: "What are the benefits of using drones for real estate marketing?",
        answer: "Drones provide cost-effective aerial photography and video, creating dramatic and compelling images that attract customer interest more effectively than traditional methods.",
      },
      {
        question: "How do drones enhance property presentation in real estate?",
        answer: "Drones capture aerial photographs and videos that highlight key property features like backyards, walking paths, pools, and landscaping, which are important to many buyers.",
      },
      {
        question: "Why is aerial imagery important in a competitive real estate market?",
        answer: "Detailed aerial images provide more information, helping a property listing stand out among competitors and potentially increasing revenue over time.",
      },
      {
        question: "How does drone technology create more compelling real estate images?",
        answer: "Drone technology allows for capturing professional-looking, attractive photographs that can quickly capture customer interest, enhancing marketing effectiveness.",
      }

    ],
    
  },

  {
    title: "Oil and Gas Industry",
    description1:
      "Enhance the efficiency, safety, and accuracy of your oil and gas operations with Vista Drone’s specialized aerial solutions. Our advanced drones, equipped with high-resolution cameras and cutting-edge sensors, deliver precise geospatial data tailored to the unique demands of the Middle East's oil and gas sector.We conduct comprehensive aerial surveys of oil fields, pipelines, and both offshore and onshore platforms, generating detailed maps and 3D models to support exploration, site assessment, and resource management.",
      description2:"We conduct comprehensive aerial surveys of oil fields, pipelines, and both offshore and onshore platforms, generating detailed maps and 3D models to support exploration, site assessment, and resource management.",
      description3:"",
    image: oil,
    service_description: [
      {
        title: "Flare stack inspection",
        content:
          "Drones quickly capture detailed images of flare stack heads, reducing the time and cost of repairs and maintenance.",
          image: GiEclipseFlare,
          color : "rose"
      },
      {
        title: "Pipeline inspections",
        content:
          "Using thermal imaging technology, temperature variations during flowing of crude oil or gas can be easily detected, allowing identification oil and gas leaks at a particular section.",
          image: GiLeadPipe,
          color : "rose"
      },
      {
        title: "Offshore oil rig inspections",
        content:
          "Drones provide real-time, high-definition visuals for offshore oil rig inspections, reducing risk and aiding in precise maintenance planning.",
          image: GiOffshorePlatform,
          color : "rose"
      },
      
      {
        title: "Tailings pond inspection",
        content:" Drones enable data collection in hazardous environments, overcoming barriers like extreme weather for safer and more efficient inspections.",
          image: SiSpond,
          color : "rose"
      },
      {
        title: "Oil Spill Detection and Response",
        content:"Drones swiftly detect and measure oil spills, providing real-time data on their location and spread, enabling faster, targeted responses.",
          image: GiMoebiusTrefoil,
          color : "rose"
      },
      {
        title: "Gas Emission Detection and Mapping",
        content:"Drones equipped with optical sensors and payloads like Sniffer 4D efficiently monitor gas emissions over large areas, reducing costs and enabling safe 3D mapping of critical sites.",
          image: GiGasMask,
          color : "rose"
      },


    ],
    benefits: [
      {
        title: "Enhanced Safety and Efficiency ",
        content:
          "Drones enable regular inspections of infrastructure, helping identify potential hazards early and ensuring components are well-maintained, reducing the risk of accidents.",
        icon: MdHealthAndSafety,
      },
      {
        title: "Improved Leak Detection Capabilities",
        content:
          "Drones equipped with thermal and RBG Camera can quickly detect leaks in pipelines and storage units, enabling faster response times, optimized maintenance planning, and reduced operational downtime.",
        icon:GiBarrelLeak,
      },
      {
        title: "Reduced Asset Maintenance Costs",
        content:
          "Maintain compliance with up-to-date inspection data, ensuring that your operations meet all required standards and regulations.",
        icon:GiMoneyStack,
      },
      {
        title: "Emergency Response",
        content:
          "Drones provide real-time aerial assessments for rapid and effective emergency management in hazardous situations.",
        icon:MdSos,
      },
      {
        title: "Accurate Asset Monitoring",
        content:
          "Drones capture high-resolution data, enabling precise monitoring and analysis of oil and petroleum assets for to take informed decision-making for maintenance.",
        icon:FaDatabase,
      },
    ],
    faq: [
      {
        question:
          "How do drones improve the safety of infrastructure inspections?",
        answer:
          " Drones reduce the need for manual inspections in hazardous areas, thereby minimizing risk to human inspectors and providing a safer, more efficient inspection process.",
      },
      {
        question: "How do drones detect oil and gas leaks",
        answer:
          " Drones equipped with thermal imaging technology can detect temperature differences between fluids and the surrounding environment, allowing for the identification of oil and gas leaks.",
      },
      {
        question: "What are the benefits of using drones for offshore oil rig inspections?",
        answer:
          "Drones provide real-time, high-definition visuals that help reduce risk, enhance safety, and aid in precise maintenance planning for offshore oil rigs.",
      },
      {
        question: "How can drones help in detecting and responding to oil spills?",
        answer:
          "Drones swiftly detect oil spills and measure their extent, providing real-time data on their location and spread, which facilitates quicker and more targeted response efforts.",
      },
      {
        question: "What advantages do drones offer for monitoring gas emissions?",
        answer:
          "Drones equipped with optical sensors can efficiently monitor gas emissions over large areas, reducing costs and enabling safe, detailed 3D mapping of critical sites.",
      },
      {
        question: "How do drones contribute to better leak detection capabilities?",
        answer:
          "By providing high-resolution, real-time data, drones improve the accuracy of leak detection, enabling timely maintenance and optimizing resource allocation.",
      },
      {
        question: "What are the cost benefits of using drones for asset maintenance?",
        answer:
          "Drones reduce maintenance costs by providing up-to-date inspection data, helping maintain compliance and allowing for efficient resource allocation and reduced downtime.",
      },
      {
        question: "How do drones support emergency response efforts?",
        answer:
          "Drones offer real-time aerial assessments that enhance emergency response by providing critical information quickly and safely in hazardous situations.",
      },
    ],
  },
  
  {
    title: "Renewable energy",
    description1:
      "Optimize your renewable energy operations with Vista Drone’s cutting-edge aerial solutions. Our UAV systems perform rapid and safe inspections of solar farms, wind turbines, and energy installations—delivering accurate insights without interrupting operations.",
      description2:"We use high-resolution imagery, thermal data, and advanced mapping to detect defects, assess efficiency, and support sustainable practices. This enables energy operators and developers to cut inspection time, minimize risks, and ensure peak performance of renewable assets—all while aligning with environmental and safety standards.",
      description3:"",
    image:solar1,
    service_description:  [
  {
    title: "Solar Panel Inspection",
    image: GiSolarPower , // Replace with a relevant solar icon
    content: "Drones equipped with thermal and visual sensors detect faults like hotspots, cracks, and dirt buildup on solar modules, improving maintenance efficiency.",
    color: "rose",
  },
  {
    title: "Wind Turbine Blade Inspection",
    image: GiWindTurbine , // Replace with a wind turbine icon
    content: "High-resolution drone imagery captures damage such as erosion, cracks, or lightning strikes—removing the need for rope-access and reducing inspection risk.",
    color: "rose",
  },
  {
    title: "Thermal Efficiency Audits",
    image: AiOutlineAudit , // Replace with a thermal or heatmap icon
    content: "Identify temperature anomalies in solar farms or substations to assess equipment performance and prevent energy losses.",
    color: "rose",
  },
  {
    title: "Energy Site Mapping & 3D Modeling",
    image: Md3dRotation , // Replace with a mapping or 3D icon
    content: "Generate high-accuracy orthomosaic maps and 3D terrain models to assist in site planning, layout optimization, and expansion tracking.",
    color: "rose",
  },
  {
    title: "Environmental Impact Monitoring",
    image: GiBonsaiTree, // Replace with a tree/leaf/sustainability icon
    content: "Monitor vegetation, land use, and nearby ecosystems using drone imagery to meet sustainability goals and regulatory standards.",
    color: "rose",
  },
  {
    title: "Infrastructure Integrity Checks",
    image: BsBuildingsFill , // Replace with a gear/toolbox icon
    content: "Inspect solar mounts, inverters, and wind power components safely and efficiently—reducing manual effort and identifying faults early.",
    color: "rose",
  },
],
    benefits: [
  {
    title: "Faster Inspection Cycles",
    content:
      "Complete asset inspections in hours instead of days, minimizing system downtime.",
    icon: TbClockHour5,
  },
  {
    title: "Improved Safety",
    content:
      "Reduce manual inspections at height or over large areas—enhancing worker safety.",
    icon: MdHealthAndSafety ,
  },
  {
    title: "Cost-Effective Monitoring",
    content:
      "Save on manpower and equipment by using drones for scheduled or on-demand inspections.",
    icon: MdSavings,
  },
  {
    title: "Detailed Visual & Thermal Reports",
    content:
      "Receive annotated, high-resolution visual and infrared data for precise fault identification.",
    icon: AiFillPicture,
  },
  {
    title: "Early Problem Detection",
    content:
      "Identify minor issues before they escalate—helping prevent energy loss or equipment failure.",
    icon: MdReportProblem,
  },
  {
    title: "Sustainability & Compliance Support",
    content:
      "Enable better documentation and monitoring to meet environmental goals and regulatory audits.",
    icon: BsClipboardCheck,
  },
],
    faq: [
      {
        question: "What are the common defects observed during solar panel inspections?",
        answer: "Common defects include cell mismatches, cracks, discolorations, delamination, and hotspots, all of which can reduce solar panel efficiency and lifespan.",
      },
      {
        question: "How do drones benefit solar panel inspections?",
        answer: "Drones offer efficiency by covering large areas quickly, cost savings, enhanced safety, high-quality imaging, and thermal detection of hotspots, enabling faster and more accurate inspections.",
      },
      {
        question: "What role does thermal imaging play in solar panel inspections?",
        answer: "Thermal imaging drones detect 'hotspots' where energy may be wasted due to damage or defects, allowing operators to identify areas in need of repair or replacement.",
      },
      {
        question: "How do drones contribute to preventative maintenance of solar panels?",
        answer: "Regular drone inspections identify potential issues early, allowing for preventative maintenance, extending the panels' lifespan, and minimizing downtime.",
      },
      {
        question: "Why are drones essential for wind turbine inspections?",
        answer: "Drones provide safe, efficient, and high-quality inspections of wind turbines, reducing downtime, reaching inaccessible areas, and enabling preventive maintenance.",
      },
      {
        question: "What methodologies are used for wind turbine inspections with drones?",
        answer: "Drones use digital and thermographic cameras for visual inspection of components, detecting structural defects, weaknesses, and hidden failures in turbine blades.",
      },
      {
        question: "How do drones ensure safety during wind turbine inspections?",
        answer: "Drones provide a non-contact, non-destructive inspection method, reducing the need for dangerous climbs and allowing for safe monitoring of critical components.",
      },
      {
        question: "What are the benefits of using drones for both solar and wind turbine inspections?",
        answer: "Drones offer safe inspections, reduced downtime, high-quality imaging, access to hard-to-reach areas, dynamic surveying, and improved maintenance planning.",
      }
    ],
    
  },
  {
    title: "Marine & Coastal Ecosystem",
    description1:
      "Support coral reef conservation and restoration with Vista Drone’s specialized aerial solutions. Our drones are equipped to conduct detailed, non-intrusive surveys that map reef structures, monitor bleaching events, and assess restoration progress with high-resolution imagery and multispectral data.",
      description2:"Through rapid deployment and real-time monitoring, we help environmental teams identify vulnerable coral zones, track ecological changes, and evaluate intervention effectiveness. The aerial insights we provide reduce the need for repeated diving expeditions, minimize environmental disruption, and offer consistent data over time.",
description3:"Vista Drone Services ensures that restoration efforts are guided by accurate, up-to-date information—enabling smarter resource allocation and long-term reef resilience planning.",
    image: marine,
    
    service_description: [
      {
        title: "Overfishing and Depletion Control",
        content:
          "Vista Drone delivers real-time insights into fish populations, habitats, and environmental factors—empowering sustainable fisheries management and helping combat overfishing.",
        image: GiFishBucket,
        color : "red"
      },
      {
        title: "Illegal and Unregulated Fishing",
        content:
          "We strengthen enforcement efforts by monitoring vessel movements and capturing actionable evidence—enabling swift response to illegal fishing activities.",
          image: Cctv ,
          color : "rose"
      },
      {
        title: "Monitoring & Surveillance Limitations",
        content:
          "Our drones fill key surveillance gaps with real-time data on vessel activity and fish stocks—enabling sustainable catch limits and better fisheries management.",
          image: SiExoscale,
          color : "rose"
      },
      {
        title: "Environmental Impact",
        content:
          "Drones reduce environmental impact by detecting illegal trawling, pollution, and monitoring protected marine areas.",
          image: GiBonsaiTree,
          color : "rose"
      },
      {
        title: "Fish Farm Inspection & Maintenance",
        content: "Drones inspect fish farms, monitoring fish health, feeding, and cage conditions, improving efficiency and early issue detection.",
          image: FaMapMarkedAlt,
          color : "rose"
      },
      {
        title: "Data Collection for Sustainable Practices",
        content: "Drones collect marine data to aid fisheries in implementing sustainable practices and making informed decisions.",
          image: BarChart,
          color : "rose"
      },
    ],
    benefits: [
      {
        title: "Real-Time Monitoring",
        content:
          "Track fishing activities live to ensure safety, compliance, and quick response to marine changes.",
        icon: FaSatelliteDish, // represents live tracking and communication
      },
      {
        title: "Accurate Fish Stock Assessment",
        content:
          "Use aerial data to estimate fish populations precisely, aiding sustainable harvesting decisions.",
        icon: GiFishBucket, // represents fishing and stock
      },
      {
        title: "Habitat Mapping",
        content:
          "Generate detailed maps of aquatic ecosystems for better conservation and resource planning.",
        icon: MdMap, // represents mapping and geographic insights
      },
      {
        title: "Cost-Effective Surveys",
        content:
          "Replace expensive boat surveys with efficient, high-coverage drone operations in less time.",
        icon: GiMoneyStack, // represents cost savings
      },
      {
        title: "Environmental Impact Reduction",
        content:
          "Minimize disturbances to marine habitats through non-intrusive, high-resolution aerial observations.",
        icon: AiFillEnvironment, // represents ecological and environmental concern
      },
      {
        title: "Data-Driven Decisions",
        content:
          "Access actionable insights with 3D models and analytics for smarter fishery management strategies.",
        icon: FaChartBar, // represents analytics and data-based insights
      },
    ]
    ,
    faq: [
      {
        question: "What challenges do marine fisheries face?",
        answer: "Marine fisheries face challenges such as overfishing, illegal fishing, difficulties in monitoring vast ocean areas, environmental impacts, and high costs of traditional surveillance methods.",
      },
      {
        question: "How do Vista Drone solutions address overfishing and fish stock depletion?",
        answer: "Vista Drone offers real-time data, surveillance, and monitoring to collect accurate information on fish populations and environmental conditions, aiding fisheries managers in making informed decisions on quotas and sustainability measures.",
      },
      {
        question: "How can drones help combat illegal fishing activities?",
        answer: "Vista Drone enhances enforcement capabilities by tracking vessels, capturing evidence of illegal fishing, enabling rapid response by authorities, and increasing compliance with fisheries regulations.",
      },
      {
        question: "How do drones reduce the environmental impact of fishing?",
        answer: "Drones detect and mitigate environmental damage such as illegal trawling or pollution and monitor protected marine areas, ensuring the preservation of sensitive habitats.",
      },
      {
        question: "What are the benefits of using drones for fish farm inspection and maintenance?",
        answer: "Drones conduct regular inspections of fish farms, monitor fish health, feeding patterns, and structural conditions, detecting issues early, reducing manual inspections, and improving operational efficiency.",
      }
    ],
    
  },

  {
    title: "Solar",
    description1:
      "",
      description2:"",
      description3:"",
    image: solar3,
    service_description: [
      {
        title: "Solar Panel inspection & monitoring",
          image: Diameter,
          content: "Drones equipped with thermal and visual sensors detect faults like hotspots, cracks, and dirt buildup on solar modules, improving maintenance efficiency.",
          color : "rose"
      },
      {
        title: "Wind Turbine inspection & monitoring",
        content:"High-resolution drone imagery captures damage such as erosion, cracks, or lightning strikes—removing the need for rope-access and reducing inspection risk.",
          image: Diameter,
          color : "rose"
      },
      


    ],
    benefits: [
      {
        title: "Efficiency",
        content: "Drones quickly cover large areas, streamlining inspections and saving time compared to manual methods.",
        icon: FaChartLine 
      },
      {
        title: "Cost Savings",
        content: "Drones reduce costs by minimizing the need for workers and speeding up inspection times.",
        icon: FaMoneyBillTrendUp 
      },
      {
        title: "Safety",
        content: "Remote drone inspections prevent workplace accidents by avoiding dangerous climbs and equipment use.",
        icon: AiOutlineSafety 
      },
      {
        title: "High-Quality Imaging",
        content: "Drones capture detailed images of panels, identifying damage, dirt, or defects effectively.",
        icon: ImImage
      },
      {
        title: "Thermal Imaging",
        content: "Drones detect hotspots on panels, pinpointing areas needing repair to prevent energy loss.",
        icon: FaHotjar 
      },
      {
        title: "Accurate Data Collection",
        content: "Drones capture precise data, including GPS coordinates and altitudes, using integrated drone software.",
        icon: FaDatabase 
      },
      {
        title: "Preventative Maintenance",
        content: "Drones detect potential issues early, allowing for preventative maintenance to extend panel lifespan.",
        icon: FaTools 
      },
      {
        title: "Real-Time Insights",
        content: "Drones provide real-time data for quick assessment and response to issues during inspections.",
        icon: FaClockRotateLeft 
      },
      {
        title: "Improved Documentation",
        content: "Drones digitally record inspections, aiding in tracking changes and supporting analysis and claims.",
        icon: IoMdDocument
      },
      {
        title: "Minimised Downtime",
        content: "Faster drone inspections allow timely repairs, reducing downtime and maximizing solar energy production.",
        icon: FaSortAmountDown 
      }
    ],
    faq: [
      {
        question: "What are the common defects observed during solar panel inspections?",
        answer: "Common defects include cell mismatches, cracks, discolorations, delamination, and hotspots, all of which can reduce solar panel efficiency and lifespan.",
      },
      {
        question: "How do drones benefit solar panel inspections?",
        answer: "Drones offer efficiency by covering large areas quickly, cost savings, enhanced safety, high-quality imaging, and thermal detection of hotspots, enabling faster and more accurate inspections.",
      },
      {
        question: "What role does thermal imaging play in solar panel inspections?",
        answer: "Thermal imaging drones detect 'hotspots' where energy may be wasted due to damage or defects, allowing operators to identify areas in need of repair or replacement.",
      },
      {
        question: "How do drones contribute to preventative maintenance of solar panels?",
        answer: "Regular drone inspections identify potential issues early, allowing for preventative maintenance, extending the panels' lifespan, and minimizing downtime.",
      },
      {
        question: "Why are drones essential for wind turbine inspections?",
        answer: "Drones provide safe, efficient, and high-quality inspections of wind turbines, reducing downtime, reaching inaccessible areas, and enabling preventive maintenance.",
      },
      {
        question: "What methodologies are used for wind turbine inspections with drones?",
        answer: "Drones use digital and thermographic cameras for visual inspection of components, detecting structural defects, weaknesses, and hidden failures in turbine blades.",
      },
      {
        question: "How do drones ensure safety during wind turbine inspections?",
        answer: "Drones provide a non-contact, non-destructive inspection method, reducing the need for dangerous climbs and allowing for safe monitoring of critical components.",
      },
      {
        question: "What are the benefits of using drones for both solar and wind turbine inspections?",
        answer: "Drones offer safe inspections, reduced downtime, high-quality imaging, access to hard-to-reach areas, dynamic surveying, and improved maintenance planning.",
      }
    ],
    
  },
];
