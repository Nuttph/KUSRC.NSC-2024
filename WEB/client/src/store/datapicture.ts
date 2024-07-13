import { StaticImageData } from "next/image";
import { create } from "zustand";
import mockImg from "../asset/prepose/Lovepik_com-401265802-yoga-exercise.png";
import mockImg2 from "../asset/prepose/pose1.png";
import { persist, createJSONStorage } from "zustand/middleware";

//image a1
import a1_1 from "../asset/pose/a1/a1_1.jpg";
import a1_2 from "../asset/pose/a1/a1_2.png";
import a1_3 from "../asset/pose/a1/a1_3.png";
import a1_4 from "../asset/pose/a1/a1_4.png";

const dataimg = [
  {
    content: "เพิ่มการทรงตัว",
    description:
      "ช่วยเรื่องการทรงตัวของร่างกาย เป็นการทำกายภาพบำบัดเพื่อเสริมการทรงตัวจะช่วยให้ร่างกายมีการทรงตัวได้ดีขึ้น กล้ามเนื้อและข้อต่อ แข็งแรงขึ้น อีกทั้งยังป้องกันการหกล้มของผู้สูงอายุได้",
    data_real: [
      {
        id: 0,
        name: "ท่ายืนกางขา",
        des: `ยืนตัวตรงหลังเก้าอี้ ศีรษะตรง ไม่แอ่นหลัง มือทั้งสองข้างจับพนักพิงเก้าอี้ กางเท้าขวาไปด้านข้างช้าๆ ค้างไว้ 5 วินาที แล้วกลับมายืนเท้าชิด จากนั้นทำสลับซ้าย-ขวา 10 รอบ (ซ้าย-ขวา นับเป็น 2 รอบ)`,
        img: [a1_1, a1_2, a1_3, a1_4],
        linkML: "a1.html",
        imgML: a1_1,
      },
      {
        id: 1,
        name: "ท่ายืนขาเดียวมือประสานไว้บนหัว",
        des: "text_2",
        img: [a1_1, a1_2, a1_3, a1_4, mockImg],
        linkML: "a2.html",
        imgML: a1_1,
      },
      {
        id: 2,
        name: "ท่ายืนงอเข่ากวาดเท้าไปข้างหลัง",
        des: "ยืนตัวตรงหลังเก้าอี้ ศีรษะตรง ไม่แอ่นหลัง มือทั้งสองข้างจับพนักพิงเก้าอี้ งอเข่าขวาช้าๆ ปลายเท้าชี้ลงพื้น ค้างไว้ 3 วินาที แล้วเอาเท้าขวาลงแนบพื้น จากนั้นทำทีละข้าง ข้างละ 10 ครั้ง",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a3.html",
        imgML: a1_1,
      },
      {
        id: 3,
        name: "ย่อเข่า บิดลำตัว",
        des: "text_4",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a4.html",
        imgML: a1_1,
      },
      {
        id: 4,
        name: "ย่ำเท้า ยกเข่าสูง",
        des: "text_5",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a5.html",
        imgML: a1_1,
      },
    ],
  },
  {
    content: "เพิ่มความยืดหยุ่นของกล้ามเนื้อและข้อต่อ",
    description:
      "การเพิ่มความยืดหยุ่นช่วยให้กล้ามเนื้อและข้อต่อมีความคล่องตัวและยืดหยุ่นมากขึ้น ทำให้ลดโอกาสเกิดการบาดเจ็บจากการเคลื่อนไหวในชีวิตประจำวัน เคลื่อนไหวได้คล่องแคล่วขึ้น ทำกิจกรรมประจำวันได้สะดวกขึ้น",
    data_real: [
      {
        id: 0,
        name: "ท่ายืดกล้ามเนื้อขาด้านหลัง",
        des: "ท่ายืดกล้ามเนื้อขาด้านหลัง ท่ายืดกล้ามเนื้อขาด้านหลัง",
        img: [a1_1, a1_2, a1_3, a1_4, mockImg],
        linkML: "b1.html",
        imgML: a1_1,
      },
      {
        id: 1,
        name: "เหยียดน่อง",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "b2.html",
        imgML: a1_1,
      },
      {
        id: 2,
        name: "ย่อเข่า",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "b3.html",
        imgML: a1_1,
      },
    ],
  },
  {
    content: "เพิ่มกำลังกล้ามเนื้อ",
    description:
      "ช่วยเสริมสร้างความแข็งแรงของกล้ามเนื้อ  ลดความเสี่ยงต่อการเกิดโรคกระดูกพรุน",
    data_real: [
      {
        id: 0,
        name: "ยกแขนขึ้น-เหยียดแขนลง",
        des: "",
        img: [a1_1, a1_2, a1_3, a1_4, mockImg],
        linkML: "c1.html",
        imgML: a1_1,
      },
      {
        id: 1,
        name: "กางแขน-หุบแขน",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "c2.html",
        imgML: a1_1,
      },
      {
        id: 2,
        name: "งอศอก-เหยียดศอก",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "c3.html",
        imgML: a1_1,
      },
    ],
  },
  {
    content: "บริหารกล้ามเนื้อ",
    description:
      "ช่วยเพิ่มการไหลเวียนของเลือด ทำให้สารอาหารและออกซิเจนไปยังบริเวณข้อเข่า ซึ่งสามารถลดอาการปวดและอักเสบได้ ทำให้ข้อเข่ามีความมั่นคงและรับน้ำหนักได้ดีขึ้น",
    data_real: [
      {
        id: 0,
        name: "ท่าบริหารกล้ามเนื้อเหยียดเข่า",
        des: "",
        img: [a1_1, a1_2, a1_3, a1_4],
        linkML: "d1.html",
        imgML: a1_1,
      },
      {
        id: 1,
        name: "เหวี่ยงแขน บิดลำตัว",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "d2.html",
        imgML: a1_1,
      },
      {
        id: 2,
        name: "แกว่งแขนสูงกำมือ แบมือ",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "d3.html",
        imgML: a1_1,
      },
      {
        id: 3,
        name: "กำหมัดชูแขน",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "d4.html",
        imgML: a1_1,
      },
      {
        id: 4,
        name: "หุบศอก",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "d5.html",
        imgML: a1_1,
      },
    ],
  },
];

