import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
const productSlider = ({ title, product }) => {
  const sliderRef = useRef(null);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);

  const updateArrowsVisibility = () => {
    const slider = sliderRef.current;
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    if (slider.scrollLeft > 0) leftArrowRef.current.classList.remove("hidden");
    else leftArrowRef.current.classList.add("hidden");

    if (slider.scrollLeft <= maxScroll)
      rightArrowRef.current.classList.remove("hidden");
    else rightArrowRef.current.classList.add("hidden");
  };

  const scrollSliderLeft = () => {
    const slider = sliderRef.current;
    slider.scrollLeft -= 300;
    updateArrowsVisibility();
  };

  const scrollSliderRight = () => {
    const slider = sliderRef.current;
    slider.scrollLeft += 300;
    updateArrowsVisibility();
  };

  useEffect(() => {
    const slider = sliderRef.current;
    updateArrowsVisibility();
    slider.addEventListener("scroll", updateArrowsVisibility);
    return () => {
      slider.removeEventListener("scroll", updateArrowsVisibility);
    };
  }, []);
  return (
    <div className="max-w-full w-[3150px] mt-10 relative">
      <div className="w-full h-[60px] flex flex-row gap-5 justify-between items-center">
        <h1 className="text-[18px] font-bold font-['poppins']">{title}</h1>
        <div className="w-[90px] h-[20px]">
          <Link
            to={`category/${title.replaceAll(" ", "_")}`}
            className="size-full text-[14px] flex justify-center items-center rounded-[10px] border border-black  font-bold font-['inter'] hover:bg-[rgb(71,51,38)] hover:text-white duration-200"
          >
            View All
          </Link>
        </div>
      </div>
      <div className="absolute z-[97] top-[50%] left-1 block cursor-pointer">
        <FontAwesomeIcon
          ref={leftArrowRef}
          icon={faCaretLeft}
          className={`text-3xl text-black opacity-80 hover:opacity-100`}
          onClick={scrollSliderLeft}
        />
      </div>
      <div
        ref={sliderRef}
        className={`slider relative w-full overflow-x-scroll scroll-smooth h-auto mt-5`}
      >
        <div
          className={` flex flex-row gap-3 h-fit`}
          style={{ width: `${310 * product.length}px` }}
        >
          {product.map(({ id, name, img }) => (
            <Link
              to={`detail/${name.replaceAll(" ", "_")}`}
              key={id}
              className="w-[300px]"
            >
              <div className=" w-full h-[300px] bg-[rgba(233,216,199,255)] mb-3">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-md 2x:text-lg font-normal font-['poppins']">
                {name}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute z-[97] top-[50%] right-1 block cursor-pointer">
        <FontAwesomeIcon
          ref={rightArrowRef}
          icon={faCaretRight}
          className={`text-3xl text-black opacity-80 hover:opacity-100`}
          onClick={scrollSliderRight}
        />
      </div>
    </div>
  );
};

export default productSlider;
