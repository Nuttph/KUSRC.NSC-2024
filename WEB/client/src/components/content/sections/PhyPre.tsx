import React from "react";
import PreviewPic from "./PreviewPic";
import ContentBut from "./ContentBut";
import { dataimgProps } from "@/store/datapicture";

const PhyPre = ({ item }: { item: dataimgProps }) => {
  return (
    <>
      <div className="flex items-center justify-center gap-[200px] flex-row">
        <div className="flex setCenter">
          {/* preview picture */}
          <>
            <PreviewPic imgO={item} />
          </>
        </div>
        <div className="flex setCenter w-[800px] bg-[#123] text-white h-[550px]">
          {/*content and pose button */}
          <ContentBut item={item} />
        </div>
      </div>
    </>
  );
};

export default PhyPre;
