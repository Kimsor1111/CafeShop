import { useRef, useState } from "react";

const input = ({ labelName, type }) => {
  const [label, setLabel] = useState(false);
  const input = useRef(null);
  const checkinputvalue = () => {
    const inputValue = input.current.value;
    if (inputValue == "") setLabel(false);
    else setLabel(true);
  };
  return (
    <div
      className={`"w-full h-[45px] lg:w-[450px] relative flex items-center mt-8 mb-5`}
    >
      <label
        className={`${
          label ? "translate-y-[-35px]" : ""
        } absolute z-10 ml-2 md:text-md text-md text-black font-['poppins'] align-top duration-500 transition-all font-semibold`}
        onClick={() => input.current.focus()}
      >
        {labelName}
      </label>
      <input
        ref={input}
        className="w-full h-[45px] outline-none rounded-none   pl-2 font-['poppins'] bg-[#92929298]"
        type={type}
        onFocus={() => setLabel(true)}
        onBlur={checkinputvalue}
        required
      />
      <hr
        className={`${
          label ? "w-full border-[rgb(71,51,38)]" : "w-0 border-[#b6b5b598]"
        } transition-all duration-500 absolute bottom-0 border-2`}
      />
    </div>
  );
};

export default input;
