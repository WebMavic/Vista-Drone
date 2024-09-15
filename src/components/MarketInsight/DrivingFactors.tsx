import React from "react";
import { IconType } from "react-icons/lib";

interface Props {
  factors: { title: string; description: string; icon: IconType }[];
}

const DrivingFactors = ({ factors }: Props) => {
  return (
    <ul className="my-12 grid gap-5 lg:grid-cols-2">
      {factors.map(({ description, icon: Icon, title }, index) => (
        <li  key={index}>
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
        </li>
      ))}
    </ul>
  );
};

export default DrivingFactors;
