"use client";
import { useState, ReactNode, useEffect } from "react";
import BlueHeading from "./common/BlueHeading";
import { RightArrow } from "./common/Icon";

interface PortfolioProps {
  tabs: { title: string; description: ReactNode }[];
}

const Portfolio: React.FC<PortfolioProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [buttonCount, setButtonCount] = useState(tabs.length); // Store button array length

  // Update button count if tabs length changes dynamically
  useEffect(() => {
    setButtonCount(tabs.length);
  }, [tabs]);

  // Show only the first 5 buttons by default
  const visibleTabs = showAll ? tabs : tabs.slice(0, 6);

  return (
    <div className="3xl:max-w-[1560px] 2xl:max-w-[1400px] max-w-[1200px] container xl:py-[120px] lg:py-16 md:py-14 sm:py-12 py-10">
      <div className="text-center">
        <BlueHeading>Portfolio</BlueHeading>
        <h2 className="xl:text-6xl sm:text-5xl text-4xl !leading-120 font-medium arquitecta max-lg:text-center xl:mb-4 mb-3 mt-1">
          Explore Some of <span className="font-bold">My Recent Projects</span>
        </h2>
      </div>
      {/* Tab Headers */}
      <div className="flex sm:gap-6 gap-3 sm:mt-8 mt-6 justify-center items-center flex-wrap">
        {visibleTabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm sm:text-2xl arquitecta !leading-120 font-medium transition-all duration-300 border border-solid rounded-xl ${
              activeTab === index
                ? "border-skyblue text-white bg-skyblue"
                : "text-black border-black bg-transparent"
            }`}
            onClick={() => {
              console.log(`Switching to Tab: ${index}`);
              setActiveTab(index);
            }}
          >
            {tab.title}
          </button>
        ))}
        {buttonCount > 5 && (
          <button
            className="!text-skyblue py-2 px-4 text-sm sm:text-2xl arquitecta !leading-120 font-medium flex items-center gap-1.5 border border-solid border-skyblue rounded-xl fill-skyblue"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "See Less" : "See More"}{" "}
            <RightArrow fillColor="#3498DB" />
          </button>
        )}
      </div>

      {/* Tab Content */}
      <div className="2xl:mt-20 sm:mt-12 mt-10">
        {tabs[activeTab]?.description}
      </div>
    </div>
  );
};

export default Portfolio;
