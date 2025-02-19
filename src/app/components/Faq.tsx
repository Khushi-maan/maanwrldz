"use client";
import Image from "next/image";
import BlueHeading from "./common/BlueHeading";
import Cta from "./common/Cta";
import Paragraph from "./common/Paragraph";
import { useState } from "react";
import { FAQ_BUTTON } from "../utils/Const";
import { AccArrow } from "./common/Icon";

function Faq() {
  const [activefaqIndex, setActiveFaqIndex] = useState<number | null>(null);
  return (
    <div id="faq" className="xl:py-[120px] lg:py-16 md:py-14 sm:py-12 py-10">
      <div className="container 3xl:max-w-[1560px] 2xl:max-w-[1400px] max-w-[1200px]">
        <div className="flex items-center gap-6 justify-between xl:flex-row flex-col">
          <div className="xl:max-w-[615px] w-full max-xl:flex flex-col justify-center items-center">
            <BlueHeading className="">FAQ's</BlueHeading>
            <h2 className="sm:text-5xl arquitecta text-4xl font-medium leading-tight xl:mb-4 mb-3 mt-1">
              Answering Your <span className="font-bold">Questions</span>
            </h2>
            <Paragraph className="xl:mb-12 mb-4 max-xl:text-center max-w-[720px]">
              I believe in transparency and making the design process seamless
              for my clients. Below are some frequently asked questions to help
              you understand how I work.
            </Paragraph>
            <Cta orange>View All FAQ’s</Cta>
            <Image
              src={"/assets/images/png/presentation.png"}
              alt="presentation"
              width={615}
              height={322}
              className="max-xl:max-w-[700px] mx-auto w-full xl:h-[322px] sm:h-[380px] h-[300px] object-cover object-top rounded-3xl 3xl:mt-20 xl:mt-14 mt-8"
            />
          </div>
          <div className="xl:max-w-[852px] w-full">
            <div className="w-full flex flex-col 2xl:gap-9 gap-6">
              {FAQ_BUTTON.map(({ title, description }, index) => (
                <div
                  key={index}
                  className={`w-full text-left md:rounded-3xl rounded-xl relative sm:p-6 p-4 border border-solid group transition-colors transform hover:bg-skyblue hover:border-skyblue hover:text-white cursor-pointer ${
                    activefaqIndex === index
                      ? "bg-skyblue border-skyblue text-white"
                      : "bg-transparent border-gray text-black"
                  }`}
                  onClick={() =>
                    setActiveFaqIndex(activefaqIndex === index ? null : index)
                  }
                >
                  {/* Accordion Trigger */}
                  <button
                    className={`w-full text-left arquitecta font-semibold md:text-2xl !leading-120 md:!leading-160 text-lg gap-8 relative flex justify-between items-center `}
                  >
                    {index + 1}. {title}
                    <div
                      className={`transition-transform transform ${
                        activefaqIndex === index ? "rotate-0" : "rotate-90"
                      }`}
                    >
                      <AccArrow
                        classname={`transition-colors group-hover:fill-white ${
                          activefaqIndex === index ? "fill-white" : "fill-black"
                        }`}
                      />
                    </div>
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`grid transition-all duration-300 overflow-hidden ${
                      activefaqIndex === index
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">{description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
