"use client";
import React from "react";
import Image from "next/image";

//background
import bgKu from "../../asset/bg/bg_ku.png";
const Header = () => {
  return (
    <>
      <div
        className="relative h-[100vh] bgCustomKu w-full"
        style={{
          backgroundImage: `url(${bgKu})`,
          backgroundSize: "cover", // Ensures the image covers the entire area
          backgroundPosition: "center", // Centers the image
          height: "95vh", // Full viewport height
          width: "100%", // Full viewport width
        }}
      >
        <div className="absolute text-[95px] text-[#fff] left-[50%] top-[35%] translate-x-[-50%] translate-y-[-50%]">
          <span className="font-semibold drop-shadow-2xl">กายภาพบำบัด</span>
        </div>
      </div>
    </>
  );
};

export default Header;
