import React from "react";
import SideBar from "./SideBar";
import Description from "./Description";

const Body = () => {
  return (
    <>
      <div className="flex flex-row justify-between gap-[30px]">
        <SideBar />
        <Description />
      </div>
    </>
  );
};

export default Body;
