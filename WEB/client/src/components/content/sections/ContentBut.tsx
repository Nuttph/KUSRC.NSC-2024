"use client";
import React from "react";
import { dataimgProps, usePicContent } from "@/store/datapicture";
import Link from "next/link";

const ContentBut = ({ item }: { item: dataimgProps }) => {
  const { zSelectDataML } = usePicContent();
  const handleTest = () => {
    console.log("Test button");
  };
  return (
    <>
      <div className="flex flex-col setCenter justify-between text-[25px]">
        <div>
          <div className="text-[35px] font-bold">{item.name}</div>
          <div className="text-[20px] line-clamp-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            deleniti dolor eius perspiciatis, fugiat quos optio temporibus
            nostrum libero esse culpa distinctio similique cupiditate odio
            nihil? Nostrum porro doloremque cum temporibus impedit. Ab doloribus
            vero hic magni assumenda blanditiis magnam harum itaque in, officia,
            cupiditate, doloremque fuga labore laboriosam esse?
          </div>
        </div>
        <Link
          href={"/test-pose"}
          onClick={() => {
            handleTest();
            zSelectDataML(item);
          }}
          className="bg-[#58ff9b] px-[40px] py-[10px] w-fit rounded-xl text-[20px]"
        >
          Test
        </Link>
      </div>
    </>
  );
};

export default ContentBut;
