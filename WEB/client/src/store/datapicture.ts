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
        name: "ml_1",
        des: "text_1",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a1.html",
        imgML: "",
      },
      {
        name: "ml_1",
        des: "text_2",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a2.html",
        imgML: "",
      },
      {
        name: "ml_1",
        des: "text_3",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a1.html",
        imgML: "",
      },
      {
        name: "ml_1",
        des: "text_4",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a2.html",
        imgML: "",
      },
      {
        name: "ml_1",
        des: "text_5",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a2.html",
        imgML: "",
      },
    ],
  },
  {
    content: "เพิ่มความยืดหยุ่นของกล้ามเนื้อและข้อต่อของผู้สูงอายุ",
    description:
      "การเพิ่มความยืดหยุ่นช่วยให้กล้ามเนื้อและข้อต่อมีความคล่องตัวและยืดหยุ่นมากขึ้น ทำให้ลดโอกาสเกิดการบาดเจ็บจากการเคลื่อนไหวในชีวิตประจำวัน เคลื่อนไหวได้คล่องแคล่วขึ้น ทำกิจกรรมประจำวันได้สะดวกขึ้น",
    data_real: [
      {
        name: "text1",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a1.html",
        imgML: "",
      },
      {
        name: "text2",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a2.html",
        imgML: "",
      },
      {
        name: "text3",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a1.html",
        imgML: "",
      },
      {
        name: "text4",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a2.html",
        imgML: "",
      },
      {
        name: "text5",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a2.html",
        imgML: "",
      },
    ],
  },
  {
    content: "เพิ่มกำลังกล้ามเนื้อของผู้สูงอายุ",
    description:
      "ช่วยเสริมสร้างความแข็งแรงของกล้ามเนื้อ  ลดความเสี่ยงต่อการเกิดโรคกระดูกพรุน",
    data_real: [
      {
        name: "text1",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a1.html",
        imgML: "",
      },
      {
        name: "text2",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a2.html",
        imgML: "",
      },
      {
        name: "text3",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a1.html",
        imgML: "",
      },
      {
        name: "text4",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a2.html",
        imgML: "",
      },
      {
        name: "text5",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a2.html",
        imgML: "",
      },
    ],
  },
  {
    content: "บริหารกล้ามเนื้อสำหรับข้อเข่าเสื่อม",
    description:
      "ช่วยเพิ่มการไหลเวียนของเลือด ทำให้สารอาหารและออกซิเจนไปยังบริเวณข้อเข่า ซึ่งสามารถลดอาการปวดและอักเสบได้ ทำให้ข้อเข่ามีความมั่นคงและรับน้ำหนักได้ดีขึ้น",
    data_real: [
      {
        name: "text1",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a1.html",
        imgML: "",
      },
      {
        name: "text2",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a2.html",
        imgML: "",
      },
      {
        name: "text3",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a1.html",
        imgML: "",
      },
      {
        name: "text4",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a2.html",
        imgML: "",
      },
      {
        name: "text5",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a2.html",
        imgML: "",
      },
    ],
  },
];

export interface dataimgMockProps {
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
      name: "ml_1",
      des: "text_1",
      img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
      linkML: "a1.html",
      imgML: "",
    },
    {
      name: "ml_1",
      des: "text_2",
      img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
      linkML: "a2.html",
      imgML: "",
    },
    {
      name: "ml_1",
      des: "text_3",
      img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
      linkML: "a1.html",
      imgML: "",
    },
    {
      name: "ml_1",
      des: "text_4",
      img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
      linkML: "a2.html",
      imgML: "",
    },
    {
      name: "ml_1",
      des: "text_5",
      img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
      linkML: "a2.html",
      imgML: "",
    },
  ],
};

export interface dataMLinterProps {
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
}
export const usePicContent = create<zusProps>((set) => ({
  zDataImg: dataimg,
  zText: "test",
  zDataML: dataML,
  zSelectDataML: (value) => set({ zDataML: value }),

  useNumber: usingNumber,
  selectNumber: (value) => set({ useNumber: value }),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", usePicContent);
}
