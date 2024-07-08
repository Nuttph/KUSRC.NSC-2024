import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useCTent } from "@/store/contentStore";
import Image from "next/image";

export default function SlideCard() {
  const { TopicText } = useCTent();
  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {TopicText.map((item, index) => (
          <div key={index}>
            <SwiperSlide>
              <div className="flex flex-col py-[25px]">
                <div className="w-full flex items-center justify-center">
                  <div className="relative h-[250px] w-[350px] flex items-center justify-center shadow-2xl rounded-xl bg-white">
                    <Image src={item.img} alt="img" fill />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}
