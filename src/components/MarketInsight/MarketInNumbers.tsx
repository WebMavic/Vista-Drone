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
    <div className="grid h-full w-full select-none lg:place-items-center gap-5 lg:grid-cols-3 lg:gap-10">
      {MarketInNumbersCode.map(({description,icon,tag,value}, index) => (
        <div key={index} className="flex p-2 flex-col items-center">
          <div className="inline-flex items-center justify-center gap-5">
            <span>{icon}</span>
            <div className="text-2xl tabular-nums text-accent">
              <CountUp
                end={value}
                start={0}
                duration={5}
                decimals={2}
                prefix={tag === "million" ? "$" : ""}
              />{" "}
              {tag}
            </div>
          </div>
          <p className="text-center py-2 font-light px-2 text-subheading">{description}</p>
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
