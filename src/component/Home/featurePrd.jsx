const featurePrd = ({ id, img, name, type, price, pricedot }) => {
  return (
    <div className="lg:h-[530px] md:h-[450px] md:w-full w-[300px] h-[350px] bg-[rgba(253,240,224,255)] rounded-[25px]">
      <div className="w-full h-[60%]">
        <img src={img} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="w-full h-[40%] p-4 py-2 flex flex-col justify-center">
        <h1 className="md:text-2xl text-lg font-bold font-['poppins'] text-[rgb(71,51,38)]">
          {name}
        </h1>
        <h1 className="lg:my-2 text-[13px] font-semibold text-[rgb(71,51,38)] font-['inter']">
          {type}
        </h1>
        <h1 className="lg:text-3xl text-xl font-['poppins'] font-bold text-[rgb(71,51,38)]">
          {price}
          <span className="lg:text-xl text-sm font-semibold">{pricedot}</span>
        </h1>
        <div className=" md:h-[50px] w-full h-[50px] md:mt-3 mt-0">
          <button className="lg:text-lg w-fit md:px-16 h-2/3 bg-[rgb(71,51,38)] text-white px-12 rounded-[20px] text-sm font-bold font-['poppins']">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default featurePrd;
