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
import a2_1 from "../asset/pose/a2/a2_1.png";
import a2_2 from "../asset/pose/a2/a2_2.png";

//image a3
import a3_1 from "../asset/pose/a3/a3_1.png";
import a3_2 from "../asset/pose/a3/a3_2.png";

//image a4
import a4_1 from "../asset/pose/a4/a4_1.png";
import a4_2 from "../asset/pose/a4/a4_2.png";

//image a5
import a5_1 from "../asset/pose/a5/a5_1.png";
import a5_2 from "../asset/pose/a5/a5_2.png";

//image b1
import b1_1 from "../asset/pose/b1/b1_1.png";
import b1_2 from "../asset/pose/b1/b1_2.png";

//import b2
import b2_1 from "../asset/pose/b2/b2_1.png";
import b2_2 from "../asset/pose/b2/b2_2.png";
import b2_3 from "../asset/pose/b2/b2_3.png";
import b2_4 from "../asset/pose/b2/b2_4.png";

//import b3
import b3_1 from "../asset/pose/b3/b3_1.png";
import b3_2 from "../asset/pose/b3/b3_2.png";
import b3_3 from "../asset/pose/b3/b3_3.png";

//image c1
import c1_1 from "../asset/pose/c1/c1_1.png";
import c1_2 from "../asset/pose/c1/c1_2.png";
import c1_3 from "../asset/pose/c1/c1_3.png";

//image c2
import c2_1 from "../asset/pose/c2/c2_1.png";
import c2_2 from "../asset/pose/c2/c2_2.png";
import c2_3 from "../asset/pose/c2/c2_3.png";
import c2_4 from "../asset/pose/c2/c2_4.png";

//image c3
import c3_1 from "../asset/pose/c3/c3_1.png";
import c3_2 from "../asset/pose/c3/c3_2.png";
import c3_3 from "../asset/pose/c3/c3_3.png";

//image d1
import d1_1 from "../asset/pose/d1/d1_1.png";

//image d2
import d2_1 from "../asset/pose/d2/d2_1.png";
import d2_2 from "../asset/pose/d2/d2_2.png";
import d2_3 from "../asset/pose/d2/d2_3.png";
import d2_4 from "../asset/pose/d2/d2_4.png";

//image d3
import d3_1 from "../asset/pose/d3/d3_1.png";
import d3_2 from "../asset/pose/d3/d3_2.png";
import d3_3 from "../asset/pose/d3/d3_3.png";
import d3_4 from "../asset/pose/d3/d3_4.png";

//image d4
import d4_1 from "../asset/pose/d4/d4_1.png";
import d4_2 from "../asset/pose/d4/d4_2.png";
import d4_3 from "../asset/pose/d4/d4_3.png";
import d4_4 from "../asset/pose/d4/d4_4.png";

