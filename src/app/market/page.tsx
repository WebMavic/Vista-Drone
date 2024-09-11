import React from "react";
import dynamic from "next/dynamic";

import SectionHeader from "@/components/SectionHeader";
const MarketInNumbers = dynamic(() => import("@/components/MarketInsight/MarketInNumbers"));
const ApexChart = dynamic(() => import("@/components/MarketInsight/Chart"))
const SectionLayout = dynamic(() => import("@/components/ui/SectionLayout"));
const SectionContact = dynamic(() => import("@/components/SectionContact"));
const SectionAbout = dynamic(() => import("@/components/SectionAbout"));

import cnbg from "@/assets/images/cnbg.png";

import { factors, factorsArray } from "@/constants";



function page() {
  return (
    <>
      <SectionHeader title="Market Trends" image={cnbg} />

      <SectionLayout>
        <div className="rounded-lg bg-white p-5 shadow-md">
          <MarketInNumbers />
        </div>
      </SectionLayout>

      <SectionAbout
        chips="overview"
        imageStyle="h-[60vh]"
        cta="contact"
        className="lg:h-[60vh]"
        heading="Market Overview: An analysis on Drone Market"
        para="In the last few years, the drone market has grown a lot because of better technology, cheaper prices, and more ways to use them. Drones are now used for lots of things like taking pictures and videos from the sky, checking on farms, looking at buildings, and even delivering packages. The following Data gives us an overview on Drone Market."
      />

      <SectionLayout className="bg-white">
        <div className="mt-10 grid lg:grid-cols-2">
          <div>
            
            <ApexChart
              type="donut"
              width={500}
              height={500}
              options={{
                colors: [
                  "#543310",
                  "#73512C",
                  "#B08F70",
                  "#8A704B",
                  "#AE926C",
                  "#D0BA98",
                ],
                labels: [
                  "Saudi Arab",
                  "UAE",
                  "Qatar",
                  "Kuwait",
                  "Oman",
                  "Orange",
                ],
                title: { text: "Done revenue by Country in 2024" },
              }}
              series={[12, 19, 3, 5, 2, 3]}
            />
          </div>

          <div className="right space-y-5 ">
            <h1 className="text-4xl font-bold text-heading">Key Challenges</h1>

            <ol className="list-disc text-left font-light  *:my-5 ">
              {factorsArray.challenges.map((item) => (
                <li key={item.id}>{item.content}</li>
              ))}
            </ol>
          </div>
        </div>
      </SectionLayout>

      <SectionLayout>
        <div className="mt-10 grid lg:grid-cols-2 ">
          <div className="right space-y-5 ">
            <h1 className="text-4xl font-bold text-heading">Market Trends</h1>

            <ol className="list-disc text-left font-light *:my-5">
              {factorsArray.trends.map((item) => (
                <li key={item.id}>{item.content}</li>
              ))}
            </ol>
          </div>
          <div>
            <ApexChart
              type="area"
              height={500}
              options={{
                xaxis: {
                  categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
                },
              }}
              series={[{data: [30, 40, 45, 50, 49, 60, 70, 91]}]}
            />
          </div>
        </div>
      </SectionLayout>

      <SectionContact />
      <SectionLayout className="bg-white">
        <h2 className="text-2xl font-medium capitalize text-primary lg:text-4xl ">
          Driving Factors
        </h2>
        <div className="my-12 grid gap-5 lg:grid-cols-2">
          {factors.map(({ description, icon: Icon, title }, index) => (
            <div key={index}>
              <div className="flex items-start gap-5">
                <span>
                  <Icon className="size-8 " />
                </span>
                <div>
                  <h3 className="text-lg font-bold leading-none text-heading">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-subheading ">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionLayout>
    </>
  );
}

export default page;
