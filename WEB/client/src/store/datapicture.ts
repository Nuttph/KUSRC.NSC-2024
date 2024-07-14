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
//image a2

//image a3
import a3_1 from "../asset/pose/a3/a3_1.png";
import a3_2 from "../asset/pose/a3/a3_2.png";
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
        videoML: "/video/aa1_1.mp4",
      },
      {
        id: 1,
        name: "ท่ายืนขาเดียวมือประสานไว้บนหัว",
        des: "text_2",
        img: [mockImg, mockImg, mockImg, mockImg, mockImg],
        linkML: "a2.html",
        imgML: a1_1,
        videoML: "",
      },
      {
        id: 2,
        name: "ท่ายืนงอเข่ากวาดเท้าไปข้างหลัง",
        des: "ยืนตัวตรงหลังเก้าอี้ ศีรษะตรง ไม่แอ่นหลัง มือทั้งสองข้างจับพนักพิงเก้าอี้ งอเข่าขวาช้าๆ ปลายเท้าชี้ลงพื้น ค้างไว้ 3 วินาที แล้วเอาเท้าขวาลงแนบพื้น จากนั้นทำทีละข้าง ข้างละ 10 ครั้ง",
        img: [a3_1, a3_2],
        linkML: "a3.html",
        imgML: a1_1,
        videoML: "/video/aa3_1.mp4",
      },
      {
        id: 3,
        name: "ยกเข่า บิดลำตัว",
        des: "ยกแขนกางศอกทั้ง 2 ข้าง ยกขาซ้ายขึ้นสลับขาขวาไปมา บิดลำตัวตามขาที่ยก",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a4.html",
        imgML: a1_1,
        videoML: "/video/aa1_1.mp4",
      },
      {
        id: 4,
        name: "ย่ำเท้า ยกเข่าสูง",
        des: "ย่ำเท้าอยู่กับที่ ยกเข่าสูงระดับสะโพก สลับกัน ซ้าย-ขวา พร้อมแกว่งแขน",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a5.html",
        imgML: a1_1,
        videoML: "/video/aa1_1.mp4",
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
        des: "นั่งหลังตรงห่างจากพนักพิงเก้าอี้เล็กน้อย เหยียดขาขวาตึง ส้นเท้าแตะพื้นปลายเท้ากระดกขึ้น ประสานมือกันแล้ววางบนเข่าซ้าย ค่อยๆโน้มตัวไปข้างหน้า หลังตรง ตามองข้างหน้า จนรู้สึกตึงตรงต้นขาขวาด้านหลัง ค้างไว้ 10 วินาที แล้วเปลี่ยนข้างทำเหมือนเดิม ",
        img: [a1_1, a1_2, a1_3, a1_4, mockImg],
        linkML: "b1.html",
        imgML: a1_1,
        videoML: "/video/aa1_1.mp4",
      },
      {
        id: 1,
        name: "เหยียดน่อง",
        des: "มือสองข้างจับขอบโต๊ะหรือพนักเก้าอี้ ก้าวเท้าซ้ายหรือเท้าขวาถอยออกไปข้างหลัง 1 ก้าวยาว ให้เข่าซ้ายเหยียดตรง ปลายเท้าตรงไปข้างหน้า ค่อยๆโน้มตัวไปข้างหน้า งอเข่าขวา พยายามให้ส้นเท้าติดพื้นตลอดเวลาห",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "b2.html",
        imgML: a1_1,
        videoML: "/video/aa1_1.mp4",
      },
      {
        id: 2,
        name: "ย่อเข่า",
        des: "ยืนจับพนักเก้าอี้ งอ(ย่อ) เข่าทั้งสองข้างลงในท่าสบายให้หลังและศรีษะตั้งตรง โดยอยู่หลังปลายเท้า เหยียดเข่ายืนขึ้นสู่ท่าเริ่มต้น ทำซ้ำ 10 ครั้ง",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "b3.html",
        imgML: a1_1,
        videoML: "/video/aa1_1.mp4",
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
        des: "นั่งตัวตรง แขนสองข้างเหยียดตรง ยกแขนขึ้นและลงช้าๆ 10-20 ครั้ง",
        img: [a1_1, a1_2, a1_3, a1_4, mockImg],
        linkML: "c1.html",
        imgML: a1_1,
        videoML: "/video/aa1_1.mp4",
      },
      {
        id: 1,
        name: "กางแขน-หุบแขน",
        des: "กางและหุบแขนทั้งสองข้างขึ้นลงช้าๆ แขนทั้งสองข้างเหยียดตรง 10-20 ครั้ง",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "c2.html",
        imgML: a1_1,
        videoML: "/video/aa1_1.mp4",
      },
      {
        id: 2,
        name: "งอศอก-เหยียดศอก",
        des: "งอและเหยียดศอกทั้งสองข้างขึ้นลงช้า 10-20 ครั้ง",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "c3.html",
        imgML: a1_1,
        videoML: "/video/aa1_1.mp4",
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
        des: "ยืนตรง กางขาสองข้างระดับหัวไหล่ ย่อขาทั้งสองข้างลงแล้วยกแขนทั้งสองข้างไปด้านหน้า พยายามดันสะโพกไปด้านหลัง ค้างไว้ 3 วินาที แล้วกลับมาสู่ท่าเริ่มต้น จำนวน 20 ครั้ง",
        img: [a1_1, a1_2, a1_3, a1_4],
        linkML: "d1.html",
        imgML: a1_1,
        videoML: "/video/aa1_1.mp4",
      },
      {
        id: 1,
        name: "เหวี่ยงแขน บิดลำตัว",
        des: "เหวียงแขนทั้ง 2 ข้างเฉียงขึ้น บิดลำตัวไปทางด้านหลัง ชูแขนขึ้นเหนือศรีษะ กำมือ -> ลดแขนลงบิดลำตัวกลับ แบบมือ -> เหวี่ยงแขนทั้ง 2 ข้างเฉียงขึ้นสลับด้านบิดลำตัวไปด้านหลัง ชูแขนขึ้นเหนือศรีษะ กำมือ",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "d2.html",
        imgML: a1_1,
        videoML: "/video/aa1_1.mp4",
      },
      {
        id: 2,
        name: "แกว่งแขนสูงกำมือ แบมือ",
        des: "ยืนตรง ยกมือขึ้นเหนือศรีษะและเหวี่ยงแขนไปทางด้านหลัง -> กำมือ เมื่อแกว่งแขนขึ้น-ลง จนสุดการเคลื่อนไหว -> คลายมือ ในช่วงลดแขนลงและยกแขนขึ้นขณะสลับข้าง",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "d3.html",
        imgML: a1_1,
        videoML: "/video/aa1_1.mp4",
      },
      {
        id: 3,
        name: "กำหมัดชูแขน",
        des: "ยกแขนกางศอกขึ้นระดับหน้าอกแบบมือ มืออีกข้างท้าวเอว -> เอียงลำตัวไปทางด้านข้าง พร้อมกับชูแขนกำมือเหนือศรีษะ -> ลดแขนลงระดับหน้าอก แบมือนับเป็น 1 ครั้ง",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "d4.html",
        imgML: a1_1,
        videoML: "/video/aa1_1.mp4",
      },
      {
        id: 4,
        name: "หุบศอก",
        des: "ยกแขนขึ้น กำมือกางศอก ให้อยู่ในระดับหน้าอก -> แบมือหุบศอกทั้งสองข้างเข้าหากัน จนฝ่ามือและศอกประกบชิดกันออกแรงดันแขนและศอก ค้างไว้ 2 วินาที กางศอกไปด้านหลัง กำมือนับเป็น 1 ครั้ง",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "d5.html",
        imgML: a1_1,
        videoML: "/video/aa1_1.mp4",
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
  videoML: string;
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
      videoML: "/video/aa1_1.mp4",
    },
    {
      id: 1,
      name: "ท่ายืนขาเดียวมือประสานไว้บนหัว",
      des: "text_2",
      img: [mockImg, mockImg, mockImg, mockImg, mockImg],
      linkML: "a2.html",
      imgML: a1_1,
      videoML: "/video/aa1_1.mp4",
    },
    {
      id: 2,
      name: "ท่ายืนงอเข่ากวาดเท้าไปข้างหลัง",
      des: "text_3",
      img: [mockImg, mockImg, mockImg, mockImg, mockImg],
      linkML: "a3.html",
      imgML: a1_1,
      videoML: "/video/aa1_1.mp4",
    },
    {
      id: 3,
      name: "ย่อเข่า บิดลำตัว",
      des: "text_4",
      img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
      linkML: "a4.html",
      imgML: a1_1,
      videoML: "/video/aa1_1.mp4",
    },
    {
      id: 4,
      name: "ย่ำเท้า ยกเข่าสูง",
      des: "text_5",
      img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
      linkML: "a5.html",
      imgML: a1_1,
      videoML: "/video/aa1_1.mp4",
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
  videoML: string;
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
