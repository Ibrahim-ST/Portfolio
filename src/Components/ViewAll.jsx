/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom"; 

const ViewAll = ({ title, aosData }) => {
  return (
    <>
      <section>
        <p
          data-aos="zoom-in-left"
          className="flex justify-center my-2 hover:cursor-pointer"
        >
          <Link to="/allWorks" 
              data-aos={aosData}
              data-aos-delay="300"
              data-aos-duration="550"
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white uppercase">{title}</span>
              </span>             
          </Link>
        </p>
      </section>
    </>
  );
};

export default ViewAll;
