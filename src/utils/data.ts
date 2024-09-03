import mining from "@/assets/images/mining_info.jpeg";
import survey from "@/assets/images/drones_construction_industry.jpg";
import agriculture from "@/assets/images/agriculture_info.jpg";
import construction from "@/assets/images/construction/const-3.jpg";
import oil from "@/assets/images/oil.png";
import green from '@/assets/images/green energy/wind-1.jpg'

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Aperture, BarChart, Cctv, Diameter, LucideProps } from "lucide-react";




interface Service {
  title: string;
  description: string;
  image: StaticImport;
  service_description: description[];
  benefits: benefits[];
  faq: faq[];
}

type benefits = {
  title: string;
  content: string;
  icon: string;
};

export type description = {
  title: string;
  content: string;
  image: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
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
          image: Diameter,
          color : "rose"
      },
      {
        title: "Environmental Impact Assessments",
        content:
          "We conduct thorough environmental assessments to help you comply with regulatory standards. This includes monitoring for potential environmental damage, such as soil erosion, water contamination, and deforestation, and providing actionable data to support sustainable practices and minimize environmental impact.",
          image: BarChart,
          color : "rose"
      },
      {
        title: "Exploration & Planning",
        content: "Lease hold area Survey & mapping Digital Terrain Modelling (DTM) of the entire site , Digital Surface Modelling (DSM) of the entire site Excavation & Environmental impact Assessment",
          image: BarChart,
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
        icon: "https://placehold.co/100x100",
      },
      {
        title: "Cost Efficiency",
        content:
          "Reduce operational costs with precise data and efficient resource management, avoiding over-extraction and optimizing resource use.",
        icon: "https://placehold.co/100x100",
      },
      {
        title: "Accurate Data",
        content:
          "Obtain high-precision data for better decision-making and project planning, ensuring more accurate forecasting and budgeting.",
        icon: "https://placehold.co/100x100",
      },
      {
        title: "Distances",
        content:
          "Any specific distance can be measured precisely whether horizontally or vertically.",
        icon: "https://placehold.co/100x100",
      },
      {
        title: "Boundaries",
        content:
          "The lease boundary can be geo-tagged and generated to view the limits more accurately and plan suitably.  ",
        icon: "https://placehold.co/100x100",
      },
      {
        title: "Accurate Data",
        content:
          "Obtain high-precision data for better decision-making and project planning, ensuring more accurate forecasting and budgeting.",
        icon: "https://placehold.co/100x100",
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
        icon: "https://placehold.co/100x100",
      },
      {
        title: "Enhanced Safety",
        content:"Minimized need for manual inspections in hazardous areas",
        icon: "https://placehold.co/100x100",
      },
      {
        title: "High Precision",
        content:
          "Achieve detailed and accurate survey results for better planning and execution, ensuring project accuracy and regulatory compliance",
        icon: "https://placehold.co/100x100",
      },
      {
        title: "Data-Driven Decisions",
        content:"Access to accurate, timely data",
        icon: "https://placehold.co/100x100",
      },
      {
        title: "Regulatory Compliance",
        content:"Continuous monitoring supports meeting safety and environmental regulations",
        icon: "https://placehold.co/100x100",
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
        icon: "https://placehold.co/100x100",
      },
      {
        title: "Resource Management",
        content:
          " Optimize resource usage and reduce waste, leading to cost savings and more sustainable farming practices.",
        icon: "https://placehold.co/100x100",
      },
      {
        title: "Sustainability",
        content:
          "Promote sustainable farming practices with advanced technology, reducing the environmental impact of agricultural activities.",
        icon: "https://placehold.co/100x100",
      },
      {
        title: "Monitoring Plant Health",
        content:
          "Software analysis can be used to change values in order to reflect the specific crop type and even in which stage of life a specific crop is in.",
        icon: "https://placehold.co/100x100",
      },
      {
        title: "Monitoring Field Condition",
        content:
          "Drones provide accurate field mapping.Having information on field elevation is useful in determining drainage patterns and wet/dry spots which allow for more efficient watering techniques.",
        icon: "https://placehold.co/100x100",
      },
      {
        title: "Planting And Seeding",
        content:
          "Automated drone seeders are mostly being used in forestry industries.Planting with drones means very hard to reach areas can be re-planted without endangering farmers.",
        icon: "https://placehold.co/100x100",
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
          image: Diameter,
          color : "rose"
      },
      {
        title: "Progress Monitoring",
        content:
          " Our drones conduct regular aerial updates to track project milestones. High-resolution images and videos help in documenting progress, identifying potential delays, and ensuring adherence to timelines. We also provide 4D modeling that integrates time as a component, allowing you to visualize project progress over time.",
          image: Diameter,
          color : "blue"
      },
      {
        title: "Safety Inspections",
        content:
          "Identify potential hazards and ensure compliance with safety standards through regular aerial inspections. This includes monitoring for unsafe working conditions, verifying compliance with OSHA regulations, and providing data for safety audits. Our drones can access hard-to-reach areas, reducing the need for scaffolding or manual inspections.",
          image: Diameter,
          color : "rose"
      },
      {
        title: "Quality Control",
        content:
          " Conduct thorough quality assessments with high-resolution imagery. This allows for early detection of construction defects, such as structural anomalies or poor workmanship, ensuring that the work meets the required standards. We also provide thermal imaging to detect insulation issues and identify energy inefficiencies.",
          image: Diameter,
          color : "rose"
      },
      {
        title: "Earthwork and Volume Measurements",
        content:"Calculating cut-and-fill volumes ,Monitoring material usage and site topography changes",
          image: Diameter,
          color : "rose"
      },
      {
        title: "Safety and Security",
        content: "Surveillance to ensure site safety and compliance,Monitoring unauthorized access and theft prevention",
          image: Diameter,
          color : "rose"
      },
    ],
    benefits: [
      {
        title: "Enhanced Oversight",
        content:
          " Keep track of project progress with up-to-date aerial data, providing clear and accurate documentation for stakeholders and investors.",
        icon: "https://placehold.co/100x100",
      },
      {
        title: "Cost Savings",
        content:
          "Reduce delays and budget overruns with efficient monitoring, ensuring that potential issues are identified and addressed promptly.",
        icon: "https://placehold.co/100x100",
      },
      {
        title: " Environmental Monitoring",
        content:"Compliance ,Erosion and Drainage Monitoring",
        icon: "https://placehold.co/100x100",
      },
      {
        title: "Improved Safety",
        content:
          "Conduct remote inspections to maintain a safe work environment, reducing the need for personnel to access hazardous areas.",
        icon: "https://placehold.co/100x100",
      },
      {
        title: "Progress Tracking and Reporting",
        content:"Real-Time Monitoring , Visual Documentation",
        icon: "https://placehold.co/100x100",
      },
      {
        title: "Improved Communication and Collaboration",
        content:"Visual Data Sharing , Remote Accessibility",
        icon: "https://placehold.co/100x100",
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
      "Improve the efficiency and safety of your transportation and power infrastructure with Vista Drone Services. Our drones conduct detailed inspections and provide high-quality visual data for proactive maintenance and compliance. Equipped with advanced imaging technology and precise navigation systems, our drones are capable of capturing comprehensive visual data of roads, bridges, railways, power lines, and substations. By conducting thorough aerial inspections, we identify potential issues such as structural damage, wear and tear, and vegetation encroachment, allowing for timely maintenance and repairs to prevent failures and ensure the integrity of your infrastructure.",
    image: oil,
    service_description: [
      {
        title: "Flare stack inspection",
        content:
          "Drones obtain detailed images of flare stack heads. Drones capture images in a very short period of time, making repairs and maintenance less expensive and time-consuming.",
          image: Diameter,
          color : "rose"
      },
      {
        title: "Pipeline inspections",
        content:
          "Using thermal imaging technology, temperature differences between fluids and the ground can be easily detected and oil and gas leaks can be found.",
          image: Diameter,
          color : "rose"
      },
      {
        title: "Offshore oil rig inspections",
        content:
          "Working offshore complicates the inspection of oil rigs and exposes workers to greater risk. Drones send real-time information to operators on the platform while flying within a few meters of the offshore platform.",
          image: Diameter,
          color : "rose"
      },
      {
        title: "Pilferage point Inspections",
        content:" Security surveillance of pipelines against theft.",
          image: Diameter,
          color : "rose"
      },
      {
        title: "Tailings pond inspection",
        content:" Using drones for this application makes it possible to gather information in hazardous environments, and extreme weather conditions should no longer be a barrier to conducting such inspections.",
          image: Diameter,
          color : "rose"
      },
      {
        title: "Monitor gas emissions",
        content:"The highly sensitive optical sensors provided by drones help monitor gas emissions at critical sites and in large areas that are difficult to cover. Drones help reduce the cost of performing such inspections and enable safe 3-D mapping of drilling sites, natural gas pipelines, landfills, and other municipal operations.",
          image: Diameter,
          color : "rose"
      },


    ],
    benefits: [
      {
        title: "Enhanced Safety and Efficiency in Inspections",
        content:
          "Reduce the risk of accidents with regular inspections, ensuring that infrastructure components are in good condition and identifying hazards early.",
        icon: "https://placehold.co/100x100",
      },
      {
        title: "Better Leak Detection Capabilities",
        content:
          "Optimize maintenance schedules and resource allocation, reducing downtime and improving the overall performance of infrastructure assets.",
        icon: "https://placehold.co/100x100",
      },
      {
        title: "Reduced Asset Maintenance Costs",
        content:
          "Maintain compliance with up-to-date inspection data, ensuring that your operations meet all required standards and regulations.",
        icon: "https://placehold.co/100x100",
      },
      {
        title: "Emergency Response",
        content:
          "Maintain compliance with up-to-date inspection data, ensuring that your operations meet all required standards and regulations.",
        icon: "https://placehold.co/100x100",
      },
      {
        title: "More Accurate Data Collection",
        content:
          "Maintain compliance with up-to-date inspection data, ensuring that your operations meet all required standards and regulations.",
        icon: "https://placehold.co/100x100",
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
        icon: "https://placehold.co/100x100",
      },
      {
        title: "Cost Savings",
        content:
          "Solar panel inspection drones significantly reduce costs by reducing the need for workers and allowing faster inspection times, thereby reducing budgetary strain for solar farm operators.",
        icon: "https://placehold.co/100x100",
      },
      {
        title: "Safety",
        content:
          "Solar panel inspections can be conducted remotely, reducing workplace accidents and injuries by eliminating the need for dangerous climbs or heavy equipment use.",
        icon: "https://placehold.co/100x100",
      },
      {
        title: "High-Quality Imaging",
        content:
          "Drones with high-resolution cameras can capture detailed images of solar panels, enabling the identification of invisible damage, dirt, or defects, preventing irrevocable damage.",
        icon: "https://placehold.co/100x100",
      },
      {
        title: "Thermal Imaging",
        content:
          "Drones with thermal imaging cameras that can detect hotspots on solar panels where energy may be getting wasted due to damage or other issues. This technology helps operators identify areas in need of repair or replacement.",
        icon: "https://placehold.co/100x100",
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