export interface dataimgMockProps {
  id: number;
  name: string;
  des: string;
  img: StaticImageData[];
  linkML: string;
  imgML: StaticImageData;
}
export interface dataimgProps {
  content: string;
  description: string;
  data_real: dataimgMockProps[];
}

export const dataML = {
  content: "เพิ่มการทรงตัว",
  description:
    "ช่วยเรื่องการทรงตัวของร่างกาย เป็นการทำกายภาพบำบัดเพื่อเสริมการทรงตัวจะช่วยให้ร่างกายมีการทรงตัวได้ดีขึ้น กล้ามเนื้อและข้อต่อ แข็งแรงขึ้น อีกทั้งยังป้องกันการหกล้มของผู้สูงอายุได้",
  data_real: [
    {
      id: 0,
      name: "ท่ายืนกางขา",
      des: "ยืนตัวตรงหลังเก้าอี้ ศีรษะตรง ไม่แอ่นหลัง มือทั้งสองข้างจับพนักพิงเก้าอี้ งอเข่าขวาช้าๆ ปลายเท้าชี้ลงพื้น ค้างไว้ 3 วินาที แล้วเอาเท้าขวาลงแนบพื้น จากนั้นทำทีละข้าง ข้างละ 10 ครั้ง",
      img: [a1_1, a1_2, a1_3, a1_4, mockImg],
      linkML: "a1.html",
      imgML: a1_1,
    },
    {
      id: 1,
      name: "ท่ายืนขาเดียวมือประสานไว้บนหัว",
      des: "text_2",
      img: [a1_1, a1_2, a1_3, a1_4, mockImg],
      linkML: "a2.html",
      imgML: a1_1,
    },
    {
      id: 2,
      name: "ท่ายืนงอเข่ากวาดเท้าไปข้างหลัง",
      des: "text_3",
      img: [a1_1, a1_2, a1_3, a1_4, mockImg],
      linkML: "a3.html",
      imgML: a1_1,
    },
    {
      id: 3,
      name: "ย่อเข่า บิดลำตัว",
      des: "text_4",
      img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
      linkML: "a4.html",
      imgML: a1_1,
    },
    {
      id: 4,
      name: "ย่ำเท้า ยกเข่าสูง",
      des: "text_5",
      img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
      linkML: "a5.html",
      imgML: a1_1,
    },
  ],
};

export interface dataMLinterProps {
  id: number;
  name: string;
  des: string;
  img: StaticImageData[];
  linkML: string;
  imgML: StaticImageData;
}
export interface dataMLProps {
  content: string;
  description: string;
  data_real: dataMLinterProps[];
}

const usingNumber = 0;
interface usingNumberProps {
  usingNumber: string;
}

interface zusProps {
  zDataImg: dataimgProps[];
  zText: string;
  zDataML: dataMLProps;
  zSelectDataML: (value: dataMLProps) => void;

  useNumber: number;
  selectNumber: (value: number) => void;

  useID: number;
  selectID: (value: number) => void;
}

export const usePicContent = create<zusProps>()(
  persist(
    (set, get) => ({
      zDataImg: dataimg,
      zText: "test",
      zDataML: dataML,
      useNumber: usingNumber,
      useID: 0,
      zSelectDataML: (value) => set({ zDataML: value }),
      selectNumber: (value) => set({ useNumber: value }),
      selectID: (value) => set({ useID: value }),
    }),
    {
      name: "pic-content-storage", // name of the item in storage
      getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
    }
  )
);
