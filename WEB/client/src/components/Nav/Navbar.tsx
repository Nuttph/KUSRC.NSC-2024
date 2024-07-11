"use client";
import { useCTent } from "@/store/contentStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdMenuOpen } from "react-icons/md";
const Navbar = () => {
  const pathname = usePathname();
  const { Nav } = useCTent();

  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    setOpenNav(false);
  }, [pathname]);
  const handleColse = () => {
    setOpenNav(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="flex flex-col">
        <div
          className="flex flex-row justify-between h-[70px] shadow-lg items-center
        bg-[#c6e4ff] min-[1500px]:px-[140px]
        min-[1000px]:px-[100px]
        px-[50px]"
        >
          <div id="Logo">Logo</div>
          <div
            id="Content"
            className="hidden flex-row gap-[100px]
          min-[1500px]:text-[22px]
          text-[15px]
          min-[1000px]:flex"
          >
            {Nav.map((item, index) => (
              <div key={index} className="text-black">
                <Link href={item.path}>{item.content}</Link>
              </div>
            ))}
          </div>
          <div
            className={`min-[1000px]:hidden flex flex-col text-[50px] cursor-pointer ${
              openNav ? "rotate-180" : "rotate-0"
            } duration-[0.5s]`}
            onClick={() => {
              setOpenNav(!openNav);
            }}
          >
            <MdMenuOpen />
          </div>
        </div>
        <div className="top-[70px] fixed w-full bg-sky-100">
          {openNav && (
            <>
              <div className="flex flex-col gap-[20px] text-[20px] ">
                {Nav.map((item, index) => (
                  <Link
                    href={item.path}
                    onClick={handleColse}
                    className="px-[50px] py-[10px] hover:bg-sky-500 cursor-pointer"
                  >
                    <div key={index} className="">
                      {item.content}
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
