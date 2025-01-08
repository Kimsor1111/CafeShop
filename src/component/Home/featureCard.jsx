import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cardFeature = ({ icon, title, des }) => {
  const [ishover, setIshover] = React.useState(false);
  const CardMouseover = () => {
    setIshover(true);
  };
  const CardMouseout = () => {
    setIshover(false);
  };
  return (
    <div
      className={`xl:w-[90%] lg:flex-col lg:rounded-[40px] lg:justify-center lg:px-0 px-10 items-center justify-between w-full h-full duration-150 flex flex-row cursor-pointer ${
        ishover ? "bg-[rgb(71,51,38)]" : "bg-[rgba(253,240,224,255)] "
      }`}
      onMouseOver={CardMouseover}
      onMouseOut={CardMouseout}
    >
      <div className="xl:h-[90px] lg:h-[70px] lg:justify-center lg:w-full h-[50px] w-fit flex items-center">
        <div className="xl:size-[70px] lg:size-[50px] size-[40px] bg-[rgba(253,240,224,255)] rounded-full flex justify-center items-center">
          <FontAwesomeIcon
            icon={icon}
            className="xl:text-2xl text-xl"
          ></FontAwesomeIcon>
        </div>
      </div>
      <h1
        className={`xl:text-2xl lg:ml-0 lg:text-xl ml-1 text-sm text-md mt-2 pb-2 font-bold font-['inter'] ${
          ishover ? "text-[rgba(253,240,224,255)]" : "text-black"
        }`}
      >
        {title}
      </h1>
      <h1
        className={`xl:text-[17px] leading-[23px] lg:block text-sm px-5 hidden ${
          ishover ? "text-[rgba(253,240,224,255)]" : "text-[rgb(71,51,38)]"
        } mt-2`}
      >
        {des}
      </h1>
      <div className="xl:h-[60px] lg:w-full lg:h-[50px] lg:px-5 lg:mt-6 flex w-fit h-full items-center">
        <button
          className={`xl:w-[180px] xl:h-[40px] xl:text-lg lg:w-[140px] lg:h-[35px] w-[110px] ${
            ishover
              ? "text-[rgb(71,51,38)] bg-[rgba(253,240,224,255)]"
              : "text-white bg-[rgb(71,51,38)]"
          } font-bold text-md font-['inter'] rounded-[25px]`}
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default cardFeature;
