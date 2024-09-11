import { ForwardRefExoticComponent, RefAttributes } from "react";
import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props";
import windimg from "@/assets/images/green energy/wind-2.jpg"
import mine from "@/assets/images/mining/mine1.jpeg";
import agriculture from "@/assets/images/agriculture/agriculture2.jpeg";
import construction from "@/assets/images/construction&realestate/construction1.jpeg";
import oil from "@/assets/images/oil&gas/oil1.jpeg";
import solar1 from '@/assets/images/greenenergy/solar1.jpeg'
import solar2 from '@/assets/images/greenenergy/solar2.jpeg'
import solar3 from '@/assets/images/greenenergy/solar3.jpeg'
import steel from '@/assets/images/steel/steel1.jpeg'
import marine from "@/assets//images/marinefish/marine1.jpeg"

import { Aperture, BarChart, Cctv, Diameter, LucideProps } from "lucide-react";
import { GiEclipseFlare,GiLeadPipe,GiOffshorePlatform,GiMoebiusTrefoil,GiGasMask,GiBarrelLeak,GiMoneyStack,GiBonsaiTree,GiPathDistance,GiProgression,GiCargoCrane,GiReceiveMoney,GiSatelliteCommunication,GiPlantRoots,GiWateringCan,GiSpray,GiHealthPotion,GiCctvCamera,GiCrackedGlass } from "react-icons/gi";
import { BsDatabaseFillCheck,BsFillSignYieldFill } from "react-icons/bs";
import { TbBrandSnapseed,TbCell } from "react-icons/tb";
import { PiThermometerHotFill } from "react-icons/pi";
import { VscColorMode } from "react-icons/vsc";


import { PiWall,PiPlantLight } from "react-icons/pi";
import { VscLightbulbSparkle } from "react-icons/vsc";

import { SiSpond,SiExoscale,SiSubversion  } from "react-icons/si";
import { MdHealthAndSafety,MdSos,MdOutlinePestControl,MdLandscape } from "react-icons/md";

import { FaNoteSticky,FaHelmetSafety,FaMoneyBillTrendUp,FaHotjar,FaClockRotateLeft } from "react-icons/fa6";
import { FaDatabase,FaMapMarkedAlt,FaCheck,FaPlusCircle,FaEye,FaCalendarCheck,FaChartLine,FaTools,FaSortAmountDown    } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import { RiHotspotFill } from "react-icons/ri";
import { AiOutlineSafetyCertificate,AiOutlineSafety,AiFillEnvironment  } from "react-icons/ai";

import { ImImage } from "react-icons/im";
import { IoMdDocument } from "react-icons/io";

import { IconType } from "react-icons/lib";



interface Service {
  title: string;
  description: string;
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
  image: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>> | IconType | StaticImport;
  color  : string
};

type faq = {
  question: string;
  answer: string;
};

