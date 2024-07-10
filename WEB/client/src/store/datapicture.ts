import { StaticImageData } from "next/image";
import {create} from "zustand"
import mockImg from '../asset/prepose/Lovepik_com-401265802-yoga-exercise.png'
import mockImg2 from '../asset/prepose/pose1.png'
import { mountStoreDevtool } from 'simple-zustand-devtools';

const dataimg = [
    {name:'text1',img:[mockImg,mockImg2,mockImg,mockImg2,mockImg]},
    {name:'text2',img:[mockImg,mockImg2,mockImg,mockImg2,mockImg]},
    {name:'text3',img:[mockImg,mockImg2,mockImg,mockImg2,mockImg]},
    {name:'text4',img:[mockImg,mockImg2,mockImg,mockImg2,mockImg]},
]
export interface dataimgProps {
    name: string;
    img: StaticImageData[];
}

interface zusProps{
    zDataImg: dataimgProps[];
    zText: string;
}
export const usePicContent = create<zusProps>((set) => ({
    zDataImg: dataimg,
    zText:'test'
}))

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Store', usePicContent);
  }
  