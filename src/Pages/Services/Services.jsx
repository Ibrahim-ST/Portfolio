import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import SectionTitle from "../../Components/SectionTitle";
import CountUp from 'react-countup';


const Services = () => {
  return (
    <div id="services" className="overflow-hidden font-poppins">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="MY SPECIALIZATIONS" sub={"I offer comprehensive services to create scalable and responsive web apps. From concept and design to implementation and deployment, I provide solutions tailored to your unique needs. "}></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5 w-3/4 sm:w-full mx-auto">
          <div
          data-aos="zoom-out-up"          
          data-aos-duration="500"
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:border-[#ff5478] hover:border-2 ">
            <Player
              autoplay
              loop
              src="https://assets10.lottiefiles.com/packages/lf20_jtbfg2nb.json"
              style={{ height: "200px", width: "200px" }}
            ></Player>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900  ">
                  Responsive web development
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700  ">
                Optimized for different screen sizes, providing a consistent and
                enjoyable experience across desktops, tablets, and smartphones.
              </p>
            </div>
          </div>
          <div
          data-aos="zoom-out-up"          
          data-aos-duration="500"
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:border-[#ff5478] hover:border-2">
            <Player
              autoplay
              loop
              src="https://assets10.lottiefiles.com/packages/lf20_uzvwjpkq.json"
              style={{ height: "200px", width: "200px" }}
            ></Player>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900  ">
                  UI Design Integration
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700  ">
                Collaborate with UI/UX designers to bring designs to life,
                ensuring pixel-perfect implementations and maintaining design
                consistency.
              </p>
            </div>
          </div>
          <div
          data-aos="zoom-out-up"
          data-aos-duration="500"
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:border-[#ff5478] hover:border-2">
            <Player
              autoplay
              loop
              src="https://assets2.lottiefiles.com/private_files/lf30_zSGy1w.json"
              style={{ height: "200px", width: "200px" }}
            ></Player>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900  ">
                  Front-End Web Development
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700  ">
                Building and maintaining modern, responsive, and user-friendly
                web apps using React.js and Tailwind CSS. Focusing on creating
                seamless UI.
              </p>
            </div>
          </div>
        </div>

        <div        
        className="mx-4 sm:mx-0 grid grid-cols-1 md:grid-cols-4 bg-white p-6 rounded-3xl justify-items-center">
          <div data-aos="fade-up-right"          
        data-aos-duration="800"
         className="m-5 w-44 h-36 p-6 bg-[#FBFBFC]  border-4 border-[#ff5478] rounded-lg shadow hover:bg-gray-100 text-center flex items-center
          transition ease-in-out    hover:-translate-y-2   duration-300 hover:border-[#ff5478] hover:border-2 uppercase
          ">
            <p className="font-bold text-lg"><CountUp end={30} duration={15}/>+ <br /> Projects completed</p>
          </div>
          <div data-aos="fade-down-left"          
        data-aos-duration="800"
         className="m-5 w-44 h-36 p-6 bg-[#FBFBFC]  border-4 border-[#ff5478] rounded-lg shadow hover:bg-gray-100 text-center flex items-center
          transition ease-in-out  first-lindeterminate://#region  hover:-translate-y-2   duration-300 hover:border-[#ff5478] hover:border-2 uppercase
          ">
            <p className="font-bold text-lg">1+ <br /> YEAR OF EXPERIENCE</p>
          </div>
          <div data-aos="zoom-in-right"          
        data-aos-duration="800"
         className="m-5 w-44 h-36 p-6 bg-[#FBFBFC]  border-4 border-[#ff5478] rounded-lg shadow hover:bg-gray-100 text-center flex items-center
          transition ease-in-out    hover:-translate-y-2   duration-300 hover:border-[#ff5478] hover:border-2 uppercase
          ">
            <p className="font-bold text-lg">8+ <br /> HAPPY CLIENTS</p>
          </div>
          <div data-aos="zoom-out-left"          
        data-aos-duration="800"
         className="m-5 w-44 h-36 p-6 bg-[#FBFBFC]  border-4 border-[#ff5478] rounded-lg shadow hover:bg-gray-100 text-center flex items-center
          transition ease-in-out    hover:-translate-y-2   duration-300 hover:border-[#ff5478] hover:border-2 uppercase
          ">
            <p className="font-bold text-lg">10+ <br /> CUSTOMER REVIEWS</p>
          </div>


        </div>

      </div>
    </div>
  );
};

export default Services;