export const services: Service[] = [
  {
    title: "Mining",
    description:
      "Maximize operational efficiency and safety in your mining projects with Vista Drone Services. Our specialized drone solutions provide precise aerial data, helping you streamline exploration, site assessment, and resource management. Utilizing state-of-the-art drones equipped with high-resolution cameras and advanced sensors, we conduct comprehensive aerial surveys that generate detailed maps and 3D models of your site. This allows for accurate identification of mineral deposits and thorough evaluation of terrain conditions. By capturing extensive data quickly and safely from above, we eliminate the need for manual ground surveys, thus minimizing the risk to personnel and reducing operational downtime. ",
    image: mine,
    
    service_description: [
      {
        title: "Aerial Surveys",
        content:
          " High-resolution drones provide 3D maps, mineral identification, terrain assessment, and georeferenced orthomosaic maps.",
        image: Aperture,
        color : "red"
      },
      {
        title: "Real-time Monitoring",
        content:
          "Our drones offer real-time monitoring for drilling, pipelines, and environmental impact, aiding safety and decision-making.",
          image: Cctv ,
          color : "rose"
      },
      {
        title: "Volumetric Measurements",
        content:
          "Our drones precisely measure stockpile volumes and excavation quantities, aiding inventory management and project planning.",
          image: SiExoscale,
          color : "rose"
      },
      {
        title: "Environmental Impact Assessments",
        content:
          "We conduct environmental assessments, monitoring damage like soil erosion and water contamination, to ensure compliance and sustainability.",
          image: GiBonsaiTree,
          color : "rose"
      },
      {
        title: "Exploration & Planning",
        content: "Leasehold area survey, mapping, DTM, DSM, excavation, and environmental impact assessment of the entire site.",
          image: FaMapMarkedAlt,
          color : "rose"
      },
      {
        title: "Slope Analysis",
        content: "Hill slopes can be shown as per the angles in specific colors to get a better understanding for planning of mines.",
          image: BarChart,
          color : "rose"
      },
    ],
    benefits: [
      {
        title: "Enhanced Safety",
        content:
          "Minimize on-ground risks by utilizing aerial data collection, reducing the need for personnel in hazardous areas.",
      icon: AiOutlineSafetyCertificate,
      },
      {
        title: "Cost Efficiency",
        content:
          "Reduce operational costs with precise data and efficient resource management, avoiding over-extraction and optimizing resource use.",
        icon: GiMoneyStack,
      },
      {
        title: "Accurate Data",
        content:
          "Obtain high-precision data for better decision-making and project planning, ensuring more accurate forecasting and budgeting.",
        icon:BsDatabaseFillCheck,
      },
      {
        title: "Distances",
        content:
          "Any specific distance can be measured precisely whether horizontally or vertically.",
        icon:GiPathDistance,
      },
      {
        title: "Boundaries",
        content:
          "The lease boundary can be geo-tagged and generated to view the limits more accurately and plan suitably.  ",
        icon:PiWall,
      },
      {
        title: "Accurate Data",
        content:
          "Obtain high-precision data for better decision-making and project planning, ensuring more accurate forecasting and budgeting.",
        icon:FaHelmetSafety,
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
    description:
      "Transform your planning and survey processes with our advanced drone technology. Vista Drone Services offers comprehensive solutions to support topographic mapping, land surveying, and infrastructure assessment. Our high-resolution drones capture detailed aerial imagery and data, enabling the creation of accurate topographic maps and 3D models. This detailed data collection aids in precise terrain analysis, essential for planning construction projects, land development, and environmental studies. By leveraging our drone technology, you can efficiently gather the necessary data for site evaluations and project planning, reducing the need for traditional ground surveys and enhancing the accuracy of your assessments. ",
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
        content:"Detects heat anomalies to prevent failures, ensures maintenance, and identifies overheating and inefficiencies through regular thermal audits.",
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
          "Real-time monitoring of emissions and environmental impact ensures compliance, supports sustainability, and reduces ecological footprint.",
          image: PiPlantLight,
          color : "rose"
      },
      {
        title: "Emergency Response",
        content:"Rapid deployment provides quick incident assessment, supports disaster management, and offers real-time situational awareness for effective decisions.",
          image: MdSos,
          color : "rose"
      },
      
    ],
    benefits: [
      {
        title: "Increased Efficiency",
        content: "Streamlined inspection processes",
        icon:FaHelmetSafety,
      },
      {
        title: "Enhanced Safety",
        content:"Minimized need for manual inspections in hazardous areas",
        icon:MdHealthAndSafety,
      },
      {
        title: "Cost Savings",
        content:
          "Efficient resource allocation and preventive maintenance.",
        icon:GiReceiveMoney,
      },
      {
        title: "Data-Driven Decisions",
        content:"Access to accurate, timely data",
        icon:BsDatabaseFillCheck,
      },
      {
        title: "Regulatory Compliance",
        content:"Continuous monitoring supports meeting safety and environmental regulations",
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
    description:
      "Optimize your agricultural operations with Vista Drone Services. Our drone solutions provide actionable insights for crop management, irrigation planning, and pest detection, helping you enhance productivity and sustainability. Leveraging advanced drone technology, we conduct comprehensive aerial surveys of your fields, capturing high-resolution imagery and data for detailed crop analysis. This enables us to monitor crop health, identify potential issues such as nutrient deficiencies or pest infestations, and provide timely recommendations for optimized management practices. By integrating our drone solutions into your agricultural operations, you can make informed decisions to maximize yields while minimizing resource usage and environmental impact.",
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
        content : "Crop spraying drones carry tanks and spray efficiently, enhancing safety and resource conservation in the field.",
        image  : GiSpray,
        color : "blue"
        
      },
      {
        title : ' Soil health monitoring',
        content : "Using microwave sensing, drones are able to capture very accurate soil health information.",
        color :"rose",
        image  : GiHealthPotion 
      }
    ],
    benefits: [
      {
        title: "Monitoring Plant Health",
        content:
          " Drones with NDVI imaging and software analysis adjust values to reflect crop type and growth stage.",
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
        title: "Spray Application",
        content:
          "Crop spraying drones with liquid tanks operate safely, spraying water and pesticides efficiently while conserving resources.",
        icon:GiSpray,
      },
      {
        title: "Security & Surveillance",
        content:
          "Drones monitor remote farm areas and livestock, enabling frequent and efficient surveillance of inaccessible regions.",
        icon:GiCctvCamera,
      },
      {
        title: " Soil health monitoring ",
        content:
          "Microwave sensing drones capture highly accurate soil health data for precise analysis.",
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
    description:
      "Elevate your construction projects with Vista Drone Services. We offer comprehensive drone solutions for site planning, progress monitoring, and safety inspections, ensuring your projects stay on track and within budget. Our advanced drones are equipped with high-resolution cameras and sophisticated sensors, enabling us to capture detailed aerial imagery and data for precise site analysis and planning. Whether youre in the initial stages of project development or require ongoing monitoring throughout construction, our drone solutions provide valuable insights to optimize your project workflow and streamline operations.",
    image:construction,
    service_description: [
      {
        title: "Site Planning:",
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
        content: "Calculating volumes and monitoring material use and site changes.",
        image: GiCargoCrane,
        color: "rose"
      },
      {
        title: "Safety and Security",
        content: "Surveillance for site safety, unauthorized access monitoring, and theft prevention.",
        image: FaPlusCircle,
        color: "rose"
      }
    ],
    benefits: [
      {
        title: "Enhanced Site Surveying and Mapping",
        content:
          " Quick Data Collection & High Accuracy",
        icon:Aperture,
      },
      {
        title: "Improved Safety",
        content:
          "Risk Reduction & Safety Monitoring",
        icon:MdHealthAndSafety,
      },
      {
        title: " Environmental Monitoring",
        content:"Compliance ,Erosion and Drainage Monitoring",
        icon:GiBonsaiTree,
      },
      {
        title: "Time and Cost Savings",
        content:
          "Efficient Project Management & Cost-Effective Inspections",
        icon:GiMoneyStack,
      },
      {
        title: "Progress Tracking and Reporting",
        content:"Real-Time Monitoring & Visual Documentation",
        icon:FaClockRotateLeft,
      },
      {
        title: "Improved Communication and Collaboration",
        content:"Visual Data Sharing & Remote Accessibility",
        icon:GiSatelliteCommunication,
      },
      
      {
        title: "Accurate Volume Measurements and Earthworks Management",
        content:"Precise Calculations & Efficient Resource Management",
        icon:BarChart,
      },
      {
        title: "Environmental Monitoring",
        content:"Compliance & Erosion and Drainage Monitoring",
        icon:AiFillEnvironment ,
      },
      {
        title: "Marketing and Business Development",
        content:"Visual Marketing Content & Client Engagement",
        icon:FaChartLine ,
      },
      {
        title: "Enhanced Inspection Capabilities",
        content:"Detailed Inspections & Thermal and Multispectral Imaging",
        icon:Cctv,
      },
      {
        title: "Flexibility and Versatility",
        content:"Adaptability to Various Projects & Operation in Difficult Terrains",
        icon:SiSubversion,
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
    description:
      "Maximize operational efficiency and safety in your oil and gas operations with Vista Drone Services. Our specialized drone solutions are tailored to the unique demands of the Middle East's oil and gas sector, providing precise aerial data that enhances exploration, site assessment, and resource management. Equipped with state-of-the-art drones featuring high-resolution cameras and advanced sensors, we conduct comprehensive aerial surveys of your oil fields, pipelines, and offshore platforms. This generates detailed maps and 3D models that facilitate accurate monitoring and management of your assets. By capturing extensive, high-quality data quickly and safely from above, we streamline the inspection process and reduce reliance on traditional ground surveys. This approach not only minimizes risk to personnel but also decreases operational downtime, allowing for timely identification of issues such as leaks, structural damage, and environmental concerns. Our services ensure that you maintain optimal operational efficiency and safety standards, driving the success of your oil and gas projects in the dynamic Middle Eastern market.",
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
          "Using thermal imaging technology, temperature differences between fluids and the ground can be easily detected and oil and gas leaks can be found.",
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
        title: "Oil spill and oil spill detection",
        content:"Drones swiftly detect and measure oil spills, providing real-time data on location and spread, enabling faster, targeted response.",
          image: GiMoebiusTrefoil,
          color : "rose"
      },
      {
        title: "Monitor gas emissions",
        content:"Drones with optical sensors efficiently monitor gas emissions over large areas, reducing costs and enabling safe 3D mapping of critical sites.",
          image: GiGasMask,
          color : "rose"
      },


    ],
    benefits: [
      {
        title: "Enhanced Safety and Efficiency ",
        content:
          "Reduce the risk of accidents with regular inspections, ensuring that infrastructure components are in good condition and identifying hazards early.",
        icon: MdHealthAndSafety,
      },
      {
        title: "Better Leak Detection Capabilities",
        content:
          "Optimize maintenance schedules and resource allocation, reducing downtime and improving the overall performance of infrastructure assets.",
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
        title: "More Accurate Data Collection",
        content:
          "Drones capture high-resolution, detailed data for precise monitoring and analysis of oil and petroleum assets.",
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
    title: "Green Energy",
    description:
      "Commercial Drone Services in the Oil & Gas , Civil Infrastructure, Mining, Surveillance, Agriculture & Farming, Green Energy | Skill development through Training program of Drone Operator | Testing, Service and Maintenance of the Drone.",
    image:solar1,
    service_description: [
      {
        title: "Solar Panel inspection & monitoring",
          image: solar2,
          content: "Drones are used for inspecting and maintaining solar panels, identifying issues quickly, and optimizing energy production.",
          color : "rose"
      },
      {
        title: "Wind Turbine inspection & monitoring",
        content:"Wind turbine inspections are of crucial importance as wind turbines need continuous monitoring and maintenance to ensure they are operating at the optimum efficiency. Critical components have to be carefully monitored by means of a systematic maintenance program and regular inspections.",
          image:windimg,
          color : "rose"
      },
      


    ],
    benefits: [
      {
        title: "Cell Mismatch Defect",
        content:
          "Cell mismatches in photovoltaic (PV) cells can significantly impact system output and yield,potentially leading to hotspots causing browning, burns, or fire.",
        icon:TbCell,
      },
      {
        title: "Cracks",
        content:
          "Defects in photovoltaic systems, resulting from manufacturing processes, handling, packaging, transport, and reloading, and harsh climates like strong winds, snow, and hail, are common throughout their lifetime.",
        icon:GiCrackedGlass,
      },
      {
        title: "Discolorations",
        content:
          "PV systems can suffer from discoloration due to internal components like low-quality polymers or external factors like high temperatures and humidity, reducing sunlight entry and causing significant losses.",
        icon:VscColorMode,
      },
      {
        title: "Delamination",
        content:
          "Through a PV modules’ lifetime, adhesive bonds between solar cells’ materials can begin to hold moisture, causing severe delamination. These defects can also occur due to improper lamination methods and harsh weather conditions.",
        icon:FaNoteSticky,
      },
      {
        title: "Hotspots",
        content:
          "Overloaded regions on solar panels can cause warm spots due to poorly soldered cell connections or structural flaws, resulting in increased resistance and short-circuits, depreciating the productivity and goodwill of the PV system.",
        icon:RiHotspotFill,
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
    title: "Marine Fisheries",
    description:
      "Enhance operational efficiency and safety in your marine fisheries with Vista Drone Services. Our advanced drone solutions deliver precise aerial data, optimizing fish stock monitoring, habitat mapping, and resource management. Equipped with high-resolution cameras and specialized sensors, our drones conduct comprehensive aerial surveys to generate detailed maps and 3D models of aquatic environments. This enables accurate monitoring of fish populations, habitat conditions, and environmental changes.In addition to initial surveys, our drones offer real-time monitoring of fishing activities and marine ecosystems. This continuous oversight helps ensure safety and regulatory compliance by providing live feeds and high-resolution imagery for immediate detection and response to potential issues. By integrating our state-of-the-art drone technology, Vista Drone Services supports effective fishery management, minimizes environmental impact, and enhances decision-making with up-to-date, actionable data.",
    image: marine,
    
    service_description: [
      {
        title: "Overfishing and Depletion Control",
        content:
          " Vista Drone provides real-time data on fish populations, habitat, and environmental factors for informed fisheries management.",
        image: Aperture,
        color : "red"
      },
      {
        title: "Illegal,and Unregulated Fishing.",
        content:
          "Vista Drone enhances enforcement by tracking vessels and capturing evidence of illegal fishing for rapid response.",
          image: Cctv ,
          color : "rose"
      },
      {
        title: "Monitoring & Surveillance Limitations",
        content:
          "Our drones accurately measure stockpile volumes and excavation quantities, supporting inventory management and project planning.",
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
        title: "Enhanced Safety",
        content:
          "Minimize on-ground risks by utilizing aerial data collection, reducing the need for personnel in hazardous areas.",
      icon: AiOutlineSafetyCertificate,
      },
      {
        title: "Cost Efficiency",
        content:
          "Reduce operational costs with precise data and efficient resource management, avoiding over-extraction and optimizing resource use.",
        icon: GiMoneyStack,
      },
      {
        title: "Accurate Data",
        content:
          "Obtain high-precision data for better decision-making and project planning, ensuring more accurate forecasting and budgeting.",
        icon:BsDatabaseFillCheck,
      },
      {
        title: "Distances",
        content:
          "Any specific distance can be measured precisely whether horizontally or vertically.",
        icon:GiPathDistance,
      },
      {
        title: "Boundaries",
        content:
          "The lease boundary can be geo-tagged and generated to view the limits more accurately and plan suitably.  ",
        icon:PiWall,
      },
      {
        title: "Accurate Data",
        content:
          "Obtain high-precision data for better decision-making and project planning, ensuring more accurate forecasting and budgeting.",
        icon:FaHelmetSafety,
      },
    ],
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
    description:
      "",
    image: solar3,
    service_description: [
      {
        title: "Solar Panel inspection & monitoring",
          image: Diameter,
          content: "Drones are used for inspecting and maintaining solar panels, identifying issues quickly, and optimizing energy production.",
          color : "rose"
      },
      {
        title: "Wind Turbine inspection & monitoring",
        content:"Wind turbine inspections are of crucial importance as wind turbines need continuous monitoring and maintenance to ensure they are operating at the optimum efficiency. Critical components have to be carefully monitored by means of a systematic maintenance program and regular inspections.",
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
