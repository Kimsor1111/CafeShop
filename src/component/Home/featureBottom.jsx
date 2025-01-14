
const featureBottom = ({title , des , img}) => {
  return (
    <div className="lg:h-[500px] md:grid-cols-2 md:h-[400px] relative w-full h-[600px] my-9 grid grid-cols-1">
      <div data-aos="fade-right" className="lg:h-[500px] md:h-[400px] w-full h-[250px] flex justify-center items-center py-3">
        <img
          src={img}
          alt=""
          className="md:w-full w-[300px] h-full object-cover md:rounded-r-[60px] rounded-md"
        />
      </div>
      <div data-aos="fade-left" className="md:relative md:top-0 md:justify-center justify-center md:items-start md:h-full w-full h-[340px] items-center absolute top-[260px] flex flex-col px-10">
        <h1 className="lg:text-5xl md:text-3xl text-2xl text-black font-bold font-['poppins']">
          {title}
        </h1>
        <p className="xl:text-lg text-sm text-gray-800 font-['poppins'] my-5">
          {des}
        </p>
        <button className=" md:h-[40px] py-5 px-7 mb-5 flex justify-center items-center w-fit h-[30px] relative rounded-[20px] bg-[rgb(71,51,38)] hover:bg-[rgb(80,60,50)] text-white font-bold text-lg font-['poppins']">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default featureBottom;
