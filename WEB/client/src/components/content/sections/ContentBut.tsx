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
          <div className="flex flex-col text-[25px] line-clamp-4">
            <h1 className="font-bold text-green-800">ลักษณะการทำท่า :</h1>
            <p>{valueC.des}</p>
          </div>
          <div className="flex flex-col mt-[10px]">
            <h1 className="font-bold text-green-800">ประโยชน์ในการทำท่า:</h1>
            <p className="px-[25px] py-[10px] bg-pink-300 rounded-xl">
              {valueC.for}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[70px]">
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
      </div>
    </>
  );
};

export default ContentBut;
