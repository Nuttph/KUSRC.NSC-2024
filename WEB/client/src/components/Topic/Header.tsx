import { useCTent } from "@/store/contentStore";
import Link from "next/link";
import React from "react";

const Header = () => {
  // /test-pose
  const { TopicText } = useCTent();
  return (
    <>
      <div className="mt-[50px] pb-[50px] w-full h-[1000px]">
        <div className="font-bold text-[30px]">ท่าการทำกายภาพบำบัด</div>
        <div className="flex flex-row gap-[50px] mt-[50px] max-w-full h-[600px] cs-card overflow-x-auto">
          {TopicText.map((item, index) => (
            <div key={index}>
              <div
                style={{ backgroundColor: item.color }}
                className={`w-[400px] h-[500px] flex flex-col items-center p-[20px] rounded-[15px] shadow-xl`}
              >
                <div className="bg-white w-full h-[200px] rounded-[5px]"></div>
                <div className="text-[25px]">{item.head}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
