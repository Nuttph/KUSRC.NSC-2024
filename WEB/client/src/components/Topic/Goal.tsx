import React from "react";

//iamge
import star from "../../asset/svg/rating.svg";
import Image from "next/image";
const Goal = () => {
  return (
    <div className="bg-[#1E1E1E] text-[#fff] flex flex-col">
      <div className="w-full flex flex-row items-center justify-center pt-[50px]">
        <div className="bg-[#FCE340] w-full h-[5px] rounded-full"></div>
        <Image src={star} alt="star" />
        <div className="bg-[#FCE340] w-full h-[5px] rounded-full"></div>
      </div>

      {/* goals */}

      <div className="flex items-center justify-center flex-row text-[25px] gap-[20px] px-[50px]">
        <div className="bg-[#1F2125] border-2 border-[#6D6D6D] w-[70%] px-[25px] py-[35px] rounded-xl">
          กายภาพบำบัดมีประโยชน์หลายด้านที่สำคัญ เช่น
          ช่วยเพิ่มความแข็งแรงของกล้ามเนื้อและกระดูก
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="bg-[#1F2125] border-2 border-[#6D6D6D] w-[100%] px-[25px] py-[13px] rounded-full">
            เสริมคุณภาพชีวิตโดยรวมด้วยการเพิ่มพลังงานและความสมดุลในชีวิตประจำวัน
          </div>
          <div className="flex flex-row gap-[20px]">
            <div className="bg-[#1F2125] border-2 border-[#6D6D6D] w-[565px] px-[25px] py-[14px] rounded-full">
              ลดความเสี่ยงในการหกล้มและบาดเจ็บ
            </div>
            <div className="bg-[#1F2125] border-2 border-[#6D6D6D] w-[565px] px-[25px] py-[14px] rounded-full">
              สามารถทำกิจวัตรประจำวันได้ง่ายขึ้น
            </div>
          </div>
        </div>
        <div className="bg-[#1F2125] border-2 border-[#6D6D6D] w-[50%] px-[25px] py-[35px] rounded-xl">
          ช่วยฟื้นฟูหลังจากการผ่าตัดหรือโรคที่เกี่ยวกับเครียด
        </div>
      </div>
    </div>
  );
};

export default Goal;
