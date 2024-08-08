"use client";
import React, { useEffect, useState } from "react";
import PhyPre from "./sections/PhyPre";
import { dataMLProps, usePicContent } from "@/store/datapicture";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Maincontent = () => {
  const { zDataML, zDataImg, selectID, selectNumber } = usePicContent();
  const pathname = usePathname();
  const [data, setData] = useState<number>(0);
  useEffect(() => {
    if (pathname == "/content/pose1") {
      setData(1 - 1);
      selectNumber(0);
    } else if (pathname == "/content/pose2") {
      setData(2 - 1);
      selectNumber(1);
    } else if (pathname == "/content/pose3") {
      setData(3 - 1);
      selectNumber(2);
    } else if (pathname == "/content/pose4") {
      setData(4 - 1);
      selectNumber(3);
    }
  }, [pathname]);

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return (
      <>
        <div className="w-full h-[100vh]">
          <div className="text-[25px] flex items-center justify-center text-red-500 font-bold">
            Loading...
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-full p-[40px] pt-[150px] text-[#fff]">
        <h1 className="flex items-center justify-center w-full font-semibold text-[35px]">
          {zDataImg[data].content}
        </h1>

        <div className="flex flex-col gap-[100px] text-[#fff]  py-[150px]">
          {zDataImg[data].data_real.map((item, index) => (
            <div key={index} className="">
              <PhyPre value={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Maincontent;
