"use client";
import { useCTent } from "@/store/contentStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
//img
import logoImg from "../../asset/PHYSIO.png";
import Image from "next/image";

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
          className="flex flex-row justify-between h-[60px] shadow-lg items-center
        bg-[#c6e4ff] min-[1500px]:px-[140px] duration-[0.5s]
        min-[1000px]:px-[100px]
        px-[50px]"
        >
          <Link
            href="/"
            id="Logo"
            className="relative min-[1000px]:w-[200px] min-[1000px]:h-full h-[50px] w-[100px]"
          >
            <Image src={logoImg} alt="logoImg" fill />
          </Link>
          <div
            id="Content"
            className="hidden flex-row duration-[0.5s]
          min-[1500px]:text-[24px] min-[1500px]:gap-[100px]
          min-[1200px]:text-[20px] gap-[28px]
          text-[17px]
          min-[1000px]:flex"
          >
            {Nav.map((item, index) => (
              <div key={index} className="text-black hover:font-semibold">
                <Link href={item.path}>{item.content}</Link>
              </div>
            ))}
          </div>
          <div
            className={`min-[1000px]:hidden flex flex-col cursor-pointer ${
              openNav ? "rotate-180" : "rotate-0"
            } duration-[0.5s] min-[1000px]:text-[50px] text-[25px]`}
            onClick={() => {
              setOpenNav(!openNav);
            }}
          >
            <IoIosArrowDown />
          </div>
        </div>
        <div className="top-[70px] fixed w-full bg-sky-100">
          {openNav && (
            <>
              <div className="flex flex-col text-[15px]">
                {Nav.map((item, index) => (
                  <Link
                    href={item.path}
                    onClick={handleColse}
                    className="px-[25px] py-[10px] hover:bg-sky-500 cursor-pointer border-b-[2px] border-gray-500"
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
