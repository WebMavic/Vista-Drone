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
      <CardContent className="mt-1">
  <h4 className="font-semibold text-heading mb-2">Core Topics:</h4>

  {/* Intro Text */}
  <p className="text-subheading text-sm text-center mb-4">
    Suitable for enthusiasts in{" "}
    <span className="text-accent font-medium">vlogging</span> &{" "}
    <span className="text-accent font-medium">event coverage</span>. The training will further help them in:
  </p>

  {/* Bullet Points in 2 Columns */}
  <ul className="grid grid-cols-2 gap-y-4 gap-x-6 text-subheading text-sm">
    <li className="flex items-center gap-2 justify-center">
      <FiCheck className="text-green-600 mt-1" />
      <span>Drone Light Shows</span>
    </li>

    <li className="flex items-center gap-2 justify-center">
      <FiCheck className="text-green-600 mt-1" />
      <span>Travel Vlogging</span>
    </li>

    <li className="flex items-center gap-2 justify-center">
      <FiCheck className="text-green-600 mt-1" />
      <span>Camel Race Filming</span>
    </li>

    <li className="flex items-center gap-2 justify-center">
      <FiCheck className="text-green-600 mt-1" />
      <span>Drone Racing</span>
    </li>
    <li
  className="flex items-center text-white select-none gap-2 justify-center"
  style={{ WebkitUserSelect: "none", userSelect: "none" }}
>
  <FiCheck className="mt-1" style={{ WebkitUserSelect: "none", userSelect: "none" }} />
  <span
    className="select-none"
    style={{ WebkitUserSelect: "none", userSelect: "none" }}
  >
    .
  </span>
</li>

<li
  className="flex items-center text-white select-none gap-2 justify-center"
  style={{ WebkitUserSelect: "none", userSelect: "none" }}
>
  <FiCheck className="mt-1" style={{ WebkitUserSelect: "none", userSelect: "none" }} />
  <span
    className="select-none"
    style={{ WebkitUserSelect: "none", userSelect: "none" }}
  >
    .
  </span>
</li>

  </ul>

  {/* Includes Text */}
  <p className="mt-4 text-subheading text-sm text-center">
    <span className="font-semibold">Includes:</span> Basics of drone flying, UAE regulations, simulator practice, & hands-on field training.
  </p>
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

  {/* Intro Text */}
  <p className="text-subheading text-sm text-center mb-4">
    Trained pilots under the{" "}
    <span className="text-accent font-medium">commercial category</span> can add value in industries like:
  </p>

  {/* Bullet Points in 2 Columns */}
  <ul className="grid grid-cols-2 gap-y-4 gap-x-6 text-subheading text-sm">
    <li className="flex items-center gap-2 justify-center">
      <FiCheck className="text-green-600 mt-1" />
      <span>Mining & Geology</span>
    </li>

    <li className="flex items-center gap-2 justify-center">
      <FiCheck className="text-green-600 mt-1" />
      <span>Oil & Gas</span>
    </li>

    <li className="flex items-center gap-2 justify-center">
      <FiCheck className="text-green-600 mt-1" />
      <span>Civil Infrastructure</span>
    </li>

    <li className="flex items-center gap-2 justify-center">
      <FiCheck className="text-green-600 mt-1" />
      <span>Agriculture</span>
    </li>

    <li className="flex items-center gap-2 justify-center">
      <FiCheck className="text-green-600 mt-1" />
      <span>Renewable Energy</span>
    </li>

    <li className="flex items-center gap-2 justify-center">
      <FiCheck className="text-green-600 mt-1" />
      <span>Surveillance & Inspection</span>
    </li>
  </ul>

  {/* Includes Text */}
  <p className="mt-4 text-subheading text-sm text-center">
    <span className="font-semibold">Includes:</span> Mission planning, data mapping, AI-enabled UAV systems, payload integration (RGB, Thermal, LiDAR).
  </p>
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
