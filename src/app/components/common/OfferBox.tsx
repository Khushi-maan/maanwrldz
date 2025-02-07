import Paragraph from "./Paragraph";
import Link from "next/link";
import { RightArrow } from "./Icon";
import Image from "next/image";

// Define the type for each offer box item
interface OfferBoxItem {
  icon?: React.ReactNode; // Allows any React element (SVG, component, etc.)
  title: string[]; // Ensures title is an array of strings
  description?: string; // Optional description
  link: string; // Link must be a string
  linktitle: string; // Text for the link
}

// Define props type for OfferBox component
interface OfferBoxProps {
  offerbox: OfferBoxItem[];
}

const OfferBox: React.FC<OfferBoxProps> = ({ offerbox }) => {
  return (
    <>
      {offerbox.map((obj, index) => (
        <div
          key={index}
          className="bg-white lg:p-9 p-5 rounded-xl relative 2xl:max-w-[485px] w-full max-2xl:h-full"
        >
          {/* Ensure obj.icon exists before rendering */}
          {obj.icon && <div>{obj.icon}</div>}

          {/* Ensure obj.title is correctly structured */}
          <h4 className="lg:mt-8 mt-4 sm:text-4xl text-custom-3xl arquitecta !leading-120 text-black font-medium">
            {obj.title.length > 1 ? (
              <>
                <span className="font-bold">{obj.title[0]}</span> {obj.title[1]}
              </>
            ) : (
              obj.title[0] || " "
            )}
          </h4>

          {/* Ensure obj.description exists before rendering */}
          {obj.description && (
            <Paragraph className="lg:mt-3.5 mt-2 lg:mb-8 sm:mb-5 mb-4">
              {obj.description}
            </Paragraph>
          )}

          {/* Ensure obj.link and obj.linktitle exist */}
          {obj.link && obj.linktitle && (
            <Link
              href={obj.link}
              className="text-orange arquitecta !leading-120 sm:text-xl text-lg inline-flex items-center gap-1.5 group"
            >
              {obj.linktitle} <RightArrow />
            </Link>
          )}

          {/* Background Image */}
          <Image
            src="/assets/images/png/blue-circle.png"
            alt="blue-circle"
            width={165}
            height={165}
            className="absolute top-0 right-0 opacity-60 z-0"
          />
        </div>
      ))}
    </>
  );
};

export default OfferBox;
