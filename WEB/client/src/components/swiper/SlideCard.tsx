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

export default function SlideCard() {
  const { TopicText } = useCTent();
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
        {TopicText.map((item, index) => (
          <div key={index}>
            <SwiperSlide>
              <div className="flex flex-col py-[25px] px-[20px] gap-2 justify-between h-full">
                <div className="flex items-center justify-center gap-[20px] flex-col">
                  <div className="w-full flex items-center justify-center">
                    <Link
                      href="/content"
                      className="relative h-[250px] w-[350px] flex items-center justify-center shadow-2xl rounded-xl bg-white"
                    >
                      <Image src={item.img} alt="img" fill />
                    </Link>
                  </div>
                  <div>{item.head}</div>
                  <div className="line-clamp-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Suscipit eos ex qui, unde id, at, ad accusantium aliquam
                    odit non molestias temporibus voluptatum fugiat animi! Lorem
                    ipsum dolor, sit amet consectetur adipisicing elit. Autem
                    exercitationem et error aspernatur est natus porro ipsum
                    iusto sit eos impedit officia id sequi nulla repellendus
                    asperiores nesciunt soluta, ea temporibus dolores eum.
                    Aliquid voluptates eaque asperiores nihil. Laudantium
                    sapiente deleniti illum distinctio sit molestiae quam natus
                    suscipit aliquam ab!
                  </div>
                </div>
                <div className="w-full flex items-center justify-center">
                  <Link
                    href="/content"
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
