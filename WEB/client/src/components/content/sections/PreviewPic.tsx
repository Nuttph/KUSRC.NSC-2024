"use client";
import Image from "next/image";
import React, { useState } from "react";

const PreviewPic = () => {
  const dataImg = [1, 2, 3, 4, 5];
  const [selectImage, setImage] = useState<number>(0);
  return (
    <>
      <div className="flex items-center flex-row">
        <div className="flex flex-col setCenter">
          {dataImg.map((item, index) => (
            <div key={index} className="w-[50px] h-[50px]">
              <Image src="" alt="" />
            </div>
          ))}
        </div>
        <div className="w-full h-full">
          <Image src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default PreviewPic;
