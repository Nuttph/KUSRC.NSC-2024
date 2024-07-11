"use client";
import { useCTent } from "@/store/contentStore";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { dataimgProps } from "@/store/datapicture";

const PreviewPic = ({ valueImg }: { valueImg: StaticImageData[] }) => {
  const [selectImage, setImage] = useState<number>(0);
  return (
    <>
      <div className="flex items-center flex-row gap-[10px]">
        <div className="flex flex-col setCenter gap-[10px]">
          {valueImg.map((item, index) => (
            <div key={index} className="shadow-xl rounded-md">
              <Image
                src={item}
                alt="img"
                onClick={() => {
                  setImage(index);
                }}
                className={`w-[100px] h-[100px]  text-[#fff] flex items-center justify-center cursor-pointer select-none`}
              />
            </div>
          ))}
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="shadow-2xl rounded-xl border-[2px]">
            <Image
              src={valueImg[selectImage]}
              alt="img"
              className="w-[550px] h-[550px] flex items-center justify-center text-[#fff] text-[50px] duration-[0.5s]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewPic;
