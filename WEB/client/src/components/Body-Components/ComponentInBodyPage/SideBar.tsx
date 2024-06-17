import useCTent from "@/store/contentStore";
import React from "react";

const SideBar = () => {
  const { content, selectContent } = useCTent();
  return (
    <>
      <div className="w-[300px] bg-[#FFFAD0] text-[20px] rounded-xl h-fit">
        <div className="px-[40px] border-b-[2px] py-[10px] border-black cursor-pointer hover:bg-[#fff59f] rounded-t-xl">
          <div className="">Test</div>
        </div>
        {content.map((item, index) => (
          <div
            onClick={() => {
              selectContent(item.name);
            }}
            className="px-[20px] py-[10px] cursor-pointer hover:bg-[#fff59f] rounded-t-xl"
            key={index}
          >
            <div className="">{item.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SideBar;
