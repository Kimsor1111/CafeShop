import React from "react";

const featureMid = ({ title, des, img, featureindex }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="w-full h-[480px] mt-10 flex flex-row relative">
        {featureindex % 2 != 0 ? (
          <>
            <div className="lg:w-[38%] lg:relative lg:bg-[rgb(71,51,38)] bg-black/50 absolute w-full left-0 h-full flex flex-col justify-center px-5">
              <h1 className="lg:text-5xl text-2xl font-['poppins'] font-bold text-white">
                {title}
              </h1>
              <h1 className="lg:w-fit w-[500px] lg:pr-0 text-md text-sm font-['poppins'] text-white my-5 pr-[130px]">
                {des}
              </h1>
              <div className="items-center w-full h-[45px] flex">
                <button className="lg:px-16 px-10 w-fit h-full bg-[rgba(253,240,224,255)] text-xl font-bold font-['inter'] rounded-[25px]">
                  Find Out
                </button>
              </div>
            </div>
            <div className="lg:w-[62%] w-full h-full">
              <img src={img} alt="" className="w-full h-full object-cover " />
            </div>
          </>
        ) : (
          <>
            <div className="lg:w-[62%] w-full h-full">
              <img src={img} alt="" className="w-full h-full object-cover " />
            </div>
            <div className="lg:w-[38%] lg:relative lg:items-center lg:bg-[rgb(71,51,38)] items-end bg-black/50 absolute w-full right-0 h-full flex flex-col justify-center px-5">
              <h1 className="lg:text-5xl text-2xl font-['poppins'] font-bold text-white">
                {title}
              </h1>
              <h1 className="lg:w-fit w-[500px] lg:pl-0 text-md text-sm font-['poppins'] text-white my-5 pl-[130px]">
                {des}
              </h1>
              <div className="items-center w-full h-[45px] flex lg:justify-start justify-end">
                <button className="lg:px-16 px-10 w-fit h-full bg-[rgba(253,240,224,255)] text-xl font-bold font-['inter'] rounded-[25px]">
                  Find Out
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default featureMid;
