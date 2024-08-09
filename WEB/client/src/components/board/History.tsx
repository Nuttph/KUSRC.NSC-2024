"use client";
import { usePicContent } from "@/store/datapicture";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const History = () => {
  const { zDataImg, selectID, selectNumber } = usePicContent();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const headtext = [""];
  return (
    <>
      {isClient && (
        <div className="w-full pt-[150px] h-fit pb-[150px] text-[#fff]">
          <div className="flex flex-col w-full px-[100px]">
            <div className="text-[50px]">ประวัติการทำกายภาพบำบัด</div>
            <div className="w-full flex flex-col mt-[50px]">
              <div className="flex flex-row w-full bg-[#4A9DFF] py-[5px] rounded-t-2xl items-center px-[10px] text-[35px]">
                <div className="w-[45%]">ท่ายกายภาพบำบัด</div>
                <div className="w-[10%]">เวลาสูงสุด</div>
                <div className="w-[15%]">จำนวนเซ็ตที่ทำ</div>
                <div className="w-[13%]">วันที่ทำล่าสุด</div>
                <div className="w-[15%]">เริ่มทำกายภาพบำบัด</div>
              </div>
              <div className="flex flex-col w-full border-[2px] border-[#6D6D6D] border-b-[2px] bg-[#1F2125]">
                {zDataImg.map((item, indexs) => (
                  <div key={indexs}>
                    {item.data_real.map((text, index) => (
                      <div
                        key={index}
                        className="w-full py-[10px] flex-row flex pl-[10px] text-[30px] border-b-[1px] border-[#6D6D6D]"
                      >
                        <div className="w-[45%]">{text.name}</div>
                        <div className="w-[10%]">{text.besttime}</div>
                        <div className="w-[15%]">{text.getset}</div>
                        <div className="w-[13%]">{text.dodate}</div>
                        <div className="w-[15%]">
                          <Link
                            href={"/test-pose"}
                            className="w-full"
                            onClick={() => {
                              selectNumber(indexs);
                              selectID(index);
                            }}
                          >
                            <button className="bg-green-500 w-[270px] rounded-lg hover:bg-green-600 duration-300">
                              เริ่ม
                            </button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default History;
