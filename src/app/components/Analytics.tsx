import { STATICS } from "../utils/Const";

function Analytics() {
  return (
    <div className="3xl:max-w-[1560px] 2xl:max-w-[1400px] max-w-[1200px] container xl:mb-28 lg:my-16 md:my-14 sm:my-12 my-10">
      <div className="border border-solid border-skyblue lg:rounded-[32px] rounded-2xl xl:py-[78px] xl:px-[96px] lg:px-12 lg:py-10 px-8 py-6 flex items-center lg:gap-12 gap-8 flex-wrap xl:justify-between justify-center">
        {STATICS.map((obj, index) => (
          <div key={index} className="max-md:max-w-[200px] max-md:w-full">
            <h3
              className={`arquitecta 2xl:text-6xl text-5xl !leading-120 font-medium text-green text-center ${
                index === 3 || index === 1 ? "text-orange" : ""
              }`}
            >
              {obj.stats}
            </h3>
            <p className="text-center lg:text-2xl text-xl font-medium arquitecta !leading-120">
              {obj.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Analytics;
