"use client";

import React, { useState, useEffect } from "react";
import { MoonIcon } from "@heroicons/react/24/solid";
import { SunIcon } from "@heroicons/react/24/outline";

export interface SwitchDarkModeProps {
  className?: string;
}
const SwitchDarkMode: React.FC<SwitchDarkModeProps> = ({ className = "" }) => {
  const [isDarkMode, setisDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => {
        setisDarkMode(!isDarkMode);
      }}
      className={`flex h-12 w-12 items-center justify-center self-center text-2xl focus:outline-none md:text-3xl ${className}`}
    >
      <span className="sr-only">Enable dark mode</span>
      {isDarkMode ? (
        <MoonIcon className="h-7 w-7  dark:text-white " aria-hidden="true" />
      ) : (
        <SunIcon className="h-7 w-7 dark:text-black " aria-hidden="true" />
      )}
    </button>
  );
};

export default SwitchDarkMode;
