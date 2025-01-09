import { MenuSide } from "../component/Menu";
import { MenuDetail } from "./../data/Drink";
const Menu = () => {
  return (
    <>
      <h1 className="w-full h-[40px] sticky top-[70px] z-[100] bg-[#ffecd5] flex items-center pl-2 font-['poppins'] font-semibold border-b border-black">
        Menu {`>`} Drink
      </h1>
      <div className="w-full h-screen">
        <div className="w-[300px] lg:block hidden bg-[#ffecd5]">
          <div className="w-full h-screen flex items-center flex-col py-5">
            <h1 className="text-4xl font-['poppins'] font-bold mb-5">Menu</h1>
            <MenuSide />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
