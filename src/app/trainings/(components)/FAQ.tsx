"use client"
import React from "react"
import FAQITEM from "@/components/FAQs/FAQITEM"

const faqData = [
  {
    question: "Why Learn to Fly a Drone Now?",
    answer: {
      content:
        "The world is changing fast and so is the industries adapting new technologies. Drones are no longer a futuristic concept; they are today’s essential tool across sectors like inspection and monitoring, precision in agriculture, delivery, and emergency response. At Vista Drone, we prepare you not just to fly, but to operate confidently, safely, and in full compliance with GCAA regulations.",
    },
  },
  {
    question: "Why Choose GCAA-Aligned Training to Advance Your Drone Career?",
    answer: {
      content:
        "At Vista Drone, our training programs are fully aligned with the UAE’s General Civil Aviation Authority (GCAA) framework ensuring you are not just trained, but industry-ready. Backed by ACTVET licensing and led by experienced instructors, our courses are designed to build your credibility and confidence from day one.",
    },
  },
  {
    question: "Why Train with Vista Drone?",
    answer: {
      content:
        "At Vista Drone, we deliver GCAA-approved drone training programs (Online & Offline) designed to equip you with practical flying skills and regulatory knowledge. Whether you are a hobbyist or an aspiring commercial drone operator, our modules combine simulation, theory, and real-world field sessions.",
      list: [
        "Certified by GCAA",
        "At ACTVET Licensed Training Centre in Abu Dhabi",
        "Instructors with industry experience",
        "Simulation + Field Training included",
        "Competency Based Training",
      ],
    },
  },
  {
    question: "What kind of training environment does Vista Drone offer?",
    answer: {
      content:
        "Vista Drone provides a purpose-built training facility equipped with smart classrooms, simulation labs, and dedicated outdoor flying practice zones. Our sessions are highly interactive and practical, led by professionals with real-world field experience. Each module is structured to help you build hands-on skills ensuring you are prepared for actual drone operations.",
    },
  },
  {
    question: "How is Vista Drone’s training different from other programs?",
    answer: {
      content:
        "At Vista Drone, training goes beyond ticking boxes. We do mentor and boost the confidence to fly in a challenging terrain, remain compliant, and be an industry-ready drone operator. Our approach is not just about helping you pass and get the Certificate — it is about helping you to excel. You will gain practical skills, real-world insight, and a professional mindset that sets you apart in the drone industry.",
    },
  },
]

function FAQ() {
  return (
    <div className="space-y-4 w-full">
    
      {faqData.map((item, idx) => (
        <FAQITEM key={idx} id={idx} question={item.question} answer={item.answer} />
      ))}
    </div>
  )
}

export default FAQ
