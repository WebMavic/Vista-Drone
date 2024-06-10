"use client";
import React from "react";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
import FAQITEM from "./FAQITEM";


function FAQ({className}:{className?:string}) {
  return (
 
      <div className={`w-full ${className ? className : ''}`}>
        <TabGroup>
          <TabList className="flex gap-4">
            {faqs.map(({ title }, index) => (
              <Tab
                key={index}
                className="rounded-md px-4 py-3 lg:text-xl font-semibold focus:outline-none data-[hover]:bg-accent/10 data-[selected]:bg-accent/20 data-[focus]:outline-1  data-[focus]:outline-white text-black"
              >
                {title}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {faqs.map(({ questions }, index) => (
              <TabPanel key={index} className="">
               {questions.map((ques,index) => (
                    
                      <FAQITEM
                        key={ques.question}
                        question={ques.question}
                        answer={ques.answer}
                        id = {index}
                      />
                    
                  ))}
               
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
        
      </div>
  
  );
}

export default FAQ;

type questions = {
  question: string;
  answer: {
    content: string;
    list?: string[];
  };
};

interface faqsArray {
  title: string;
  questions: questions[];
}

const faqs: faqsArray[] = [
  {
    title: "Surveys and mapping",
    questions: [
      {
        question: "What is Drone Surveying and Mapping?",
        answer: {
          content:
            "Drone surveying and mapping, also known as aerial mapping, involves using unmanned aerial vehicles (UAVs) equipped with specialized cameras and sensors to capture high-resolution images and data of a specific area. This method provides accurate and detailed information from above, useful in various industries such as construction, agriculture, mining, real estate, and environmental monitoring. Additionally, drones equipped with cameras and sensors can perform detailed inspections of structures, equipment, and infrastructure that are difficult or dangerous to access by traditional methods.",
        },
      },
      {
        question: " What is drone mapping / aerial mapping used for?",
        answer: {
          content:
            "Drone mapping has diverse applications across various industries, including:",
          list: [
            "Land Surveying and Cartography: Generating high-resolution orthomosaics and 3D models to provide accurate and detailed information.",
            "Cadastral Surveying: Mapping large areas efficiently, especially in complex or hard-to-reach environments.",
            "Volume Measurement: Using photogrammetry software to extract volumetric measurements of stockpiles and track changes over time",
            "LiDAR Survey: Utilizing drone-mounted LiDAR sensors to create highly detailed 3D maps.",
            "Animal Population Counting: Monitoring animal populations on a large scale for conservation efforts.",
            "Environmental Monitoring: Mapping oil spills and assessing their environmental impact.",
            "Agriculture: Detecting plant stress and diseases with multispectral cameras, allowing for targeted interventions.",
          ],
        },
      },
      {
        question:
          " What are the benefits of using drones for surveying and mapping?",
        answer: {
          content: "Drones offer several advantages for surveying and mapping:",
          list: [
            "Faster Data Collection**: Reducing the time needed to gather information.",
            "Increased Accuracy and Precision**: Providing highly accurate data.",
            "Improved Safety: Minimizing the need for personnel in dangerous areas",
            "Cost Savings: Being more cost-effective than traditional methods",
          ],
        },
      },
      {
        question:
          " What kind of data can be collected using drones for surveying and mapping?",
        answer: {
          content:
            "Drones can collect various types of data, including:",
          list: [
            "Aerial imagery",
            "Topographic data",
            "3D models",
            "Thermal imaging",
            "Point cloud data",
            "Multispectral data",
          ],
        },
      },
      {
        question: " What is the accuracy of data collected using drones for surveying and mapping?",
        answer: {
          content:
            "The accuracy of drone-collected data depends on factors such as equipment quality, flight plan, environmental conditions, and data processing techniques. Drones can provide highly accurate data with a margin of error of just a few centimeters",
        },
      },
      {
        question: "Are there any regulations for using drones for surveying and mapping?",
        answer: {
          content:
            "Yes, many countries have regulations for commercial drone use, including surveying and mapping. Compliance with these regulations and obtaining necessary permits and licenses is essential. As a professional drone survey company in Dubai, UAE, we are well-versed in these regulations and can assist you in meeting the necessary requirements.",
        },
      },
      {
        question: "How long does it take to complete a drone survey and mapping project?",
        answer: {
          content:
            "The time required to complete a drone survey and mapping project depends on the area's size, required detail level, and project complexity. Drones can significantly reduce data collection and processing time compared to traditional methods.",
        },
      },
      {
        question: "How much does it cost to conduct a drone survey and mapping project?",
        answer: {
          content:
            "The cost of a drone survey and mapping project varies based on the area's size, required detail level, and project complexity. However, drone surveying and mapping are generally more cost-effective than traditional surveying methods.",
        },
      },
    ],
  },
  {
    title: "Construction Monitoring",
    questions: [
      {
        question:
          "How can drone construction monitoring benefit construction projects?",
        answer: {
          content:
            "Drone construction monitoring offers numerous benefits, including",
          list: [
           "Improved safety",
          "Increased project efficiency",
          "Enhanced accuracy in measurements and inspections",
          "Better communication among stakeholders",
          "A comprehensive drone monitoring system"
          ],
        },
      },
      {
        question:
          "Are there any legal regulations for using drones in construction monitoring?  ",
        answer: {
          content:
            "Yes, using drones for construction monitoring is subject to legal regulations. These vary by country or region but generally include:",
          list: [
           "Obtaining licenses",
          " Following flight restrictions",
          "Respecting privacy laws",
          " Maintaining safety protocols",
          ],
        },
      },
      {
        question:
          "How accurate are the measurements obtained through drone construction monitoring?",
        answer: {
          content:
            "Drone construction monitoring can provide highly accurate measurements, especially when using technologies like photogrammetry and LiDAR. Accuracy depends on factors such as:",
          list: [
           "Sensor quality",
          " Flight altitude",
          "Overlapping imagery",
          "Processing software",
          ],
        },
      },
      {
        question:
          "Can drones provide real-time monitoring of construction progress?",
        answer: {
          content:
            "Yes, drones can offer real-time monitoring of construction progress. By capturing aerial footage, project managers and stakeholders receive real-time visuals and data on:",
          list: [
           " Site conditions",
          " Work completed",
          "Potential delays",
          ],
        },
      },
      {
        question:
          "How does drone construction monitoring contribute to safety on construction sites?",
        answer: {
          content:
            "Drone construction monitoring enhances safety by:",
          list: [
           "Reducing the need for human presence in hazardous areas",
          "Inspecting hard-to-reach locations",
          "Identifying safety hazards ",
          "Providing an aerial perspective without exposing workers to risks ",
          ],
        },
      },
      {
        question:
          "Can drones detect construction defects or quality issues?",
        answer: {
          content:
            "Yes, drones can help detect construction defects or quality issues by capturing high-resolution imagery and conducting inspections from various angles. This allows for:",
          list: [
           "Identifying discrepancies",
          "Detecting deviations from plans",
          "Spotting material issues",
          ],
        },
      },
      {
        question:
          "Are there any limitations or challenges with drone construction monitoring?",
        answer: {
          content:
            "Yes, some limitations and challenges include:",
          list: [
           "Airspace regulations",
          "Weather conditions affecting flights",
          "Battery life limitations",
          "Image processing complexities",
          "Need for skilled operators",
          ],
        },
      },
      {
        question:
          "What are the key advantages of using drones over traditional construction monitoring methods?",
        answer: {
          content:
            "Drones offer several advantages over traditional methods, such as: ",
          list: [
           "Covering large areas quickly",
          "Capturing high-resolution imagery",
          "Accessing hard-to-reach areas ",
          "Reducing costs associated with manual inspections",
          "Providing real-time data for informed decision-making",
          ],
        },
      },
      {
        question:
          "Are there any specific safety measures to consider when operating drones on construction sites?",
        answer: {
          content:
            "Yes, specific safety measures include:",
          list: [
           "Ensuring proper training and certification for drone operators",
          " Adhering to site safety protocols",
          "Maintaining a safe distance from workers and equipment ",
          "Reducing costs associated with manual inspections",
          "Following local aviation regulations to minimize potential risks",
          ],
        },
      },
      {
        question:
          "Can drones help with project documentation and reporting?",
        answer: {
          content:
            "Absolutely! Drones assist in project documentation and reporting by capturing visual evidence of:",
            list: [
              "Site conditions",
             "Work completed",
             "Milestones achieved",
             "Reducing costs associated with manual inspections",
             "Providing real-time data for informed decision-making",
             ],
        },
      },
      {
        question:
          "What are some cost-saving benefits of using drones in construction monitoring?",
        answer: {
          content:
            "Drones can lead to cost savings by:",
            list: [
              "Reducing the need for manual labor in inspections",
             "Lowering surveying and data collection expenses",
             "Minimizing rework by detecting issues early",
             " Optimizing resource allocation ",
             "Improving overall project efficiency, resulting in time and cost savings",
             ],
        },
      },
    ],
  },
];
