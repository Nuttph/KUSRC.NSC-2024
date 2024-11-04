"use client";
import React, { useState } from "react";
import { Slide, Reveal } from "react-awesome-reveal";
const GoalOptions = () => {
  const [focus, setFocus] = useState(0);
  return (
    <div className="w-full bg-[#17191C] text-[#000] h-fit py-[300px]">
      <div className="flex flex-row justify-between pr-[50px]">
        <div className="flex flex-col text-[60px] ml-[50px] relative mt-[35px]">
          <div
            className={`absolute bg-[#1F2125] w-[70vw] h-[100px] left-[-50px] z-[0] transition-all duration-300 ${
              focus == 0 ? "top-0" : "top-[100px]"
            }`}
          ></div>
          <div
            className={`${
              focus == 0 ? "text-[#FFE436]" : ""
            } z-10 cursor-pointer duration-300`}
            onClick={() => {
              setFocus(0);
            }}
          >
            วัตถุประสงค์
          </div>
        </div>
        <Slide
          direction="right"
          className="w-[70%] h-[700px] bg-[#e7e7e7] rounded-[45px] border-[3px] border-[#6D6D6D] z-10 p-[50px]"
        >
          <div className="bg-[#fff] w-full h-full rounded-[22.5px] p-[20px] flex flex-col text-[25px] overflow-y-auto">
            {focus == 0 ? (
              <>
                <div>
                  เว็บไซต์นี้ถูกพัฒนาขึ้นเพื่อให้บริการแก่ผู้ที่สนใจ{" "}
                  <span className="text-[#FFBF49]">ในการบริหารร่างกาย</span>
                  และต้องการฝึกท่าทางการออกกำลังกาย
                  <span className="text-[#81FF5A]">อย่างถูกต้อง</span>
                  และ<span className="text-[#81FF5A]">มีประสิทธิภาพ</span>
                  โดยเว็บไซต์ของเรามีวัตถุประสงค์หลักในการช่วยให้ผู้ใช้งานสามารถทำการฝึก
                  ซ้อมท่าทางที่ถูกต้องได้อย่างง่ายดายและสะดวกสบาย
                  ซึ่งจะประกอบไปด้วยคุณสมบัติดังนี้
                </div>
                <div>
                  <span className="text-[#FFBF49]">
                    การเลือกท่าทางที่ต้องการ:
                  </span>
                  ผู้ใช้งานจะสามารถเลือกท่าทางการออกกำลังกายจากรายการที่เว็บไซต์เตรียมไว้
                  ซึ่งจะมีรายละเอียดและคำแนะนำเกี่ยวกับแต่ละท่าทางเพื่อให้ผู้ใช้งานสามารถเข้าใจและเลือกท่าที่เหมาะสมกับ
                  ความต้องการของตนเองได้
                </div>
                <div>
                  <span className="text-[#FFBF49]">
                    การสแกนและตรวจจับท่าทาง:
                  </span>
                  เว็บไซต์จะมีระบบที่ใช้เทคโนโลยีการตรวจจับท่าทาง (pose
                  detection)
                  เพื่อสแกนท่าทางที่ผู้ใช้งานทำและเปรียบเทียบกับท่าทางที่ถูกต้องซึ่งระบบจะให้ข้อเสนอแนะแก่ผู้ใช้งานเพื่อปรับปรุงท่าทางให้ถูกต้องและมีประสิทธิภาพ
                </div>
                <div>
                  <span className="text-[#FFBF49]">
                    คำแนะนำและการปรับปรุงท่าทาง:
                  </span>{" "}
                  เมื่อระบบตรวจจับท่าทางได้แล้ว จะมีการให้ข้อเสนอแนะและคำแนะนำใน
                  การปรับปรุงท่าทางของผู้ใช้งาน
                  เพื่อให้การออกกำลังกายเป็นไปอย่างถูกต้องและลดความเสี่ยงจากการบาดเจ็บ
                </div>
                <div>
                  <span className="text-[#FFBF49]">การติดตามความก้าวหน้า</span>:
                  ผู้ใช้งานสามารถติดตามความก้าวหน้าในการฝึกซ้อมได้
                  โดยมีการบันทึกผลลัพธ์ และข้อเสนอแนะจากระบบ
                  เพื่อให้ผู้ใช้งานสามารถเห็นพัฒนาการของตนเองและปรับปรุงการฝึกซ้อม
                  อย่างต่อเนื่อง
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default GoalOptions;
