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
      className={`"w-full h-[45px] lg:w-[450px] relative flex items-center mb-5`}
    >
      <label
        className={`${
          label ? "translate-y-[-22px] text-black" : "text-white"
        } absolute z-10 ml-2 md:text-md text-sm  font-['poppins'] align-top duration-500 transition-all font-semibold`}
        onClick={() => input.current.focus()}
      >
        {labelName}
      </label>
      <input
        ref={input}
        className="w-full h-[45px] outline-none pl-2 font-['poppins'] text-white bg-[#39393981]"
        type={type}
        onFocus={() => setLabel(true)}
        onBlur={checkinputvalue}
        required
      />
      <hr
        className={`${
          label ? "w-full" : "w-0 border-none"
        } transition-[width] duration-500 border-black absolute -bottom-0 border-2`}
      />
    </div>
  );
};

export default input;
