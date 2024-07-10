import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="h-[500px] bg-gray-800 py-[50px] px-[140px] text-white">
        <div className="flex flex-row justify-between">
          <div className="w-[30%]">
            <h1 className="text-[30px] font-semibold">Company name</h1>
          </div>
          <div className="w-[20%]">
            <h1 className="text-[30px] font-semibold">Products</h1>
            <ol className="list-disc ml-[25px] text-[20px]">
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </ol>
          </div>
          <div className="w-[20%]">
            <h1 className="text-[30px] font-semibold">Credit</h1>
            <ol className="list-disc ml-[25px] text-[20px]">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                omnis rem tempora perferendis beatae voluptas atque voluptatem,
                autem natus. Omnis aut facere perferendis totam sapiente?
              </li>
            </ol>
          </div>
          <div className="flex flex-col gap-[50px] items-end">
            <div className="w-[150px] h-[150px] bg-green-400 shadow-xl flex items-center justify-center text-[25px] text-black font-semibold">
              QR CODE
            </div>
            <div className="w-[150px] h-[150px] bg-green-400 shadow-xl"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-[70px] bg-gray-100 flex items-center justify-center text-[25px]">
        © 2024 Copyright : {"  "}
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
