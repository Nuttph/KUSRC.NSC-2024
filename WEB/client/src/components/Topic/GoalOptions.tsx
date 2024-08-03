"use client";
import React, { useState } from "react";

const GoalOptions = () => {
  const [focus, setFocus] = useState(0);
  return (
    <div className="w-full bg-[#1E1E1E] text-[#fff] h-[100vh] pt-[300px]">
      <div className="flex flex-row">
        <div className="flex flex-col text-[60px] ml-[50px] relative">
          <div
            className={`absolute bg-[#1F2125] w-[40vw] h-[100px] left-[-50px] z-[0] transition-all duration-300 ${
              focus == 0 ? "top-0" : "top-[100px]"
            }`}
          ></div>
          <div
            className={`${
              focus == 0 ? "text-[#FFE436]" : ""
            } z-10 cursor-pointer duration-300`}
            onClick={() => {
              setFocus(0);
            }}
          >
            วัตถุประสงค์
          </div>
          <div
            className={`${
              focus == 0 ? "" : "text-[#FFE436]"
            } z-10 cursor-pointer duration-300`}
            onClick={() => {
              setFocus(1);
            }}
          >
            คู่มือการใช้งาน
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default GoalOptions;
