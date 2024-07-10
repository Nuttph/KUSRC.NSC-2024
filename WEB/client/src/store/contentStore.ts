import { StaticImageData } from "next/image";
import {create} from "zustand"
import preposeImg from '../asset/prepose/Lovepik_com-401265802-yoga-exercise.png'

const contentData = [
    { content: "หน้าแรก", path: "/" },
    { content: "ท่าการทำกายภาพบำบัด", path: "/#slide-card" },
    { content: "ข้อควรปฏิบัติ", path: `/warning` },
    { content: "ประเมินการใช้งานเว็บไซต์", path: "/evaluate" },
  ];
  interface NavbarProps{
    content:string;
    path:string
  }

  const topicData = [
    {head:"เพิ่มการทรงตัวในผู้สูงอายุ",img:preposeImg},
    {head:"เพิ่มความยืดหยุ่นของกล้ามเนื้อและข้อต่อของผู้สูงอายุ",img:preposeImg},
    {head:"เพิ่มกำลังกล้ามเนื้อของผู้สูงอายุ",img:preposeImg},
    {head:"บริหารกล้ามเนื้อสำหรับข้อเข่าเสื่อม",img:preposeImg},
  ]

const detailPose:detailContent[] = []
interface detailContent {
  content: string;
  path: string;
}
  interface TopicProps{
    head:string;
    img: StaticImageData;
  }
  
interface MLmodelProps{
  name: string;
  link: string;
  }  

  interface ZusProps{
    Nav:NavbarProps[];
    TopicText: TopicProps[]
    detailContent: detailContent[]
  }
export const useCTent = create<ZusProps>((set)=>({
    Nav:contentData,
    TopicText: topicData,
    detailContent: detailPose,
}))

