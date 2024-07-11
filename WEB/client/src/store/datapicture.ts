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
        name: "text5",
        des: "",
        img: [mockImg, mockImg2, mockImg, mockImg2, mockImg],
        linkML: "a2.html",
        imgML: "",
      },
    ],
  },
  {
    content: "ml_3",
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
    content: "ml_4",
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
  data_real: dataimgMockProps[];
}

const dataML = {
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
      name: "text5",
      des: "",
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
