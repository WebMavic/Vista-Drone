import mining from "@/assets/images/mining_info.jpeg";
import survey from "@/assets/images/drones_construction_industry.jpg";
import agriculture from "@/assets/images/agriculture_info.jpg";
import construction from "@/assets/images/construction/const-3.jpg";
import oil from "@/assets/images/oil.png";
import green from '@/assets/images/green energy/wind-1.jpg'

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Aperture, BarChart, Cctv, Diameter, LucideProps } from "lucide-react";
import { GiEclipseFlare,GiLeadPipe,GiOffshorePlatform,GiMoebiusTrefoil,GiGasMask,GiBarrelLeak,GiMoneyStack,GiBonsaiTree,GiPathDistance,GiProgression,GiCargoCrane } from "react-icons/gi";
import { BsDatabaseFillCheck } from "react-icons/bs";

import { PiWall } from "react-icons/pi";
import { VscLightbulbSparkle } from "react-icons/vsc";

import { SiSpond,SiExoscale } from "react-icons/si";
import { MdHealthAndSafety,MdSos } from "react-icons/md";
import { FaDatabase,FaMapMarkedAlt,FaCheck,FaPlusCircle } from "react-icons/fa";
import { AiOutlineSafetyCertificate,AiOutlineSafety } from "react-icons/ai";



import { FaHelmetSafety } from "react-icons/fa6";
import { IconType } from "react-icons/lib";



interface Service {
  title: string;
  description: string;
  image: StaticImport;
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
  image: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>> | IconType;
  color  : string
};

type faq = {
  question: string;
  answer: string;
};

