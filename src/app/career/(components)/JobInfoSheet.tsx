"use client";
import React, { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/Button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import SectionLayout from "@/components/ui/SectionLayout";

import { GrCertificate } from "react-icons/gr";
import { IoLocationSharp, IoTimeOutline } from "react-icons/io5";
import { PiBagSimpleLight } from "react-icons/pi";
import {
  CalendarIcon,
  MapPinIcon,
  GraduationCapIcon,
  ClockIcon,
} from "lucide-react";
import Link from "next/link";

type Job = {
  title: string;
  location: string;
  joining: string;
  jobPosted: string;
  qualification: string;
  applyBy: string;
  rolesAndResponsibilities: string[];
  desiredCandidateProfile: string[];
  from: {
    title: string;
    address: string;
  };
};

const JobInfoSheet = () => {
  const [activeSheet, setActiveSheet] = useState<Job>();
  return (
    <Sheet>
      <SectionLayout>
        <div className="section-jobs grid grid-cols-1 gap-5 ">
          {careerOptions.map(
            ({
              title,
              date,
              description,
              experience,
              job_id,
              location,
              qualification,
              sheetContent,
            }) => (
              <div
                key={job_id}
                className="job-1 rounded-md border bg-white p-5 hover:shadow"
              >
                  <h2 className="font-medium text-heading lg:text-center lg:text-lg">
                    {title}
                  </h2>
                <p className="lg:max-w-3xl mt-5  text-sm text-subheading">
                  {description}
                </p>
                <div className="my-3 grid gap-4  lg:grid-cols-3  ">
                  <div className="flex  w-max  items-center text-sm text-gray-500">
                    <GrCertificate className="mr-2" />
                    <p className="text-xs font-medium w-3/4 lg:w-auto">{qualification}</p>
                  </div>
                  <div className="flex items-center  text-sm text-gray-500 ">
                    <IoLocationSharp className="mr-2" />{" "}
                    <span className="text-xs font-medium">{location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 ">
                    <PiBagSimpleLight className="mr-2" />{" "}
                    <span className="text-xs font-medium">{experience}</span>
                  </div>
                </div>
                <div className="mb-2 inline-flex w-full items-center justify-between">
                  <div className="flex w-max items-center rounded-full bg-accent/20 px-3  py-1.5  text-sm">
                    <IoTimeOutline className="mr-2" />
                    <span className="text-xs font-medium ">{date}</span>
                  </div>
                  <SheetTrigger asChild>
                    <Button onClick={() => setActiveSheet(sheetContent)}>
                      Apply
                    </Button>
                  </SheetTrigger>
                </div>
              </div>
            ),
          )}
        </div>
      </SectionLayout>

      {activeSheet && (
        <SheetContent side={"bottom"}>
          <SheetHeader>
            <SheetTitle>{activeSheet.title}</SheetTitle>
          </SheetHeader>
          <div className="no-scrollbar h-[70vh] overflow-auto p-5 lg:h-auto ">
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center font-semibold text-subheading">
                  <MapPinIcon className="mr-2 h-4 w-4" />
                  <div>Location</div>
                </div>
                <div>Abu Dhabi, UAE</div>
              </div>
              <div>
                {/* <div className="flex items-center  font-semibold text-subheading">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <div>Join by</div>
                </div>
                <div>August 1, 2024</div> */}
              </div>
              <div>
                {/* <div className="flex items-center  font-semibold text-subheading">
                  <ClockIcon className="mr-2 h-4 w-4" />
                  <div>Posted On</div>
                </div>
                <div>July 26, 2024</div> */}
              </div>

              <div>
                {/* <div className="flex items-center  font-semibold text-subheading">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <div>Apply by</div>
                </div>
                <div>July 1, 2024</div> */}
              </div>
            </div>
            <div className="mt-4 space-y-5">
              <section>
                <h2 className="text-lg font-semibold text-heading">
                  Roles and Responsibilities
                </h2>
                <ul className="list-inside list-disc">
                  {activeSheet.rolesAndResponsibilities.map((role, index) => (
                    <li key={index} className="text-subheading">
                      {role}
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-heading">
                  Desired Candidate Profile
                </h2>
                <ul className="list-inside list-disc">
                  {activeSheet.desiredCandidateProfile.map((role, index) => (
                    <li key={index} className="text-subheading">
                      {role}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="mt-4 w-full rounded-md border border-zinc-300 bg-accent/10">
              <div className="flex w-full flex-wrap items-center  justify-between p-3">
                <div>
                  <h3 className="text-lg font-semibold text-heading">From</h3>
                  <p className="text-subheading">{activeSheet.from.title}</p>
                  <p className="text-subheading">{activeSheet.from.address}</p>
                </div>
                <Link
                  href={`/career/apply?job=` + activeSheet.title}
                  className={buttonVariants()}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </SheetContent>
      )}
    </Sheet>
  );
};

export default JobInfoSheet;

export const careerOptions = [
  {
    job_id: 1,
    title: "Drone Image Data Processing Specialist",
    description:
      "The ideal candidate will process and analyze drone data using ArcGIS, AGSoft, Pix4Dmapper, and DroneDeploy. Responsibilities include generating high-quality maps and 3D models, collaborating with drone operations, ensuring data accuracy, and improving workflows.",
    qualification: "Bachelor's degree in GIS, remote sensing, or related field",
    location: "Abu Dhabi, UAE (Hybrid working model)",
    experience: "1 year",
    date: "October 2, 2024",
    sheetContent: {
      title: "Drone Image Data Processing Specialist",
      location: "Abu Dhabi, UAE (Hybrid working model)",
      joining: "Immediately",
      jobPosted: "October 2, 2024",
      qualification: "Graduate in any discipline",
      applyBy: "October 2, 2024",
      rolesAndResponsibilities: [
        "Process and analyze geospatial data using ArcGIS, AGSoft, Pix4Dmapper, and DroneDeploy.",
    "Prepare high-quality maps, 3D models, and visual representations for client presentations and reports.",
    "Collaborate with drone operation teams to ensure data collection meets project specifications and quality standards.",
    "Assist in developing data processing workflows and best practices to enhance efficiency and accuracy.",
    "Maintain up-to-date knowledge of industry trends and advancements in drone data processing technologies.",
    "Contribute to project documentation and technical reports as required."
      ],
      desiredCandidateProfile: [
        "Bachelor's degree in Geography, Environmental Science, Data Science, or a related field.",
    "Proficiency in ArcGIS, AGSoft, Pix4Dmapper, and DroneDeploy.",
    "Strong analytical skills and attention to detail.",
    "Experience in UAE’s oil and gas, green energy, or similar industrial sectors is preferred.",
    "Excellent communication and teamwork skills.",
    "Ability to work in a fast-paced, deadline-driven environment.",
    
      ],
      from: {
        title: "Head- Talent Acquisition Vista Drone UAV LLC",
        address:
          "Office No 403| Tower 1| Mazyad Mall| MBZ City, Abu Dhabi|An ISO: 9001 & 45001 Certified company.",
      },
    },
  },
  {
    job_id: 2,
    title: "Marketing And Business Development Executive",
    description:
      "Vista Drone is seeking a Marketing and Business Development Executive to drive business growth by identifying new opportunities, developing marketing strategies, and building strong relationships with key clients. The role involves market research, preparing proposals, and representing the company at industry events.",
    qualification: "Graduate in any discipline",
    location: "Abu Dhabi, UAE (Hybrid working model) ",
    experience: "2 year",
    date: "July 26, 2024",
    sheetContent: {
      title: "Marketing And Business Development Executive",
      location: "Abu Dhabi, UAE (Hybrid working model)",
      joining: "Immediately",
      jobPosted: "February 2, 2024",
      qualification: "Graduate in any discipline",
      applyBy: "October 10, 2024",
      rolesAndResponsibilities: [
        "Identify and evaluate new business opportunities through market research and analysis for drone services.",
        "Develop and implement marketing strategies to enhance brand awareness and drive business growth.",
        "Build and maintain relationships with key clients and stakeholders.",
        "Prepare and deliver presentations, proposals, and negotiations to potential clients.",
        "Stay updated on industry trends and best practices to ensure competitiveness.",
        "Participate in networking events, conferences, and trade shows to promote the company and generate leads."
      ],
      desiredCandidateProfile: [
        "Bachelor's degree in marketing, business administration, or a related field.",
    "Excellent communication and interpersonal skills.",
    "Experience working in the UAE with a company providing professional drone/UAV services in sectors like oil & gas, green energy, mining, and agriculture.",
    "Ability to work in a fast-paced, deadline-driven environment.",
    "Proven track record of implementing marketing strategies and driving business growth.",
    "Immediate availability with valid UAE Driving License and working/dependent visa.",
    "Arabic language skills are an advantage."
      ],
      from: {
        title: "Head- Talent Acquisition Vista Drone UAV LLC",
        address:
          "Office No 403| Tower 1| Mazyad Mall| MBZ City, Abu Dhabi|An ISO: 9001 & 45001 Certified company.",
      },
    },
  },
  {
    job_id: 3,
    title: "Drone Pilot",
    description:
      "The applicant should be fully conversant with the UAE government rules and regulations for operating enterprise category drones. GCAA Certified Drone pilot having a valid UAE Driving License will be an advantage.",
    qualification: "Diploma or equivalent",
    location: "Abu Dhabi, UAE (Hybrid working model)",
    experience: "Min.1 year in UAE",
    date: "July 10, 2024",
    sheetContent: {
      title: "Drone Pilot",
      location: "Abu Dhabi, UAE (Hybrid working model)",
      joining: "Immediately",
      jobPosted: "July 10, 2024",
      qualification: "Graduate in any discipline",
      applyBy: "July 20, 2024",
      rolesAndResponsibilities:[
        "Operate enterprise-class drones for commercial and industrial use.",
        "Conduct pre-flight inspections and flight planning per project needs.",
        "Ensure compliance with UAE drone regulations and obtain GCAA permissions.",
        "Capture aerial data (images, videos, LiDAR) and deliver to the data team.",
        "Coordinate with teams to meet project objectives.",
        "Provide insights based on aerial data.",
        
    ],
    
      desiredCandidateProfile: [
        "GCAA Drone Pilot Certification is mandatory.",
    "UAE Driving License preferred.",
    
    "Knowledge of UAE drone regulations and GCAA permissions process.",
    "Ability to work independently and in hybrid office/on-site model.",
    "Experience with oil & gas, construction, or environmental sectors is a plus.",
    "Strong problem-solving skills in fast-paced environments.",
    "Flexibility to work on-site across UAE.",
    "Arabic language skills are a plus."
    ],
      from: {
        title: "Head- Talent Acquisition Vista Drone UAV LLC",
        address:
          "Office No 403| Tower 1| Mazyad Mall| MBZ City, Abu Dhabi|An ISO: 9001 & 45001 Certified company.",
      },
    },
  },
];
