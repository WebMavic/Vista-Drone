"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import SectionLayout from "@/components/ui/SectionLayout";

import { IoTimeOutline } from "react-icons/io5";
import { MdOutlinePeople } from "react-icons/md";
import { GiDeliveryDrone } from "react-icons/gi";
import { SiDrone } from "react-icons/si";
import { MapPinIcon} from "lucide-react";
import { Job } from "@/types/steps";



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
                    <MdOutlinePeople className="mr-2" />
                    <p className="text-xs font-medium w-3/4 lg:w-auto">{qualification}</p>
                  </div>
                  <div className="flex items-center  text-sm text-gray-500 ">
                    <GiDeliveryDrone className="mr-2" />{" "}
                    <span className="text-xs font-medium">{location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 ">
                    <SiDrone className="mr-2" />{" "}
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
                      Know More 
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
                <div>Ras Al Khaima (RAK) </div>
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
                  Scope Of Work
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
                  Deliverables
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

            {/* <div className="mt-4 w-full rounded-md border border-zinc-300 bg-accent/10">
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
            </div> */}
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
    title: "Aerial Survey and Mapping of Gabbro Quarry of Al Futtaim Cola",
    description:
      "VISTA DRONE has been awarded service contract to carryout aerial survey and mapping services of Shawakh quarry at RAK. This project emphasizes precision and the use of advanced unmanned aerial technology to deliver accurate topographical data and the operations at Quarry. The service will be conducted in compliance with strict safety, and regulatory standards.",
    qualification: "Al Futtaim Colas LLC",
    location: "Aerial Survey and Mapping  Through Drone",
    experience: "VISTA DRONE UNMANNED AERIAL VEHICLES",
    date: "October 22, 2024",
    sheetContent: {
      title: "Aerial Survey and Mapping of Gabbro Quarry of Al Futtaim Cola",
      location: "Ras Al Khaima (RAK)",
      joining: "Immediately",
      jobPosted: "October 2, 2024",
      qualification: "Graduate in any discipline",
      applyBy: "October 2, 2024",
      rolesAndResponsibilities: [
        "Conduct high-resolution aerial surveys of the Gabbro quarry using UAV technology.",
        "Generate accurate topographical maps and geospatial data for the project.",
        "Provide detailed site analysis and mapping for client reporting.",
        "Ensure compliance with health, safety, environmental, and regulatory standards.",
        "Coordinate with the client to meet project timelines and specifications.",
        
    ],
    
      desiredCandidateProfile: [
        "High-resolution aerial imagery of the Gabbro quarry.",
        "Accurate topographical maps and 3D models.",
        "Detailed site analysis reports.",
        "Comprehensive geospatial data for the project.",
      
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
    title: "Aerial Survey and Mapping of Fujairah National Quarry",
    description:
      "VISTA DRONE has been awarded work to provide comprehensive aerial survey and mapping through Drone of the Fujairah National Quarry (FNQ) in RAK. The scope of work includes obtaining necessary govt. permissions, conducting a detailed field study, performing drone operations for data acquisition, and processing of the gathered data as per the agreed deliverables . ",
    qualification: "Fujairah National Quarry (FNQ)",
    location: "Aerial Survey and Mapping of Fujairah National Quarry",
    experience: "VISTA DRONE UNMANNED AERIAL VEHICLES L.L.C.",
    date: "October 07, 2024",
    sheetContent: {
      title: "Aerial Survey and Mapping of Fujairah National Quarry",

      location: "Abu Dhabi, UAE (Hybrid working model)",
      joining: "Immediately",
      jobPosted: "February 2, 2024",
      qualification: "Graduate in any discipline",
      applyBy: "October 07, 2024",
      rolesAndResponsibilities: [
        "Obtain necessary permissions and approvals for drone operations at FNQ.",
        "Conduct high-resolution aerial surveys of the entire FNQ site using UAV technology.",
        "Perform detailed field studies and ground control point surveys (GCPS) for precise data acquisition.",
        "Process and analyze aerial survey data for topographical mapping and geospatial insights."
    ],
    
      desiredCandidateProfile: [
        "Processed high-resolution aerial imagery of the FNQ site.",
        "Accurate topographical maps and geospatial data.",
        "Comprehensive site analysis and data interpretation reports.",
        
        "Full compliance with health, safety, environmental, and regulatory standards."
    ]
    ,
      from: {
        title: "Head- Talent Acquisition Vista Drone UAV LLC",
        address:
          "Office No 403| Tower 1| Mazyad Mall| MBZ City, Abu Dhabi|An ISO: 9001 & 45001 Certified company.",
      },
    },
  },
 
];
