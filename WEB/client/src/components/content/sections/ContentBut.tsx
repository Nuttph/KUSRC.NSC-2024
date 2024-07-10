"use client";
import React from "react";
import { dataimgProps } from "@/store/datapicture";

const ContentBut = ({ item }: { item: dataimgProps }) => {
  const handleTest = () => {
    console.log("Test button");
  };
  return (
    <>
      <div className="flex flex-col setCenter justify-between">
        <div>content Lorem ipsum dolor sit amet.</div>
        <p>{item.name}</p>
        <button onClick={() => handleTest()}>Test</button>
      </div>
    </>
  );
};

export default ContentBut;
