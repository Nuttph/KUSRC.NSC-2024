"use client";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
const BMI = () => {
  const [gender, setGender] = useState("");

  const [age, setAge] = useState("");
  const [h, setH] = useState("");
  const [w, setW] = useState("");
  function handleSubmit(e: any) {
    var ww = Number(w);
    var hh = Number(h);
    e.preventDefault();
    BMI(ww, hh);
  }

  function BMI(w: number, h: number) {}
  return (
    <>
      <div className="w-full py-[45px]">
        <div className="">BMI</div>
        <div className="flex flex-row items-center justify-between w-full gap-[50px]">
          <div>
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-row items-center">
                <div
                  onClick={() => {
                    setGender("male");
                  }}
                  className={`w-[20px] h-[20px] border-[2px] rounded-xl  shadow-xl text-[10px] flex items-center justify-center ${
                    gender == "male"
                      ? "border-green-500 text-green-500"
                      : "border-gray-500 text-white"
                  }`}
                >
                  <FaCheck />
                </div>
                <div className="text-[25px]">ผู้ชาย</div>
              </div>
            </div>
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              className="flex flex-col justify-center gap-[25px]"
            >
              <div>
                <div>ระบุอายุ : </div>
                <input
                  type="number"
                  className="outline-none border-[2px] rounded-xl px-[20px] py-[10px]"
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
              </div>

              <div>
                <div>ส่วนสูง :</div>
                <input
                  type="number"
                  className="outline-none border-[2px] rounded-xl px-[20px] py-[10px]"
                  value={h}
                  onChange={(e) => {
                    setH(e.target.value);
                  }}
                />
              </div>
              <div>
                <div>น้ำหนัก :</div>
                <input
                  type="number"
                  className="outline-none border-[2px] rounded-xl px-[20px] py-[10px]"
                  value={w}
                  onChange={(e) => {
                    setW(e.target.value);
                  }}
                />
              </div>
            </form>
          </div>
          <div className="w-full h-[250px] bg-green-600"></div>
        </div>
      </div>
    </>
  );
};

export default BMI;
