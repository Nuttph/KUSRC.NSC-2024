import React from "react";
import PhyPre from "./sections/PhyPre";

const Maincontent = () => {
  const l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <div className="w-full p-[40px]">
        <h1 className="flex items-center justify-center w-full">
          title Lorem ipsum dolor sit amet.
        </h1>
        <div className="flex flex-col justify-start">
          <h2>name Lorem ipsum dolor sit amet.</h2>
          <ol className="list-inside">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ol>
        </div>
        <div className="mt-[50px] flex flex-col gap-[100px]">
          {l.map((item, index) => (
            <div key={index}>
              <PhyPre />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Maincontent;
