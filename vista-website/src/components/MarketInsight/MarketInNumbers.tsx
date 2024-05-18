"use client";
import React, { ReactNode } from "react";
import CountUp from "react-countup";

import {
  CurrencyDollarIcon,
  SpeakerWaveIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";

function MarketInNumbers() {
  return (
    <div className="grid h-full w-full select-none place-items-center gap-5 sm:grid-cols-3 sm:gap-3">
      {MarketInNumbersCode.map((item, index) => (
        <div
          className="flex items-center justify-between gap-5 text-heading dark:text-white"
          key={index}
        >
          <div>{item.icon}</div>
          <div className="inline-flex flex-col">
            <h3 className="text-2xl">
              <CountUp end={item.value} 
                    start={0} 
                    duration={5} 
                    decimals={2}  
                    prefix={item.tag === "million" ? "$" : ""}
                    />{' '}
                    
              {item.tag}
            </h3>

            <span className="font-light text-subheading sm:w-2/3 ">
              {item.description.trim()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MarketInNumbers;

type MarketInNumbers = {
  value: number;
  tag: string;
  description: string;
  icon: ReactNode;
};

const MarketInNumbersCode: MarketInNumbers[] = [
  {
    value: 23.7,
    tag: "million",
    description: "In 2024, the projected revenue in the Drones market in GCC",
    icon: <CurrencyDollarIcon className="h-10  text-accent" />,
  },
  {
    value: 4.49,
    tag: "% growth",
    description:
      "Increased focus in oil and gas, construction, and security (GCC)",
    icon: <SignalIcon className="h-10 text-accent" />,
  },
  {
    value: 3,
    tag: "sectors",
    description: "Annual growth rate from 2024 to 2028 (GCC)",
    icon: <SpeakerWaveIcon className="h-10 text-accent" />,
  },
  {
    value: 4.37,
    tag: "million",
    description: "In 2024, the projected revenue in  the Drones market in UAE",
    icon: <CurrencyDollarIcon className="h-10 text-accent" />,
  },
  {
    value: 1.29,
    tag: "% growth",
    description: "Annual growth rate from  2024 to 2028 (UAE)",
    icon: <SignalIcon className="h-10 text-accent" />,
  },
  {
    value: 2,
    tag: "areas",
    description:
      "Increased focus in aerial  photography and videography  purposes (UAE)",
    icon: <SpeakerWaveIcon className="h-10 text-accent" />,
  },
];
