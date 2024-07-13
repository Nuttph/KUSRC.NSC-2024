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
import Link from "next/link";
import { usePicContent } from "@/store/datapicture";
import { dataMLProps } from "@/store/datapicture";

export default function SlideCard() {
  const { TopicText } = useCTent();
  const { zSelectDataML, zDataImg, zDataML, selectNumber } = usePicContent();
  const handleClick = () => {
    console.log("click");
  };
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
        {zDataImg.map((item, index) => (
          <div key={index}>
            <SwiperSlide>
              <div className="flex flex-col py-[25px] px-[40px] gap-2 justify-between h-full">
                <div className="flex items-center justify-center gap-[20px] flex-col">
                  <div className="w-full flex items-center justify-center">
                    <Link
                      href={`/content/pose${index + 1}`}
                      className="relative h-[250px] w-[350px] flex items-center justify-center shadow-2xl rounded-xl bg-white"
                    >
                      <Image
                        src={item.data_real[index].img[index]}
                        alt="img"
                        fill
                      />
                    </Link>
                  </div>
                  <div>{item.content}</div>
                  <div className="line-clamp-4 text-left">
                    {item.description}
                  </div>
                </div>
                <div className="w-full flex items-center justify-center">
                  <Link
                    onClick={() => {
                      zSelectDataML(item);
                      selectNumber(index);
                    }}
                    href={`/content/pose${index + 1}`}
                    className="flex items-center justify-center bg-purple-300 w-fit px-[25px] py-[10px] rounded-xl text-white font-medium hover:bg-purple-500 duration-[0.5s]"
                  >
                    ดูรายละเอียด
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}
