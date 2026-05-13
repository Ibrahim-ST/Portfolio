/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCode, FaServer, FaMobileAlt } from "react-icons/fa";

import ibrahim from "../../assets/ibrahim.png";
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

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#070707] px-6 py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Passionate About Building
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Modern Digital Experiences
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-400 md:text-lg">
            I craft scalable web applications, intuitive user interfaces, and
            modern digital solutions with a strong focus on performance,
            maintainability, and user experience.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image Side */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Decorative Border */}
            <div className="absolute h-[430px] w-[320px] rounded-[2rem] border border-cyan-400/20 bg-cyan-400/5 blur-sm" />

            {/* Image Card */}
            <motion.div
              whileHover={{
                rotate: 0,
                scale: 1.02,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                relative overflow-hidden rounded-[2rem]
                border border-white/10
                bg-white/5
                p-4 backdrop-blur-xl
              "
            >
              <img
                src={ibrahim}
                alt="Ibrahim Siddiquee"
                className="
                  h-[420px] w-[320px]
                  rounded-[1.5rem]
                  object-cover
                  grayscale-[15%]
                  transition-all duration-500
                  hover:grayscale-0
                "
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Small Intro */}
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-cyan-400">
              Software Engineer
            </p>

            {/* Name */}
            <h3 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Ibrahim Siddiquee
            </h3>

            {/* Subtitle */}
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              A passionate MERN Stack Developer and Flutter enthusiast focused
              on building scalable applications, modern interfaces, and
              impactful digital products with exceptional user experiences.
            </p>

            {/* Feature Cards */}
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                {
                  icon: <FaCode />,
                  title: "Frontend",
                  desc: "Modern UI Engineering",
                },
                {
                  icon: <FaServer />,
                  title: "Backend",
                  desc: "Scalable Architecture",
                },
                {
                  icon: <FaMobileAlt />,
                  title: "Mobile",
                  desc: "Flutter Applications",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    rounded-2xl border border-white/10
                    bg-white/[0.03]
                    p-5
                    transition-all duration-300
                    hover:border-cyan-400/30
                    hover:bg-cyan-400/[0.03]
                  "
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                    {item.icon}
                  </div>

                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <p className="leading-8 text-gray-400">
                I specialize in creating responsive and high-performance web
                applications using React, Node.js, Express.js, and MongoDB.
                Beyond web development, I also explore DevOps technologies and
                cloud-focused workflows to build scalable and production-ready
                systems.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
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
                  hover:shadow-[0_0_30px_rgba(6,182,212,0.35)]
                "
              >
                <span className="relative z-10">Download Resume</span>

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>

              {/* Secondary Button */}
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
                  hover:bg-cyan-400/[0.03]
                "
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
