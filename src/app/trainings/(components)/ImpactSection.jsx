import React from "react";
import Image from "next/image";
import impact1 from "@/assets/images/trainings/impact1.png";
import impact2 from "@/assets/images/trainings/impact2.png";

const EnrollImpactSection = () => {
  const items = [
    {
      icon: impact1,
      title: "Who Should Enroll?",
      description: (
        <ul className="list-disc pl-5 text-left space-y-2">
          <li>Drone enthusiasts</li>
          <li>Working professionals exploring UAV roles</li>
          <li>Surveyors, engineers, and inspectors</li>
          <li>Students seeking future-ready skills</li>
          <li>
            Individuals seeking commercial drone skills for industry applications
          </li>
        </ul>
      ),
    },
    {
      icon: impact2,
      title: "Training Methodology",
      description: (
        <ul className="list-disc pl-5 text-left space-y-2">
          <li>Interactive theory sessions</li>
          <li>Simulations in our drone lab</li>
          <li>On-ground flying experience</li>
        </ul>
      ),
    },
  ];

  return (
    <section className="bg-primary2 py-16 px-6 text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-heading mb-12">
        Drone Training Designed for All Learners
      </h2>

      <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center px-4"
          >
            <div className="mb-6">
              <Image
                src={item.icon}
                alt={item.title}

                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-heading mb-4">
              {item.title}
            </h3>
            <div className="text-subheading text-sm md:text-base leading-relaxed max-w-sm">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EnrollImpactSection;
