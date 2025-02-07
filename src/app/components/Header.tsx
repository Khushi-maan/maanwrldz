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
      <div className="container 2xl:max-w-[1560px] max-w-[1300px]">
        <div className="flex w-full xl:flex-row flex-col xl:items-start items-center xl:mt-[92px] lg:mt-14 md:mt-12 mt-10 lg:gap-11 md:gap-10 gap-8">
          <div className="xl:w-5/1 2 2xl:max-w-[639px] xl:max-w-[550px] xl:pt-[50px] w-full max-xl:flex flex-col items-center">
            <BlueHeading>Hello! I'm Ankur Maan</BlueHeading>
            <h2 className="2xl:text-[75px] sm:text-[62px] text-[40px] font-medium arquitecta max-xl:text-center">
              A passionate
            </h2>
            <TopHeading />
            <Paragraph className="xl:mb-16 lg:mb-10 md:mb-8 mb-6 max-xl:text-center max-xl:max-w-[750px] max-xl:mt-2">
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
          <div className="xl:w-7/12 max-w-[835px] w-full flex md:flex-row flex-col max-xl:justify-center lg:gap-9 md:gap-6 gap-4">
            <div className="md:max-w-[358px] w-full flex max-md:gap-4 gap-5 sm:flex-row md:flex-col flex-col max-sm:items-center justify-between">
              <div className="bg-white-canvas bg-no-repeat bg-center bg-cover bg-opacity-50 rounded-[36px] border-skyblue border border-solid lg:py-[61px] py-12 flex items-center justify-center max-md:w-1/2 max-sm:w-full">
                <p className="font-ballet md:text-custom-9xl text-custom-6xl text-center text-skyblue !leading-120">
                  Logo Design
                </p>
              </div>
              <div className="bg-skyblue rounded-3xl pt-7 max-md:w-1/2 max-sm:w-full overflow-hidden pb-3">
                <p className="sm:text-[50px] text-custom-4xl text-center text-white !leading-120 arquitecta pb-3">
                  Tools I Used
                </p>
                <div className="flex items-center justify-center">
                  <Image
                    src={"/assets/images/png/ai-logo.png"}
                    alt="ai-logo"
                    width={90}
                    height={90}
                    className="object-cover object-center rotate-12 lg:ml-[-40px] lg:w-[145px] lg:h-[145px]"
                  />
                  <Image
                    src={"/assets/images/png/figma-logo.png"}
                    alt="ai-logo"
                    width={56}
                    height={80}
                    className="rotate-[-20deg] lg:ml-[-10px] lg:h-[124px] lg:w-[76px]"
                  />
                  <Image
                    src={"/assets/images/png/google-designer.png"}
                    alt="ai-logo"
                    width={70}
                    height={52}
                    className="lg:ml-[-8px] lg:h-[106px] lg:w-[102px]"
                  />
                  <Image
                    src={"/assets/images/png/canva.png"}
                    alt="ai-logo"
                    width={63}
                    height={63}
                    className="rotate-[18deg] lg:h-[93px] lg:w-[93px]"
                  />
                </div>
              </div>
            </div>
            <div className="max-w-[441px] max-md:mx-auto max-md:h-[400px] max-lg:h-[550px] h-[660px] w-full bg-photo-canvas !bg-opacity-20 rounded-[36px] bg-cover bg-center border-skyblue border-[1.5px] border-solid">
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
