import React from "react";
import { Outlet } from "react-router-dom";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Footer from "../Pages/Footer/Footer";
import MyWorks from "../Pages/MyWorks/MyWorks";
import NavBar from "../Pages/NavBar/NavBar";
import Services from "../Pages/Services/Services";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <About></About>
      <Services></Services>
      <MyWorks></MyWorks>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Main;
