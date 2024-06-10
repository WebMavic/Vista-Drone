"use client";
import React from "react";
import { Triangle } from "react-loader-spinner";
function loading() {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <Triangle
        visible={true}
        height="100"
        width="100"
        color="#000"
        ariaLabel="triangle-loading"
      />
    </div>
  );
}

export default loading;
