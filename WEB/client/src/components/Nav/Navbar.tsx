"use client";
import { useCTent } from "@/store/contentStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const { Nav } = useCTent();
  return (
    <>
      <div
        className="flex flex-row justify-between px-[140px] py-[20px] shadow-lg
      bg-[#c6e4ff]"
      >
        <div id="Logo">Logo</div>
        <div
          id="Content"
          className="flex flex-row gap-[100px]
        min-[1500px]:text-[22px]
        text-[15px]"
        >
          {Nav.map((item, index) => (
            <div key={index} className="text-black">
              <Link href={item.path}>{item.content}</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
