import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuSide, ProductSlider } from "../component/Menu";
import {
  faBook,
  faMagnifyingGlass,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Menu = () => {
  const [openmenu, setOpenmenu] = useState(false);
  return (
    <>
      <h1 className="w-full h-[40px] sticky top-[70px] z-[100] bg-[#ffecd5] flex items-center pl-2 font-['poppins'] font-semibold border-b border-black">
        Menu {`>`} Drink
      </h1>
      <div className="w-full h-screen flex flex-row justify-between relative">
        <div
          className={`lg:w-[310px] w-full bg-[#ffecd5] lg:relative lg:translate-x-0 absolute transition-all duration-200 ${
            openmenu ? "" : "-translate-x-full"
          }`}
        >
          <div className="w-full h-screen flex items-center flex-col py-5">
            <h1 className="w-full flex justify-center items-center text-4xl font-['poppins'] font-bold mb-5 ">
              Menu{" "}
              <span className="h-full">
                <FontAwesomeIcon
                  icon={faX}
                  className="absolute right-3 text-2xl top-7 cursor-pointer"
                  onClick={() => setOpenmenu(!openmenu)}
                />
              </span>
            </h1>
            <MenuSide />
          </div>
        </div>
        <div className="lg:w-[78%] lg:px-16 md:px-10 w-full overflow-scroll bg-red-500 px-1 ">
          <div className="w-full h-[80px] bg-green-400 flex flex-row justify-between items-center">
            <h1 className="md:text-4xl text-2xl font-bold font-['inter']">
              Beverages
            </h1>
            <div
              className={`md:w-[270px] w-[220px] px-2 h-full flex justify-center items-center relative ${
                openmenu ? "-z-[1]" : ""
              }`}
            >
              <input
                type="text"
                className="w-full h-1/2 rounded-[25px] pl-3 outline-none border-none placeholder:font-['poppins']"
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
            className={`lg:hidden block mt-5 text-xl cursor-pointer`}
            onClick={() => setOpenmenu(!openmenu)}
          />
          <div>
            <ProductSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
