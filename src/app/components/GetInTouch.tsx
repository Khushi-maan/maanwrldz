import Image from "next/image";
import BlueHeading from "./common/BlueHeading";
import Cta from "./common/Cta";
import Paragraph from "./common/Paragraph";

function GetInTouch() {
  return (
    <div className="relative">
      <div className="container 3xl:max-w-[1560px] 2xl:max-w-[1400px] max-w-[1200px] relative z-20">
        <div className="lg:rounded-[32px] rounded-xl border border-skyblue border-solid 3xl:px-[70px] lg:px-10 flex gap-10 bg-white lg:flex-row flex-col">
          <div className="xl:max-w-[575px] lg:max-w-[400px] w-full 3xl:pt-[70px] pt-10 max-sm:px-5 max-lg:px-10 max-lg:flex flex-col justify-center items-center">
            <BlueHeading>Get in Touch</BlueHeading>
            <h2 className="xl:text-5xl arquitecta text-4xl font-medium leading-tight xl:mb-4 mb-3 mt-1 max-lg:text-center">
              Let’s Collaborate and Bring{" "}
              <span className="font-bold">Your Vision</span>
            </h2>
            <Paragraph className="mt-4 max-lg:text-center">
              I’d love to hear from you! Whether you have a question, need a
              custom quote, or want to discuss your next big project, feel free
              to reach out.
            </Paragraph>
            <div className="flex sm:gap-6 gap-4 xl:mt-14 mt-7 max-sm:flex-wrap">
              <Cta orange className="!bg-orange !text-white">
                Contact Us
              </Cta>
              <Cta orange>View My Portfolio</Cta>
            </div>
          </div>
          <div className="lg:max-w-[798px] max-w-[500px] w-full mx-auto overflow-hidden max-lg:rounded-xl">
            <Image
              src={"/assets/images/png/white-selfie.png"}
              alt="white-selfie"
              width={798}
              height={600}
              className="object-cover lg:object-center object-top w-full sm:h-[450px] h-[400px] xl:h-[500px] 3xl:h-[520px]"
            />
          </div>
        </div>
      </div>
      <div className="absolute h-[251px] lg:rounded-t-3xl rounded-t-xl bg-skyblue left-0 right-0 bottom-[-1px] z-10"></div>
    </div>
  );
}

export default GetInTouch;
