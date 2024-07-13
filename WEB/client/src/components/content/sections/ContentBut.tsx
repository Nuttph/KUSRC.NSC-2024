"use client";
import React from "react";
import {
  dataMLinterProps,
  dataMLProps,
  usePicContent,
} from "@/store/datapicture";
import Link from "next/link";

interface Props {
  valueC: dataMLinterProps;
  index: number;
}

const ContentBut = ({ valueC, index }: Props) => {
  const { zSelectDataML, selectNumber, selectID } = usePicContent();
  const handleTest = () => {
    console.log("Test button");
  };
  return (
    <>
      <div className="flex flex-col setCenter justify-between text-[25px]">
        <div>
          <div className="text-[35px] font-bold">{valueC.name}</div>
          <div className="text-[20px] line-clamp-4">{valueC.des}</div>
        </div>
        <Link
          href={"/test-pose"}
          onClick={() => {
            handleTest();
            selectID(index);
          }}
          className="bg-[#58ff9b] px-[40px] py-[10px] w-fit rounded-xl text-[20px]"
        >
          เริ่มการทดสอบ
        </Link>
      </div>
    </>
  );
};

export default ContentBut;
