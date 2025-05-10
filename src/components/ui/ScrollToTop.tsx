"use client";
import { ChevronUp } from "lucide-react";
import React from "react";
import { Button } from "./button";

function scrollToTop() {
  if (typeof window !== "undefined") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

const ScrollToTop = () => {
  
  return (
    <div
      className="fixed bottom-5 right-3 z-50  flex  items-center gap-2  p-4"
    >
      <Button size={"icon"} className="rounded-full bg-primary" onClick={scrollToTop}>
        <ChevronUp className="size-8 " />
        <span className="sr-only">scroll to top</span>
      </Button>
    </div>
  );
};

export default ScrollToTop;
