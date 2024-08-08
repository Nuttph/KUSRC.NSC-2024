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
      <div className="flex flex-col setCenter justify-between text-[25px] text-[#fff]">
        <div>
          <div className="text-[35px] font-medium">{valueC.name}</div>
          <div className="flex flex-col text-[25px] line-clamp-4">
            <h1 className="font-medium text-yellow-300">ลักษณะการทำท่า :</h1>
            <p>{valueC.des}</p>
          </div>
          <div className="flex flex-col mt-[10px]">
            <h1 className="font-medium text-yellow-300">ประโยชน์ในการทำท่า:</h1>
            <p className="px-[25px] py-[10px] bg-[#1F2125] my-[15px] rounded-xl">
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
            className="bg-[#58ff9b] hover:bg-green-600 duration-300 px-[40px] py-[10px] w-fit rounded-xl text-[30px] text-[#000] font-bold"
          >
            เริ่มการทดสอบ
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContentBut;
