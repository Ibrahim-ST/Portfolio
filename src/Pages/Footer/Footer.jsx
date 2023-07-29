import { FaFacebook, FaLinkedin, FaGithub , FaInstagram} from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer items-center p-4 bg-[#111111] text-neutral-content">
        <div className="items-center grid-flow-col">           
          <p>Ibrahim Siddiquee © 2023 - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end ">
           <a href="https://www.facebook.com/ibrahim.siddiqueee"><FaFacebook size={20} /></a>
           <a href="https://www.linkedin.com/in/ibrahim-siddiqueee/"><FaLinkedin size={20} /></a>
           <a href="https://github.com/Ibrahim-ST"><FaGithub size={20} /></a>
           <a href="https://www.instagram.com/__witchfinder_general__/"><FaInstagram size={20} /></a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
