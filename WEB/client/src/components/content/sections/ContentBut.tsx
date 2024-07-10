"use client";
import React from "react";

const ContentBut = () => {
  const handleTest = () => {
    console.log("Test button");
  };
  return (
    <>
      <div className="flex flex-col setCenter justify-between">
        <div>content Lorem ipsum dolor sit amet.</div>
        <button onClick={() => handleTest()}>Test</button>
      </div>
    </>
  );
};

export default ContentBut;
