import { useCTent } from "@/store/contentStore";
import Link from "next/link";
import React from "react";

//image
import preposeImg from "../../asset/prepose/Lovepik_com-401265802-yoga-exercise.png";
import Image from "next/image";

const Header = () => {
  // /test-pose
  const { TopicText } = useCTent();
  return (
    <>
      <div className="mt-[50px] pb-[50px] w-full h-[1000px]">
        <div className="font-bold text-[30px]">ท่าการทำกายภาพบำบัด</div>
        <div className="flex flex-row gap-[50px] mt-[50px] max-w-full h-[600px] cs-card overflow-x-auto">
          {TopicText.map((item, index) => (
            <Link href="/content" key={index}>
              <div
                className={`w-[400px] h-[500px] flex flex-col items-center p-[20px] rounded-[15px] shadow-xl relative bg-[#98c1eb]`}
              >
                <div className="bg-white w-full h-[200px] rounded-[5px] flex items-center justify-center">
                  <Image
                    src={preposeImg}
                    alt="preposeImg"
                    className="w-[190px]"
                  />
                </div>
                <div className="">
                  <div className="text-[25px] mt-[5px] font-medium">
                    {item.head}
                  </div>
                  <p className="line-clamp-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat aliquam, officiis aspernatur eaque provident nemo
                    placeat dolores odit illo beatae asperiores distinctio dicta
                    architecto commodi, nihil quis id! Repellendus aperiam,
                    alias suscipit explicabo amet veritatis fuga sequi quasi
                    totam molestias vel doloremque, iste officiis maiores in qui
                    pariatur quae earum.
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
