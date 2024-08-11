"use client";
import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay styles

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

// Background images
import bgKu1 from "../../asset/bg/bg_ku1.png";
import bgKu2 from "../../asset/bg/bg_ku2.png";

const Header = () => {
  return (
    <>
      <div className="relative min-h-[100vh] w-full bg-red-500">
        <Swiper
          pagination={true}
          modules={[Pagination, Autoplay]} // Add Autoplay module
          className="mySwiper min-h-[100vh]"
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: true }} // Autoplay with 3 seconds delay
        >
          <SwiperSlide>
            <Image src={bgKu1} alt="bgku" fill className="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={bgKu2} alt="bgku" fill />
          </SwiperSlide>
        </Swiper>
        <div className="absolute text-[95px] text-[#fff] left-[50%] top-[35%] translate-x-[-50%] translate-y-[-50%] z-[100]">
          <span className="font-semibold drop-shadow-2xl">กายภาพบำบัด</span>
        </div>
      </div>
    </>
  );
};

export default Header;
