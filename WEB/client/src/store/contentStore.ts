import {create} from 'zustand'

const contentList = [
    { name: "Text1", content: "Test1" },
    { name: "Text2", content: "Test2" },
    { name: "Text3", content: "Test3" },
    { name: "Text4", content: "Test4" },
    { name: "Text5", content: "Test5" },
    { name: "Text6", content: "Test6" },
    { name: "Text1", content: "Test1" },
    { name: "Text2", content: "Test2" },
    { name: "Text3", content: "Test3" },
    { name: "Text4", content: "Test4" },
    { name: "Text5", content: "Test5" },
    { name: "Text6", content: "Test6" },
    { name: "Text123", content: "Text456" },
  ];
export interface ContentListProps{
    name:string;
    content:string;
}
interface CTentProps {
    content:ContentListProps[];
    focusContent:string;
    selectContent:(value:string)=>void
}
const useCTent = create<CTentProps>((set)=>({
    content:contentList,
    focusContent:"Text1",
    selectContent:(value:string)=>set({focusContent:value})
}))
export default useCTent
