"use client";
import React from "react";
import PhyPre from "./sections/PhyPre";
import { usePicContent } from "@/store/datapicture";

const Maincontent = () => {
  const { zDataML } = usePicContent();
  return (
    <>
      <div className="w-full p-[40px]">
        <h1 className="flex items-center justify-center w-full font-semibold text-[35px]">
          {zDataML.content}
        </h1>
        <div className="flex flex-col justify-start text-[30px]">
          <h2>name Lorem ipsum dolor sit amet.</h2>
          <ol className="list-disc text-[20px] ml-[30px]">
            {zDataML.data_real.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ol>
        </div>
        <div className="mt-[50px] flex flex-col gap-[100px]">
          {zDataML.data_real.map((item, index) => (
            <div key={index}>
              <PhyPre value={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Maincontent;
