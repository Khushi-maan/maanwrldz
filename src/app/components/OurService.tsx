import { OFFER_BOX } from "../utils/Const";
import BlueHeading from "./common/BlueHeading";
import Cta from "./common/Cta";
import OfferBox from "./common/OfferBox";
import Paragraph from "./common/Paragraph";

function OurService() {
  return (
    <div className="bg-skyblue bg-opacity-10 xl:py-[120px] lg:py-16 md:py-14 sm:py-12 py-10">
      <div className="container 3xl:max-w-[1560px] 2xl:max-w-[1400px] max-w-[1200px]">
        <div className="flex 2xl:gap-8 gap-6 max-2xl:flex-col">
          <div className="2xl:max-w-[1003px] w-full max-xl:text-center">
            <BlueHeading>Our Services</BlueHeading>
            <h2 className="xl:text-6xl sm:text-5xl text-4xl !leading-120 font-medium arquitecta max-lg:text-center xl:mb-4 mb-3 mt-1">
              What I <span className="font-bold">Offer</span>
            </h2>
            <Paragraph className="lg:mt-4 mt-3 xl:mb-14 lg:mb-8 mb-6">
              I provide a range of design services to help bring your ideas to
              life.
            </Paragraph>
            <Cta orange>See All Services</Cta>
            <div className="flex 2xl:gap-8 gap-6 2xl:mt-0 sm:mt-12 mt-10 w-full max-md:flex-col text-start">
              <div className="2xl:mt-[182px] w-full">
                <OfferBox offerbox={OFFER_BOX[0]} />
              </div>
              <div className="2xl:mt-[-26px] w-full">
                <OfferBox offerbox={OFFER_BOX[1]} />
              </div>
            </div>
          </div>
          <div className="flex 2xl:flex-col 2xl:gap-8 gap-6 3xl:max-w-[485px] 2xl:max-w-[432px] w-full md:flex-row flex-col">
            <OfferBox offerbox={OFFER_BOX[2]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurService;
