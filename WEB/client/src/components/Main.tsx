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
import Bmri from "./Exer/Bmri";
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
        <div className="w-full" id="goal">
          <GoalOptions />
        </div>
        <div className="w-full" id="bmir">
          <Bmri />
        </div>

        <div
          className="relative w-[100%] h-[900px] bg-[#fff] items-center min-[650px]:flex flex-col gap-[50px] py-[50px]"
          id="phy"
        >
          <SlideCard />
        </div>
        {/* <div className="flex min-[650px]:hidden w-full">
          <CateMode />
        </div> */}
      </div>
    </>
  );
};

export default Main;
