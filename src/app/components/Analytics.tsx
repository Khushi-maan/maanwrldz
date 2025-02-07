import { STATICS } from "../utils/Const";

function Analytics() {
  return (
    <div className="2xl:max-w-[1560px] max-w-[1300px] container xl:mb-28 lg:my-16 md:my-14 sm:my-12 my-10">
      <div className="border border-solid border-skyblue rounded-[32px] lg:py-[78px] lg:px-[96px] px-12 py-10 flex items-center gap-12 flex-wrap justify-between">
        {STATICS.map((obj, index) => (
          <div key={index} className="flex-grow">
            <h3
              className={`arquitecta text-6xl !leading-120 font-medium text-green text-center ${
                index === 3 || index === 1 ? "text-orange" : ""
              }`}
            >
              {obj.stats}
            </h3>
            <p className="text-center text-2xl font-medium arquitecta !leading-120">
              {obj.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Analytics;
