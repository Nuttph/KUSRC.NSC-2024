"use client";
import Link from "next/link";
import React from "react";

//image
import logoImg from "../../asset/logofoot.png";
import Image from "next/image";
import physicImg from "../../asset/lineoa.png";

const Footer = () => {
  return (
    <>
      <div className="h-[500px] bg-gray-800 py-[50px] px-[140px] text-white pt-[105px]">
        <div className="flex flex-row justify-between">
          <div className="w-[20%]">
            <h1 className=" cursor-pointer text-[30px] font-semibold relative w-[150px] h-[150px]">
              <Image src={logoImg} alt="logoImg" fill />
            </h1>
          </div>

          <div className="flex flex-row gap-[100px] items-end w-fit h-full">
            <div>
              <div className="text-[30px] font-semibold">Tech Stack</div>
              <ol className="list-disc text-[20px]">
                <li>Next.js</li>
                <li>TailwindCSS</li>
                <li>MUI</li>
                <li>Tensorflow</li>
              </ol>
            </div>
            <Link
              target="_blank"
              href="https://lin.ee/KGGdaVo"
              className="max-w-[150px] max-h-[150px] bg-green-400 shadow-xl flex items-center justify-center text-[25px] text-black font-semibold rounded-xl"
            >
              <Image src={physicImg} alt="physicImg" className="rounded-xl" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-[70px] bg-gray-100 flex items-center justify-center text-[25px]">
        © 2024 Copyright :
        <Link
          href="https://physio-power.vercel.app/"
          className="ml-[5px] font-semibold"
        >
          physio-power
        </Link>
      </div>
    </>
  );
};

export default Footer;
