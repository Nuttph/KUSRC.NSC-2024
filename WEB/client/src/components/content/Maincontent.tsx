"use client";
import React, { useEffect, useState } from "react";
import PhyPre from "./sections/PhyPre";
import { dataMLProps, usePicContent } from "@/store/datapicture";
import { usePathname } from "next/navigation";

const Maincontent = () => {
  const { zDataML, zDataImg, selectID } = usePicContent();
  const pathname = usePathname();
  const [data, setData] = useState<number>(0);
  useEffect(() => {
    if (pathname == "/content/pose1") {
      setData(1 - 1);
    } else if (pathname == "/content/pose2") {
      setData(2 - 1);
    } else if (pathname == "/content/pose3") {
      setData(3 - 1);
    } else if (pathname == "/content/pose4") {
      setData(4 - 1);
    }
  }, []);

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
      <div className="w-full p-[40px]">
        <h1 className="flex items-center justify-center w-full font-semibold text-[35px]">
          {zDataImg[data].content}
        </h1>
        <div className="flex flex-col justify-start text-[30px]">
          <ol className="list-disc text-[20px] ml-[30px]">
            {zDataImg[data].data_real.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ol>
        </div>

        <div className="mt-[50px] flex flex-col gap-[100px]">
          {zDataImg[data].data_real.map((item, index) => (
            <div key={index}>
              <PhyPre value={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Maincontent;
