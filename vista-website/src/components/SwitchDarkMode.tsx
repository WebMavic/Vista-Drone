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
      className={`self-center text-2xl md:text-3xl w-12 h-12 focus:outline-none flex items-center justify-center ${className}`}
    >
      <span className="sr-only">Enable dark mode</span>
      {isDarkMode ? (
        <MoonIcon className="w-7 h-7  dark:text-black " aria-hidden="true" />
      ) : (
        <SunIcon className="w-7 h-7 dark:text-black " aria-hidden="true" />
      )}
    </button>
  );
};

export default SwitchDarkMode;
