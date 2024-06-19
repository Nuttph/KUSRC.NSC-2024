"use client";
import React from "react";
import Main from "@/components/Main";
import Navbar from "@/components/Nav/Navbar";
import TeachableMachinePose from "@/components/TeachableMachinePose";

const page = () => {
  return (
    <>
      {/* <TeachableMachinePose /> */}
      {/* <Main /> */}
      <div className="w-full">
      <iframe src="/index.html" className="w-full h-[100vh]"></iframe>
      </div>
    </>
  );
};

export default page;
