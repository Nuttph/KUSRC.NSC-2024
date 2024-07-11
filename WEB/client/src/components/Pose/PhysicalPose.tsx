"use client";
import { usePicContent } from "@/store/datapicture";
import React from "react";
const PhysicalPose = () => {
  const { zDataML, useNumber } = usePicContent();
  return (
    <>
      <div className="flex flex-col w-full text-center">
        <div className="flex font-bold underline items-center justify-center">
          Detection Test!!!
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center justify-center w-[50%]">
            <div className="bg-[#F7EAEA] w-[500px] h-[500px] rounded-xl shadow-lg">
              {zDataML.content}
            </div>
          </div>
          <div className="bg-gray-200 w-[50%]">
            <iframe
              src={zDataML.data_real[useNumber].linkML}
              className="w-full h-[100vh]"
            ></iframe>
          </div>
          {zDataML.data_real[useNumber].linkML}
        </div>
      </div>
    </>
  );
};
export default PhysicalPose;
