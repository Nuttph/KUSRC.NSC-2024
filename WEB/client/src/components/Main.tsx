"use client";
import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "next/link";
import Navbar from "./Nav/Navbar";
import Header from "./Topic/Header";
import FContact from "./fixed/FContact";
import Warning from "./Topic/Warning";
import SlideCard from "./swiper/SlideCard";
import BMI from "./BMIBMR/BMI";
const Main = () => {
  return (
    <>
      <FContact />
      <div className="w-full items-center justify-center flex flex-col">
        <div
          className="flex items-center justify-center h-[791px] w-full bg-[#E4FFF6]"
          // style={{
          //   backgroundImage:
          //     "linear-gradient(180deg, rgba(179, 231, 206, 1) 0%, rgba(203, 237, 215, 1) 46%, rgba(208, 239, 224, 1) 100%)",
          // }}
        >
          <h1 className="text-[50px] font-bold">Demo Title!</h1>
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
        {/* <div className="w-full px-[10px]">
          <Header />
        </div> */}
        <div
          className="relative w-[100%] h-[700px] bg-gray-200 flex items-center"
          id=""
        >
          <SlideCard />
        </div>
        {/*ทดสอบค่า BMI BMR */}
        <div className="w-full px-[140px]">
          <BMI />
        </div>
        {/* <div className="w-full" id="warning">
          <Warning />
        </div> */}
      </div>
    </>
  );
};

export default Main;
