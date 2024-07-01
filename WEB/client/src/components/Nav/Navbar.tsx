"use client";
import { useCTent } from "@/store/contentStore";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const { Dropdown, Nav } = useCTent();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div
        className="flex flex-row justify-between px-[140px] py-[20px] shadow-lg
      bg-[#1E6FBB]
      "
      >
        <div id="Logo">Logo</div>
        <div
          id="Content"
          className="flex flex-row gap-[40px]
        min-[1500px]:text-[22px]
        text-[15px]"
        >
          {Nav.map((item, index) => (
            <div key={index} className="text-[#EFF396]">
              {index != 1 && <Link href={item.path}>{item.content}</Link>}
              {index == 1 && (
                <div className="relative">
                  <button
                    onClick={() => {
                      setOpen(!isOpen);
                    }}
                  >
                    {item.content}
                  </button>

                  <div
                    className={`${
                      isOpen
                        ? "block duration-[0.5s]"
                        : "hidden duration-[0.5s]"
                    } absolute top-[55px] w-[240%] bg-[#fff] px-4 py-2 rounded-xl shadow-xl duration-[0.5s] transition-all`}
                  >
                    {isOpen &&
                      Dropdown.map((item, index) => (
                        <Link
                          href={item.path}
                          key={index}
                          className="flex flex-col hover:underline"
                        >
                          {item.content}
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
