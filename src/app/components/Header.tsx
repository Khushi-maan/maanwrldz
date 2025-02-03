"use client";
import Image from "next/image";
import Cta from "./common/Cta";
import Nav from "./common/Nav";
import Paragraph from "./common/Paragraph";
import TopHeading from "./common/TopHeading";
import BlueHeading from "./common/BlueHeading";

function Header() {
  return (
    <>
      <Nav />
      <div className="container max-w-[1560px]">
        <div className="flex xl:flex-row flex-col xl:items-start items-center xl:mt-[92px] lg:mt-14 md:mt-12 mt-10 lg:gap-11 md:gap-10 gap-8">
          <div className="xl:w-5/12 xl:pt-[50px] w-full max-xl:flex flex-col items-center">
            <BlueHeading>Hello! I'm Ankur Maan</BlueHeading>
            <TopHeading />
            <Paragraph className="xl:mb-16 lg:mb-10 md:mb-8 mb-6 max-xl:text-center max-xl:max-w-[650px] max-xl:mt-2">
              With expertise in Figma, web design, and logo design. Welcome to
              my online portfolio where I showcase my skills, projects, and
              journey as a designer.
            </Paragraph>
            <div className="flex items-center gap-6">
              <Cta orange className="!bg-orange !text-white">
                Get Started
              </Cta>
              <Cta orange>Get in Touch</Cta>
            </div>
          </div>
          <div className="xl:w-7/12 w-full flex md:flex-row flex-col max-xl:justify-center lg:gap-9 md:gap-6 gap-4">
            <div className="md:max-w-[358px] w-full max-md:flex max-md:gap-4 sm:flex-row flex-col max-sm:items-center">
              <div className="bg-white-canvas bg-no-repeat bg-center bg-cover bg-opacity-50 rounded-[36px] border-skyblue border border-solid py-[61px] flex items-center justify-center max-md:w-1/2 max-sm:w-full">
                <p className="font-ballet md:text-custom-9xl text-custom-6xl text-center text-skyblue !leading-120">
                  Logo Design
                </p>
              </div>
              <div className="bg-skyblue rounded-3xl pt-7 max-md:w-1/2 max-sm:w-full overflow-hidden lg:mt-9 md:mt-6 pb-3">
                <p className="text-[50px] text-center text-white !leading-120 arquitecta pb-3">
                  Tools I Used
                </p>
                <div className="flex pb-3 items-center justify-center">
                  <Image
                    src={"/assets/images/png/ai-logo.png"}
                    alt="ai-logo"
                    width={145}
                    height={145}
                    className="object-cover object-center rotate-12 ml-[-40px]"
                  />
                  <Image
                    src={"/assets/images/png/figma-logo.png"}
                    alt="ai-logo"
                    width={76}
                    height={114}
                    className="rotate-[-20deg] ml-[-10px] h-[124px]"
                  />
                  <Image
                    src={"/assets/images/png/google-designer.png"}
                    alt="ai-logo"
                    width={102}
                    height={106}
                    className="ml-[-8px] h-[106px]"
                  />
                  <Image
                    src={"/assets/images/png/canva.png"}
                    alt="ai-logo"
                    width={93}
                    height={93}
                    className="rotate-[18deg] h-[93px]"
                  />
                </div>
              </div>
            </div>
            <div className="md:max-w-[441px] max-md:h-[500px] w-full bg-photo-canvas bg-opacity-20 rounded-[36px] bg-cover bg-center">
              <Image
                src={"/assets/images/png/ankur-maan.png"}
                alt="ankur-maan"
                width={441}
                height={600}
                className="w-full object-cover md:object-center object-top rounded-[36px] h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
