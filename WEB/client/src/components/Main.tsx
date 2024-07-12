"use client";
import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "next/link";
import Navbar from "./Nav/Navbar";
import FContact from "./fixed/FContact";
import Warning from "./Topic/Warning";
import SlideCard from "./swiper/SlideCard";
import BMI from "./BMIBMR/BMI";
import Header from "./Topic/Header";
import CateMode from "./swiper/CateMode";
const Main = () => {
  return (
    <>
      <FContact />
      <div className="w-full items-center justify-center flex flex-col">
        <div className="w-full">
          <Header />
        </div>

        <div
          id="slide-card"
          className="flex w-full items-center justify-center gap-[40px] flex-col px-[140px] py-[40px] bg-gray-800 border-[10px] border-[#fff] text-white"
        >
          <div className="font-bold text-[30px] bg-sky-100 text-black px-[25px] py-[10px] rounded-xl">
            วัตถุประสงค์
          </div>
          <div className="text-[25px] flex items-center justify-center text-center w-[67%]">
            เว็บไซต์นี้สร้างขึ้นเพื่อ้ผู้ที่ต้องการบริหารร่างกายทำท่าทางที่ถูกต้องโดยเราจะมีท่าทางให้ผู้ใช้งานเลือกจากนั้นจะมีโปรแกรมสแกนท่าทางเพื่อตรวจจับท่าทางให้ท่านทำท่าที่ถูกต้อง
          </div>
        </div>

        <div
          className="relative w-[100%] h-[700px] bg-gray-200 hidden items-center min-[650px]:flex"
          id=""
        >
          <SlideCard />
        </div>
        <div className="flex min-[650px]:hidden w-full">
          <CateMode />
        </div>

        {/*ทดสอบค่า BMI BMR */}
        {/* <div className="w-full px-[140px]">
          <BMI />
        </div> */}
      </div>
    </>
  );
};

export default Main;
