import React from "react";
import { Link, useParams } from "react-router-dom";
import { Product } from "./../data/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const Detail = () => {
  let submenu;
  const { nameurl } = useParams();
  const { id, name, img } = Product.find((category) =>
    category.product.some((item) => item.name === nameurl.replaceAll("_", " "))
  )?.product.find((item) => item.name === nameurl.replaceAll("_", " "));
  if (id >= 1 && id <= 10) submenu = "Coffee & Espresso";
  else if (id >= 11 && id <= 20) submenu = "Cold Brew";
  else if (id >= 21 && id <= 30) submenu = "Frappuccino Coffee";
  else if (id >= 31 && id <= 40) submenu = "Frappuccino Cream";
  else if (id >= 41 && id <= 50) submenu = "Iced Beverages";
  else if (id >= 51 && id <= 60) submenu = "Iced Tea";
  else if (id >= 61 && id <= 68) submenu = "Refresher";
  else if (id >= 69 && id <= 78) submenu = "Tea & Chocolate";
  else if (id >= 79 && id <= 88) submenu = "Bakery";
  else if (id >= 89 && id <= 98) submenu = "Lunch";
  else if (id >= 99 && id <= 105) submenu = "Salads & Snacks";
  else submenu = "Sweet Treats";
  return (
    <>
      <h1 className="lg:pl-10 md:text-xl pl-2 w-full h-[40px] sticky text-md top-[70px] z-[100] bg-[rgba(233,216,199,255)] flex items-center font-['poppins'] font-semibold border-b border-black">
        {submenu} {">"} {name}
      </h1>
      <Link to={"/menu"}>
        <FontAwesomeIcon
          icon={faBackward}
          className="mt-2 lg:pl-10 pl-2 text-3xl"
        />
      </Link>
      <div className="md:grid-cols-2 grid-cols-1 w-full h-fit grid">
        <div className="lg:h-[650px] md:h-[520px] w-full h-[400px]">
          <img src={img} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="lg:py-[100px] md:py-[10px] md:px-10 py-5 px-5 h-fit flex flex-col w-full gap-2">
          <h1 className="lg:text-xl text-lg font-['poppins'] font-bold">
            {submenu}
          </h1>
          <h1 className="lg:text-5xl text-3xl font-['poppins'] font-bold">
            {name}
          </h1>
          <h1 className="lg:text-2xl text-xl font-['poppins'] font-bold">
            Price:
            <span className="font-semibold text-lg font-sans"> $$$</span>
          </h1>
          <h1 className="lg:text-2xl text-xl font-['poppins'] font-bold">
            Ingredients:{" "}
            <span className="lg:text-xl text-lg font-normal font-sans">
              Ingredients1, Ingredients2
            </span>
          </h1>
          <h1 className="lg:text-xl text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
            repudiandae mollitia fuga ullam quidem illo ab cumque sed iusto
            nisi, quod pariatur odio. Cum praesentium ab quis ea tenetur
            tempora?
          </h1>
          <div className="w-full h-[50px] flex items-center mt-2">
            <button className="w-[200px] font-bold font-[poppins] border-2 border-black h-full text-xl text-gray-900 duration-200 hover:bg-[rgb(71,51,38)] hover:text-white">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
