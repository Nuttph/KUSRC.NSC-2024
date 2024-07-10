import { StaticImageData } from "next/image";
import { create } from "zustand";
import mockImg from "../asset/prepose/Lovepik_com-401265802-yoga-exercise.png";
import mockImg2 from "../asset/prepose/pose1.png";
import { mountStoreDevtool } from "simple-zustand-devtools";

const dataimg = [
  {
    content: "ml_1",
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
        name: "text4",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a2.html",
        imgML: "",
      },
    ],
  },
  {
    content: "ml_2",
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
        name: "text4",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a2.html",
        imgML: "",
      },
    ],
  },
];

interface dataimgMockProps {
  name: string;
  img: StaticImageData[];
  linkML: string;
}
export interface dataimgProps {
  content: string;
  data_real: dataimgMockProps[];
}
const dataML = {
  name: "text1",

  img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
  linkML: "a1.html",
};
interface dataMLProps {
  name: string;
  img: StaticImageData[];
  linkML: string;
}

interface zusProps {
  zDataImg: dataimgProps[];
  zText: string;
  zDataML: dataMLProps;
  zSelectDataML: (value: dataMLProps) => void;
}
export const usePicContent = create<zusProps>((set) => ({
  zDataImg: dataimg,
  zText: "test",
  zDataML: dataML,
  zSelectDataML: (value: dataMLProps) => set({ zDataML: value }),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", usePicContent);
}
