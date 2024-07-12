import { StaticImageData } from "next/image";
import { create } from "zustand";
import mockImg from "../asset/prepose/Lovepik_com-401265802-yoga-exercise.png";
import mockImg2 from "../asset/prepose/pose1.png";
import { mountStoreDevtool } from "simple-zustand-devtools";

const dataimg = [
  {
    content: "เพิ่มการทรงตัว",
    description:
      "ช่วยเรื่องการทรงตัวของร่างกาย เป็นการทำกายภาพบำบัดเพื่อเสริมการทรงตัวจะช่วยให้ร่างกายมีการทรงตัวได้ดีขึ้น กล้ามเนื้อและข้อต่อ แข็งแรงขึ้น อีกทั้งยังป้องกันการหกล้มของผู้สูงอายุได้",
    data_real: [
      {
        id: 0,
        name: "ท่ายืนกางขา",
        des: "text_1",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a1.html",
        imgML: "",
      },
      {
        id: 1,
        name: "ท่ายืนขาเดียวมือประสานไว้บนหัว",
        des: "text_2",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a2.html",
        imgML: "",
      },
      {
        id: 2,
        name: "ท่ายืนงอเข่ากวาดเท้าไปข้างหลัง",
        des: "text_3",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a1.html",
        imgML: "",
      },
      {
        id: 3,
        name: "ย่อเข่า บิดลำตัว",
        des: "text_4",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a2.html",
        imgML: "",
      },
      {
        id: 4,
        name: "ย่ำเท้า ยกเข่าสูง",
        des: "text_5",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a2.html",
        imgML: "",
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
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a1.html",
        imgML: "",
      },
      {
        id: 1,
        name: "เหยียดน่อง",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a2.html",
        imgML: "",
      },
      {
        id: 2,
        name: "ย่อเข่า",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a1.html",
        imgML: "",
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
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a1.html",
        imgML: "",
      },
      {
        id: 1,
        name: "กางแขน-หุบแขน",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a2.html",
        imgML: "",
      },
      {
        id: 2,
        name: "งอศอก-เหยียดศอก",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a1.html",
        imgML: "",
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
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a1.html",
        imgML: "",
      },
      {
        id: 1,
        name: "เหวี่ยงแขน บิดลำตัว",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a2.html",
        imgML: "",
      },
      {
        id: 2,
        name: "แกว่งแขนสูงกำมือ แบมือ",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a1.html",
        imgML: "",
      },
      {
        id: 3,
        name: "กำหมัดชูแขน",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a2.html",
        imgML: "",
      },
      {
        id: 4,
        name: "หุบศอก",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a2.html",
        imgML: "",
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
  imgML: string;
}
export interface dataimgProps {
  content: string;
  description: string;
  data_real: dataimgMockProps[];
}

const dataML = {
  content: "เพิ่มการทรงตัว",
  description:
    "ช่วยเรื่องการทรงตัวของร่างกาย เป็นการทำกายภาพบำบัดเพื่อเสริมการทรงตัวจะช่วยให้ร่างกายมีการทรงตัวได้ดีขึ้น กล้ามเนื้อและข้อต่อ แข็งแรงขึ้น อีกทั้งยังป้องกันการหกล้มของผู้สูงอายุได้",
  data_real: [
    {
      id: 0,
      name: "ท่ายืนกางขา",
      des: "text_1",
      img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
      linkML: "a1.html",
      imgML: "",
    },
    {
      id: 1,
      name: "ท่ายืนขาเดียวมือประสานไว้บนหัว",
      des: "text_2",
      img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
      linkML: "a2.html",
      imgML: "",
    },
    {
      id: 2,
      name: "ท่ายืนงอเข่ากวาดเท้าไปข้างหลัง",
      des: "text_3",
      img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
      linkML: "a1.html",
      imgML: "",
    },
    {
      id: 3,
      name: "ย่อเข่า บิดลำตัว",
      des: "text_4",
      img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
      linkML: "a2.html",
      imgML: "",
    },
    {
      id: 4,
      name: "ย่ำเท้า ยกเข่าสูง",
      des: "text_5",
      img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
      linkML: "a2.html",
      imgML: "",
    },
  ],
};

export interface dataMLinterProps {
  id: number;
  name: string;
  des: string;
  img: StaticImageData[];
  linkML: string;
  imgML: string;
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
export const usePicContent = create<zusProps>((set) => ({
  zDataImg: dataimg,
  zText: "test",
  zDataML: dataML,
  zSelectDataML: (value) => set({ zDataML: value }),

  useNumber: usingNumber,
  selectNumber: (value) => set({ useNumber: value }),

  useID: 0,
  selectID: (value) => set({ useID: value }),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", usePicContent);
}
