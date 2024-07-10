import React from "react";

const Warning = () => {
  return (
    <>
      <div className="w-full bg-gray-200 px-[140px] py-[100px]">
        <div className="bg-white w-full h-[1000px] rounded-xl p-[100px]">
          <div className="flex flex-col items-center justify-center">
            <div className="text-[25px] font-semibold">
              ข้อควรระวัง / ข้อควรปฏิบัติ
            </div>
            <div className="w-full text-left mt-[50px]">
              <ul className="flex flex-col gap-[20px] text-[20px] font-medium">
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officia, asperiores!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officia, asperiores!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officia, asperiores!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officia, asperiores!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officia, asperiores!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Warning;
