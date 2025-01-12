import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import GIFIMG from "./../assets/images/error.gif"

const error = () => {
  return (
    <div className="w-full bg-white h-fit flex justify-center items-center flex-col gap-3 p-5">
      <h1 className="font-['inter'] text-8xl">404</h1>
      <img src={GIFIMG} alt="" className="w-[500px] h-auto object-contain"/>
      <h1 className="font-['inter'] text-3xl">Page not found</h1>
      <h1 className="text-gray-800 font-['inter'] text-xl text-center">
        The page you are looking for doesn't exist or an other error occured.{" "}
        <br />
        Go back, or head over to our website to choose a new direction.
      </h1>
      <Link
        to={"/"}
        className="w-fit h-[40px] bg-[rgb(71,51,38)] px-5 flex justify-center items-center rounded-lg text-white font-bold font-['inter']"
      >
        Back Home Page
      </Link>
    </div>
  );
};

export default error;
