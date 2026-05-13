import React from "react";
import { motion } from "framer-motion";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/ibrah.siddiquee",
      label: "Facebook",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/ibrahim-siddiqueee/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/Ibrahim-ST",
      label: "GitHub",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/__witchfinder_general__/",
      label: "Instagram",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030712]">
      {/* Background Glow Effects */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Gradient Line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-14">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, letterSpacing: "-2px" }}
              whileInView={{ opacity: 1, letterSpacing: "0px" }}
              transition={{ duration: 0.8 }}
              className="
                text-3xl font-bold tracking-wide
                text-white
              "
            >
              Ibrahim Siddiquee
            </motion.h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 md:text-base">
              Software Engineer specializing in scalable web applications,
              enterprise systems, modern UI engineering, and cloud-ready
              solutions.
            </p>

            {/* Small Tag Pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              {["MERN Stack", "Flutter", "DevOps", "React", "Node.js"].map(
                (tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                    className="
                    rounded-full border border-white/10
                    bg-white/5 px-4 py-2
                    text-xs text-gray-300
                    backdrop-blur-md
                  "
                  >
                    {tag}
                  </motion.span>
                ),
              )}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{
                    y: -6,
                    scale: 1.08,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="
                    group relative
                    flex h-14 w-14 items-center justify-center
                    overflow-hidden rounded-2xl
                    border border-white/10
                    bg-white/5
                    text-lg text-gray-300
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:border-cyan-400/40
                    hover:text-cyan-400
                  "
                >
                  {/* Hover Glow */}
                  <span
                    className="
                      absolute inset-0
                      bg-gradient-to-br
                      from-cyan-400/10 to-blue-500/10
                      opacity-0 transition-opacity duration-300
                      group-hover:opacity-100
                    "
                  />

                  <span className="relative z-10">{social.icon}</span>
                </motion.a>
              ))}
            </div>

            {/* Scroll To Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{
                y: -4,
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              className="
                group inline-flex items-center gap-3
                rounded-full
                border border-white/10
                bg-white/5
                px-5 py-3
                text-sm text-gray-300
                backdrop-blur-md
                transition-all duration-300
                hover:border-cyan-400/40
                hover:bg-cyan-400/10
                hover:text-cyan-400
              "
            >
              Back to Top
              <FaArrowUp
                className="
                  transition-transform duration-300
                  group-hover:-translate-y-1
                "
              />
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="
            mt-12 border-t border-white/10
            pt-6
          "
        >
          <div
            className="
              flex flex-col items-center justify-between
              gap-4 text-center
              md:flex-row
            "
          >
            <p className="text-sm text-gray-500">
              © {currentYear} Ibrahim Siddiquee. All rights reserved.
            </p>

            <p className="text-sm text-gray-500">
              Designed & developed with precision and passion.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
