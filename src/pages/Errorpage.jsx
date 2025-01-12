import React from "react";
import Navbar from "./../component/Navbar";
import Footer from "./../component/Footer";
import { Outlet } from "react-router-dom";
import Scroll from "../component/Scroll";
import Error from "../component/error";
const Errorpage = () => {
  return (
    <>
      <Scroll />
      <Navbar />
      <Error />
      <Outlet />
      <Footer />
    </>
  );
};

export default Errorpage;
