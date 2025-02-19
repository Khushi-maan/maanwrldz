import { TIMELINE_DATA } from "../utils/Const";

export const ProjectTimeline = () => {
  return (
    <div className="">
      <p className="text-base font-normal !leading-120 text-white mt-1.5">
        The timeline depends on the project’s complexity. Here’s an estimate:
      </p>
      <div className="flex 3xl:justify-between 3xl:gap-1 sm:gap-4 gap-3 mt-4 flex-wrap">
        {TIMELINE_DATA.map((obj, index) => (
          <div
            key={index}
            className="p-3.5 bg-white rounded-2xl sm:max-w-[185.5px] w-full"
          >
            <p className="text-darkgray text-base font-normal !leading-120">
              {obj.title} <span className="font-bold">{obj.time}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
