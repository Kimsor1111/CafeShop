import React from "react";
import img from "./../../assets/images/about.jpg";

const About = () => {
  return (
    <>
      <div className="w-full h-fit md:px-[70px] px-[10px] py-10">
        <div className="w-full h-full grid py-5 lg:grid-cols-2 grid-cols-1 gap-5">
          <div className="pt-2 px-3">
            <h1 className="text-xl font-['poppins'] px-5 font-bold">
              How We Started
            </h1>
            <h1 className="lg:text-6xl text-3xl xl:pt-20 pt-12 px-5 pb-5 font-semibold font-['inter']">
              From Bean to Cup: Our Journey
            </h1>
            <h1 className="lg:text-xl text-lg px-5 mb-5">
              Welcome to BRANDNAME, where every sip tells a story. Founded on a
              love for coffee and a passion for connection, we're more than just
              a café - we're a community hub. From ethically sourced beans to
              expertly crafted brews, our mission is to create a cozy space
              where friends and flavors come together. Whether you're here to
              catch up with friends, get lost in a book, or enjoy sometime,
              we're delighted to serve you.
            </h1>
          </div>
          <div className="px-5">
            <img src={img} alt="" className="rounded-[25px]" />
            <div className="w-full flex flex-row py-5 justify-center flex-wrap md:gap-[1%]">
              <div className="md:w-[48%] w-full h-[130px] mb-5 bg-gray-500/40 flex justify-center cursor-pointer rounded-xl flex-col pl-5">
                <h1 className="text-3xl font-bold font-sans">6</h1>
                <h1 className="text-md text-gray-700">Years of Experience</h1>
              </div>
              <div className="md:w-[48%] w-full h-[130px] mb-5 bg-gray-500/40 flex justify-center cursor-pointer rounded-xl flex-col pl-5">
                <h1 className="text-3xl font-bold font-sans">100+</h1>
                <h1 className="text-md text-gray-700">Products Selling</h1>
              </div>
              <div className="md:w-[48%] w-full h-[130px] mb-5 bg-gray-500/40 flex justify-center cursor-pointer rounded-xl flex-col pl-5">
                <h1 className="text-3xl font-bold font-sans">100k+</h1>
                <h1 className="text-md text-gray-700">Customer Served</h1>
              </div>
              <div className="md:w-[48%] w-full h-[130px] mb-5 bg-gray-500/40 flex justify-center cursor-pointer rounded-xl flex-col pl-5">
                <h1 className="text-3xl font-bold font-sans">50+</h1>
                <h1 className="text-md text-gray-700">Shop Location</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
