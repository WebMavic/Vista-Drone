"use client";

import React from "react";
import Image from "next/image";
import { Lens } from "@/components/magicui/lens"; 
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FiCheck } from "react-icons/fi";
import Link from "next/link";
import commercialimg from "@/assets/images/trainings/commercial.jpg"
import hobby from "@/assets/images/trainings/hobby.webp"

export default function CourseCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6 py-16">
      
      {/* Hobbyist Card */}
      <Card className="shadow-lg ">
        <CardHeader>
          <div className="w-full h-[250px] overflow-hidden rounded-md">
            <Lens zoomFactor={2} lensSize={150} isStatic={false} ariaLabel="Zoom Area">
              <Image
                src={hobby}
                alt="Hobbyist Course"
                width={500}
                height={500}
                
                className="rounded-md object-cover w-full h-full"
              />
            </Lens>
          </div>
          <CardTitle className="text-2xl font-bold text-heading">Hobbyist (2 Days Course)</CardTitle>
          <CardDescription className="mt-4 text-subheading">
            <strong>Total Duration:</strong> 14 Hours (Theory, Simulations in Lab & Field Training)
            <br />
            
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-1 ">
          <h4 className="font-semibold text-heading mb-2">Core Topics:</h4>
         <ul className="flex flex-col items-center text-subheading text-sm text-center space-y-4">
  <li className="flex flex-col items-center">
    <div className="flex items-center gap-2">
      <FiCheck className="text-green-600 mt-1" />
      <span>UAE drone market overview</span>
    </div>
    <div className="mt-2 h-px w-48 bg-subheading/30" />
  </li>

  <li className="flex flex-col items-center">
    <div className="flex items-center gap-2">
      <FiCheck className="text-green-600 mt-1" />
      <span>Drone types & payloads</span>
    </div>
    <div className="mt-2 h-px w-48 bg-subheading/30" />
  </li>

  <li className="flex flex-col items-center">
    <div className="flex items-center gap-2">
      <FiCheck className="text-green-600 mt-1" />
      <span>Basics of drone software and hardware</span>
    </div>
    <div className="mt-2 h-px w-48 bg-subheading/30" />
  </li>

  <li className="flex flex-col items-center">
    <div className="flex items-center gap-2">
      <FiCheck className="text-green-600 mt-1" />
      <span>Applications in personal & recreational use</span>
    </div>
    <div className="mt-2 h-px w-48 bg-subheading/30" />
  </li>

  <li className="flex flex-col items-center">
    <div className="flex items-center gap-2">
      <FiCheck className="text-green-600 mt-1" />
      <span>Drone flying regulations of GCAA</span>
    </div>
    <div className="mt-2 h-px w-48 bg-subheading/30" />
  </li>
  <li className="flex flex-col text-white items-center">
    <div className="flex items-center gap-2">
      <FiCheck className="text-white mt-1" />
      <span>Drone flying regulations of GCAA</span>
    </div>
    <div className="mt-2 h-px w-48 bg-white" />
  </li>
</ul>


        </CardContent>
        <CardFooter className="flex justify-center mt-4">
           <Link href="/enroll">
          <Button>Enroll Now</Button>
          </Link>
        </CardFooter>
      </Card>

      {/* Professional Card */}
      <Card className="shadow-lg">
        <CardHeader>
          <div className="w-full h-[250px] overflow-hidden rounded-md">
            <Lens zoomFactor={2} lensSize={150} isStatic={false} ariaLabel="Zoom Area">
              <Image
               src={commercialimg}
                alt="Professional Course"
                width={500}
                height={500}
                className="rounded-md object-cover w-full h-full"
              />
            </Lens>
          </div>
          <CardTitle className="text-2xl font-bold text-heading">Commercial (5 Days)</CardTitle>
          <CardDescription className="mt-4 text-subheading">
            <strong>Total Duration:</strong> 35 Hours (Theory, Simulations in Lab & Field Training)
            <br />
            
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-1">
          <h4 className="font-semibold text-heading mb-2">Key Modules Include:</h4>
         <ul className="flex flex-col items-center text-subheading text-sm text-center space-y-4">
  <li className="flex flex-col items-center">
    <div className="flex items-center gap-2">
      <FiCheck className="text-green-600 mt-1" />
      <span>Drone evolution and market trends in the UAE</span>
    </div>
    <div className="mt-2 h-px w-48 bg-subheading/30" />
  </li>

  <li className="flex flex-col items-center">
    <div className="flex items-center gap-2">
      <FiCheck className="text-green-600 mt-1" />
      <span>GCAA registration & permissions</span>
    </div>
    <div className="mt-2 h-px w-48 bg-subheading/30" />
  </li>

  <li className="flex flex-col items-center">
    <div className="flex items-center gap-2">
      <FiCheck className="text-green-600 mt-1" />
      <span> Components & payloads</span>
    </div>
    <div className="mt-2 h-px w-48 bg-subheading/30" />
  </li>

  <li className="flex flex-col items-center">
    <div className="flex items-center gap-2">
      <FiCheck className="text-green-600 mt-1" />
      <span>UTM & airspace classification</span>
    </div>
    <div className="mt-2 h-px w-48 bg-subheading/30" />
  </li>

  <li className="flex flex-col items-center">
    <div className="flex items-center gap-2">
      <FiCheck className="text-green-600 mt-1" />
      <span>Industry use-cases (agriculture, inspection, etc.)</span>
    </div>
    <div className="mt-2 h-px w-48 bg-subheading/30" />
  </li>
  <li className="flex flex-col items-center">
    <div className="flex items-center gap-2">
      <FiCheck className="text-green-600 mt-1" />
      <span>Emergency handling & reporting systems</span>
    </div>
    <div className="mt-2 h-px w-48 bg-subheading/30" />
  </li>
</ul>
        </CardContent>
        <CardFooter className="flex justify-center mt-4">
          <Link href="/enroll">
           <Button>Enroll Now</Button>
        </Link>
        </CardFooter>
      </Card>

    </div>
  );
}
