import React from "react";
import Navbar from "./../component/Navbar";
import Footer from "./../component/Footer";
import { Outlet } from "react-router-dom";
import Scroll from "../component/Scroll";
const RootLayout = () => {
  return (
    <>
      <Scroll />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
