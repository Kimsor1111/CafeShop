import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const menu = ({ title, submenu, menuid }) => {
  const [isopen, setIsopen] = useState(false);
  return (
    <>
      <div
        className={`w-full relative flex flex-row items-center ${
          isopen ? "border-y" : "border-t"
        } ${
          menuid % 2 == 0 ? "border-y" : "mt-2"
        } border-black justify-center `}
      >
        <h1
          className={`lg:pl-10 pl-2  w-full py-6 h-[40px] relative flex items-center text-xl font-['poppins'] font-semibold `}
        >
          {title}
        </h1>
        <FontAwesomeIcon
          onClick={() => setIsopen(!isopen)}
          icon={faCaretDown}
          className={`${
            isopen ? "rotate-180" : "rotate-0"
          } absolute right-3 cursor-pointer transition-all duration-[300ms]`}
        ></FontAwesomeIcon>
      </div>
      <ul
        className={`w-full ${
          isopen ? "flex h-fit py-2" : "opacity-0 h-0 py-0"
        } ease-in-out transition-all duration-[70ms] flex flex-col gap-2`}
      >
        {submenu.map((s, index) => (
          <li
            key={index}
            className="lg:pl-10 pl-2 w-full text-start font-['poppins'] text-md"
          >
            <a href="" className="hover:underline hover:text-gray-800">
              {s}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default menu;
