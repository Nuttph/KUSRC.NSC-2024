import Image from "next/image";
import React from "react";

// image
import logo from "../../asset/logo/pp_logo.png";
import Link from "next/link";

const Footer = () => {
  const footlink1 = [
    {
      name: "หน้าแรก",
      details: [
        {
          name: "วัตถุประสงค์",
          link: "/",
        },
        {
          name: "การหาค่า BMI",
          link: "/",
        },
        {
          name: "การหาค่า BMR",
          link: "/",
        },
      ],
    },
    {
      name: "ท่ากายภาพบำบัด",
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
  ];

  const footlink2 = [
    {
      name: "ข้อควรปฏิบัติ",
      details: [
        {
          name: "ข้อควรปฏิบัติในการทำกายภาพบำบัด",
          link: "/",
        },
        {
          name: "เรียนรู้กฏหมาย PDPA",
          link: "/",
        },
      ],
    },
    {
      name: "ประเมินการใช้งานเว็บไซต์",
      details: [
        {
          name: "ประเมินการใช้งานเว็บไซต์",
          link: "/",
        },
      ],
    },
  ];

  return (
    <>
      <div className="w-full h-[500px] bg-[#1F2125] text-[#fff] px-[50px] py-[70px]">
        <div className="flex flex-row w-full justify-center gap-[200px]">
          <div className="flex flex-col gap-[20px]">
            <h1 className="text-[50px] cursor-pointer hover:text-[#4A9DFF]">
              Physio Power
            </h1>
            <div className="relative">
              <Image
                src={logo}
                alt="logo"
                className="rounded-full w-[180px] hover:rounded-3xl duration-500 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-row gap-[200px]">
            {footlink1.map((item, index) => (
              <div key={index} className="flex flex-col ml-[50px]">
                <h1 className="text-[30px] font-bold translate-x-[-30px] hover:text-[#4A9DFF] duration-300 cursor-pointer">
                  {item.name}
                </h1>
                <ul className="list-disc">
                  {item.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-[24px]">
                      <Link
                        href={detail.link}
                        className="hover:text-[#DBFF4B] duration-300 cursor-pointer"
                      >
                        {detail.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col ml-[50px] gap-[20px]">
            {footlink2.map((item, index) => (
              <div key={index} className="flex flex-col">
                <h1 className="text-[30px] font-bold translate-x-[-30px] hover:text-[#4A9DFF] duration-300 cursor-pointer">
                  {item.name}
                </h1>
                <ul className="list-disc">
                  {item.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-[24px]">
                      <Link
                        href={detail.link}
                        className="hover:text-[#DBFF4B] duration-300 cursor-pointer"
                      >
                        {detail.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-[50px] bg-[#4A9DFF] font-bold flex items-center justify-center text-[20px]">
        Copyright @2024 of NSC 2024 by KU DiStech Team
      </div>
    </>
  );
};

export default Footer;
