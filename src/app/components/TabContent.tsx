import Image from "next/image";
import { Ceais, RightArrow } from "./common/Icon";
import Paragraph from "./common/Paragraph";
import Link from "next/link";

export const TabContent1 = () => {
  return (
    <div className="flex gap-8 max-2xl:flex-wrap">
      <div className="3xl:max-w-[744px] 2xl:max-w-[700px] w-full bg-white rounded-xl transition-all duration-300 ease-linear border-[1.5px] border-solid border-lightgray hover:border-transparent hover:shadow-lightgray flex 2xl:flex-col lg:flex-row flex-col max-2xl:items-center">
        <Image
          src={"/assets/images/png/ceais.png"}
          alt="ceais"
          width={748}
          height={397}
          className="object-cover object-center 2xl:w-full lg:w-1/2 w-full 3xl:h-[397px] sm:h-[350px] h-[260px] rounded-xl "
        />
        <div className="sm:px-8 p-6 sm:pb-8 pb-6 2xl:w-full">
          <div className="3xl:mt-10 mt-6">
            <Ceais />
          </div>
          <p className="font-normal arquitecta sm:text-[34px] text-2xl !leading-120 3xl:mt-11 mt-6">
            <span className="font-bold">AI Tech Startup</span> Landing Page (UI
            Design)
          </p>
          <Paragraph className="3xl:mt-5 mt-3">
            Leverage our revolutionary AI technology to streamline operations,
            increase efficiency, and drive innovation in your business
          </Paragraph>
          <Link
            href={"gettheservice"}
            className="text-orange arquitecta !leading-120 sm:text-xl text-lg inline-flex items-center gap-1.5 group 3xl:mt-20 mt-6"
          >
            See Full Portfolio <RightArrow fillColor="#F39C12" />
          </Link>
        </div>
      </div>
      <div className="3xl:max-w-[744px] 2xl:max-w-[700px] w-full flex 2xl:flex-col lg:flex-row flex-col justify-between gap-8">
        <div className="bg-white rounded-xl transition-all duration-300 ease-linear border-[1.5px] border-solid border-lightgray hover:border-transparent hover:shadow-lightgray sm:p-8 p-6 flex items-center 2xl:gap-[50px] gap-6 2xl:flex-row flex-col 2xl:w-full lg:w-1/2 w-full">
          <Image
            src={"/assets/images/png/ethos.png"}
            alt="ethos"
            width={283}
            height={260}
            className="w-[200px] 3xl:w-[283px] sm:w-[250px]"
          />
          <div className="2xl:max-w-[336px] w-full">
            <p className="sm:text-custom-3xl text-2xl text-black font-medium !leading-120">
              <span className="font-bold">The Ethos</span> Academy
            </p>
            <Paragraph className="lg:mt-5 mt-3">
              At The Ethos Academy, we are committed to nurturing young minds
              from pre-primary to 12th grade, helping students excel in
              academics while fostering creativity and critical thinking.
            </Paragraph>
            <Link
              href={"gettheservice"}
              className="text-orange arquitecta !leading-120 sm:text-xl text-lg inline-flex items-center gap-1.5 group 3xl:mt-12 mt-6"
            >
              See Full Portfolio <RightArrow fillColor="#F39C12" />
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-xl transition-all duration-300 ease-linear border-[1.5px] border-solid border-lightgray hover:border-transparent hover:shadow-lightgray sm:p-8 p-6 flex items-center 2xl:gap-[50px] gap-6 2xl:flex-row flex-col 2xl:w-full lg:w-1/2 w-full">
          <Image
            src={"/assets/images/png/ethos.png"}
            alt="ethos"
            width={283}
            height={260}
            className="w-[200px] 3xl:w-[283px] sm:w-[250px]"
          />
          <div className="2xl:max-w-[336px] w-full">
            <p className="sm:text-custom-3xl text-2xl text-black font-medium !leading-120">
              <span className="font-bold">The Ethos</span> Academy
            </p>
            <Paragraph className="lg:mt-5 mt-3">
              At The Ethos Academy, we are committed to nurturing young minds
              from pre-primary to 12th grade, helping students excel in
              academics while fostering creativity and critical thinking.
            </Paragraph>
            <Link
              href={"gettheservice"}
              className="text-orange arquitecta !leading-120 sm:text-xl text-lg inline-flex items-center gap-1.5 group 3xl:mt-12 mt-6"
            >
              See Full Portfolio <RightArrow fillColor="#F39C12" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
