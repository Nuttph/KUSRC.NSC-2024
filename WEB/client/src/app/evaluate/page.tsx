"use client";
import React, { useEffect, useState } from "react";

const Eva = () => {
  const [web, setWeb] = useState(false);
  const [ggf, setGgf] = useState(false);
  const handleWeb = () => {
    setWeb(!web);
    setGgf(false);
  };
  const handelGgf = () => {
    setGgf(!ggf);
    setWeb(false);
  };
  return (
    <>
      <div className="w-full flex items-center justify-center flex-col pt-[150px] bg-[#1F2125]">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe99SKpsDePGHOOa8BglEex5eZv1BuvgcrZI4_PrZplWU81qw/viewform?embedded=true"
          width="640"
          height="2000"
        >
          กำลังโหลด…
        </iframe>
      </div>
    </>
  );
};

export default Eva;
