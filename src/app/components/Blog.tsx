"use client";
import { useEffect, useRef } from "react";
import BlueHeading from "./common/BlueHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { SLIDER_BOX } from "../utils/Const";
import Image from "next/image";
import Paragraph from "./common/Paragraph";
import Link from "next/link";
import { RightArrow } from "./common/Icon";
import { Swiper as SwiperType } from "swiper";

// Define TypeScript interface for SLIDER_BOX items
interface BlogItem {
  img: string;
  blogdate: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
}

function Blog() {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current?.navigation.init();
      swiperRef.current?.navigation.update();
    }
  }, []);

  return (
    <div className="py-10 xl:py-28 lg:py-16 md:py-14 sm:py-12">
      <div className="container 3xl:max-w-[1560px] 2xl:max-w-[1400px] max-w-[1200px]">
        <div className="text-center">
          <BlueHeading>Blog</BlueHeading>
          <h2 className="xl:text-6xl sm:text-5xl arquitecta text-4xl font-medium leading-tight xl:mb-4 mb-3 mt-1">
            Sharing Knowledge <span className="font-bold">& Insights</span>
          </h2>
        </div>
        <div className="mt-20">
          <Swiper
            ref={(node) => {
              if (node) swiperRef.current = node.swiper;
            }}
            loop={SLIDER_BOX.length > 2} // Ensures loop only if enough slides
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              576: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            {SLIDER_BOX.map((obj: BlogItem, index) => (
              <SwiperSlide
                key={index}
                className="p-8 max-w-[485px] w-full shadow-lightgray rounded-xl m-5"
              >
                <Image
                  src={obj.img}
                  alt="slide-img"
                  width={413}
                  height={254}
                  className="object-cover object-center rounded-lg"
                />
                <p className="mt-8 text-xl !leading-120 font-medium text-gray">
                  {obj.blogdate}
                </p>
                <p className="text-3xl font-normal !leading-120 my-3.5">
                  {obj.title} <span className="font-bold">{obj.subtitle}</span>
                </p>
                <Paragraph className="mb-6">{obj.description}</Paragraph>
                <Link
                  href={obj.link}
                  className="text-orange text-lg font-normal !leading-120 flex items-center gap-1.5 group hover:text-orange-600"
                >
                  See Full Blog <RightArrow fillColor="#F39C12" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Navigation Buttons */}
          <div className="sm:mt-10 mt-8 flex items-center justify-center gap-4 lg:hid den">
            <button className="sm:size-12 size-10 prev rounded-full group transition-all duration-300 ease-linear border-[1.5px] border-black bg-transparent hover:bg-blue flex items-center justify-center">
              <RightArrow fillColor="#000000" />
            </button>
            <button className="sm:size-12 size-10 next rounded-full rotate-180 group transition-all duration-300 ease-linear border-[1.5px] border-black bg-transparent hover:bg-blue flex items-center justify-center">
              <RightArrow fillColor="#000000" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
