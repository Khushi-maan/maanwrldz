"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const TopHeading: React.FC = () => {
  // Define the titles to cycle through
  const titles = ["Web Designer", "UI/UX Designer"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;
    // Get the individual letter elements from the heading
    const letters = headingRef.current.children;

    // Animate letters in
    gsap.fromTo(
      letters,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.06,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          // Pause briefly then animate letters out
          gsap.to(letters, {
            opacity: 0,
            y: -20,
            stagger: 0.06,
            duration: 0.6,
            ease: "power2.in",
            delay: 1, // time the title stays visible
            onComplete: () => {
              // Cycle to the next title
              setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
            },
          });
        },
      }
    );
  }, [currentIndex, titles]);

  return (
    <div>
      <div
        ref={headingRef}
        className="2xl:text-[70px] sm:text-[62px] text-[40px] font-extrabold arquitecta max-xl:text-center"
      >
        {titles[currentIndex].split("").map((char, index) => (
          <span key={index} className="char">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TopHeading;
