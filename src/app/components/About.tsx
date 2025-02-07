import Image from "next/image";
import BlueHeading from "./common/BlueHeading";
import Paragraph from "./common/Paragraph";
import Cta from "./common/Cta";

function About() {
  return (
    <div className="container 2xl:max-w-[1560px] max-w-[1300px] lg:pt-2 xl:mb-28 lg:mb-16 md:mb-14 sm:mb-12 mb-10">
      <div className="flex max-xl:flex-col-reverse items-center justify-between xl:gap-10 lg:gap-5 gap-8">
        <div className="xl:max-w-[671px] max-w-[450px] w-full relative">
          <Image
            src={"/assets/images/png/working-women.png"}
            alt="working-women"
            width={671}
            height={709}
            className="object-cover object-center w-full"
          />
          <div className="absolute bg-white-linear left-0 right-0 bottom-0 h-[349px]"></div>
        </div>
        <div className="xl:max-w-[694px] w-full max-xl:text-center">
          <BlueHeading className="">About Us</BlueHeading>
          <h2 className="xl:text-6xl sm:text-5xl text-4xl !leading-120 font-medium arquitecta max-xl:text-center xl:mb-4 mb-3 mt-1">
            Combine <span className="font-bold">Creativity</span> With
            Functionality
          </h2>
          <Paragraph className="max-xl:text-center">
            I’m Ankur Maan, a passionate designer specializing in UI/UX, web,
            and mobile app design. I recently graduated with a Bachelor of Art
            from Dayanand College, Hisar.
          </Paragraph>
          <Paragraph className="mt-2 max-xl:text-center">
            My journey in design began over 2 years ago, and I've had the
            privilege to work with Radialcode as a UI/UX designer. Additionally,
            I volunteer with the National Service Scheme , contributing my
            skills to create impactful society.
          </Paragraph>
          <div className="flex items-center gap-6 xl:mt-14 mt-8 max-xl:justify-center">
            <Cta orange className="!bg-orange !text-white">
              Contact Us
            </Cta>
            <Cta orange>Go to CV</Cta>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
