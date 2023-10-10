/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ibrahim from '../../assets/ibrahim.png'
import SectionTitle from "../../Components/SectionTitle";
import resume from '../../assets/RESUME.pdf'

const About = () => {
  return (
    <div id="about" className="my-20 overflow-x-hidden font-poppins overflow-y-hidden">
        <SectionTitle title="About me" sub=" I specialize in building dynamic web applications using the MERN stack. Let's uncover more about my journey and how I can enhance your next project."></SectionTitle>
      <div className="hero max-w-5xl mx-auto bg-[#F7F9FC]">
        
        <div className="hero-content flex-col lg:flex-row">
          <div className="rounded-3xl"  data-aos="zoom-in-right" data-aos-easing="ease-out-cubic"
             data-aos-duration="1000">
          <img
            src={ibrahim}
            className="sm:max-w-sm rounded-3xl bg-white shadow-2xl p-5 hover:-translate-x-5 hover:grayscale transition-transform duration-300 -rotate-6 "
          />
          </div>
          <div  >
            <h1 className="uppercase text-5xl font-bold text-center sm:text-left"
             data-aos="zoom-in-left" data-aos-easing="ease-out-cubic"
             data-aos-duration="1000"
            >Ibrahim Siddiquee</h1>
            <h1 className="text-center sm:text-left uppercase font-thin text-4xl  
            bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text
            "
            data-aos="zoom-in-left" data-aos-easing="ease-out-cubic"
             data-aos-duration="1500"
            >Front end developer</h1>
            <p className="py-6 bg-white px-5 rounded-3xl my-5 " 
            data-aos="zoom-in-left" data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            >
                 
                A CSE graduate and passionate front-end developer, I'm learning the MERN stack to build efficient and visually appealing web applications. With a strong foundation in programming principles, I bring ideas to life through <br /> engaging user interfaces.
            </p>
            <a
            data-aos="zoom-in-left" data-aos-easing="ease-out-cubic"
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
    </div>
  );
};

export default About;
