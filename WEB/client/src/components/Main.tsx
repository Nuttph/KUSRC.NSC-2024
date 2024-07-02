"use client";
import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "next/link";
import Navbar from "./Nav/Navbar";
import Header from "./Topic/Header";
import FContact from "./fixed/FContact";
import Warning from "./Topic/Warning";
const Main = () => {
  return (
    <>
      <FContact />
      <div className="w-full items-center justify-center flex flex-col">
        <div
          className="h-[791px] w-full bg-[#E4FFF6]"
          // style={{
          //   backgroundImage:
          //     "linear-gradient(180deg, rgba(179, 231, 206, 1) 0%, rgba(203, 237, 215, 1) 46%, rgba(208, 239, 224, 1) 100%)",
          // }}
        ></div>

        <div className="flex w-full items-center justify-center gap-[40px] flex-col px-[140px] py-[40px] bg-[#90CCD6] border-[10px] border-[#fff]">
          <div className="font-bold text-[30px]">วัตถุประสงค์</div>
          <div className="text-[#603F1C] text-[25px] flex items-center justify-center text-center w-[67%]">
            เว็บไซต์นี้สร้างขึ้นเพื่อ้ผู้ที่ต้องการบริหารร่างกายทำท่าทางที่ถูกต้องโดยเราจะมีท่าทางให้ผู้ใช้งานเลือกจากนั้นจะมีโปรแกรมสแกนท่าทางเพื่อตรวจจับท่าทางให้ท่านทำท่าที่ถูกต้อง
          </div>
        </div>

        <div>
          <Header />
        </div>

        <div>
          <Warning />
        </div>
      </div>
    </>
  );
};

export default Main;
