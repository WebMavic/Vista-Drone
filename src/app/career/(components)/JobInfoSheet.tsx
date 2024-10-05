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
                <div className="mb-2 inline-flex w-full items-center justify-between">
                  <h2 className="font-medium text-heading lg:text-center lg:text-lg">
                    {title}
                  </h2>
                  <SheetTrigger asChild>
                    <Button onClick={() => setActiveSheet(sheetContent)}>
                      Apply
                    </Button>
                  </SheetTrigger>
                </div>
                <p className="max-w-3xl text-sm text-subheading">
                  {description}
                </p>
                <div className="my-3 grid gap-4  lg:grid-cols-3  ">
                  <div className="flex  w-max  items-center text-sm text-gray-500">
                    <GrCertificate className="mr-2" />
                    <span className="text-xs font-medium">{qualification}</span>
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

                <div className="flex w-max items-center rounded-full bg-accent/20 px-3  py-1.5  text-sm">
                  <IoTimeOutline className="mr-2" />
                  <span className="text-xs font-medium ">{date}</span>
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
          <div className="p-5 h-[70vh] lg:h-auto overflow-auto no-scrollbar ">
           
            <div className="mt-4 flex justify-between items-center flex-wrap gap-4">
              <div >
                <div className="inline-flex items-center text-subheading font-semibold">
                  <MapPinIcon className="mr-2 h-4 w-4" />
                  <div>Location</div>
                </div>
                <div>San Francisco, CA (Remote)</div>
              </div>
              <div >
                <div className="flex items-center  text-subheading font-semibold">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <div>Join by</div>
                </div>
                <div>August 1, 2024</div>
              </div>
              <div >
                <div className="flex items-center  text-subheading font-semibold">
                  <ClockIcon className="mr-2 h-4 w-4" />
                  <div>Posted On</div>
                </div>
                <div>May 15, 2024</div>
              </div>
              
              <div>
                <div className="flex items-center  text-subheading font-semibold">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <div>Apply by</div>
                </div>
                <div>July 1, 2024</div>
              </div>
            </div>
            <div className="space-y-5 mt-4">
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
            <h2 className="text-lg font-semibold text-heading">Desired Candidate Profile</h2>
            <ul className="list-disc list-inside">
              {activeSheet.desiredCandidateProfile.map((role, index) => (
                <li key={index} className="text-subheading">
                  {role}
                </li>
                ))}
            </ul>
          </section>
            </div>
            
            <div className="w-full mt-4 bg-accent/10 rounded-md border border-zinc-300" >
            <div className="flex flex-wrap justify-between items-center  w-full p-3">
                <div>
              <h3 className="text-lg font-semibold text-heading">From</h3>
              <p className="text-subheading">{activeSheet.from.title}</p>
              <p className="text-subheading">{activeSheet.from.address}</p>

                </div>
              <Link href={`/career/apply?job=`+activeSheet.title} className={buttonVariants()}>Apply Now</Link>
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
    location: "Remote",
    experience: "1 year",
    date: "October 2, 2024",
    sheetContent: {
      title: "Drone Image Data Processing Specialist",
      location: "Abu Dhabi, UAE (Hybrid working model)",
      joining: "Immediately",
      jobPosted: "October 2, 2024",
      qualification: "Graduate in any discipline",
      applyBy: "October 10, 2024",
      rolesAndResponsibilities: [
        "Identify and evaluate new business opportunities through market research and analysis for Drone Services.",
        "Develop and implement marketing strategies to enhance brand awareness and drive business growth.",
        "Build and maintain relationships with key clients and stakeholders.",
        "Prepare and deliver presentations, proposals and negotiation to potential clients.",
      ],
      desiredCandidateProfile: [
        "Bachelor's degree in marketing, business administration, or a related field.",
        "Excellent communication and interpersonal skills.",
        "Experience of working in UAE with company providing professional Drone / Unmanned Aerial Vehicles services in industrial sector of UAE like oil & gas, green energy, mining, agriculture etc.",
        "Ability to work in a fast-paced and deadline-driven environment.",
        "Proven track record of successfully implementing marketing strategies and driving business growth.",
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
      "The ideal candidate will process and analyze drone data using ArcGIS, AGSoft, Pix4Dmapper, and DroneDeploy. Responsibilities include generating high-quality maps and 3D models, collaborating with drone operations, ensuring data accuracy, and improving workflows.",
    qualification: "Graduate in any discipline",
    location: "Abu Dhabi, UAE ",
    experience: "2 year",
    date: "July 21, 2024",
    sheetContent: {
      title: "Marketing And Business Development Executive",
      location: "Abu Dhabi, UAE",
      joining: "Immediately",
      jobPosted: "February 2, 2024",
      qualification: "Graduate in any discipline",
      applyBy: "October 10, 2024",
      rolesAndResponsibilities: [
        "Identify and evaluate new business opportunities through market research and analysis for Drone Services.",
        "Develop and implement marketing strategies to enhance brand awareness and drive business growth.",
        "Build and maintain relationships with key clients and stakeholders.",
        "Prepare and deliver presentations, proposals and negotiation to potential clients.",
      ],
      desiredCandidateProfile: [
        "Bachelor's degree in marketing, business administration, or a related field.",
        "Excellent communication and interpersonal skills.",
        "Experience of working in UAE with company providing professional Drone / Unmanned Aerial Vehicles services in industrial sector of UAE like oil & gas, green energy, mining, agriculture etc.",
        "Ability to work in a fast-paced and deadline-driven environment.",
        "Proven track record of successfully implementing marketing strategies and driving business growth.",
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
      rolesAndResponsibilities: [
        "Identify and evaluate new business opportunities through market research and analysis for Drone Services.",
        "Develop and implement marketing strategies to enhance brand awareness and drive business growth.",
        "Build and maintain relationships with key clients and stakeholders.",
        "Prepare and deliver presentations, proposals and negotiation to potential clients.",
      ],
      desiredCandidateProfile: [
        "Bachelor's degree in marketing, business administration, or a related field.",
        "Excellent communication and interpersonal skills.",
        "Experience of working in UAE with company providing professional Drone / Unmanned Aerial Vehicles services in industrial sector of UAE like oil & gas, green energy, mining, agriculture etc.",
        "Ability to work in a fast-paced and deadline-driven environment.",
        "Proven track record of successfully implementing marketing strategies and driving business growth.",
      ],
      from: {
        title: "Head- Talent Acquisition Vista Drone UAV LLC",
        address:
          "Office No 403| Tower 1| Mazyad Mall| MBZ City, Abu Dhabi|An ISO: 9001 & 45001 Certified company.",
      },
    },
  },
];
