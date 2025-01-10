import React from "react";
import img from "./../../assets/images/featurePrd1.jpg";
const productSlider = () => {
  return (
    <div className="w-full bg-sky-500 mt-5">
      <div className="w-full h-[60px] bg-amber-400 flex flex-row gap-5 items-center">
        <h1 className="text-md font-bold font-['poppins']">
          Coffee & Espresso
        </h1>
        <div className="w-[90px] h-[20px]">
          <button className="size-full flex justify-center items-center rounded-[10px] border border-black text-[10px] font-bold font-['poppins']">
            View All
          </button>
        </div>
      </div>
      {/* <div className="md:grid-cols-3 grid-rows-1 w-full h-auto mt-5 grid grid-cols-2 bg-orange-500"> */}
      <div className="w-full overflow-x-auto h-auto mt-5 bg-orange-500">
        <div className="w-[2000px] flex flex-row gap-3">
          <div className="bg-lime-500 ">
            <div>
              <img src={img} alt="" />
            </div>
          </div>
          <div className="bg-lime-500 ">
            <div>
              <img src={img} alt="" />
            </div>
          </div>
          <div className="bg-lime-500 ">
            <div>
              <img src={img} alt="" />
            </div>
          </div>
          <div className="bg-lime-500 ">
            <div>
              <img src={img} alt="" />
            </div>
          </div>
          <div className="bg-lime-500 ">
            <div>
              <img src={img} alt="" />
            </div>
          </div>
          <div className="bg-lime-500 ">
            <div>
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productSlider;
