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
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe99SKpsDePGHOOa8BglEex5eZv1BuvgcrZI4_PrZplWU81qw/viewform?embedded=true"
          width="640"
          height="2000"
        >
          กำลังโหลด…
        </iframe>
      </div>
    </>
  );
};

export default Eva;