export const services: Service[] = [
  {
    title: "Mining and Petroleum",
    description:
      "Maximize operational efficiency and safety in your mining and petroleum projects with Vista Drone Services. Our specialized drone solutions provide precise aerial data, helping you streamline exploration, site assessment, and resource management. Utilizing state-of-the-art drones equipped with high-resolution cameras and advanced sensors, we conduct comprehensive aerial surveys that generate detailed maps and 3D models of your site. This allows for accurate identification of mineral deposits and thorough evaluation of terrain conditions. By capturing extensive data quickly and safely from above, we eliminate the need for manual ground surveys, thus minimizing the risk to personnel and reducing operational downtime. ",
    image: mining,
    
    service_description: [
      {
        title: "Aerial Surveys",
        content:
          " Utilizing high-resolution drones equipped with advanced sensors, we capture detailed imagery and create 3D maps for accurate site analysis. These surveys assist in identifying mineral deposits, evaluating terrain conditions, and planning extraction processes. We also provide orthomosaic maps that offer a seamless, georeferenced representation of the survey area.",
        image: Aperture,
        color : "red"
      },
      {
        title: "Real-time Monitoring",
        content:
          "Our drones offer continuous real-time monitoring, crucial for maintaining safety and operational efficiency. This includes live feed monitoring of drilling operations, pipeline inspections, and environmental impact monitoring. Real-time data helps in making prompt decisions and mitigating risks.",
          image: Cctv ,
          color : "rose"
      },
      {
        title: "Volumetric Measurements",
        content:
          "Accurate calculation of stockpile volumes and excavation quantities is essential for inventory management and project planning. Our drones measure volumes with high precision, providing detailed reports that help in tracking material movement, ensuring compliance with contractual agreements, and optimizing resource allocation.",
          image: SiExoscale,
          color : "rose"
      },
      {
        title: "Environmental Impact Assessments",
        content:
          "We conduct thorough environmental assessments to help you comply with regulatory standards. This includes monitoring for potential environmental damage, such as soil erosion, water contamination, and deforestation, and providing actionable data to support sustainable practices and minimize environmental impact.",
          image: GiBonsaiTree,
          color : "rose"
      },
      {
        title: "Exploration & Planning",
        content: "Lease hold area Survey & mapping Digital Terrain Modelling (DTM) of the entire site , Digital Surface Modelling (DSM) of the entire site Excavation & Environmental impact Assessment",
          image: FaMapMarkedAlt,
          color : "rose"
      },
      {
        title: "Slope Analysis",
        content: "he slopes can be shown as per the angles in specific colors to get a better understanding for planning of mines.",
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
        question: "How accurate are your volumetric measurements?",
        answer:
          "Our drones use advanced sensors and software to provide volumetric measurements with an accuracy of within 1-2%, ensuring precise inventory tracking and resource management",
      },
      {
        question: "Can drones be used for offshore petroleum sites?",
        answer:
          "Yes, our drones are equipped to handle offshore conditions, providing reliable data for offshore exploration, rig inspections, and pipeline monitoring, even in challenging weather. ",
      },
      {
        question: "What is the turnaround time for aerial surveys? ",
        answer:
          "Depending on the size and complexity of the site, most surveys can be completed within 1-3 days, with data analysis and comprehensive reports available within a week.",
      },
    ],
  },
  
  {
    title: "Steel Industries",
    description:
      "Transform your planning and survey processes with our advanced drone technology. Vista Drone Services offers comprehensive solutions to support topographic mapping, land surveying, and infrastructure assessment. Our high-resolution drones capture detailed aerial imagery and data, enabling the creation of accurate topographic maps and 3D models. This detailed data collection aids in precise terrain analysis, essential for planning construction projects, land development, and environmental studies. By leveraging our drone technology, you can efficiently gather the necessary data for site evaluations and project planning, reducing the need for traditional ground surveys and enhancing the accuracy of your assessments. ",
    image:survey,
      
      
    service_description: [
      {
        title: "Routine Inspections",
        content:"Infrastructure, steel structures, storage facilities, machinery.",
          image: Diameter,
          color : "rose"
      },
      {
        title: "Real-Time Monitoring",
        content:"For security and operational oversight.",
          image: Diameter,
          color : "rose"
      },
      {
        title: "High-Resolution Imagery",
        content:
          "Detailed analysis for maintenance and planning.",
          image: Diameter,
          color : "rose"
      },
      {
        title: "Thermal Imaging",
        content:
          "Detects heat anomalies in equipment and structures to prevent failures ,Regular thermal audits to ensure maintenance and safety compliance, Early detection of overheating, energy loss, and equipment inefficiencies",
          image: Diameter,
          color : "rose"
      },
      {
        title: "Mapping and Modeling",
        content:"Accurate 3D models for planning, construction, and maintenance , Detailed topographic surveys for terrain analysis and site planning,Volumetric calculation for inventory management and material estimation.",
          image: Diameter,
          color : "rose"
      },
      {
        title: "Environmental Monitoring",
        content:
          "Real-time monitoring of emissions and environmental impact ,Data collection to ensure compliance with environmental regulations,Support for sustainability initiatives and reduction of ecological footprint",
          image: Diameter,
          color : "rose"
      },
      {
        title: "Emergency Response",
        content:"Rapid deployment for quick assessment of incidents,Support in disaster management and recovery operations,Real-time situational awareness for effective decision-making",
          image: Diameter,
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
        icon:FaHelmetSafety,
      },
      {
        title: "High Precision",
        content:
          "Achieve detailed and accurate survey results for better planning and execution, ensuring project accuracy and regulatory compliance",
        icon:FaHelmetSafety,
      },
      {
        title: "Data-Driven Decisions",
        content:"Access to accurate, timely data",
        icon:FaHelmetSafety,
      },
      {
        title: "Regulatory Compliance",
        content:"Continuous monitoring supports meeting safety and environmental regulations",
        icon:FaHelmetSafety,
      },
    ],
    faq: [
      {
        question: "What types of infrastructure can you assess with drones? ",
        answer:
          "We can assess roads, bridges, buildings, pipelines, and other critical infrastructure components, providing comprehensive visual and thermal data.",
      },
      {
        question: "How do you ensure the accuracy of land surveys?",
        answer:
          " Our drones use advanced GPS and RTK technology to achieve high accuracy, often within a few centimeters, providing reliable data for property development and boundary delineation.",
      },
      {
        question: "Can you provide 3D models for large areas? ",
        answer:
          "Yes, we can create detailed 3D models for both small and large areas, depending on the project requirements, using photogrammetry and LiDAR technology.",
      },
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
          "Using multispectral and thermal imaging, we monitor crop health and detect issues early. This helps in identifying nutrient deficiencies, disease outbreaks, and water stress. Our drones fly over fields to capture images that are then processed to generate NDVI (Normalized Difference Vegetation Index) maps, indicating the health and vigor of crops.",
          image: Diameter,
          color : "rose"
      },
      {
        title: "Irrigation Planning",
        content:
          "Our drones create detailed irrigation maps that help in efficient water usage. By analyzing soil moisture levels and identifying areas with inadequate or excessive irrigation, we provide recommendations for optimal irrigation schedules, reducing water waste and improving crop yields.",
          image: Diameter,
          color : "rose"
      },
      {
        title: "Pest Detection",
        content:
          "Early identification of pest infestations is crucial for minimizing crop damage. Our drones use advanced imaging to detect pest activity by spotting changes in crop coloration and health, providing data for targeted pest control measures, and reducing the need for widespread pesticide application.",
          image: Diameter,
          color : "rose"
      },
      {
        title: "Yield Prediction",
        content:
          "We analyze various factors such as plant health, soil conditions, and historical data to provide accurate yield predictions. By integrating data from different stages of crop growth, we offer insights into expected yields, helping farmers in better planning, marketing, and resource allocation.",
          image: Diameter,
          color : "rose"
      },
      {
        title : 'Spray Application',
        content : "Crop spraying drones can carry liquid storage tanks and can be operated more safely. Water/pesticides can be sprayed in the field in a most efficient way and helping to conserve resources.",
        image  : Diameter,
        color : "blue"
        
      },
      {
        title : ' Soil health monitoring',
        content : "Using microwave sensing, drones are able to capture very accurate soil health information.",
        color :"rose",
        image  : Diameter 
      }
    ],
    benefits: [
      {
        title: "Improved Yield",
        content:
          " Enhance crop productivity with precise data insights, ensuring optimal growth conditions and timely interventions.",
        icon:FaHelmetSafety,
      },
      {
        title: "Resource Management",
        content:
          " Optimize resource usage and reduce waste, leading to cost savings and more sustainable farming practices.",
        icon:FaHelmetSafety,
      },
      {
        title: "Sustainability",
        content:
          "Promote sustainable farming practices with advanced technology, reducing the environmental impact of agricultural activities.",
        icon:FaHelmetSafety,
      },
      {
        title: "Monitoring Plant Health",
        content:
          "Software analysis can be used to change values in order to reflect the specific crop type and even in which stage of life a specific crop is in.",
        icon:FaHelmetSafety,
      },
      {
        title: "Monitoring Field Condition",
        content:
          "Drones provide accurate field mapping.Having information on field elevation is useful in determining drainage patterns and wet/dry spots which allow for more efficient watering techniques.",
        icon:FaHelmetSafety,
      },
      {
        title: "Planting And Seeding",
        content:
          "Automated drone seeders are mostly being used in forestry industries.Planting with drones means very hard to reach areas can be re-planted without endangering farmers.",
        icon:FaHelmetSafety,
      },
    ],
    faq: [
      {
        question:
          "How frequently should drone surveys be conducted on crops?  ",
        answer:
          "This depends on the crop type and growth stage, but typically, monthly surveys provide sufficient data for effective monitoring and timely interventions.",
      },
      {
        question: "Can drones detect specific crop diseases?",
        answer:
          "Yes, our drones can identify specific diseases by analyzing changes in plant health through multispectral and thermal imaging, allowing for early treatment and prevention of disease spread.",
      },
      {
        question: "What is the accuracy of your yield predictions",
        answer:
          "Our yield predictions are highly accurate, with a typical variance of less than 5% when compared to actual harvest data, providing reliable forecasts for planning and decision-making.",
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
        content:
          "We provide detailed site analysis and 3D modeling for effective planning. This includes pre-construction surveys to identify potential challenges, optimize site layout, and plan logistics. Our drones generate high-resolution orthomosaic maps and digital elevation models (DEMs) that assist in site preparation and design.",
          image: VscLightbulbSparkle,
          color : "rose"
      },
      {
        title: "Progress Monitoring",
        content:
          " Our drones conduct regular aerial updates to track project milestones. High-resolution images and videos help in documenting progress, identifying potential delays, and ensuring adherence to timelines. We also provide 4D modeling that integrates time as a component, allowing you to visualize project progress over time.",
          image: GiProgression,
          color : "blue"
      },
      {
        title: "Safety Inspections",
        content:
          "Identify potential hazards and ensure compliance with safety standards through regular aerial inspections. This includes monitoring for unsafe working conditions, verifying compliance with OSHA regulations, and providing data for safety audits. Our drones can access hard-to-reach areas, reducing the need for scaffolding or manual inspections.",
          image: AiOutlineSafety,
          color : "rose"
      },
      {
        title: "Quality Control",
        content:
          " Conduct thorough quality assessments with high-resolution imagery. This allows for early detection of construction defects, such as structural anomalies or poor workmanship, ensuring that the work meets the required standards. We also provide thermal imaging to detect insulation issues and identify energy inefficiencies.",
          image: FaCheck,
          color : "rose"
      },
      {
        title: "Earthwork and Volume Measurements",
        content:"Calculating cut-and-fill volumes ,Monitoring material usage and site topography changes",
          image: GiCargoCrane,
          color : "rose"
      },
      {
        title: "Safety and Security",
        content: "Surveillance to ensure site safety and compliance,Monitoring unauthorized access and theft prevention",
          image: FaPlusCircle,
          color : "rose"
      },
    ],
    benefits: [
      {
        title: "Enhanced Oversight",
        content:
          " Keep track of project progress with up-to-date aerial data, providing clear and accurate documentation for stakeholders and investors.",
        icon:FaHelmetSafety,
      },
      {
        title: "Cost Savings",
        content:
          "Reduce delays and budget overruns with efficient monitoring, ensuring that potential issues are identified and addressed promptly.",
        icon:FaHelmetSafety,
      },
      {
        title: " Environmental Monitoring",
        content:"Compliance ,Erosion and Drainage Monitoring",
        icon:FaHelmetSafety,
      },
      {
        title: "Improved Safety",
        content:
          "Conduct remote inspections to maintain a safe work environment, reducing the need for personnel to access hazardous areas.",
        icon:FaHelmetSafety,
      },
      {
        title: "Progress Tracking and Reporting",
        content:"Real-Time Monitoring , Visual Documentation",
        icon:FaHelmetSafety,
      },
      {
        title: "Improved Communication and Collaboration",
        content:"Visual Data Sharing , Remote Accessibility",
        icon:FaHelmetSafety,
      },
    ],
    faq: [
      {
        question:
          "How often should progress monitoring be done on construction sites?",
        answer:
          "Weekly or bi-weekly monitoring is recommended for most projects to effectively track progress, identify potential issues, and ensure timely completion.",
      },
      {
        question: "Can drones be used for both small and large construction projects?",
        answer:
          " Yes, our drone services are scalable and can be tailored to suit both small and large construction projects, providing valuable data for any project size.",
      },
      {
        question: "What kind of safety standards do your drones help monitor? ",
        answer:
          "Our drones help monitor compliance with OSHA standards, site-specific safety protocols, and other industry regulations, ensuring a safe working environment and reducing the risk of accidents.",
      },
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
    image: green,
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
        content:
          "Drones have the ability to cover large areas quickly, streamlining the inspection process. In contrast, manual inspections are often labor-intensive and can take a considerable amount of time.",
        icon:FaHelmetSafety,
      },
      {
        title: "Cost Savings",
        content:
          "Solar panel inspection drones significantly reduce costs by reducing the need for workers and allowing faster inspection times, thereby reducing budgetary strain for solar farm operators.",
        icon:FaHelmetSafety,
      },
      {
        title: "Safety",
        content:
          "Solar panel inspections can be conducted remotely, reducing workplace accidents and injuries by eliminating the need for dangerous climbs or heavy equipment use.",
        icon:FaHelmetSafety,
      },
      {
        title: "High-Quality Imaging",
        content:
          "Drones with high-resolution cameras can capture detailed images of solar panels, enabling the identification of invisible damage, dirt, or defects, preventing irrevocable damage.",
        icon:FaHelmetSafety,
      },
      {
        title: "Thermal Imaging",
        content:
          "Drones with thermal imaging cameras that can detect hotspots on solar panels where energy may be getting wasted due to damage or other issues. This technology helps operators identify areas in need of repair or replacement.",
        icon:FaHelmetSafety,
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
        question: "What types of faults can drones detect in power lines?",
        answer:
          " Drones can detect a variety of faults including corrosion, wear and tear, broken wires, vegetation encroachment, and heat anomalies that indicate potential failures.",
      },
      {
        question: "How frequently should infrastructure be inspected using drones?",
        answer:
          "The frequency depends on the type and condition of the infrastructure, but semi-annual or annual inspections are common for most assets, with more frequent inspections recommended for high-risk areas.",
      },
    ],
  },
];
