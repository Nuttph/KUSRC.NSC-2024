import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import lineIcon from "./../../asset/line.png";
import Image from "next/image";
import Link from "next/link";

const FContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContact = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={`relative ${isOpen ? "open-animation" : ""}`}>
        <div
          className={`z-50 right-[2%] bottom-[8%] fixed flex flex-col items-center justify-center gap-[17px]`}
        >
          {isOpen && (
            <>
              <Link
                target="_blank"
                href="https://line.me/en/"
                className={`duration-[0.5s] ${
                  isOpen ? "" : "fill-transparent"
                }`}
              >
                <Image src={lineIcon} alt="line" height={55} />
              </Link>
            </>
          )}
          <div
            className={`rounded-full w-[60px] h-[60px] border-[5px] border-gray-700 flex justify-center items-center text-[50px] font-bold text-gray-700 cursor-pointer duration-[0.5s] ${
              isOpen ? "rotate-90 bg-red-100" : "rotate-45 bg-green-100"
            } `}
            onClick={toggleContact}
          >
            <IoCloseOutline />
          </div>
        </div>
      </button>
    </>
  );
};

export default FContact;
