"use client";

import React from "react";
import { steps } from "@/constants/steps";
import { motion } from "framer-motion";

const StepsCards = () => {
  return (
    <section className="mt-10 h-5/6">
      <div className="grid gap-5 lg:grid-cols-3">
        {steps.map((card, index) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1}}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.3,
                duration: index * 0.1,
              }}
              
              key={index}
              className="relative flex h-[250px]   gap-4 rounded-2xl bg-primary/20 p-5 "
            >
              <div className="absolute -top-10 left-5 flex size-10  items-center justify-center rounded-full border-[6px] border-primary2 bg-primary p-8 text-center text-2xl font-bold text-white">
                <span>{card.id}</span>
              </div>
              <div className="flex  h-full w-full flex-col items-center justify-center gap-3">
                <h3 className="text-2xl font-bold capitalize text-primary">
                  {card.title}
                </h3>
                <p className="text-center text-zinc-600   ">{card.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default StepsCards;
