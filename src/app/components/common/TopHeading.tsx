"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const TopHeading: React.FC = () => {
  const heading1Ref = useRef<HTMLDivElement>(null);
  const heading2Ref = useRef<HTMLDivElement>(null);

  const [text] = useState("A passionate");
  const [text2] = useState("UI/UX Designer");

  useEffect(() => {
    if (!heading1Ref.current || !heading2Ref.current) return;

    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // First heading animation
    tl.fromTo(
      heading1Ref.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.06,
        duration: 0.6,
        ease: "power2.out",
      }
    );

    // Second heading animation starts after first completes
    tl.fromTo(
      heading2Ref.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.06,
        duration: 0.6,
        ease: "power1.inOut",
      },
      "+=0.2" // Delay after first animation completes
    );
  }, []);

  return (
    <div>
      {/* First Heading */}
      <div
        ref={heading1Ref}
        className="2xl:text-[75px] sm:text-[62px] text-[40px] font-medium arquitecta max-xl:text-center"
      >
        {text.split("").map((char, index) => (
          <span key={index} className="char">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>

      {/* Second Heading */}
      <div
        ref={heading2Ref}
        className="2xl:text-[75px] sm:text-[62px] text-[40px] font-extrabold arquitecta max-xl:text-center -mt-3"
      >
        {text2.split("").map((char, index) => (
          <span key={index} className="char">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TopHeading;
