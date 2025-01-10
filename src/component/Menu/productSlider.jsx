import React from "react";
import img from "./../../assets/images/featurePrd1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
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
    <div className="w-full mt-5 relative">
      <div className="w-full h-[60px] flex flex-row gap-5 items-center">
        <h1 className="text-md font-bold font-['poppins']">{title}</h1>
        <div className="w-[90px] h-[20px]">
          <button className="size-full flex justify-center items-center rounded-[10px] border border-black text-[10px] font-bold font-['poppins']">
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
          className={` flex flex-row gap-3`}
          style={{ width: `${315 * product.length}px` }}
        >
          {product.map(({ name, img }, index) => (
            <div key={index} className="w-[300px]">
              <div className="w-full bg-[rgba(233,216,199,255)] mb-3">
                <img src={img} alt="" className="w-full h-full object-contain"/>
              </div>
              <div className="text-xl font-medium font-['poppins']">
                {name}
              </div>
            </div>
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
