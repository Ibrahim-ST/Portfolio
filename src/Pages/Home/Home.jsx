/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

import bg from "../../assets/bg5.jpg";
import resume from "../../assets/RESUME.pdf";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const Home = () => {
  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/ibrahim.siddiqueee",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/ibrahim-siddiqueee/",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/Ibrahim-ST",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/__witchfinder_general__/",
    },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Gradient Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      {/* Grid Pattern */}
      <div
        className="
          absolute inset-0 opacity-[0.03]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      {/* Main Content */}
      <div
        className="
    relative z-10 mx-auto
    flex min-h-screen w-full max-w-7xl
    items-center
    px-6
    pt-36 md:pt-40
  "
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Small Intro */}
          <motion.p
            variants={fadeUp}
            className="
              mb-6 inline-flex items-center gap-2
              rounded-full border border-white/10
              bg-white/[0.03]
              px-5 py-2
              text-sm uppercase tracking-[0.25em]
              text-cyan-400
              backdrop-blur-xl
            "
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Software Engineer
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            className="
              text-5xl font-bold leading-tight text-white
              sm:text-6xl md:text-7xl xl:text-8xl
            "
          >
            Hi, I'm{" "}
            <span
              className="
                bg-gradient-to-r
                from-cyan-400 via-blue-500 to-purple-500
                bg-clip-text text-transparent
              "
            >
              Ibrahim Siddiquee
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="
              mt-8 max-w-2xl
              text-lg leading-8 text-gray-400
              md:text-xl
            "
          >
            I design and develop scalable web applications, modern user
            interfaces, and cloud-ready digital solutions with a strong focus on
            performance, maintainability, and exceptional user experiences.
          </motion.p>

          {/* Tech Tags */}
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            {[
              "React",
              "Node.js",
              "MongoDB",
              "Express.js",
              "Flutter",
              "Tailwind CSS",
              "DevOps",
            ].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -4,
                }}
                className="
                  rounded-full border border-white/10
                  bg-white/[0.03]
                  px-5 py-2
                  text-sm text-gray-300
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/[0.05]
                  hover:text-cyan-300
                "
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center gap-5"
          >
            {/* Resume Button */}
            <motion.a
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              href={resume}
              download="RESUME of Ibrahim Siddiquee"
              className="
                group relative inline-flex items-center gap-3
                overflow-hidden rounded-2xl
                bg-gradient-to-r from-cyan-500 to-blue-600
                px-7 py-4
                font-semibold text-white
                transition-all duration-300
                hover:shadow-[0_0_35px_rgba(6,182,212,0.35)]
              "
            >
              <span className="relative z-10">Download Resume</span>

              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>

            {/* Contact Button */}
            <motion.a
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              href="#contact"
              className="
                rounded-2xl border border-white/10
                bg-white/[0.03]
                px-7 py-4
                font-semibold text-white
                backdrop-blur-xl
                transition-all duration-300
                hover:border-cyan-400/30
                hover:bg-cyan-400/[0.05]
              "
            >
              Let's Talk
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeUp}
            className="mt-14 flex items-center gap-5"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -5,
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  group flex h-14 w-14 items-center justify-center
                  rounded-full border border-white/10
                  bg-white/[0.03]
                  text-gray-300
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:border-cyan-400/40
                  hover:bg-cyan-400/[0.08]
                  hover:text-cyan-400
                "
              >
                <span className="text-lg">{social.icon}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 10,
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.2,
        }}
        className="
          absolute bottom-10 left-1/2
          hidden -translate-x-1/2
          flex-col items-center gap-3
          md:flex
        "
      >
        <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
          Scroll
        </span>

        <div className="h-16 w-[1px] bg-gradient-to-b from-cyan-400 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Home;
