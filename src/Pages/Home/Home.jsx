/* eslint-disable react/no-unescaped-entities */
import React from "react";
import bg from "../../assets/bg5.jpg";
import { FaFacebook, FaLinkedin, FaGithub , FaInstagram} from "react-icons/fa";
import resume from '../../assets/RESUME.pdf'

const Home = () => {
  return (
    <>
      <div
        className="hero min-h-screen  bg-blend-darken bg-opacity-50  "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className=" bg-opacity-10 "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" ">
            <h1 className="mb-5 text-5xl font-bold"  data-aos="fade-down" data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            data-aos-delay="500"

            >Hello there!</h1>
            <h1 className="mb-5 text-6xl font-bold
            bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text

            "  
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1500"
            >I'm Ibrahim Siddiquee</h1>
            

            <div className="mb-2" data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1500"
            >
              <a href="https://www.facebook.com/ibrahim.siddiqueee" className="mx-1 my-2 rounded-full inline-block p-3  bg-slate-500 bg-opacity-40">                 
                <FaFacebook size={30} />
              </a>
              <a href="https://www.linkedin.com/in/ibrahim-siddiqueee/" className="mx-1 my-2 rounded-full inline-block p-3  bg-slate-500 bg-opacity-40">                 
                <FaLinkedin size={30} />
              </a>
              <a href="https://github.com/Ibrahim-ST" className="mx-1 my-2 rounded-full inline-block p-3  bg-slate-500 bg-opacity-40">                 
                <FaGithub size={30} />
              </a>
              <a href="https://www.instagram.com/__witchfinder_general__/" className="mx-1 my-2 rounded-full inline-block p-3  bg-slate-500 bg-opacity-40">                 
                <FaInstagram size={30} />
              </a>
            </div>

            <a
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="1500" 
              href={resume}
              download='RESUME of Ibrahim Siddiquee'
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">DOWNLOAD RESUME</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
