"use client";
import React from "react";

interface ParaProps {
  children: React.ReactNode;
  className?: string;
  orange?: boolean;
  white?: boolean;
}

export default function Cta({ children, className, orange, white }: ParaProps) {
  return (
    <button
      className={`py-3.5 px-6 !leading-120 text-base font-semibold arquitecta border-solid border rounded-md ${
        white && "bg-transparent text-white border-white"
      } ${orange && "bg-transparent text-orange border-orange"} ${className}`}
    >
      {children}
    </button>
  );
}
