import React from "react";
import PreviewPic from "./PreviewPic";
import ContentBut from "./ContentBut";

const PhyPre = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-[20px] flex-row">
        <div className="flex setCenter">
          {/* preview picture */}
          <>
            <PreviewPic />
          </>
        </div>
        <div className="flex setCenter">
          {/*content and pose button */}
          <ContentBut />
        </div>
      </div>
    </>
  );
};

export default PhyPre;
