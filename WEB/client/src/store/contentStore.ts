import { StaticImageData } from "next/image";
import {create} from "zustand"

const contentData = [
    { content: "หน้าแรก", path: "/" },
    { content: "ท่าการทำกายภาพบำบัด", path: "/" },
    { content: "ข้อควรปฏิบัติ", path: "#warning" },
    { content: "ประเมินการใช้งานเว็บไซต์", path: "/evaluate" },
  ];
  const openData = [
    { content: "เพิ่มการทรงตัวในผู้สูงอายุ", path: "/body" },
    { content: "เพิ่มความยืดหยุ่นของกล้ามเนื้อและข้อต่อของผู้สูงอายุ", path: "/body" },
    { content: "เพิ่มกำลังกล้ามเนื้อของผู้สูงอายุ", path: "/body" },
    { content: "บริหารกล้ามเนื้อสำหรับข้อเข่าเสื่อม", path: "/body" },
    { content: "กายภาพบำบัดสำหรับผู้ป่วยอ่อนแรง-อัมพฤกษ์", path: "/body" },
    { content: "แก้ปวดหลัง", path: "/body" },
  ];
  interface NavbarProps{
    content:string;
    path:string
  }

  const topicData = [
    {head:"เพิ่มการทรงตัวในผู้สูงอายุ",img:"",color:"#123"},
    {head:"เพิ่มความยืดหยุ่นของกล้ามเนื้อและข้อต่อของผู้สูงอายุ",img:"",color:"#789"},
    {head:"เพิ่มกำลังกล้ามเนื้อของผู้สูงอายุ",img:"",color:"#ee6"},
    {head:"บริหารกล้ามเนื้อสำหรับข้อเข่าเสื่อม",img:"",color:"#123"},
    {head:"กายภาพบำบัดสำหรับผู้ป่วยอ่อนแรง",img:"",color:"#123"},
    {head:"แก้ปวดหลัง",img:"",color:"#123"},
  ]

  interface TopicProps{
    head:string;
    img: string;
    color: string;
    // img:StaticImageData
  }
  
  const MLmodel = [{
    name:"test",link:"p1.html"
}]
interface MLmodelProps{
  name: string;
  link: string;
  }  

  interface ZusProps{
    Nav:NavbarProps[];
    Dropdown:NavbarProps[];
    TopicText: TopicProps[]
    MLmodel:MLmodelProps[]
  }
export const useCTent = create<ZusProps>((set)=>({
    Nav:contentData,
    Dropdown:openData,
    TopicText: topicData,
    MLmodel:MLmodel
}))

