"use client";
import React from "react";

interface ParaProps {
  children: React.ReactNode;
  className?: string;
}

export default function BlueHeading({ children, className }: ParaProps) {
  return (
    <div className="sm:py-2 py-1.5 sm:px-4 px-2 border-l-[2px] border-r-[2px] border-skyblue inline-flex sm:rounded-xl rounded-md max-xl:mb-2">
      <p className="font-laila sm:text-xl text-lg !leading-120 text-skyblue font-bold">
        {children}
      </p>
    </div>
  );
}
