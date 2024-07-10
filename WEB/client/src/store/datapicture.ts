import { StaticImageData } from "next/image";
import {create} from "zustand"
import mockImg from '../asset/prepose/Lovepik_com-401265802-yoga-exercise.png'
import mockImg2 from '../asset/prepose/pose1.png'
import { mountStoreDevtool } from 'simple-zustand-devtools';

const dataimg = [
    {name:'text1',img:[mockImg,mockImg2,mockImg,mockImg2,mockImg],linkML:"a1.html"},
    {name:'text2',img:[mockImg,mockImg2,mockImg,mockImg2,mockImg],linkML:"a2.html"},/*  */
    {name:'text3',img:[mockImg,mockImg2,mockImg,mockImg2,mockImg],linkML:"a1.html"},
    {name:'text4',img:[mockImg,mockImg2,mockImg,mockImg2,mockImg],linkML:"a2.html"},
]
export interface dataimgProps {
    name: string;
    img: StaticImageData[];
    linkML: string;
}
const dataML = { name: 'text1', img: [mockImg, mockImg2, mockImg, mockImg2, mockImg], linkML: "a1.html" }
interface dataMLProps{
    name: string;
    img: StaticImageData[];
    linkML: string;
}

interface zusProps{     
    zDataImg: dataimgProps[];
    zText: string;
    zDataML: dataMLProps;
    zSelectDataML: (value:dataMLProps) => void;
}
export const usePicContent = create<zusProps>((set) => ({
    zDataImg: dataimg,
    zText: 'test',
    zDataML: dataML,
    zSelectDataML:(value:dataMLProps)=>set({zDataML:value})
}))

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Store', usePicContent); 
  }
