"use client";
import React from "react";

interface ParaProps {
  children: React.ReactNode;
  className?: string;
}

export default function Paragraph({ children, className }: ParaProps) {
  return (
    <p
      className={`!leading-160 sm:text-xl text-lg font-normal font-asap text-darkgray ${className}`}
    >
      {children}
    </p>
  );
}
