"use client";
import Link from "next/link";
import {
  HEADER_CONTACT_DETAIL,
  HEADER_SOCIAL_MEDIA_LINKS,
  NAV_LINK,
} from "../../utils/Const";
import Cta from "./Cta";
import { useEffect, useState } from "react";
import { Downicon } from "./Icon";
function Nav() {
  const [toggle, setToggle] = useState(false);

  // Effect to handle body class toggling
  useEffect(() => {
    if (toggle) {
      document.body.classList.add("max-lg:overflow-hidden");
    } else {
      document.body.classList.remove("max-lg:overflow-hidden");
    }
  }, [toggle]);
  return (
    <>
      <div className="bg-skyblue py-5 rounded-b-3xl max-lg:hidden">
        <div className="container 2xl:max-w-[1560px] max-w-[1300px] flex items-center lg:justify-between justify-center lg:flex-row flex-col gap-y-5">
          <div className="flex items-center sm:flex-row flex-col sm:gap-11 gap-3">
            {HEADER_CONTACT_DETAIL.map((obj, index) => (
              <Link
                key={index}
                href={obj.path}
                className="flex items-center gap-1.5 font-asap sm:text-xl text-base leading-160 text-white"
              >
                {obj.svg}
                {obj.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {HEADER_SOCIAL_MEDIA_LINKS.map((obj, index) => (
              <Link
                key={index}
                href={obj.path}
                className="sm:size-8 size-6 flex items-center justify-center"
              >
                {obj.svg}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="container 2xl:max-w-[1560px] max-w-[1300px]">
        <div className="flex justify-between items-center xl:py-12 lg:py-6 sm:py-4 py-3 relative">
          <Link
            href={""}
            className="font-kaushan text-black lg:text-custom-4xl sm:text-4xl text-2xl leading-120 font-semibold border-b-4 border-black border-dotted"
          >
            maanwrldz
          </Link>
          <div
            className={`flex items-center xl:gap-x-11 gap-x-8 max-lg:fixed max-lg:top-0 max-lg:bg-white max-lg:flex-col max-lg:justify-center max-lg:min-h-screen max-lg:z-10 max-lg:w-full max-lg:gap-5 transition-all duration-300 ease-linear ${
              toggle ? "max-lg:left-0" : "max-lg:left-[-100%]"
            }`}
          >
            <div
              className={`flex items-center gap-3 bg-skyblue fixed left-0 right-0 justify-center sm:py-4 py-3 transition-all ease-linear duration-300 ${
                toggle ? "top-0" : "top-[-100%]"
              }`}
            >
              {HEADER_SOCIAL_MEDIA_LINKS.map((obj, index) => (
                <Link
                  key={index}
                  href={obj.path}
                  className="sm:size-8 size-6 flex items-center justify-center"
                >
                  {obj.svg}
                </Link>
              ))}
            </div>
            {NAV_LINK.map((obj, index) => (
              <Link
                key={index}
                href={obj.path}
                className="font-asap font-normal text-xl !leading-160 text-darkgray hover:text-black relative after:absolute after:left-1/2 after:h-[1.5px] after:bottom-0 after:w-0 after:rounded after:transition-all after:duration-300 after:ease-linear transition-all duration-300 ease-linear hover:after:w-full hover:after:left-0 after:bg-black"
              >
                {obj.title}
              </Link>
            ))}
            <Cta className="lg:hidden border-skyblue text-skyblue">
              Contact Us
            </Cta>
          </div>
          <Cta white className="z-10 xl:mr-16 mr-10 lg:block hidden">
            Contact Us
          </Cta>
          <div className="absolute xl:w-[280px] w-[220px] h-full top-[-1px] bg-skyblue right-0 xl:rounded-b-[36px] rounded-b-2xl lg:block hidden"></div>
          <button
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle Navigation"
            className="lg:hidden sm:w-[28px] w-6 sm:h-[20px] h-[18px] z-[55] flex sm:gap-1.5 gap-1 flex-col relative"
          >
            <span
              className={`${
                toggle
                  ? "rotate-[50deg] sm:translate-y-[7px] translate-y-[5px] bg-white"
                  : "bg-black"
              } h-[2.5px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
            ></span>
            <span
              className={`${
                toggle ? "hidden bg-white" : "bg-black"
              } h-[2.5px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
            ></span>
            <span
              className={`${
                toggle
                  ? "rotate-[-50deg] translate-y-[-50%] bg-white"
                  : "bg-black"
              } h-[2.5px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
            ></span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Nav;
