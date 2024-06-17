import React from "react";

const Header = () => {
  return (
    <div className="bg-[#fffad0] h-[450px] relative shadow-xl">
      <div className="text-center text-[70px] font-bold">high 450px</div>
      <div className="flex flex-col font-bold text-amber-700">
        <div className="text-[70px] absolute bottom-[-50px] left-[40px]">
          PHYSICAL THERAPY
        </div>
        <div className="text-[45px] absolute bottom-[-85px] left-[40px]">
          กายภาพบำบัด
        </div>
      </div>
    </div>
  );
};

export default Header;
