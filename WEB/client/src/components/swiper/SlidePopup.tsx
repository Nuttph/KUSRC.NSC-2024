import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper/modules";
import { useCTent } from "@/store/contentStore";
import Image from "next/image";

export default function SlidePopup() {
  const { TopicText } = useCTent();
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper w-full"
      >
        {TopicText.map((item, index) => (
          <div key={index} className="">
            <SwiperSlide>
              <div className="flex flex-row items-center justify-between px-[140px] h-full bg-[#e0f9ff]">
                <a href="/content" className="relative h-[500px] w-[500px]">
                  <Image
                    src={item.img}
                    alt="img"
                    fill
                    className="drop-shadow-xl"
                  />
                </a>
                <div className="flex flex-col w-[50%] gap-[70px] items-start text-[20px] font-medium">
                  <a
                    href="/content"
                    className="bg-[#ffffff8a] px-[50px] py-[25px] rounded-xl text-[30px] font-semibold hover:bg-[#fff] duration-[0.5s] text-left"
                  >
                    {item.head}
                  </a>
                  <p className="text-left">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nulla delectus veritatis minima sed? Provident aliquam
                    beatae excepturi libero! Beatae omnis fuga ad possimus
                    corporis sint molestiae est saepe mollitia. Possimus, neque
                    corrupti aliquam, odit voluptatem, alias harum qui nostrum
                    libero distinctio mollitia? Maxime ad nihil numquam
                    consequuntur provident iure! Odit.
                  </p>
                  <div>
                    <a
                      href="/content"
                      className="bg-[#cd78ff9f] px-[30px] py-[12px] rounded-xl hover:bg-[#ce78ff] duration-[0.5s]"
                    >
                      อ่านเพิ่มเติม
                    </a>
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
