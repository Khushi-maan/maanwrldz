import Image from "next/image";
import { RESEARCH_HIGHLIGHT } from "../utils/Const";

function ResearchContent() {
  return (
    <div className="mt-8 flex lg:justify-between gap-6 lg:flex-row flex-col-reverse">
      <div className="lg:max-w-[732px] w-full">
        <p className="sm:text-2xl text-lg font-normal text-darkgray !leading-120">
          Before designing anything, I dive deep into your business, target
          audience, and competitors. This phase includes:
        </p>
        <ul className="flex flex-col w-full 2xl:mt-10 sm:mt-5 mt-4 2xl:gap-8 sm:gap-5 gap-3 !list-disc pl-7">
          {RESEARCH_HIGHLIGHT.map((obj, index) => (
            <li
              key={index}
              className="sm:text-2xl text-lg font-medium !leading-120 text-darkgray"
            >
              <span className="block text-black mb-1">{obj.title}</span>
              {obj.description}
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:max-w-[656px] w-full rounded-3xl">
        <Image
          src={"/assets/images/png/notes.png"}
          alt="notes"
          width={656}
          height={370}
          className="w-full max-lg:max-w-[550px] object-cover object-center rounded-3xl lg:h-full h-[280px] mx-auto"
        />
      </div>
    </div>
  );
}

export default ResearchContent;