//image d5
import d5_1 from "../asset/pose/d5/d5_1.png";
import d5_2 from "../asset/pose/d5/d5_2.png";

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
        img: [a1_2, a1_1, a1_3, a1_4],
        linkML: "a1.html",
        imgML: a1_1,
        videoML: "/video/aa1_1.mp4",
        for: "ท่ายืนกางขาช่วยเสริมสร้างกล้ามเนื้อขาและสะโพก พัฒนาสมดุลและเสถียรภาพ และเพิ่มความยืดหยุ่น",
        pop: false,
        model: "https://teachablemachine.withgoogle.com/models/PwgfPJ-6p/",
        besttime: 0,
        getset: 0,
        dodate: "",
      },
      {
        id: 1,
        name: "ท่ายืนขาเดียวมือประสานไว้บนหัว",
        des: "ยืนขาเดียว มือทั้งสองยกขึ้นเหนือศรีษะ ประสานมือไว้ด้วยกัน",
        img: [a2_1, a2_2],
        linkML: "a2.html",
        imgML: a1_1,
        videoML: "/video/aa2_1.mp4",
        for: "ช่วยเสริมสร้างความแข็งแรงของกล้ามเนื้อขาและลำตัว, พัฒนาสมดุลและการทรงตัว, และเพิ่มความยืดหยุ่นของกล้ามเนื้อและข้อต่อ",
        pop: true,
        model: "https://teachablemachine.withgoogle.com/models/kZ1Yi9z1J/",
        besttime: 0,
        getset: 0,
        dodate: "",
      },
      {
        id: 2,
        name: "ท่ายืนงอเข่ากวาดเท้าไปข้างหลัง",
        des: "ยืนตัวตรงหลังเก้าอี้ ศีรษะตรง ไม่แอ่นหลัง มือทั้งสองข้างจับพนักพิงเก้าอี้ งอเข่าขวาช้าๆ ปลายเท้าชี้ลงพื้น ค้างไว้ 3 วินาที แล้วเอาเท้าขวาลงแนบพื้น จากนั้นทำทีละข้าง ข้างละ 10 ครั้ง",
        img: [a3_1, a3_2],
        linkML: "a3.html",
        imgML: a1_1,
        videoML: "/video/aa3_1.mp4",
        for: "ช่วยเสริมสร้างความแข็งแรงของกล้ามเนื้อขาและสะโพก, พัฒนาความยืดหยุ่นและความสมดุล, และปรับปรุงการควบคุมร่างกาย",
        pop: false,
        model: "https://teachablemachine.withgoogle.com/models/3dbrsrqdg/",
        besttime: 0,
        getset: 0,
        dodate: "",
      },
      {
        id: 3,
        name: "ยกเข่า บิดลำตัว",
        des: "ยกแขนกางศอกทั้ง 2 ข้าง ยกขาซ้ายขึ้นสลับขาขวาไปมา บิดลำตัวตามขาที่ยก",
        img: [a4_1, a4_2],
        linkML: "a4.html",
        imgML: a1_1,
        videoML: "/video/aa4_1.mp4",
        for: "ช่วยเสริมสร้างกล้ามเนื้อหน้าท้องและกล้ามเนื้อด้านข้าง, พัฒนาความสมดุลและการทรงตัว, และเพิ่มความยืดหยุ่นของลำตัวและสะโพก",
        pop: true,
        model: "https://teachablemachine.withgoogle.com/models/ZAZA1eZsw/",
        besttime: 0,
        getset: 0,
        dodate: "",
      },
      {
        id: 4,
        name: "ย่ำเท้า ยกเข่าสูง",
        des: "ย่ำเท้าอยู่กับที่ ยกเข่าสูงระดับสะโพก สลับกัน ซ้าย-ขวา พร้อมแกว่งแขน",
        img: [a5_1, a5_2],
        linkML: "a5.html",
        imgML: a1_1,
        videoML: "/video/aa5_1.mp4",
        for: "ช่วยเสริมสร้างกล้ามเนื้อขาและสะโพก, พัฒนาความแข็งแรงของระบบหัวใจและหลอดเลือด, และเพิ่มความยืดหยุ่นและสมดุลของร่างกาย",
        pop: true,
        model: "https://teachablemachine.withgoogle.com/models/X5iBe33Xd/",
        besttime: 0,
        getset: 0,
        dodate: "",
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
        img: [b1_1, b1_2],
        linkML: "b1.html",
        imgML: a1_1,
        videoML: "/video/bb1_1.mp4", //ถึงตรงนี้ ณ เวลา 00:12 -> 15/7/2567
        for: "ช่วยในการเพิ่มความยืดหยุ่นและความผ่อนคลายของกล้ามเนื้อในส่วนต่าง ๆ ของขา นอกจากนี้ยังช่วยในการลดความตึงเครียดที่อาจเกิดขึ้นจากการใช้งานหรือการกางขยายกล้ามเนื้อในพื้นที่นี้ได้ดี",
        pop: false,
        model: "https://teachablemachine.withgoogle.com/models/vnT9Yv010/",
        besttime: 0,
        getset: 0,
        dodate: "",
      },
      {
        id: 1,
        name: "เหยียดน่อง",
        des: "มือสองข้างจับขอบโต๊ะหรือพนักเก้าอี้ ก้าวเท้าซ้ายหรือเท้าขวาถอยออกไปข้างหลัง 1 ก้าวยาว ให้เข่าซ้ายเหยียดตรง ปลายเท้าตรงไปข้างหน้า ค่อยๆโน้มตัวไปข้างหน้า งอเข่าขวา พยายามให้ส้นเท้าติดพื้นตลอดเวลาห",
        img: [b2_1, b2_2, b2_3, b2_4],
        linkML: "b2.html",
        imgML: a1_1,
        videoML: "/video/bb2_1.mp4",
        for: "ช่วยเพิ่มความยืดหยุ่นของกล้ามเนื้อหลังขาและเอ็นร้อยหวาย, ลดความตึงเครียดของกล้ามเนื้อ, และป้องกันการบาดเจ็บจากการออกกำลังกายหรือกิจกรรมต่าง ๆ",
        pop: true,
        model: "https://teachablemachine.withgoogle.com/models/jW7q35Bwu/",
        besttime: 0,
        getset: 0,
        dodate: "",
      },
      {
        id: 2,
        name: "ย่อเข่า",
        des: "ยืนจับพนักเก้าอี้ งอ(ย่อ) เข่าทั้งสองข้างลงในท่าสบายให้หลังและศรีษะตั้งตรง โดยอยู่หลังปลายเท้า เหยียดเข่ายืนขึ้นสู่ท่าเริ่มต้น ทำซ้ำ 10 ครั้ง",
        img: [b3_1, b3_2, b3_3],
        linkML: "b3.html",
        imgML: a1_1,
        videoML: "/video/bb3_1.mp4",
        for: "ช่วยเสริมสร้างกล้ามเนื้อขาและสะโพก, พัฒนาความแข็งแรงของแกนกลางลำตัว, และเพิ่มความยืดหยุ่นของข้อเข่าและข้อเท้า",
        pop: true,
        model: "https://teachablemachine.withgoogle.com/models/3FNniof3L/",
        besttime: 0,
        getset: 0,
        dodate: "",
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
        img: [c1_1, c1_2, c1_3],
        linkML: "c1.html",
        imgML: a1_1,
        videoML: "/video/cc1_1.mp4",
        for: "ช่วยในการเพิ่มกำลังและความแข็งแรงของกล้ามเนื้อแขน โดยเฉพาะกล้ามเนื้อหลังและไหล่ด้านบน เพิ่มความยืดหยุ่นและควบคุมทรงตัวของลำตัว",
        pop: false,
        model: "https://teachablemachine.withgoogle.com/models/Aoue23ywj/",
        besttime: 0,
        getset: 0,
        dodate: "",
      },
      {
        id: 1,
        name: "กางแขน-หุบแขน",
        des: "กางและหุบแขนทั้งสองข้างขึ้นลงช้าๆ แขนทั้งสองข้างเหยียดตรง 10-20 ครั้ง",
        img: [c2_1, c2_2, c2_3, c2_4],
        linkML: "c2.html",
        imgML: a1_1,
        videoML: "/video/cc2_1.mp4",
        for: "ช่วยเสริมกล้ามเนื้อแขน (biceps) และการหุบแขนช่วยเสริมกล้ามเนื้อหลังและไหล่ (triceps และ shoulder muscles)",
        pop: false,
        model: "https://teachablemachine.withgoogle.com/models/3oVzfLR7g/",
        besttime: 0,
        getset: 0,
        dodate: "",
      },
      {
        id: 2,
        name: "งอศอก-เหยียดศอก",
        des: "งอและเหยียดศอกทั้งสองข้างขึ้นลงช้า 10-20 ครั้ง",
        img: [c3_1, c3_2, c3_3],
        linkML: "c3.html",
        imgML: a1_1,
        videoML: "/video/cc3_1.mp4",
        for: "ช่วยในการเพิ่มกำลังและความแข็งแรงของกล้ามเนื้อแขน โดยเฉพาะกล้ามเนื้อในพื้นที่ของหลังแขนและกล้ามเนื้อซอกไหล่",
        pop: false,
        model: "https://teachablemachine.withgoogle.com/models/xwXQcB74I/",
        besttime: 0,
        getset: 0,
        dodate: "",
      },
    ],
  },
  {
    content: "บริหารกล้ามเนื้อ",
    description:
      "การบริหารกล้ามเนื้อช่วยเพิ่มความแข็งแรง รักษาสมดุลของร่างกาย ทำให้ผู้สูงอายุสามารถทำกิจวัตรประจำวันได้อย่างอิสระและปลอดภัยยิ่งขึ้น",
    data_real: [
      {
        id: 0,
        name: "ท่าบริหารกล้ามเนื้อเหยียดเข่า",
        des: "ยืนตรง กางขาสองข้างระดับหัวไหล่ ย่อขาทั้งสองข้างลงแล้วยกแขนทั้งสองข้างไปด้านหน้า พยายามดันสะโพกไปด้านหลัง ค้างไว้ 3 วินาที แล้วกลับมาสู่ท่าเริ่มต้น จำนวน 20 ครั้ง",
        img: [d1_1],
        linkML: "d1.html",
        imgML: a1_1,
        videoML: "/video/dd1_1.mp4",
        for: "ช่วยเพิ่มกำลังและความแข็งแรงของกล้ามเนื้อขา โดยเฉพาะกล้ามเนื้อหลังขา (quadriceps) และเตรียมความพร้อมสำหรับกิจกรรมทางกายภาพต่าง ๆ",
        pop: true,
        model: "https://teachablemachine.withgoogle.com/models/6mgc49aFV/",
        besttime: 0,
        getset: 0,
        dodate: "",
      },
      {
        id: 1,
        name: "เหวี่ยงแขน บิดลำตัว",
        des: "เหวียงแขนทั้ง 2 ข้างเฉียงขึ้น บิดลำตัวไปทางด้านหลัง ชูแขนขึ้นเหนือศรีษะ กำมือ -> ลดแขนลงบิดลำตัวกลับ แบบมือ -> เหวี่ยงแขนทั้ง 2 ข้างเฉียงขึ้นสลับด้านบิดลำตัวไปด้านหลัง ชูแขนขึ้นเหนือศรีษะ กำมือ",
        img: [d2_1, d2_2, d2_3, d2_4],
        linkML: "d2.html",
        imgML: a1_1,
        videoML: "/video/dd2_1.mp4",
        for: "ช่วยเสริมกล้ามเนื้อหน้าท้องและกล้ามเนื้อของลำตัว ช่วยในการพัฒนาความแข็งแรงและยืดหยุ่นของกล้ามเนื้อในพื้นที่นั้นได้เป็นอย่างดี",
        pop: false,
        model: "https://teachablemachine.withgoogle.com/models/e28Up2j9b/",
        besttime: 0,
        getset: 0,
        dodate: "",
      },
      {
        id: 2,
        name: "แกว่งแขนสูง แบมือ",
        des: "ยืนตรง ยกมือขึ้นเหนือศรีษะและเหวี่ยงแขนไปทางด้านหลัง -> กำมือ เมื่อแกว่งแขนขึ้น-ลง จนสุดการเคลื่อนไหว -> คลายมือ ในช่วงลดแขนลงและยกแขนขึ้นขณะสลับข้าง",
        img: [d3_1, d3_2, d3_3, d3_4],
        linkML: "d3.html",
        imgML: a1_1,
        videoML: "/video/dd3_1.mp4",
        for: "ช่วยเสริมกล้ามเนื้อหลังและไหล่ ช่วยเพิ่มความแข็งแรงและความยืดหยุ่นของกล้ามเนื้อในพื้นที่นี้ได้ดี",
        pop: false,
        model: "https://teachablemachine.withgoogle.com/models/1PgsirSHZ/",
        besttime: 0,
        getset: 0,
        dodate: "",
      },
      {
        id: 3,
        name: "กำหมัดชูแขน",
        des: "ยกแขนกางศอกขึ้นระดับหน้าอกแบบมือ มืออีกข้างท้าวเอว -> เอียงลำตัวไปทางด้านข้าง พร้อมกับชูแขนกำมือเหนือศรีษะ -> ลดแขนลงระดับหน้าอก แบมือนับเป็น 1 ครั้ง",
        img: [d4_1, d4_2, d4_3, d4_4],
        linkML: "d4.html",
        imgML: a1_1,
        videoML: "/video/dd4_1.mp4",
        for: "ช่วยเสริมกล้ามเนื้อแขนบริเวณต้นแขนและไหล่ โดยการยกแขนขึ้นและยืดหุบแขนเป็นลักษณะหลักของท่านี้ ช่วยเพิ่มพลังและความแข็งแรง",
        pop: false,
        model: "https://teachablemachine.withgoogle.com/models/-W6zjFU2j/",
        besttime: 0,
        getset: 0,
        dodate: "",
      },
      {
        id: 4,
        name: "หุบศอก",
        des: "ยกแขนขึ้น กำมือกางศอก ให้อยู่ในระดับหน้าอก -> แบมือหุบศอกทั้งสองข้างเข้าหากัน จนฝ่ามือและศอกประกบชิดกันออกแรงดันแขนและศอก ค้างไว้ 2 วินาที กางศอกไปด้านหลัง กำมือนับเป็น 1 ครั้ง",
        img: [d5_1, d5_2],
        linkML: "d5.html",
        imgML: a1_1,
        videoML: "/video/dd5_1.mp4",
        for: "ช่วยเสริมกล้ามเนื้อของหลังแขน (triceps) โดยการยกแขนขึ้นและยืดหุบศอกเป็นลักษณะหลักของท่านี้ ช่วยให้กล้ามเนื้อหลังแขนเสริมแข็งแรงขึ้น",
        pop: false,
        model: "https://teachablemachine.withgoogle.com/models/CbRBHkjXR/",
        besttime: 0,
        getset: 0,
        dodate: "",
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
  for: string;
  pop: boolean;
  model: string;
  besttime: number;
  getset: number;
  dodate: string;
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
      for: "",
      pop: false,
      model: "https://teachablemachine.withgoogle.com/models/PwgfPJ-6p/",
      besttime: 0,
      getset: 0,
      dodate: "",
    },
    {
      id: 1,
      name: "ท่ายืนขาเดียวมือประสานไว้บนหัว",
      des: "text_2",
      img: [mockImg, mockImg, mockImg, mockImg, mockImg],
      linkML: "a2.html",
      imgML: a1_1,
      videoML: "/video/aa1_1.mp4",
      for: "",
      pop: false,
      model: "https://teachablemachine.withgoogle.com/models/kZ1Yi9z1J/",
      besttime: 0,
      getset: 0,
      dodate: "",
    },
    {
      id: 2,
      name: "ท่ายืนงอเข่ากวาดเท้าไปข้างหลัง",
      des: "text_3",
      img: [mockImg, mockImg, mockImg, mockImg, mockImg],
      linkML: "a3.html",
      imgML: a1_1,
      videoML: "/video/aa1_1.mp4",
      for: "",
      pop: false,
      model: "https://teachablemachine.withgoogle.com/models/3dbrsrqdg/",
      besttime: 0,
      getset: 0,
      dodate: "",
    },
    {
      id: 3,
      name: "ย่อเข่า บิดลำตัว",
      des: "text_4",
      img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
      linkML: "a4.html",
      imgML: a1_1,
      videoML: "/video/aa1_1.mp4",
      for: "",
      pop: false,
      model: "https://teachablemachine.withgoogle.com/models/ZAZA1eZsw/",
      besttime: 0,
      getset: 0,
      dodate: "",
    },
    {
      id: 4,
      name: "ย่ำเท้า ยกเข่าสูง",
      des: "text_5",
      img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
      linkML: "a5.html",
      imgML: a1_1,
      videoML: "/video/aa1_1.mp4",
      for: "",
      pop: false,
      model: "https://teachablemachine.withgoogle.com/models/X5iBe33Xd/",
      besttime: 0,
      getset: 0,
      dodate: "",
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
  for: string;
  pop: boolean;
  model: string;
  besttime: number;
  getset: number;
  dodate: string;
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

  //dashboard data
  updateData: (
    un: number,
    ui: number,
    besttime: number,
    getset: number,
    dodate: string
  ) => void;
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
      updateData: (un, ui, besttime, getset, dodate) =>
        set((state) => ({
          zDataImg: state.zDataImg.map((item, index) =>
            index === un
              ? {
                  ...item,
                  data_real: item.data_real.map((dataItem) =>
                    dataItem.id === ui
                      ? {
                          ...dataItem,
                          besttime,
                          getset,
                          dodate,
                        }
                      : dataItem
                  ),
                }
              : item
          ),
        })),
    }),
    {
      name: "Data Physio-Power", // name of the item in storage
      getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
    }
  )
);
