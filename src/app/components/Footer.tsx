import Link from "next/link";
import Paragraph from "./common/Paragraph";
import {
  FOOTER_LEGAL_LINKS,
  FOOTER_USEFUL_LINKS,
  HEADER_CONTACT_DETAIL,
  STAY_UPDATED,
} from "../utils/Const";

function Footer() {
  return (
    <div className="bg-skyblue xl:pt-20 lg:pt-16 md:pt-14 sm:pt-12 pt-10">
      <div className="container 3xl:max-w-[1560px] 2xl:max-w-[1400px] max-w-[1200px]">
        <div className="flex justify-between 3xl:gap-20 lg:gap-12 sm:gap-10 gap-8 xl:pb-20 lg:pb-16 md:pb-14 pb-12 border-b-[2px] border-white lg:flex-row flex-col">
          <div className="2xl:max-w-[576px] xl:max-w-[400px] lg:max-w-[350px] w-full">
            <Link
              href={""}
              className="font-kaushan text-white lg:text-custom-4xl sm:text-4xl text-2xl leading-120 font-semibold border-b-4 border-white border-dotted"
            >
              maanwrldz
            </Link>
            <Paragraph className="lg:mt-8 mt-6 !text-white !leading-150">
              Let’s keep in touch! Follow me on social media for design
              insights, updates, and creative inspiration. Have a project in
              mind? Feel free to reach out!
            </Paragraph>
          </div>
          <div className="lg:max-w-[757px] w-full flex justify-between md:gap-10 gap-y-6 max-md:flex-wrap">
            <ul className="flex flex-col lg:gap-4 gap-3 max-md:w-1/2 max-sm:w-full">
              <li className="text-2xl font-medium !leading-150 text-white lg:mb-2.5">
                Useful Links
              </li>
              {FOOTER_USEFUL_LINKS.map((obj, index) => (
                <li key={index}>
                  <Link
                    href={obj.path}
                    className="font-asap font-normal text-white !leading-150 text-lg"
                  >
                    {obj.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col lg:gap-4 gap-3 max-md:w-1/2 max-sm:w-full">
              <li className="text-2xl font-medium !leading-150 text-white lg:mb-2.5">
                Legal
              </li>
              {FOOTER_LEGAL_LINKS.map((obj, index) => (
                <li key={index}>
                  <Link
                    href={obj.path}
                    className="font-asap font-normal text-white !leading-150 text-lg"
                  >
                    {obj.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <p className="text-2xl font-medium !leading-150 text-white mb-6">
                Stay updated
              </p>
              <div className="flex gap-3 items-center flex-wrap md:max-w-[230px] w-full">
                {STAY_UPDATED.map((obj, index) => (
                  <Link
                    key={index}
                    href={obj.path}
                    className="size-12 rounded-full flex items-center justify-center bg-white"
                  >
                    {obj.svg}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between sm:py-6 py-4 lg:flex-row flex-col gap-4">
          <p className="font-asap text-white sm:text-xl text-base leading-160 font-normal">
            Copyright © 2025 maanwrldz All rights reserved.
          </p>
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
        </div>
      </div>
    </div>
  );
}

export default Footer;
