import { useCTent } from "@/store/contentStore";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { TopicText } = useCTent();
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-[50px]">
        <div className="font-bold text-[30px]">ท่าการทำกายภาพบำบัด</div>
        <div className="flex flex-col gap-[100px] mt-[50px]">
          {TopicText.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-[50px] text-[30px] items-center justify-center"
            >
              <div>{item.head}</div>
              <Link href="/test-pose" className="w-[546px] h-[350px] bg-gray-700"></Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
