import React from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faX,
  faMagnifyingGlass,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { Product } from "../data/Menu";
import { useState } from "react";
import { MenuSide } from "../component/Menu";

const CategoryDetail = () => {
  let foodsubmenu = ["Bakery", "Lunch", "Salads & Snacks", "Sweet Treats"];
  const { category } = useParams();
  const { title, product } = Product.find(
    (p) => p.title === category.replaceAll("_", " ")
  );
  let menu = foodsubmenu.includes(category.replaceAll("_", " "))
    ? "Foods"
    : "Beverages";
  const [openmenu, setOpenmenu] = useState(false);
  const [opensearch, setOpensearch] = useState(false);
  return (
    <>
      <h1 className="lg:pl-10 md:text-xl pl-2 w-full h-[40px] sticky text-md top-[70px] z-[100] bg-[rgba(233,216,199,255)] flex items-center font-['poppins'] font-semibold border-b border-black">
        Menu {">"} {menu} {">"} {title}
      </h1>
      <div className="w-full h-screen flex flex-row justify-between relative">
        <div
          className={`lg:w-[310px] xl:w-[22%] w-full lg:relative lg:translate-x-0 bg-[rgba(233,216,199,255)] absolute transition-all duration-500 pt-2 z-[97] ${
            openmenu ? "" : "-translate-x-full"
          }`}
        >
          <div className="w-full h-screen flex items-center flex-col">
            <h1 className="lg:pl-10 pl-2 w-full flex items-center text-2xl font-['poppins'] font-bold ">
              {title}
              <span className="h-full">
                <FontAwesomeIcon
                  icon={faX}
                  className="absolute right-3 text-2xl top-[15px] cursor-pointer lg:hidden block"
                  onClick={() => setOpenmenu(!openmenu)}
                />
              </span>
            </h1>
            <MenuSide />
            <Link className="w-full" to={"/menu"}>
              <FontAwesomeIcon
                icon={faBackward}
                className="mt-2 lg:pl-10 pl-2 text-3xl"
              />
            </Link>
          </div>
        </div>
        <div className="lg:w-[78%] w-full pb-12 pt-5 lg:px-5 px-2 overflow-scroll">
          <div className="md:flex-row md:items-center w-full h-[70px] flex flex-row justify-between items-center">
            <h1 className="md:text-4xl w-[80%] text-xl font-bold font-['inter']">
              {menu} <span classname="font-['poppins']">{">"}</span> {title}
            </h1>
            <div
              className={`lg:z-0 md:w-[270px] w-[180px] px-2 h-full flex justify-end items-center relative ${
                openmenu ? "-z-[1]" : ""
              }`}
            >
              <input
                type="text"
                className={`md:block ease-linear duration-[0.4s] h-1/2 rounded-[25px] outline-none border-none placeholder:font-['poppins']
                ${opensearch ? "w-full pl-3" : "w-0"}`}
                placeholder="Search"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute right-5 text-xl cursor-pointer"
                onClick={() => setOpensearch(!opensearch)}
              ></FontAwesomeIcon>
            </div>
          </div>
          <FontAwesomeIcon
            icon={faBook}
            className={`lg:hidden block mt-5 text-3xl cursor-pointer mb-5`}
            onClick={() => setOpenmenu(!openmenu)}
          />
          <div className="xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 grid-cols-2 grid gap-3 w-full place-items-center">
            {product.map(({ id, name, img }) => (
              <Link
                key={id}
                to={`../menu/detail/${name.replaceAll(" ", "_")}`}
                className="flex flex-col items-center"
              >
                <div>
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="lg:text-lg md:text-md text-sm font-['poppins']">
                  {name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryDetail;
