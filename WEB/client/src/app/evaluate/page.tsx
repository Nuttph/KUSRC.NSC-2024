"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoChatboxEllipses } from "react-icons/io5";
import { GiClick } from "react-icons/gi";

const Eva = () => {
  const [web, setWeb] = useState(false);
  const [ggf, setGgf] = useState(false);
  const handleWeb = () => {
    setWeb(!web);
    setGgf(false);
  };
  const handelGgf = () => {
    setGgf(!ggf);
    setWeb(false);
  };
  return (
    <>
      <div className="w-full flex items-center justify-center flex-col">
        <div className="text-[40px]">กรุณาเลือกรูปแบบการประเมิน</div>
        <div className="flex items-center justify-center gap-[20px] text-[25px]">
          <label className="flex flex-row items-center justify-center gap-[10px]">
            <input
              type="checkbox"
              checked={web}
              onChange={handleWeb}
              className="w-[20px] h-[20px]"
            />
            <div>ผ่าน website</div>
          </label>
          <label className="flex flex-row items-center justify-center gap-[10px]">
            <input
              type="checkbox"
              checked={ggf}
              onChange={handelGgf}
              className="w-[20px] h-[20px]"
            />
            <div>ผ่าน google form</div>
          </label>
        </div>
        {!web && !ggf && (
          <>
            <div className="w-full h-[1000px]"></div>
          </>
        )}
        {web && (
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe99SKpsDePGHOOa8BglEex5eZv1BuvgcrZI4_PrZplWU81qw/viewform?embedded=true"
            width="640"
            height="2000"
          >
            กำลังโหลด…
          </iframe>
        )}
        {ggf && (
          <>
            <div className="flex flex-col items-center justify-center mt-[25px] h-[500px] text-black gap-[25px]">
              <div className="text-[25px]">
                กดที่ลิ้ง Google Form เพื่อประเมินเว็บไซต์ของเราได้เลย
              </div>
              <div className="flex flex-row gap-[10px]">
                <Link
                  target="_blank"
                  className="text-[30px] font-semibold hover:underline flex flex-row items-center justify-center bg-yellow-300 px-[20px] py-[10px] rounded-xl"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe99SKpsDePGHOOa8BglEex5eZv1BuvgcrZI4_PrZplWU81qw/viewform?usp=sf_link"
                >
                  <div>Google Form</div>
                  <div className="icon-container">
                    <GiClick className="animated-icon" />
                  </div>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Eva;
