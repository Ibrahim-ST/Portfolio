import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaFacebookF size={18} />,
      href: "https://www.facebook.com/ibrahim.siddiqueee",
      label: "Facebook",
    },
    {
      icon: <FaLinkedinIn size={18} />,
      href: "https://www.linkedin.com/in/ibrahim-siddiqueee/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub size={18} />,
      href: "https://github.com/Ibrahim-ST",
      label: "GitHub",
    },
    {
      icon: <FaInstagram size={18} />,
      href: "https://www.instagram.com/__witchfinder_general__/",
      label: "Instagram",
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#0B0B0B]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold tracking-wide text-white">
            Ibrahim Siddiquee
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Full Stack Developer focused on modern web, mobile & cloud
            technologies
          </p>

          <p className="mt-3 text-xs text-gray-500">
            © {currentYear} Ibrahim Siddiquee. All rights reserved.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="
                group
                flex h-11 w-11 items-center justify-center
                rounded-full
                border border-white/10
                bg-white/5
                text-gray-300
                backdrop-blur-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-cyan-400/40
                hover:bg-cyan-400/10
                hover:text-cyan-400
              "
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
