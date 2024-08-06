"use client";
import { usePicContent } from "@/store/datapicture";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
//icon
import { FaRegStar } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const PhysicalPose = () => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { zDataImg, useNumber, useID, selectID, selectNumber } =
    usePicContent();
  const [isClient, setIsClient] = useState(false);
  const [uui, setUui] = useState<number>(0);

  useEffect(() => {
    setIsClient(true);
  }, [useID]);

  const [showV, setShowV] = useState(false);
  useEffect(() => {
    setShowV(false);
  }, [zDataImg]);

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
      <div>
        {zDataImg[useNumber].data_real[useID].pop && (
          <Modal open={open} onClose={handleClose}>
            <Box>
              <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[1500px] h-fit py-[50px] bg-white rounded-xl">
                <div className="relative flex-col px-[75px] h-full w-full">
                  <button
                    onClick={handleClose}
                    className="absolute right-[25px] top-[-20px] text-[70px] text-red-500"
                  >
                    <IoCloseCircle />
                  </button>
                  <div className="w-full flex items-center justify-center flex-row">
                    <div className="text-[300px] text-red-700">
                      <IoIosWarning />
                    </div>
                    <div className="text-[25px]">
                      เนื่องจากท่าต่อไปนี้มีใครเสี่ยงที่จะเกิดอุบัติเหตุ
                      จึงอยากให้ผู้ใช้
                      วิเคราะห์ไตร่ตรองสภาพร่างกายของตนเองว่าสามารถทำได้หรือไม่
                      โดยไม่ได้มีท่าไหนที่บังคับว่าต้องทำ
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      onClick={handleClose}
                      className="bg-green-500 px-[20px] py-[10px] rounded-xl text-black font-semibold text-[30px]"
                    >
                      รับทราบ
                    </button>
                  </div>
                </div>
              </div>
            </Box>
          </Modal>
        )}
      </div>
      <div className="flex flex-col w-full text-center relative">
        <div className="flex font-bold underline items-center justify-center text-[30px] my-[25px]">
          <span className="spin text-yellow-400 mx-[15px] text-[45px]">
            <FaRegStar />
          </span>
          {zDataImg[useNumber].data_real[useID].name}{" "}
          <span className="spin text-yellow-400 mx-[15px] text-[45px]">
            <FaRegStar />
          </span>
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-[50%] flex flex-col items-start bg-red-100 rounded-xl shadow-lg">
            <div className="w-full h-full flex items-start pt-[70px] flex-row justify-between px-[100px]">
              <div className="flex flex-col">
                {zDataImg[useNumber].data_real[useID].videoML != "" && (
                  <>
                    <div
                      onClick={() => {
                        setShowV(!showV);
                      }}
                      className="bg-sky-200 px-[20px] py-[10px] rounded-xl mb-[15px] font-semibold cursor-pointer hover:bg-yellow-200 duration-[0.3s]"
                    >
                      {showV ? "ดูรูปภาพ" : "ดูวิดีโอ"}
                    </div>
                  </>
                )}
                {showV && zDataImg[useNumber].data_real[useID].videoML != "" ? (
                  <>
                    <div className="flex items-center justify-center w-full pb-[150px]">
                      <div>
                        <video
                          className="w-[500px] h-[500px]"
                          autoPlay
                          loop
                          muted
                        >
                          <source
                            src={`${zDataImg[useNumber].data_real[useID].videoML}`}
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-center">
                      <Image
                        src={zDataImg[useNumber].data_real[useID].img[uui]}
                        alt="img"
                        className="w-[500px] h-[500px] duration-[0.5s] object-cover"
                      />
                    </div>

                    <div className="flex flex-row mt-[10px] gap-[10px]">
                      {zDataImg[useNumber].data_real[useID].img.map(
                        (item: any, index: any) => (
                          <div key={index} className="rounded-xl">
                            <Image
                              src={item}
                              alt="img"
                              className="w-[100px] cursor-pointer rounded-xl"
                              onClick={() => {
                                setUui(index);
                              }}
                            />
                          </div>
                        )
                      )}
                    </div>
                  </>
                )}
              </div>

              <div className="flex flex-col gap-[15px] w-[50%] px-[25px] text-left">
                <div className="font-bold text-[25px]">คำอธิบายท่า : </div>
                <div className="text-[20px]">
                  {zDataImg[useNumber].data_real[useID].des}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 w-[50%] relative">
            <iframe
              src={zDataImg[useNumber].data_real[useNumber].linkML}
              className="w-full h-[100vh]"
            ></iframe>
          </div>
          {zDataImg[useNumber].data_real.length > useID + 1 && (
            <>
              <div className="">
                <Link
                  href="/test-pose-link"
                  onClick={() => {
                    if (true) {
                      selectID(useID + 1);
                    }
                  }}
                  className="bg-[#91c8ff] px-[20px] py-[10px] rounded-xl text-[22px] absolute right-[20px] top-[100px]
            hover:bg-[#e1a6ff] duration-[0.2s]"
                >
                  ถัดไป
                </Link>
              </div>
            </>
          )}
          {0 < useID && (
            <>
              <div className="">
                <Link
                  href="/test-pose-link"
                  onClick={() => {
                    if (true) {
                      selectID(useID - 1);
                    }
                  }}
                  className="bg-[#91c8ff] px-[20px] py-[10px] rounded-xl text-[22px] absolute left-[20px] top-[100px]
            hover:bg-[#e1a6ff] duration-[0.2s]"
                >
                  ก่อนหน้า
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default PhysicalPose;
