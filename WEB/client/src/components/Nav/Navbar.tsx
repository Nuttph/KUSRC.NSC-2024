"use client";
import React, { useEffect, useState } from "react";
import pp_logo from "../../asset/logo/pp_logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const topic_nav = [
    {
      name: "ท่ากายภาพบำบัด",
      link: "/#phy",
    },
    {
      name: "ข้อควรปฏิบัติ",
      link: "/warning",
    },
    {
      name: "ประเมินการใช้งานเว็บไซต์",
      link: "/evaluate",
    },
    {
      name: "ประวัติ",
      link: "/dashboard",
    },
  ];

  const onHover = [
    {
      name: "หน้าแรก",
      link: "/",
      details: [
        {
          name: "วัตถุประสงค์",
          link: "/#goal",
        },
        {
          name: "การหาค่า BMI",
          link: "/#bmir",
        },
        {
          name: "การหาค่า BMR",
          link: "/#bmir",
        },
        {
          name: "ประวัติ",
          link: "/dashboard",
        },
      ],
    },
    {
      name: "ท่ากายภาพบำบัด",
      link: "/#phy",
      details: [
        {
          name: "เพิ่มการทรงตัว",
          link: "/",
        },
        {
          name: "เพิ่มความยืดหยุ่นของกล้ามเนื้อและข้อต่อ",
          link: "/",
        },
        {
          name: "เพิ่มกำลังกล้ามเนื้อ",
          link: "/",
        },
        {
          name: "บริหารกล้ามเนื้อ",
          link: "/",
        },
      ],
    },
    {
      name: "ข้อควรปฏิบัติ",
      link: "/warning",
      details: [
        {
          name: "ข้อควรปฏิบัติในการทำกายภาพบำบัด",
          link: "/warning",
        },
        {
          name: "เรียนรู้กฏหมาย PDPA",
          link: "/pdpa",
        },
      ],
    },
    {
      name: "ประเมินการใช้งานเว็บไซต์",
      link: "/evaluate",
      details: [
        {
          name: "ประเมินการใช้งานเว็บไซต์",
          link: "/evaluate",
        },
      ],
    },
  ];

  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, []);
  return (
    <>
      <div className="absolute top-[15px] w-full items-center justify-center flex text-[25px] text-[#fff] flex-col">
        <div
          id="itHover"
          className="bg-[#1F2125] w-[95%] h-[70px] rounded-[14px] flex items-center justify-center gap-[125px] transition-all duration-300"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="relative w-[50px] h-[50px]">
            <Image
              src={pp_logo}
              alt="pp_logo"
              fill
              className="rounded-full cursor-pointer"
            />
          </div>
          {topic_nav.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="cursor-pointer hover:text-[#4A9DFF] duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div
          className={`w-[93%] bg-[#333437] absolute top-[50px] z-[-1] px-[20px] text-[25px] rounded-b-xl transition-all duration-300 ${
            isOpen ? "h-[350px] opacity-100" : "h-0 opacity-0 overflow-hidden"
          }`}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="mt-[70px] w-full flex justify-around flex-row">
            {onHover.map((item, index) => (
              <div className="flex flex-col" key={index}>
                <Link
                  href={item.link}
                  className="text-[20px] hover:text-[#4A9DFF] cursor-pointer mb-[10px]"
                >
                  {item.name}
                </Link>
                <ul className="list-disc ml-[30px]">
                  {item.details.map((text, index) => (
                    <Link
                      href={text.link}
                      key={index}
                      className="hover:text-[#DBFF4A] cursor-pointer duration-300"
                    >
                      <li>{text.name}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
