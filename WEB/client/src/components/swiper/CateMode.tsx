"use client";
import { usePicContent } from "@/store/datapicture";
import Image from "next/image";
import React from "react";

const CateMode = () => {
  const { zDataImg } = usePicContent();
  return (
    <>
      <div className="w-full py-[50px] bg-red-400">
        {zDataImg.map((item, index) => (
          <div
            key={index}
            className="w-full py-[150px] flex flex-col items-center justify-center"
          >
            <div className="relative w-full h-[400px]">
              <Image src={item.data_real[0].img[0]} alt="img" fill />
            </div>
            <div>{item.content}</div>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CateMode;
