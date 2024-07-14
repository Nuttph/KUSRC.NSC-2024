"use client";
import Image from "next/image";

//svg
import human1 from "../../asset/svg/demo/human1.svg";
import human2 from "../../asset/svg/demo/human2.svg";

const Header = () => {
  return (
    <>
      <div className="w-full h-[1000px] flex justify-between px-[140px] relative">
        <div className="w-[1500px] h-[700px] bg-[#423390] absolute bottom-[-400px] right-[90px] -rotate-[25deg] z-[-1] rounded-full"></div>

        <div className="flex flex-col mt-[100px]">
          <h1 className="text-[#5743bc] font-bold text-[90px] drop-shadow-xl">
            <div className="typewriter text-left text-[90px]">
              <h1>กายภาพบำบัด</h1>
            </div>
          </h1>
          <div className="bg-[#7358FD] px-[20px] py-[10px] rounded-xl font-semibold text-white text-[30px] w-fit h-fit">
            PHYSICAL THERAPY
          </div>
          <div className="w-[590px] mt-[20px]">
            <p className="text-[25px]">
              <span className="text-[30px]">สำหรับผู้สูงอายุหรือคนชรา</span>,
              การฝึกซ้อมกายภาพบำบัดมีประโยชน์หลายด้านที่สำคัญ เช่น
              ช่วยเพิ่มความแข็งแรงของกล้ามเนื้อและกระดูก
              ทำให้สามารถทำกิจวัตรประจำวันได้ง่ายขึ้น
              ลดความเสี่ยงในการหกล้มและบาดเจ็บ
              ช่วยฟื้นฟูหลังจากการผ่าตัดหรือโรคที่เกี่ยวกับเครียด
              และเสริมคุณภาพชีวิตโดยรวมด้วยการเพิ่มพลังงานและความสมดุลในชีวิตประจำวัน
            </p>
          </div>
        </div>

        <div className="relative w-full mt-[250px] overflow-hidden">
          <div className="absolute right-[360px] w-[500px] h-[500px] z-[100] slide-in-right">
            <Image src={human1} alt="human1" fill />
          </div>
          <div className="absolute right-[60px] w-[500px] h-[500px] slide-in-right z-[99]">
            <Image src={human2} alt="human2" fill />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
