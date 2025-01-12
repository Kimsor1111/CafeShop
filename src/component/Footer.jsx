import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footer = [
    {
      title: "Company",
      submenu: ["About", "Careers", "Brand Center", "Blog"],
    },
    {
      title: "Our Product",
      submenu: ["Drink", "Dessert", "Sweet", "Frappuchino"],
    },
    {
      title: "Policy",
      submenu: [
        "Privacy Policy",
        "Licensing",
        "Terms & Conditions",
        "Franchise",
      ],
    },
    {
      title: "Contact Us",
      submenu: ["Facebook", "Telegram", "Instagram", "Twitter"],
    },
  ];
  return (
    <>
      <div className="w-full h-[250px] bg-[rgb(170,144,120)] flex flex-col np justify-center items-center gap-10">
        <h1 className="text-center md:text-5xl text-3xl text-white font-bold font-['poppins']">
          Subscribe Us
        </h1>
        <div className="lg:flex-row flex-col w-full h-fit flex justify-center items-center gap-8">
          <input
            type="email"
            className="lg:w-[450px] w-[90%] h-[35px] px-2 py-6 outline-none border-none text-xl font-['poppins']"
            placeholder="Email"
          />
          <button className="lg:w-fit w-[90%] h-[35px] ease-linear bg-[rgb(170,144,120)] border-2 border-white px-14 py-6 flex justify-center items-center text-white font-bold text-xl font-['poppins'] duration-200 hover:text-gray-900 hover:bg-white">
            Subscribe
          </button>
        </div>
      </div>
      <footer className="bg-[rgb(170,144,120)] py-4">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            {footer.map(({ title, submenu }, index) => (
              <div key={index}>
                <h2 className="mb-6 text-md font-bold text-[rgb(71,51,38)] uppercase font-['poppins']">
                  {title}
                </h2>
                <ul className="text-white font-medium font-['inter']">
                  {submenu.map((s) => (
                    <li key={s} className="mb-4">
                      <Link to={s} className=" hover:underline">
                        {s}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="w-full border-y-2 py-1 border-[rgb(71,51,38)] font-['poppins'] text-sm md:text-lg text-center font-bold text-[rgb(71,51,38)]">
            All Right <sup className="text-[13px]">©</sup> Reserved To ANGKIMSOR
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
