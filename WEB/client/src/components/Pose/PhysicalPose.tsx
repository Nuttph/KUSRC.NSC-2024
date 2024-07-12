"use client";
import { usePicContent } from "@/store/datapicture";
import React from "react";
const PhysicalPose = () => {
  const { zDataML, useNumber, useID } = usePicContent();
  return (
    <>
      <div className="flex flex-col w-full text-center">
        <div className="flex font-bold underline items-center justify-center">
          {zDataML.data_real[useID].name}
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-[50%] flex flex-col items-center mt-[80px]">
            <div className="bg-[#F7EAEA] w-[700px] h-[700px] rounded-xl shadow-lg flex items-center justify-center flex-col">
              <div>{zDataML.content}</div>
            </div>
          </div>
          <div className="bg-gray-200 w-[50%]">
            <iframe
              src={zDataML.data_real[useNumber].linkML}
              className="w-full h-[100vh]"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
export default PhysicalPose;
