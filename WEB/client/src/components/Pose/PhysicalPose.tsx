"use client";
import React from "react";
import { useCTent } from "@/store/contentStore";
const PhysicalPose = () => {
  const { MLmodel } = useCTent();
  return (
    <>
      <div className="flex flex-col w-full text-center">
        <div className="flex font-bold underline items-center justify-center">
          Detection Test!!!
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center justify-center w-[50%]">
            <div className="bg-[#F7EAEA] w-[500px] h-[500px] rounded-xl shadow-lg">
              test
            </div>
          </div>
          <div className="bg-black w-[50%]">
            <iframe src={MLmodel[0].link} className="w-full h-[100vh]"></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
export default PhysicalPose;
