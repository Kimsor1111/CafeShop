import {
  faBars,
  faHome,
  faBook,
  faContactBook,
  faX,
  faLocationDot,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
const NavbarList = [
  {
    icon: faHome,
    name: "Home",
    path: "/",
  },
  {
    icon: faBook,
    name: "Menu",
    path: "/menu",
  },
  {
    icon: faAddressCard,
    name: "About",
    path: "/about",
  },
  {
    icon: faContactBook,
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [isopen, setIsopen] = useState(false);

  const handleMenu = () => {
    setIsopen(!isopen);
  };

  return (
    <>
      <div
        className={
          isopen
            ? "lg:hidden top-[70px] translate-x-0 transition-all duration-500 w-full h-screen bg-[rgb(170,144,120)] right-0 fixed z-[101]"
            : "lg:hidden top-[70px] translate-x-full transition-all duration-500 w-full h-screen bg-[rgb(170,144,120)] right-0 fixed z-[101]"
        }
      >
        <ul className="w-full overflow-hidden">
          {NavbarList.map(({ icon, name, path }, index) => (
            <li
              onClick={() => setIsopen(false)}
              key={index}
              className="w-full h-[60px] mt-5"
            >
              <Link
                to={path}
                className="size-full flex flex-row gap-5 items-center"
              >
                <div className="w-[70px] h-full flex justify-center items-center text-white text-3xl">
                  <FontAwesomeIcon icon={icon} />
                </div>
                <h1 className="text-3xl text-white font-bold font-['poppins']">
                  {name}
                </h1>
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-full mt-5">
          <Link className="text-xl ml-5 text-white font-bold">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-white" />
            Find a store
          </Link>
        </div>
      </div>
      <nav className="w-full h-[70px] bg-[rgb(170,144,120)] sticky top-0 z-[101]">
        <div className="lg:px-10 size-full px-2 flex flex-row justify-between">
          <h1
            className='lg:text-4xl w-fit h-full text-2xl flex items-center font-bold font-["inter"] text-white'
            style={{ letterSpacing: "1.5px" }}
          >
            BrandName
          </h1>
          <ul className="lg:flex w-fit h-full flex-row items-center gap-5 px-5 hidden">
            {NavbarList.map(({ name, path }, index) => (
              <li
                onClick={() => setIsopen(false)}
                key={index}
                className="w-fit h-1/2 relative after:absolute after:content-[''] after:bottom-0 after:h-[5px] after:bg-white after:w-0 hover:after:w-full after:left-0 after:transition-all after:duration-500"
              >
                <Link
                  to={path}
                  className="px-5 h-full text-xl font-bold font-['poppins'] flex justify-center items-center text-white"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="w-fit h-full flex flex-row items-center gap-1">
            <div className="md:text-lg text-sm w-[130px] h-1/2 flex justify-center items-center  text-white font-bold cursor-pointer">
              Find a Store
              <FontAwesomeIcon
                icon={faLocationDot}
                className="ml-2 lg:text-2xl text-xl cursor-pointer text-white"
              />
            </div>
            <div className="lg:hidden w-[35px] h-1/2 justify-center items-center flex">
              <FontAwesomeIcon
                icon={isopen ? faX : faBars}
                className="lg:text-2xl text-xl cursor-pointer text-white"
                onClick={handleMenu}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
