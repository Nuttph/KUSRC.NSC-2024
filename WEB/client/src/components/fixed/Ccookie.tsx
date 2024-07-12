"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

const Ccookie = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const userAcceptedCookies = Cookies.get("userAcceptedCookies");
    if (!userAcceptedCookies) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptCookie = () => {
    Cookies.set("userAcceptedCookies", "true", { expires: 365 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className="bg-[#00000095]  flex items-center justify-center text-white duration-[0.5s] 
     min-[1000px]:h-[70px] min-[1500px]:text-[17px] min-[1000px]:text-[15px]
    h-[50px] min-[650px]:text-[14px] min-[650px]:w-[85%] min-[650px]:rounded-xl
    text-[13px] w-full"
    >
      <div
        className="flex items-center justify-between w-full
      min-[1000px]:px-[70px]
      px-[20px]"
      >
        <div className="line-clamp-1 w-[80%]">
          คุณชอบคุกกี้ไหม🍪
          เราใช้คุกกี้เพื่อให้แน่ใจว่าคุณได้รับประสบการณ์ที่ดีที่สุดบนเว็บไซต์ของเรา
        </div>
        <Link href="/pdpa" className="underline w-[120px]">
          อ่านเพิ่มเติม
        </Link>
        <button
          onClick={handleAcceptCookie}
          className="w-[200px] bg-red-500 hover:bg-red-800 duration-[0.3s] rounded-xl flex items-center justify-center font-bold text-[#fff]
          min-[1000px]:px-[20px] min-[1000px]:py-[10px] min-[650px]:px-[10px] py-[5px]"
        >
          Accept Cookie
        </button>
      </div>
    </div>
  );
};

export default Ccookie;
