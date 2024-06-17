import useCTent, { ContentListProps } from "@/store/contentStore";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Description = () => {
  const { content, focusContent } = useCTent();
  const [data, setData] = useState<ContentListProps[]>();
  useEffect(() => {
    const newContent = content.filter((itme) => itme.name == focusContent);
    setData(newContent);
  }, [content, focusContent]);
  return (
    <>
      <div className="w-full bg-[#fff] rounded-xl shadow-2xl h-[2000px] px-[20px] py-[20px] flex flex-col gap-2">
        <div className="font-bold text-[40px] text-center">Topic Content</div>
        <div>{data && data[0].content}</div>
        <Link
          href="/test"
          className="px-4 py-2 rounded-xl shadow-xl bg-[#85ffef] text-[25px] w-fit"
        >
          Test
        </Link>
      </div>
    </>
  );
};

export default Description;
