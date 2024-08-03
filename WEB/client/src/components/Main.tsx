"use client";
import React, { useEffect, useState } from "react";
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
import { usePicContent } from "@/store/datapicture";
import Goal from "./Topic/Goal";
import GoalOptions from "./Topic/GoalOptions";
const Main = () => {
  return (
    <>
      {/* <FContact /> */}
      <div className="w-full items-center justify-center flex flex-col">
        <div className="w-full">
          <Header />
        </div>
        <div className="w-full">
          <Goal />
        </div>
        <div className="w-full">
          <GoalOptions />
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
