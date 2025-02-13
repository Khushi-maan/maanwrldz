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
      <div className="container 3xl:max-w-[1560px] 2xl:max-w-[1400px] max-w-[1200px]">
        <div className="flex w-full xl:flex-row flex-col xl:items-start items-center xl:mt-[92px] lg:mt-14 md:mt-12 mt-10 lg:gap-11 md:gap-10 gap-8">
          <div className="xl:w-5/1 2 2xl:max-w-[639px] xl:max-w-[550px] xl:pt-[50px] w-full max-xl:flex flex-col items-center">
            <BlueHeading>Hello! I'm Ankur Maan</BlueHeading>
            <h2 className="3xl:text-[75px] sm:text-[50px] text-[40px] font-medium arquitecta max-xl:text-center">
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
          <div className="xl:w-7/12 max-w-[835px] w-full flex md:flex-row flex-col max-xl:justify-center 3xl:gap-9 md:gap-6 gap-4">
            <div className="md:max-w-[358px] w-full flex max-md:gap-4 gap-5 sm:flex-row md:flex-col flex-col max-sm:items-center xl:justify-between">
              <div className="bg-white-canvas bg-no-repeat bg-center bg-cover bg-opacity-50 rounded-[36px] border-skyblue border border-solid 3xl:py-[61px] 2xl:py-9 2xl:px-0 md:px-7 py-9 flex items-center justify-center max-md:w-1/2 max-sm:w-full">
                <p className="font-ballet 3xl:text-custom-9xl md:text-[80px] text-custom-6xl text-center text-skyblue !leading-120">
                  Logo Design
                </p>
              </div>
              <div className="bg-skyblue rounded-3xl pt-7 max-md:w-1/2 max-sm:w-full overflow-hidden pb-3">
                <p className="3xl:text-[50px] text-custom-4xl text-center text-white !leading-120 arquitecta pb-3">
                  Tools I Used
                </p>
                <div className="flex items-center justify-center">
                  <Image
                    src={"/assets/images/png/ai-logo.png"}
                    alt="ai-logo"
                    width={90}
                    height={90}
                    className="object-cover object-center rotate-12 2xl:ml-[-40px] 2xl:w-[145px] 2xl:h-[145px]"
                  />
                  <Image
                    src={"/assets/images/png/figma-logo.png"}
                    alt="ai-logo"
                    width={56}
                    height={80}
                    className="rotate-[-20deg] 2xl:ml-[-10px] 2xl:h-[124px] 2xl:w-[76px]"
                  />
                  <Image
                    src={"/assets/images/png/google-designer.png"}
                    alt="ai-logo"
                    width={70}
                    height={52}
                    className="2xl:ml-[-8px] 2xl:h-[106px] 2xl:w-[102px]"
                  />
                  <Image
                    src={"/assets/images/png/canva.png"}
                    alt="ai-logo"
                    width={63}
                    height={63}
                    className="rotate-[18deg] 2xl:h-[93px] 2xl:w-[93px]"
                  />
                </div>
              </div>
            </div>
            <div className="max-w-[441px] max-md:mx-auto h-[400px] md:h-[480px] 2xl:h-[590px] 3xl:h-[660px] w-full bg-photo-canvas !bg-opacity-20 rounded-[36px] bg-cover bg-center border-skyblue border-[1.5px] border-solid">
              <Image
                src={"/assets/images/png/ankur-maan.png"}
                alt="ankur-maan"
                width={441}
                height={600}
                className="w-full object-cover 2xl:object-center object-top rounded-[36px] !h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
