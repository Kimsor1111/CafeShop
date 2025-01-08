import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[250px] bg-[rgb(170,144,120)] flex flex-col mt-10 justify-center items-center gap-10">
        <h1 className="text-center text-5xl text-white font-bold font-['poppins']">
          Subscribe Us
        </h1>
        <div className="lg:flex-row flex-col w-full h-fit flex justify-center items-center gap-8">
          <input
            type="email"
            className="lg:w-[450px] w-[90%] h-[35px] px-2 py-6 outline-none text-xl font-['poppins']"
            placeholder="Email"
          />
          <button className="lg:w-fit w-[90%] h-[35px] ease-linear bg-[rgb(170,144,120)] border-2 border-white px-14 py-6 flex justify-center items-center text-white font-bold text-xl font-['poppins'] duration-200 hover:text-gray-900 hover:bg-white">
            Subscribe
          </button>
        </div>
      </div>
      <footer className="bg-[rgb(170,144,120)]">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-xl font-bold text-[rgb(71,51,38)] uppercase font-['poppins']">
                Company
              </h2>
              <ul className="text-white font-medium font-['inter']">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Brand Center
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-xl font-bold text-[rgb(71,51,38)] uppercase font-['poppins']">
                Help center
              </h2>
              <ul className="text-white font-medium font-['inter']">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Discord Server
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-xl font-bold text-[rgb(71,51,38)] uppercase font-['poppins']">
                Legal
              </h2>
              <ul className="text-white font-medium font-['inter']">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Licensing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-xl font-bold text-[rgb(71,51,38)] uppercase font-['poppins']">
                Download
              </h2>
              <ul className="text-white font-medium font-['inter']">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    iOS
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Android
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Windows
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    MacOS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
