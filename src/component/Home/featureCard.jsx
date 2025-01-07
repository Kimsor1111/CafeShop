import React from "react";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cardFeature = () => {
  return (
    <div className="w-full h-full bg-[rgb(71,51,38)] rounded-[40px] flex flex-col justify-center items-center cursor-pointer">
      <div className="w-full h-[70px] flex justify-center items-center">
        <div className="w-[50px] h-[50px] bg-[rgba(253,240,224,255)] rounded-full flex justify-center items-center">
          <FontAwesomeIcon icon={faTag} className="text-xl"></FontAwesomeIcon>
        </div>
      </div>
      <h1 className="card-title text-xl font-bold font-['inter'] text-white">
        Enjoy 15% Off
      </h1>
      <h1 className="cart-des text-sm px-5 text-[rgba(253,240,224,255)] ">
        Get 15% off on all your favorite items! Whether you're craving a
        delicious dessert, a refreshing drink, or a cozy coffee moment, now is
        the perfect time to indulge. Hurry—this offer won't last long! Visit us
        today and savor the savings. Don't miss it out!
      </h1>
      <div className="w-full h-[50px] mt-6 flex items-center px-5">
        <button className="card-btn w-[140px] h-[35px] bg-[rgba(253,240,224,255)] font-bold text-md font-['inter'] rounded-[25px]">
          See More
        </button>
      </div>
    </div>
  );
};

export default cardFeature;
