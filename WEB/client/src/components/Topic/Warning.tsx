import React from "react";

const Warning = () => {
  const warningData = [
    "เริ่มออกกำลังกายระดับเบาแล้วจึงค่อยๆ เพิ่มระดับความหนักอย่างช้าๆ",
    `ควรมีระยะอุ่นเครื่องเพื่อเป็นการเตรียมความพร้อมก่อนออกกำลังกาย และมีระยะผ่อนคลายเพื่อให้ระบบไหลเวียนเลือดปรับตัว
       คืนสู่สภาวะปกติหลังการออกกำลังกาย`,
    `สวมใส่เสื้อผ้าที่พอดีกับร่างกายและรองเท้าที่เหมาะสมสำหรับการออกกำลังกาย`,
    `หลีกเลี่ยงการกลั้นหายใจขณะออกกำลังกายเนื่องจากจะทำให้ความดันโลหิตเพิ่มสูงได`,
    `หลีกเลี่ยงการออกกำลังกายขณะเป็นไข้หรือมีอาการเจ็บป่วยฉับพลัน`,
    `หลีกเลี่ยงการออกกำลังกายหลังรับประทานอาหารมื้อหลักไม่น้อยกว่า 2 ชั่วโมง`,
    `หากผู้สูงอายุเป็นโรคความดันโลหิตสูง ควรรับประทานยาอย่างต่อเนื่องและวัดความดันโลหิตก่อนการออกกำลังกาย`,
  ];
  return (
    <>
      <div className="w-full bg-gray-200 px-[140px] py-[100px]">
        <div className="bg-white w-full h-fit rounded-xl p-[100px]">
          <div className="flex flex-col items-center justify-center">
            <div className="text-[25px] font-semibold text-red-600">
              ข้อควรปฏิบัติในการทำกายภาพบำบัด
            </div>
            <div className="w-full text-left mt-[50px]">
              <ul className="flex flex-col gap-[20px] text-[20px] font-medium list-decimal">
                {warningData.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Warning;
