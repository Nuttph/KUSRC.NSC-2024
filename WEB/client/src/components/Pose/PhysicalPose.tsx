"use client";
import { usePicContent } from "@/store/datapicture";
import Image from "next/image";
import React from "react";
const PhysicalPose = () => {
  const { zDataML, useNumber, useID } = usePicContent();
  return (
    <>
      <div className="flex flex-col w-full text-center">
        <div className="flex font-bold underline items-center justify-center text-[30px] my-[25px]">
          {zDataML.data_real[useID].name}
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-[50%] flex flex-col items-start">
            <div className="w-full h-full rounded-xl shadow-lg flex items-start pt-[70px] flex-row bg-red-100 justify-between">
              <div>
                <Image
                  src={zDataML.data_real[useID].imgML}
                  alt="img"
                  className="w-[500px] h-auto"
                />
              </div>
              <div className="flex flex-col gap-[15px] w-[50%] px-[25px] text-left">
                <div className="font-bold text-[25px]">คำอธิบายท่า : </div>
                <div className="text-[17px]">
                  {zDataML.data_real[useID].des}
                </div>
              </div>
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
