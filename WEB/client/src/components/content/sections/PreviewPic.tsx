"use client";
import { useCTent } from "@/store/contentStore";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import {
  dataimgProps,
  dataMLinterProps,
  usePicContent,
} from "@/store/datapicture";

interface Props {
  indexs: number;
  valueImg: dataMLinterProps;
}
const PreviewPic = ({ indexs, valueImg }: Props) => {
  const [selectImage, setImage] = useState(0);
  const { zDataImg } = usePicContent();

  return (
    <>
      <div className="flex items-center flex-row gap-[10px]">
        <div className="flex flex-col setCenter gap-[10px]">
          {valueImg.img.map((item, index) => (
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
          <div className="w-[550px] h-[550px] shadow-2xl rounded-xl border-[2px] relative flex items-center justify-center">
            <Image
              src={valueImg.img[selectImage]}
              alt="img"
              className="w-[350px] flex items-center justify-center text-[#fff] text-[50px] duration-[0.5s]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewPic;
