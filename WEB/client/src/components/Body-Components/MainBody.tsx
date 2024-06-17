"use client";
import React, { useEffect, useState } from "react";
import Header from "./ComponentInBodyPage/Header";
import Body from "./ComponentInBodyPage/Body";

const MainBody = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div className="flex flex-col w-full">
        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div className="flex flex-col">
              <Header />
              <div className="my-[100px] px-[140px]">
                <Body />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MainBody;
