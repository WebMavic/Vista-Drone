interface Service {
  title: string;
  description: string;
  image: string;
  service_description: description[];
  benefits: benefits[];
  faq: faq[];
}

type benefits = {
  title: string;
  content: string;
  icon: string;
};

type description = {
  title: string;
  content: string;
  image?: string;
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
    image:
      "https://russelsmithgroup.com/wp-content/uploads/2023/09/Drone-Mapping.jpg",
    service_description: [
      {
        title: "Aerial Surveys",
        content:
          " Utilizing high-resolution drones equipped with advanced sensors, we capture detailed imagery and create 3D maps for accurate site analysis. These surveys assist in identifying mineral deposits, evaluating terrain conditions, and planning extraction processes. We also provide orthomosaic maps that offer a seamless, georeferenced representation of the survey area.",
        image: "https://www.shutterstock.com/image-photo/aerial-vertical-shot-pickup-truck-600nw-2253052303.jpg",
      },
      {
        title: "Real-time Monitoring",
        content:
          "Our drones offer continuous real-time monitoring, crucial for maintaining safety and operational efficiency. This includes live feed monitoring of drilling operations, pipeline inspections, and environmental impact monitoring. Real-time data helps in making prompt decisions and mitigating risks.",
          image: "https://www.flysight.it/wp-content/uploads/2023/09/UAV-surveillance.jpg",
      },
      {
        title: "Volumetric Measurements",
        content:
          "Accurate calculation of stockpile volumes and excavation quantities is essential for inventory management and project planning. Our drones measure volumes with high precision, providing detailed reports that help in tracking material movement, ensuring compliance with contractual agreements, and optimizing resource allocation.",
          image: "https://www.zenadrone.com/wp-content/uploads/2022/10/Security-and-Surveillance-1.jpg",
      },
      {
        title: "Environmental Impact Assessments",
        content:
          "We conduct thorough environmental assessments to help you comply with regulatory standards. This includes monitoring for potential environmental damage, such as soil erosion, water contamination, and deforestation, and providing actionable data to support sustainable practices and minimize environmental impact.",
          image: "https://media.istockphoto.com/id/959932976/photo/drone-monitoring-barbed-wire-fence-on-state-border-or-restricted-area.jpg?s=612x612&w=0&k=20&c=JZ7_L5OL3U5bOxQ8IECkoaqunSjLCqcCcqUrUP7e4_8=",
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
    title: "Planning and Survey",
    description:
      "Transform your planning and survey processes with our advanced drone technology. Vista Drone Services offers comprehensive solutions to support topographic mapping, land surveying, and infrastructure assessment. Our high-resolution drones capture detailed aerial imagery and data, enabling the creation of accurate topographic maps and 3D models. This detailed data collection aids in precise terrain analysis, essential for planning construction projects, land development, and environmental studies. By leveraging our drone technology, you can efficiently gather the necessary data for site evaluations and project planning, reducing the need for traditional ground surveys and enhancing the accuracy of your assessments. ",
    image:
      "https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2019/01/Construction-21_mini.jpg",
    service_description: [
      {
        title: "Topographic Mapping",
        content:
          "We create detailed topographic maps that provide precise terrain analysis. Our drones capture high-resolution images and generate accurate contour lines, elevation models, and digital surface models (DSMs). These maps are essential for planning construction projects, land development, and environmental studies.",
          image: "https://i0.wp.com/theconstructor.org/wp-content/uploads/2022/03/Drone-Surveying.png?fit=768%2C478&ssl=1",
      },
      {
        title: "Land Surveying",
        content:
          "Our high-precision land surveys are ideal for property development, boundary identification, and land management. Using RTK (Real-Time Kinematic) and PPK (Post Processed Kinematic) technology, we provide centimeter-level accuracy, ensuring that your survey data meets all regulatory requirements and industry standards.",
          image: "https://i0.wp.com/theconstructor.org/wp-content/uploads/2022/03/Drone-Surveying.png?fit=768%2C478&ssl=1",
      },
      {
        title: "Infrastructure Assessment",
        content:
          " Conduct aerial inspections of roads, bridges, and other infrastructure projects. Our drones capture detailed visual data, helping to identify structural issues, assess the condition of infrastructure, and plan maintenance activities. We also provide thermal imaging to detect heat anomalies and potential failures in infrastructure components.",
          image: "https://www.dronitech.com/wp-content/uploads/2019/08/img_up_dan_hennage_lr.jpg",
      },
      {
        title: "3D Modeling ",
        content:
          "We generate detailed 3D models of sites, providing a comprehensive view that enhances project visualization and planning. These models are useful for architects, engineers, and planners to visualize projects in a real-world context, detect potential issues early, and communicate plans effectively to stakeholders.",
          image: "https://media.sketchfab.com/models/17921c30b4134bf598b0cac817f00f1d/thumbnails/3f80db2e350944d4bb56212936ea17d4/cccf16ea049743f39d33e586255ef771.jpeg",
      },
    ],
    benefits: [
      {
        title: "Time Efficiency",
        content:
          " Expedite project timelines with rapid data collection, reducing the time needed for traditional survey methods and accelerating project kickoff",
        icon: "https://placehold.co/100x100",
      },
      {
        title: "Reduced Risk",
        content:
          "Decrease on-site hazards through remote data acquisition, keeping surveyors safe from dangerous or inaccessible areas.",
        icon: "https://placehold.co/100x100",
      },
      {
        title: "High Precision",
        content:
          "Achieve detailed and accurate survey results for better planning and execution, ensuring project accuracy and regulatory compliance",
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
    image: "https://i.ytimg.com/vi/P2YPG8PO9JU/maxresdefault.jpg",
    service_description: [
      {
        title: "Crop Health Monitoring",
        content:
          "Using multispectral and thermal imaging, we monitor crop health and detect issues early. This helps in identifying nutrient deficiencies, disease outbreaks, and water stress. Our drones fly over fields to capture images that are then processed to generate NDVI (Normalized Difference Vegetation Index) maps, indicating the health and vigor of crops.",
        image: "https://bl-i.thgim.com/public/incoming/s7pe5s/article67202633.ece/alternates/LANDSCAPE_1200/6678_30_9_2022_19_1_18_4_DRONE_3.JPG",
      },
      {
        title: "Irrigation Planning",
        content:
          "Our drones create detailed irrigation maps that help in efficient water usage. By analyzing soil moisture levels and identifying areas with inadequate or excessive irrigation, we provide recommendations for optimal irrigation schedules, reducing water waste and improving crop yields.",
          image : "https://vtindia.in/wp-content/uploads/2021/01/Benefits-of-drone-technology-employment-1024x662.jpg"
      },
      {
        title: "Pest Detection",
        content:
          "Early identification of pest infestations is crucial for minimizing crop damage. Our drones use advanced imaging to detect pest activity by spotting changes in crop coloration and health, providing data for targeted pest control measures, and reducing the need for widespread pesticide application.",
          image : "https://www.dronesworldmag.com/wp-content/uploads/2022/03/9.jpg"
      },
      {
        title: "Yield Prediction",
        content:
          "We analyze various factors such as plant health, soil conditions, and historical data to provide accurate yield predictions. By integrating data from different stages of crop growth, we offer insights into expected yields, helping farmers in better planning, marketing, and resource allocation.",
          image : "https://www.zenadrone.com/wp-content/uploads/2022/10/ZenaDrone-1000-in-Smart-Farming-1-1-1200x900.jpg"
      },
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
    title: "Construction and Progress Monitoring",
    description:
      "Elevate your construction projects with Vista Drone Services. We offer comprehensive drone solutions for site planning, progress monitoring, and safety inspections, ensuring your projects stay on track and within budget. Our advanced drones are equipped with high-resolution cameras and sophisticated sensors, enabling us to capture detailed aerial imagery and data for precise site analysis and planning. Whether youre in the initial stages of project development or require ongoing monitoring throughout construction, our drone solutions provide valuable insights to optimize your project workflow and streamline operations.",
    image:
      "https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2017/12/fut-09-15-15-drones-2.jpg",
    service_description: [
      {
        title: "Site Planning:",
        content:
          "We provide detailed site analysis and 3D modeling for effective planning. This includes pre-construction surveys to identify potential challenges, optimize site layout, and plan logistics. Our drones generate high-resolution orthomosaic maps and digital elevation models (DEMs) that assist in site preparation and design.",
        image: "https://north-construction.com/wp-content/uploads/2023/04/drones-1024x675.jpeg",
      },
      {
        title: "Progress Monitoring",
        content:
          " Our drones conduct regular aerial updates to track project milestones. High-resolution images and videos help in documenting progress, identifying potential delays, and ensuring adherence to timelines. We also provide 4D modeling that integrates time as a component, allowing you to visualize project progress over time.",
          image: "https://www.gim-international.com/cache/7/a/a/0/6/7aa06c19005d315a3c5926906b3f49c507724d48.jpeg",
      },
      {
        title: "Safety Inspections",
        content:
          "Identify potential hazards and ensure compliance with safety standards through regular aerial inspections. This includes monitoring for unsafe working conditions, verifying compliance with OSHA regulations, and providing data for safety audits. Our drones can access hard-to-reach areas, reducing the need for scaffolding or manual inspections.",
          image: "https://govdesignhub.com/wp-content/uploads/2020/02/shutterstock_685922518.jpg",
      },
      {
        title: "Quality Control",
        content:
          " Conduct thorough quality assessments with high-resolution imagery. This allows for early detection of construction defects, such as structural anomalies or poor workmanship, ensuring that the work meets the required standards. We also provide thermal imaging to detect insulation issues and identify energy inefficiencies.",
          image: "https://portcoast-bim.com/public/images/solutions/uav-survey/aerial-survey.jpg",
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
        title: "Improved Safety",
        content:
          " Conduct remote inspections to maintain a safe work environment, reducing the need for personnel to access hazardous areas.",
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
    title: "Transportation and Power Industry",
    description:
      "Improve the efficiency and safety of your transportation and power infrastructure with Vista Drone Services. Our drones conduct detailed inspections and provide high-quality visual data for proactive maintenance and compliance. Equipped with advanced imaging technology and precise navigation systems, our drones are capable of capturing comprehensive visual data of roads, bridges, railways, power lines, and substations. By conducting thorough aerial inspections, we identify potential issues such as structural damage, wear and tear, and vegetation encroachment, allowing for timely maintenance and repairs to prevent failures and ensure the integrity of your infrastructure.",
    image:
      "https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2017/12/fut-09-15-15-drones-2.jpg",
    service_description: [
      {
        title: "Infrastructure Inspections",
        content:
          "We perform comprehensive assessments of roads, bridges, railways, power lines, and substations. Our drones capture high-resolution images and videos, identifying structural issues, wear and tear, and potential maintenance needs. We also provide thermal imaging to detect heat anomalies in power lines and electrical components.",
        image: "https://north-construction.com/wp-content/uploads/2023/04/drones-1024x675.jpeg",
      },
      {
        title: "Fault Detection",
        content:
          "Early identification of potential issues is crucial for preventing failures. Our drones detect faults in power lines, road surfaces, and other infrastructure components, enabling timely repairs and reducing the risk of catastrophic failures. We use AI-powered analysis to detect cracks, corrosion, and other signs of deterioration.",
          image: "https://www.gim-international.com/cache/7/a/a/0/6/7aa06c19005d315a3c5926906b3f49c507724d48.jpeg",
      },
      {
        title: "Maintenance Planning",
        content:
          " Use our data-driven insights to plan efficient maintenance schedules. This helps in optimizing resources, reducing downtime, and extending the lifespan of infrastructure assets. Our predictive maintenance models help prioritize repairs and allocate resources effectively.",
          image: "https://govdesignhub.com/wp-content/uploads/2020/02/shutterstock_685922518.jpg",
      },
      {
        title: "Regulatory Compliance",
        content:
          "Ensure compliance with industry standards and regulations through regular drone inspections. Our detailed reports provide documentation required for regulatory audits and assessments, helping you stay compliant with local, state, and federal regulations.",
          image: "https://portcoast-bim.com/public/images/solutions/uav-survey/aerial-survey.jpg",
      },
    ],
    benefits: [
      {
        title: "Increased Safety",
        content:
          "Reduce the risk of accidents with regular inspections, ensuring that infrastructure components are in good condition and identifying hazards early.",
        icon: "https://placehold.co/100x100",
      },
      {
        title: "Operational Efficiency",
        content:
          "Optimize maintenance schedules and resource allocation, reducing downtime and improving the overall performance of infrastructure assets.",
        icon: "https://placehold.co/100x100",
      },
      {
        title: "Regulatory Adherence",
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
];
