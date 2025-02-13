"use client";
import { useState } from "react";
import BlueHeading from "./common/BlueHeading";
import Paragraph from "./common/Paragraph";
import { FAQ_DATA } from "../utils/Const";
import { AccArrow } from "./common/Icon";

const HowIWork: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="bg-skyblue bg-opacity-10 py-10 xl:py-28 lg:py-16 md:py-14 sm:py-12">
      <div className="container 3xl:max-w-[1560px] 2xl:max-w-[1400px] max-w-[1200px]">
        {/* Header Section */}
        <div className="flex items-center justify-between max-lg:flex-col max-lg:text-center gap-x-20">
          <div className="max-w-[443px] w-full">
            <BlueHeading>How I Work</BlueHeading>
            <h2 className="xl:text-6xl sm:text-5xl arquitecta text-4xl font-medium leading-tight xl:mb-4 mb-3 mt-1">
              My Design <span className="font-bold">Process</span>
            </h2>
          </div>
          <Paragraph className="max-w-lg">
            Making great websites and apps goes beyond just looks. I focus on
            fixing actual problems through smart design.
          </Paragraph>
        </div>

        {/* Accordion Section */}
        <div className="w-full 2xl:mt-20 mt-8 flex flex-col lg:gap-12 gap-6">
          {FAQ_DATA.map(({ title, description }, index) => (
            <div key={index}>
              {/* Accordion Trigger */}
              <button
                className={`w-full text-left md:rounded-3xl rounded-xl arquitecta font-semibold sm:text-custom-3xl text-xl gap-8 relative sm:p-6 p-4 flex justify-between items-center border border-solid group transition-colors transform hover:bg-skyblue hover:border-skyblue hover:text-white ${
                  activeIndex === index
                    ? "bg-skyblue border-skyblue text-white"
                    : "bg-transparent border-gray text-black"
                }`}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                {index + 1}. {title}
                <div
                  className={`transition-transform transform ${
                    activeIndex === index ? "rotate-0" : "rotate-90"
                  }`}
                >
                  <AccArrow
                    classname={`transition-colors group-hover:fill-white ${
                      activeIndex === index ? "fill-white" : "fill-black"
                    }`}
                  />
                </div>
              </button>

              {/* Accordion Content */}
              <div
                className={`grid transition-all duration-300 overflow-hidden ${
                  activeIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">{description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowIWork;
