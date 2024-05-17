import React, { ReactNode } from "react";
import {
  CurrencyDollarIcon,
  SpeakerWaveIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";

function MarketInNumbers() {
  return (
    <div className="grid sm:grid-cols-3 gap-5 sm:gap-3 w-full h-full place-items-center select-none">
      {MarketInNumbersCode.map((item, index) => (
        <div className="dark:text-white text-heading flex justify-between items-center gap-5" key={index}>
          <div>{item.icon}</div>
          <div className="inline-flex flex-col">
            <h3 className="text-2xl">{item.value.trim()}</h3>
            <span className="font-light text-subheading sm:w-2/3 ">{item.description.trim()}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MarketInNumbers;

type MarketInNumbers = {
  value: string;
  description: string;
  icon: ReactNode;
};

interface MarketInNumbersCodeType {
  global: MarketInNumbers[];
  uae: MarketInNumbers[];
}

// export const MarketInNumbersCode: MarketInNumbersCodeType = {
//     global: [
//         {
//             value: '23.7 million',
//             description: 'In 2024, the projected revenue in the Drones market in GCC',
//             icon: <CurrencyDollarIcon className='h-10'/>,
//         },
//         {
//             value: '4.49% growth',
//             description: 'Increased focus in oil and gas, construction, and security (GCC)',
//             icon: <SignalIcon className='h-10'/>
//         },
//         {
//             value: '3 sectors',
//             description: 'Annual growth rate from 2024 to 2028 (GCC)',
//             icon: <SpeakerWaveIcon className='h-10'/>
//         }
//     ],
//     uae: [
//         {
//             value: '$4.37m',
//             description: 'In 2024, the projected revenue in  the Drones market in UAE',
//             icon: <CurrencyDollarIcon className='h-10'/>,
//         },
//         {
//             value: '1.29% growth',
//             description: 'Annual growth rate from  2024 to 2028 (UAE)',
//             icon: <CurrencyDollarIcon className='h-10'/>,
//         },
//         {
//             value: '2 areas',
//             description: 'Increased focus in aerial  photography and videography  purposes (UAE)',
//             icon: <CurrencyDollarIcon className='h-10'/>,
//         }
//     ]
// }

const MarketInNumbersCode: MarketInNumbers[] = [
  {
    value: "23.7 million",
    description: "In 2024, the projected revenue in the Drones market in GCC",
    icon: <CurrencyDollarIcon className="h-10  text-accent"  />,
  },
  {
    value: "4.49% growth",
    description:
      "Increased focus in oil and gas, construction, and security (GCC)",
    icon: <SignalIcon className="h-10 text-accent" />,
  },
  {
    value: "3 sectors",
    description: "Annual growth rate from 2024 to 2028 (GCC)",
    icon: <SpeakerWaveIcon className="h-10 text-accent" />,
  },
  {
    value: "$4.37m",
    description: "In 2024, the projected revenue in  the Drones market in UAE",
    icon: <CurrencyDollarIcon className="h-10 text-accent" />,
  },
  {
    value: "1.29% growth",
    description: "Annual growth rate from  2024 to 2028 (UAE)",
    icon: <SignalIcon className="h-10 text-accent" />,
  },
  {
    value: "2 areas",
    description:
      "Increased focus in aerial  photography and videography  purposes (UAE)",
    icon:  <SpeakerWaveIcon className="h-10 text-accent" />,
  },
];
