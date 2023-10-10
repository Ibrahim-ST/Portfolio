/* eslint-disable react/no-unescaped-entities */
import React from "react";
import bg from "../../assets/bg5.jpg"; 
import resume from '../../assets/RESUME.pdf'
import Candidus from "../MyWorks/Candidus";
import Farmhouse from "../MyWorks/Farmhouse";
import FourWheelers from "../MyWorks/FourWheelers";
import G3Architects from "../MyWorks/G3Architects";
import LegalSolution from "../MyWorks/LegalSolution";
import Marvel from "../MyWorks/Marvel";
import Reveal from "../MyWorks/reveal";
import Ristorante from "../MyWorks/Ristorante";
import WorkStation from "../MyWorks/WorkStation";

const AllWorksHome = () => {
  return (
    <>
      <div
        className="hero bg-blend-darken bg-opacity-50  "
        style={{ backgroundImage: `url(${bg})` }}
      > 
        <div className="hero-content text-center text-neutral-content">
          <div className=" ">
             
            <h1 className="mt-8 mb-5 text-6xl font-bold
            bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text py-5

            "  
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1500"
            >Welcome to My Works section</h1>
            
 
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

      <div  className="max-w-5xl mx-auto my-14 overflow-hidden">       
       
      <div>
        <Farmhouse />
        <FourWheelers />
        <Ristorante />
        <WorkStation />
        <LegalSolution />
        <Reveal />
        <Marvel />
        <G3Architects />
        <Candidus />
      </div>
    </div>
    </>
  );
};

export default AllWorksHome;
