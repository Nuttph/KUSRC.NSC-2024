import React from "react";
import PreviewPic from "./PreviewPic";
import ContentBut from "./ContentBut";
import { dataMLinterProps } from "@/store/datapicture";
interface Props {
  value: dataMLinterProps;
  index: number;
}
const PhyPre = ({ value, index }: Props) => {
  return (
    <>
      <div
        id={`go${index}`}
        className="flex items-center justify-center gap-[200px] flex-row"
      >
        <div className="flex setCenter ">
          {/* preview picture */}
          <>
            <PreviewPic valueImg={value} indexs={index} />
          </>
        </div>
        <div className="flex setCenter w-[800px] text-black min-h-[550px] bg-[#333437] p-[50px] rounded-xl">
          {/*content and pose button */}
          <ContentBut valueC={value} index={index} />
        </div>
      </div>
    </>
  );
};

export default PhyPre;
