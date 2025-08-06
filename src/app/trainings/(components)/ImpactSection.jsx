"use client";
import React from "react";
import Image from "next/image";
import impact1 from "@/assets/images/trainings/impact1.png";
import impact2 from "@/assets/images/trainings/impact2.png";
import impact3 from "@/assets/images/trainings/impact3.png";

const ImpactSection = () => {
  return (
    <section className="bg-primary2 py-16 px-6">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-3">

 <div className="flex flex-col items-center text-left 
                bg-white rounded-xl shadow-md border-b-4 border-primary p-6
                transform transition duration-300 hover:scale-105 hover:-translate-y-1">
          <div className="mb-6 rounded-full bg-accent/15 p-4">
            
             <Image
              src={impact3}
              alt="Training Methodology"
              width={200}
              height={130}
              className="object-contain"
            />
         
          </div>
          <h3 className="text-xl font-bold text-heading mb-4 text-center w-full">
            Special Discount
          </h3>
          <div className="text-subheading text-base text-center space-y-2 w-full">
            <p className="mb-2 text-center">Special discount for a limited period:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Government Employees</li>
              <li>A Group of 5+</li>
              <li>Female Candidates</li>
              <li>Flexible payment options available</li>
            </ul>
           
          </div>
        </div>

        {/* Who Should Enroll Card */}
        <div className="flex flex-col items-center text-left 
                bg-white rounded-xl shadow-md border-b-4 border-primary p-6
                transform transition duration-300 hover:scale-105 hover:-translate-y-1">
  
          {/* Icon */}
          <div className="mb-6 rounded-full bg-accent/15 p-4">
            <Image
              src={impact1}
              alt="Who Should Enroll?"
              width={130}
              height={130}
              className="object-contain"
            />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-heading mb-4 text-center w-full">
            Who Should Enroll?
          </h3>

          {/* Content */}
          <div className="text-subheading text-base space-y-2 w-full">
            <p className="mb-2 text-center">Our programs are ideal for:</p>
            <ul className="list-disc pl-5 text-center space-y-1">
              <li>Drone enthusiasts</li>
              <li>Working professionals exploring UAV roles</li>
              <li>Surveyors, engineers, and inspectors</li>
              <li>Students seeking future-ready skills</li>
              <li>Individuals seeking commercial drone skills for industry applications</li>
            </ul>
          </div>
        </div>

        {/* Training Methodology Card */}
        <div className="flex flex-col items-center text-left 
                bg-white rounded-xl shadow-md border-b-4 border-primary p-6
                transform transition duration-300 hover:scale-105 hover:-translate-y-1">
          <div className="mb-6 rounded-full bg-accent/15 p-4">
            <Image
              src={impact2}
              alt="Training Methodology"
              width={130}
              height={130}
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-heading mb-4 text-center w-full">
            Training Methodology
          </h3>
          <div className="text-subheading text-base text-left space-y-2 w-full">
            <p className="mb-2 text-center">Each course is a blend of:</p>
            <ul className="list-disc pl-5 text-center  space-y-1">
              <li>Interactive theory sessions</li>
              <li>Simulations in our drone lab</li>
              <li>On-ground flying experience</li>
            </ul>
          </div>
        </div>

        {/* Special Discount Card */}
       

      </div>
    </section>
  );
};

export default ImpactSection;
