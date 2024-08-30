import Link from "next/link";
import { title } from "process";
import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

interface ButtonProps {
  type?: "primary" | "outline";
  className?: string;
  title: string;
  href?: string;
  icon?: boolean;
}
function Button({ title, className, href, type, icon }: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={cn("inline-flex text-white  rounded-md px-3 py-2  transition-all duration-200 ease-in-out lg:px-4 lg:py-3 ", className , type === "primary" ? "bg-accent" : "bg-white hover:bg-accent hover:text-white  text-accent border border-accent")}
      >
        {icon ? (
          <div className="inline-flex items-center justify-center">
            {title}
            <span>
              <ChevronRightIcon className="h-5" />
            </span>
          </div>
        ) : (
          title
        )}
      </Link>
    );
  }
  return (
    <button
      className={cn("inline-flex bg-accent text-white cursor-pointer  rounded-md px-3 py-2  transition-all duration-200 ease-in-out lg:px-4 lg:py-3 ",className)}
    >
      <div>
        {icon ? (
          <div className="inline-flex items-center justify-center">
            {title}
            <span>
              <ChevronRightIcon className="h-5" />
            </span>
          </div>
        ) : (
          title
        )}
      </div>
    </button>
  );
}

export default Button;
