"use client";
import React, { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";

const Bmri = () => {
  const [focus, setFocus] = useState(0);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [h, setH] = useState("");
  const [w, setW] = useState("");
  const [bmi, setBmi] = useState(0);
  const [bmiCategory, setBmiCategory] = useState("");
  const [bmr, setBmr] = useState(0);
  const [animatedBmr, setAnimatedBmr] = useState(0);

  const handleMan = () => {
    setGender(gender === "man" ? "" : "man");
  };

  const handleWoman = () => {
    setGender(gender === "woman" ? "" : "woman");
  };

  const handlesubmit = (e: any) => {
    e.preventDefault();
    if (gender && age && h && w !== "") {
      if (focus === 0) {
        handleCheckBMI();
      } else if (focus === 1) {
        handleCheckBMR();
      }
    }
  };

  const handleCheckBMI = () => {
    const hh = Number(h) / 100;
    const calculatedBmi = Number(w) / (hh * hh);
    setBmi(calculatedBmi);
    determineBmiCategory(calculatedBmi);
  };

  const determineBmiCategory = (bmi: number) => {
    if (gender && age !== "") {
      const ageNum = Number(age);

      if (ageNum >= 20) {
        // Criteria for adults
        if (bmi < 18.5) setBmiCategory("น้ำหนักน้อยกว่าเกณฑ์");
        else if (bmi < 24.9) setBmiCategory("น้ำหนักปกติ");
        else if (bmi < 29.9) setBmiCategory("น้ำหนักเกิน");
        else if (bmi < 34.9) setBmiCategory("โรคอ้วนระดับ 1");
        else if (bmi < 39.9) setBmiCategory("โรคอ้วนระดับ 2");
        else setBmiCategory("โรคอ้วนระดับ 3");
      } else {
        // Criteria for children and adolescents (approximate values)
        if (bmi < 5) setBmiCategory("น้ำหนักน้อยกว่าเกณฑ์");
        else if (bmi < 85) setBmiCategory("น้ำหนักปกติ");
        else if (bmi < 95) setBmiCategory("น้ำหนักเกิน");
        else setBmiCategory("โรคอ้วน");
      }
    }
  };

  const handleCheckBMR = () => {
    const weight = Number(w);
    const height = Number(h);
    const ageNum = Number(age);
    let calculatedBmr = 0;

    if (gender === "man") {
      calculatedBmr =
        88.362 + 13.397 * weight + 4.799 * height - 5.677 * ageNum;
    } else if (gender === "woman") {
      calculatedBmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * ageNum;
    }

    setBmr(calculatedBmr);
  };

  useEffect(() => {
    let start: number | null = null;
    const duration = 500; // ความเร็วในการแอนิเมชัน (มิลลิวินาที)
    const initialBmr = animatedBmr;
    const targetBmr = bmr;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = timestamp - start;
      const increment = (targetBmr - initialBmr) * (progress / duration);
      setAnimatedBmr(initialBmr + increment);

      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setAnimatedBmr(targetBmr); // ตั้งค่าให้ตรงกับ BMR ที่คำนวณ
      }
    };

    requestAnimationFrame(step);
  }, [bmr]);

  return (
    <>
      <div className="text-[#fff] flex items-center justify-center flex-col pb-[50px]">
        <div className="flex items-center flex-row justify-center text-[60px] relative">
          <div
            className={`bg-[#2C2C2C] h-[100px] duration-300 transition-all ${
              focus == 0
                ? "w-[48%] translate-x-[-55%]"
                : "w-[52%] translate-x-[50%]"
            } absolute`}
          ></div>
          <div
            className={`border-r-[7px] border-[#4A9DFF] pr-[25px] z-10 ${
              focus == 0 && "text-[#FFE436]"
            } cursor-pointer hover:text-[#4A9DFF] duration-300`}
            onClick={() => {
              setFocus(0);
            }}
          >
            BMI
          </div>
          <div
            className={`pl-[18px] z-10 ${
              focus == 1 && "text-[#FFE436]"
            } cursor-pointer hover:text-[#4A9DFF] duration-300`}
            onClick={() => {
              setFocus(1);
            }}
          >
            BMR
          </div>
        </div>
        <div>
          {focus == 0 ? (
            <>
              <div className="flex flex-col items-center justify-center">
                <div className="text-[35px] w-[1500px] text-center">
                  Body Mass Index(BMI) คือ ดัชนีมวลกาย
                  ซึ่งเป็นการวัดความเหมาะสมของน้ำหนักต่อส่วนสูง
                  เพื่อให้ประเมินสุขภาพได้ง่ายขึ้น
                </div>
                <div className="w-full pt-[50px]">
                  <form action="">
                    <div className="flex flex-col items-center justify-center gap-[20px]">
                      <div className="text-[25px]">เพศ</div>
                      <div className="flex items-center justify-center flex-row gap-[20px] w-full text-[40px]">
                        <Slide
                          className={`bg-[#4AAEFF] w-full text-center rounded-[14px] cursor-pointer hover:opacity-100 duration-300 ${
                            gender == "man" ? "opacity-100" : "opacity-50"
                          }`}
                        >
                          <button
                            type="button"
                            onClick={handleMan}
                            className="w-full h-full py-[40px]"
                          >
                            ชาย
                          </button>
                        </Slide>
                        <Slide
                          direction="right"
                          className={`bg-[#FF26F1] w-full text-center rounded-[14px] cursor-pointer hover:opacity-100 duration-300 ${
                            gender == "woman" ? "opacity-100" : "opacity-50"
                          }`}
                        >
                          <button
                            type="button"
                            onClick={handleWoman}
                            className="w-full h-full py-[40px]"
                          >
                            หญิง
                          </button>
                        </Slide>
                      </div>

                      <div className="flex flex-col items-center justify-center gap-[20px]">
                        <div className="text-[25px]">อายุ</div>
                        <Slide>
                          <div className="relative flex flex-row items-center bg-[#1F2125] border-[1px] border-[#6D6D6D] rounded-[15px] w-[750px] text-[35px] px-[55px] py-[10px]">
                            <input
                              className="outline-none text-center bg-[#1F2125] w-full"
                              type="text"
                              value={age}
                              onChange={(e) => {
                                const value = e.target.value;
                                if (/^\d*$/.test(value)) {
                                  setAge(value);
                                }
                              }}
                            />
                            <div className="text-[20px] absolute right-[15px]">
                              ปี
                            </div>
                          </div>
                        </Slide>
                      </div>

                      <div className="flex items-center justify-center flex-row gap-[20px]">
                        <div className="flex flex-col">
                          <Slide>
                            <div>น้ำหนัก(กก.)</div>
                            <div className="relative flex flex-row items-center bg-[#1F2125] border-[1px] border-[#6D6D6D] rounded-[15px] w-[750px] text-[35px] px-[55px] py-[10px]">
                              <input
                                className="outline-none text-center bg-[#1F2125] w-full"
                                type="text"
                                value={w}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  if (/^\d*$/.test(value)) {
                                    setW(value);
                                  }
                                }}
                              />
                              <div className="text-[20px] absolute right-[15px]">
                                กิโลกรัม
                              </div>
                            </div>
                          </Slide>
                        </div>
                        <div className="flex flex-col">
                          <Slide>
                            <div>ส่วนสูง(ซม.)</div>
                            <div className="relative flex flex-row items-center bg-[#1F2125] border-[1px] border-[#6D6D6D] rounded-[15px] w-[750px] text-[35px] px-[55px] py-[10px]">
                              <input
                                className="outline-none text-center bg-[#1F2125] w-full"
                                type="text"
                                value={h}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  if (/^\d*$/.test(value)) {
                                    setH(value);
                                  }
                                }}
                              />
                              <div className="text-[20px] absolute right-[15px]">
                                เซนติเมตร
                              </div>
                            </div>
                          </Slide>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center pt-[20px] gap-[30px]">
                      <Slide>
                        <button
                          type="button"
                          className="bg-[#3A7D44] hover:scale-125 duration-300 transition-all w-[370px] h-[70px] text-[30px] rounded-[14px]"
                          onClick={handlesubmit}
                        >
                          ตกลง
                        </button>
                      </Slide>
                      <Slide direction="right">
                        <div className="flex flex-col items-center justify-center gap-[15px] text-[30px]">
                          <div className="">BMI: {bmi.toFixed(2)}</div>
                          <div className="bg-[#1F2125] border-[1px] border-[#6D6D6D] w-[680px] h-[300px] rounded-[18px] flex items-center justify-center text-[50px]">
                            ประเภท: {bmiCategory}
                          </div>
                        </div>
                      </Slide>
                    </div>
                  </form>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <div className="text-[35px] w-[1500px] text-center">
                Basal Metabolic Rate(BMR) คือ
                อัตราการเผาผลาญพลังงานของร่างกายในแต่ละวัน
              </div>
              <div className="w-full pt-[50px]">
                <form action="">
                  <div className="flex flex-col items-center justify-center gap-[20px]">
                    <div className="text-[25px]">เพศ</div>
                    <div className="flex items-center justify-center flex-row gap-[20px] w-full text-[40px]">
                      <Slide
                        className={`bg-[#4AAEFF] w-full text-center rounded-[14px] cursor-pointer hover:opacity-100 duration-300 ${
                          gender == "man" ? "opacity-100" : "opacity-50"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={handleMan}
                          className="w-full h-full py-[40px]"
                        >
                          ชาย
                        </button>
                      </Slide>
                      <Slide
                        direction="right"
                        className={`bg-[#FF26F1] w-full text-center rounded-[14px] cursor-pointer hover:opacity-100 duration-300 ${
                          gender == "woman" ? "opacity-100" : "opacity-50"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={handleWoman}
                          className="w-full h-full py-[40px]"
                        >
                          หญิง
                        </button>
                      </Slide>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-[20px]">
                      <div className="text-[25px]">อายุ</div>
                      <Slide>
                        <div className="relative flex flex-row items-center bg-[#1F2125] border-[1px] border-[#6D6D6D] rounded-[15px] w-[750px] text-[35px] px-[55px] py-[10px]">
                          <input
                            className="outline-none text-center bg-[#1F2125] w-full"
                            type="text"
                            value={age}
                            onChange={(e) => {
                              const value = e.target.value;
                              if (/^\d*$/.test(value)) {
                                setAge(value);
                              }
                            }}
                          />
                          <div className="text-[20px] absolute right-[15px]">
                            ปี
                          </div>
                        </div>
                      </Slide>
                    </div>

                    <div className="flex items-center justify-center flex-row gap-[20px]">
                      <div className="flex flex-col">
                        <Slide>
                          <div>น้ำหนัก(กก.)</div>
                          <div className="relative flex flex-row items-center bg-[#1F2125] border-[1px] border-[#6D6D6D] rounded-[15px] w-[750px] text-[35px] px-[55px] py-[10px]">
                            <input
                              className="outline-none text-center bg-[#1F2125] w-full"
                              type="text"
                              value={w}
                              onChange={(e) => {
                                const value = e.target.value;
                                if (/^\d*$/.test(value)) {
                                  setW(value);
                                }
                              }}
                            />
                            <div className="text-[20px] absolute right-[15px]">
                              กิโลกรัม
                            </div>
                          </div>
                        </Slide>
                      </div>
                      <div className="flex flex-col">
                        <Slide>
                          <div>ส่วนสูง(ซม.)</div>
                          <div className="relative flex flex-row items-center bg-[#1F2125] border-[1px] border-[#6D6D6D] rounded-[15px] w-[750px] text-[35px] px-[55px] py-[10px]">
                            <input
                              className="outline-none text-center bg-[#1F2125] w-full"
                              type="text"
                              value={h}
                              onChange={(e) => {
                                const value = e.target.value;
                                if (/^\d*$/.test(value)) {
                                  setH(value);
                                }
                              }}
                            />
                            <div className="text-[20px] absolute right-[15px]">
                              เซนติเมตร
                            </div>
                          </div>
                        </Slide>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center pt-[20px] gap-[30px]">
                    <Slide>
                      <button
                        type="button"
                        className="bg-[#3A7D44] hover:scale-125 duration-300 transition-all w-[370px] h-[70px] text-[30px] rounded-[14px]"
                        onClick={handlesubmit}
                      >
                        ตกลง
                      </button>
                    </Slide>
                    <Slide direction="right">
                      <div className="flex flex-col items-center justify-center gap-[15px] text-[30px]">
                        <div>จำนวนแคลอรี่ที่ควรจะได้รับในแต่ละวัน</div>
                        <div className="bg-[#1F2125] border-[1px] border-[#6D6D6D] w-[680px] h-[300px] rounded-[18px] flex items-center justify-center text-[50px]">
                          {animatedBmr.toFixed(2)}
                        </div>
                        <div>กิโลแคลอรี่/วัน</div>
                      </div>
                    </Slide>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Bmri;
