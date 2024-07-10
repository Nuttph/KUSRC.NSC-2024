"use client";
import { useCTent } from "@/store/contentStore";
import Image from "next/image";
import React, { useState } from "react";

const PreviewPic = () => {
  const dataImg = [1, 2, 3, 4, 5];
  const { imgDatapose } = useCTent();
  const [selectImage, setImage] = useState(imgDatapose[0].color);
  return (
    <>
      <div className="flex items-center flex-row gap-[10px]">
        <div className="flex flex-col setCenter gap-[10px]">
          {imgDatapose.map((item, index) => (
            <div
              onClick={() => {
                setImage(item.color);
              }}
              key={index}
              style={{ backgroundColor: item.color }}
              className={`w-[100px] h-[100px]  text-[#fff] flex items-center justify-center cursor-pointer select-none`}
            >
              {/* <Image src="" alt="" /> */}
              {item.color}
            </div>
          ))}
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div
            style={{ backgroundColor: selectImage }}
            className="w-[550px] h-[550px] flex items-center justify-center text-[#fff] text-[50px] duration-[0.5s]"
          >
            {selectImage}
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewPic;
