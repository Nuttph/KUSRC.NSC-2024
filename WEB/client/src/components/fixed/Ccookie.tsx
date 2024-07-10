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
    <div className="w-[85%] h-[70px] bg-[#00000095] rounded-xl flex items-center justify-center text-white">
      <div className="flex items-center justify-between px-[70px] w-full">
        <div className="line-clamp-1 w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          deleniti assumenda facere fuga nulla doloribus consequatur odio
          tempore. Quia expedita mollitia repellat repudiandae reiciendis
          dolorum, molestiae nam explicabo minima, velit totam dolores! Fugit
          fuga perferendis earum itaque delectus quos nisi molestias eveniet
          labore nam, dolorum soluta quo quasi, unde recusandae.
        </div>
        <Link href="/pdpa" className="underline">
          ... อ่านเพิ่มเติม
        </Link>
        <button
          onClick={handleAcceptCookie}
          className="w-[200px] bg-red-500 hover:bg-red-800 duration-[0.3s] rounded-xl px-[20px] py-[10px] flex items-center justify-center font-bold text-[#fff]"
        >
          Accept Cookie
        </button>
      </div>
    </div>
  );
};

export default Ccookie;
