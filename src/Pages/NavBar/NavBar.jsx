import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <Link to="/allWorks">Projects</Link>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </>
  );

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScroll(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div> 
      <div>
        <div className={`navbar fixed   z-10 text-white ${
        scroll ? 'bg-[#111111] ' : 'bg-transparent '} `}>
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-[#111111]"
              >
                {navOptions}
              </ul>
            </div>
            <img className="w-10 hidden md:block" src="./lo.png" alt="" />
            {/* <Link className=" mx-2 normal-case text-xl  hover: ">Farmhouse Academy</Link> */}
          </div>
          <div className="navbar-center hidden lg:flex  ">
            <ul className="menu menu-horizontal px-1 ">{navOptions}</ul>
          </div>
          <div className="navbar-end">
            <a
              href="#contact"
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white uppercase">Hire me</span>
              </span>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
