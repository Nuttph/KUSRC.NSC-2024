"use client";
import { usePicContent } from "@/store/datapicture";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useSound from "./useSound"; // Import the useSound hook

const PhysicalPose = () => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { zDataImg, useNumber, useID, selectID, selectNumber, updateData } =
    usePicContent();
  const [isClient, setIsClient] = useState(false);
  const [uui, setUui] = useState<number>(0);
  const [showV, setShowV] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [predictions, setPredictions] = useState<any[]>([]);
  const { checkProbability, timer } = useSound();

  useEffect(() => {
    setIsClient(true);
  }, [useID]);

  useEffect(() => {
    setShowV(false);
  }, [zDataImg]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.predictions) {
        setPredictions(event.data.predictions);
      }
    };
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  useEffect(() => {
    checkProbability(predictions);
  }, [predictions, checkProbability]);

  const sendModelURLToIframe = () => {
    if (iframeRef.current) {
      const url = zDataImg[useNumber].data_real[useID].model; // URL โมเดล
      iframeRef.current.contentWindow?.postMessage({ modelURL: url }, "*");
    }
  };

  const [besttimer, setBesttimer] = useState(0);
  const [set, setSet] = useState(0);
  const timerRef = useRef(timer); // Initialize with the current timer value

  function ReDate() {
    const time = new Date();
    const day = time.getDate();
    const month = time.getMonth();
    const year = time.getFullYear();
    const result = `${day}/${month}/${year}`;
    return result;
  }

  useEffect(() => {
    const result = ReDate();
    return updateData(useNumber, useID, besttimer, set, result);
  }, [set]);

  useEffect(() => {
    const result = ReDate();
    updateData(useNumber, useID, besttimer, set, result);
    // Update besttimer if current timer is greater
    if (timer > besttimer) {
      setBesttimer(timer);
    }

    // Check if timer has crossed a new multiple of 10
    if (Math.floor(timer / 10) > Math.floor(timerRef.current / 10)) {
      setSet((prevSet) => prevSet + 1);
    }

    // Update the timerRef with the current timer value
    timerRef.current = timer;
  }, [timer]);

  return (
    <>
      {isClient && (
        <>
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
                      <Button
                        onClick={handleClose}
                        variant="contained"
                        color="success"
                        className="text-black font-semibold text-[30px]"
                      >
                        รับทราบ
                      </Button>
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>
          )}

          <div className="flex flex-col w-full text-center relative py-[100px] pb-[500px] text-[#fff] px-[150px]">
            <div className="flex font-bold underline items-center justify-center text-[30px] my-[25px] text-[#fff]">
              <span className="spin text-yellow-400 mx-[15px] text-[45px]">
                <FaRegStar />
              </span>
              {zDataImg[useNumber].data_real[useID].name}
              {/* {zDataImg[useNumber].data_real[useID].model} */}
              <span className="spin text-yellow-400 mx-[15px] text-[45px]">
                <FaRegStar />
              </span>
            </div>

            <div className="flex flex-row justify-center">
              <div className="flex flex-col items-start rounded-xl shadow-lg">
                <div className="h-full flex items-start pt-[70px] flex-row justify-center bg-[#1F2125]">
                  <div className="flex flex-col">
                    {zDataImg[useNumber].data_real[useID].videoML && (
                      <>
                        <div
                          onClick={() => setShowV(!showV)}
                          className="bg-[#4A9DFF] px-[20px] py-[10px] rounded-xl mb-[15px] font-semibold cursor-pointer hover:bg-[#285a92] hover:text-[#fff] duration-300 text-[#000] text-[30px]"
                        >
                          {showV ? "ดูรูปภาพ" : "ดูวิดีโอ"}
                        </div>
                        {showV && (
                          <div className="flex items-center justify-center w-full pb-[150px]">
                            <video
                              className="w-[700px] h-[700px]"
                              autoPlay
                              loop
                              muted
                            >
                              <source
                                src={
                                  zDataImg[useNumber].data_real[useID].videoML
                                }
                                type="video/mp4"
                              />
                            </video>
                          </div>
                        )}
                      </>
                    )}
                    {!showV && (
                      <>
                        <div className="flex items-center justify-center">
                          <Image
                            src={zDataImg[useNumber].data_real[useID].img[uui]}
                            alt="img"
                            className="w-[700px] h-[700px] duration-[0.5s] object-cover"
                          />
                        </div>
                        <div className="flex flex-row mt-[10px] gap-[10px]">
                          {zDataImg[useNumber].data_real[useID].img.map(
                            (item: any, index: number) => (
                              <div key={index} className="rounded-xl">
                                <Image
                                  src={item}
                                  alt="img"
                                  className="w-[150px] cursor-pointer rounded-xl"
                                  onClick={() => setUui(index)}
                                />
                              </div>
                            )
                          )}
                        </div>
                      </>
                    )}
                  </div>
                  <div className="flex flex-col gap-[15px] w-[50%] px-[25px] text-left">
                    <div className="font-bold text-[25px]">คำอธิบายท่า:</div>
                    <div className="text-[35px]">
                      {zDataImg[useNumber].data_real[useID].des}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center w-full">
                <div className="bg-[#1F2125] flex items-center justify-center relative">
                  <iframe
                    ref={iframeRef}
                    src="/testtext.html"
                    className="w-[700px] h-[700px]"
                    title="Iframe"
                  ></iframe>
                </div>
                <div className="text-[35px] text-[#fff] w-full">
                  <Button
                    onClick={sendModelURLToIframe}
                    variant="contained"
                    color="primary"
                    className="mt-4 text-[35px] rounded-xl px-[25px] py-[10px]"
                  >
                    <span className="text-[35px]">เริ่มทดสอบ</span>
                  </Button>
                  <div>
                    {predictions.map((prediction, index) => (
                      <div
                        key={index}
                        className={`${index === 0 ? "" : "hidden"}`}
                      >
                        <div
                          className={`${
                            predictions[0].probability * 100 > 70
                              ? "text-green-500"
                              : ""
                          }`}
                        >
                          ความถูกต้อง : {predictions[0].probability * 100}%
                        </div>
                        <div>เริ่มทำไปแล้ว : {timer} วินาที</div>
                        <div>ทำเวลาได้สูงสุด : {besttimer} วินาที</div>
                        <div>เซ็ต : {set} รอบ</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {zDataImg[useNumber].data_real.length > useID + 1 && (
                <Link
                  href="/test-pose-link"
                  onClick={() => selectID(useID + 1)}
                  className="bg-[#91c8ff] px-[20px] py-[10px] rounded-xl text-[22px] absolute right-[20px] top-[100px] hover:bg-[#e1a6ff] duration-[0.2s]"
                >
                  ถัดไป
                </Link>
              )}
              {useID > 0 && (
                <Link
                  href="/test-pose-link"
                  onClick={() => selectID(useID - 1)}
                  className="bg-[#91c8ff] px-[20px] py-[10px] rounded-xl text-[22px] absolute left-[20px] top-[100px] hover:bg-[#e1a6ff] duration-[0.2s]"
                >
                  ก่อนหน้า
                </Link>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PhysicalPose;
