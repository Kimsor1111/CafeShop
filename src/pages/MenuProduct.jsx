import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuSide, ProductSlider } from "../component/Menu";
import { Product } from "../data/Menu";
import {
  faBook,
  faMagnifyingGlass,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Outlet } from "react-router-dom";
const Menu = () => {
  const [openmenu, setOpenmenu] = useState(false);
  return (
    <>
      <h1 className="lg:pl-10 pl-2 w-full h-[40px] sticky top-[70px] z-[100] bg-[rgba(233,216,199,255)] flex items-center font-['poppins'] font-semibold border-b border-black">
        Menu {">"} Beverages & Foods
      </h1>
      <div className="w-full h-screen flex flex-row justify-between relative">
        <div
          className={`lg:w-[310px] xl:w-[22%] w-full lg:relative lg:translate-x-0 bg-[rgba(233,216,199,255)] absolute transition-all duration-500 pt-2 z-[97] ${
            openmenu ? "" : "-translate-x-full"
          }`}
        >
          <div className="w-full h-screen flex items-center flex-col">
            <h1 className="lg:pl-10 pl-2 w-full flex items-center text-4xl font-['poppins'] font-bold ">
              Menu
              <span className="h-full">
                <FontAwesomeIcon
                  icon={faX}
                  className="absolute right-3 text-2xl top-[15px] cursor-pointer lg:hidden block"
                  onClick={() => setOpenmenu(!openmenu)}
                />
              </span>
            </h1>
            <MenuSide />
          </div>
        </div>
        <div className="lg:w-[78%] lg:px-16 md:px-10 w-full overflow-scroll px-5 ">
          <div className="w-full h-[70px] flex flex-row justify-between items-center">
            <h1 className="md:text-4xl w-[70%] text-lg font-bold font-['inter']">
              Beverages & Foods
            </h1>
            <div
              className={`lg:z-0 md:w-[270px] w-[50px] px-2 h-full flex justify-center items-center relative ${
                openmenu ? "-z-[1]" : ""
              }`}
            >
              <input
                type="text"
                className="md:block hidden w-full h-1/2 rounded-[25px] pl-3 outline-none border-none placeholder:font-['poppins']"
                placeholder="Search"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute right-5 text-xl cursor-pointer"
              ></FontAwesomeIcon>
            </div>
          </div>
          <FontAwesomeIcon
            icon={faBook}
            className={`lg:hidden block mt-5 text-3xl cursor-pointer`}
            onClick={() => setOpenmenu(!openmenu)}
          />
          <div className="mb-20">
            {Product.map(({ title, product }, index) => (
              <ProductSlider
                key={index}
                sliderindex={index + 1}
                title={title}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <Outlet /> */}
    </>
  );
};

export default Menu;
