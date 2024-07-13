"use client";
import { usePicContent } from "@/store/datapicture";
import Image from "next/image";
import React, { useEffect, useState } from "react";
const PhysicalPose = () => {
  const { zDataImg, useNumber, useID } = usePicContent();
  const [isClient, setIsClient] = useState(false);
  const [uui, setUui] = useState<number>(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <>
        <div className="w-full h-[100vh]">
          <div className="text-[25px] flex items-center justify-center text-red-500 font-bold">
            Loading...
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col w-full text-center">
        <div className="flex font-bold underline items-center justify-center text-[30px] my-[25px]">
          {zDataImg[useNumber].data_real[useID].name}
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-[50%] flex flex-col items-start">
            <div className="w-full h-full rounded-xl shadow-lg flex items-start pt-[70px] flex-row bg-red-100 justify-between px-[100px]">
              <div className="flex flex-col">
                <div>
                  <Image
                    src={zDataImg[useNumber].data_real[useID].img[uui]}
                    alt="img"
                    className="w-[500px] h-auto duration-[0.5s]"
                  />
                </div>
                <div className="flex flex-row mt-[10px] gap-[10px]">
                  {zDataImg[useNumber].data_real[useID].img.map(
                    (item, index) => (
                      <div key={index} className="rounded-xl">
                        <Image
                          src={item}
                          alt="img"
                          className="w-[100px] cursor-pointer rounded-xl"
                          onClick={() => {
                            setUui(index);
                          }}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-[15px] w-[50%] px-[25px] text-left">
                <div className="font-bold text-[25px]">คำอธิบายท่า : </div>
                <div className="text-[20px]">
                  {zDataImg[useNumber].data_real[useID].des}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 w-[50%]">
            <iframe
              src={zDataImg[useNumber].data_real[useNumber].linkML}
              className="w-full h-[100vh]"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
export default PhysicalPose;
