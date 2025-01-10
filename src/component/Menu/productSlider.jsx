import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const productSlider = ({ title, product, sliderindex }) => {
  const scrollSliderLeft = () => {
    var slider = document.querySelector(`.slider${sliderindex}`);
    slider.scrollLeft = slider.scrollLeft - 300;
  };
  const scrollSliderRight = () => {
    var slider = document.querySelector(`.slider${sliderindex}`);
    slider.scrollLeft = slider.scrollLeft + 300;
  };
  return (
    <div className="w-full mt-10 relative">
      <div className="w-full h-[60px] flex flex-row gap-5 justify-between items-center">
        <h1 className="text-[18px] font-bold font-['poppins']">{title}</h1>
        <div className="w-[90px] h-[20px]">
          <button className="size-full text-[14px] flex justify-center items-center rounded-[10px] border border-black  font-bold font-['inter'] hover:bg-[rgb(71,51,38)] hover:text-white duration-200">
            View All
          </button>
        </div>
      </div>
      <div className="absolute z-[97] top-[50%] left-1 lg:block hidden cursor-pointer">
        <FontAwesomeIcon
          icon={faCaretLeft}
          className="text-3xl opacity-50 hover:opacity-100"
          onClick={scrollSliderLeft}
        />
      </div>
      <div
        className={`slider${sliderindex} relative w-full overflow-x-scroll scroll-smooth h-auto mt-5`}
      >
        <div
          className={` flex flex-row gap-3 h-fit`}
          style={{ width: `${315 * product.length}px` }}
        >
          {product.map(({ id, name, img }, index) => (
            <Link to={id.toString()} key={index} className="w-[300px]">
              <div className="w-full h-[300px] bg-[rgba(233,216,199,255)] mb-3">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-lg font-normal font-['poppins']">{name}</div>
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute z-[97] top-[50%] right-1 lg:block hidden cursor-pointer">
        <FontAwesomeIcon
          icon={faCaretRight}
          className="text-3xl opacity-50 hover:opacity-100"
          onClick={scrollSliderRight}
        />
      </div>
    </div>
  );
};

export default productSlider;
