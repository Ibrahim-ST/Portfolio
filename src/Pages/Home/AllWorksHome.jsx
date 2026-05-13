/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaCode,
  FaLayerGroup,
  FaLaptopCode,
} from "react-icons/fa";

import bg from "../../assets/bg5.jpg";
import resume from "../../assets/RESUME.pdf";

import Candidus from "../MyWorks/Candidus";
import Farmhouse from "../MyWorks/Farmhouse";
import FourWheelers from "../MyWorks/FourWheelers";
import G3Architects from "../MyWorks/G3Architects";
import LegalSolution from "../MyWorks/LegalSolution";
import Marvel from "../MyWorks/Marvel";
import Reveal from "../MyWorks/Reveal";
import Ristorante from "../MyWorks/Ristorante";
import WorkStation from "../MyWorks/WorkStation";

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
      staggerChildren: 0.15,
    },
  },
};

const AllWorksHome = () => {
  const highlights = [
    {
      icon: <FaCode />,
      title: "Full Stack Development",
    },
    {
      icon: <FaLaptopCode />,
      title: "Modern UI Engineering",
    },
    {
      icon: <FaLayerGroup />,
      title: "Scalable Architecture",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#070707]">
      {/* HERO SECTION */}
      <div className="relative min-h-[75vh] overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Glow */}
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

        {/* Grid */}
        <div
          className="
            absolute inset-0 opacity-[0.03]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />

        {/* Content */}
        <div
          className="
            relative z-10 mx-auto
            flex min-h-[75vh] max-w-7xl
            items-center px-6
            pt-36 pb-20
          "
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="
                mb-8 inline-flex items-center gap-3
                rounded-full border border-cyan-400/20
                bg-cyan-400/[0.03]
                px-5 py-2
                backdrop-blur-xl
              "
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400" />

              <span className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                Portfolio Projects
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="
                max-w-4xl
                text-5xl font-bold leading-[1.05]
                text-white
                sm:text-6xl
                md:text-7xl
              "
            >
              Showcasing My
              <span
                className="
                  bg-gradient-to-r
                  from-cyan-400 via-blue-500 to-purple-500
                  bg-clip-text text-transparent
                "
              >
                {" "}
                Creative Work
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="
                mt-8 max-w-2xl
                text-lg leading-8 text-gray-400
              "
            >
              Explore a collection of modern web applications and digital
              products crafted using scalable technologies, clean architecture,
              and exceptional user experience principles.
            </motion.p>

            {/* Highlight Cards */}
            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap gap-5"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    flex items-center gap-4
                    rounded-2xl border border-white/10
                    bg-white/[0.03]
                    px-5 py-4
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:border-cyan-400/30
                    hover:bg-cyan-400/[0.03]
                  "
                >
                  <div
                    className="
                      flex h-12 w-12 items-center justify-center
                      rounded-xl bg-cyan-400/10
                      text-cyan-400
                    "
                  >
                    {item.icon}
                  </div>

                  <span className="text-sm font-medium text-gray-300">
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap items-center gap-5"
            >
              {/* Resume */}
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
                  group inline-flex items-center gap-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500 to-blue-600
                  px-7 py-4
                  font-semibold text-white
                  transition-all duration-300
                  hover:shadow-[0_0_35px_rgba(6,182,212,0.35)]
                "
              >
                Download Resume

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>

              {/* Contact */}
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
                Let's Collaborate
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Selected Projects
          </p>

          <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Full Stack &
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Modern Solutions
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-400 md:text-lg">
            A curated collection of responsive, scalable, and production-ready
            applications built using modern technologies and engineering best
            practices.
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="space-y-14"
        >
          <motion.div variants={fadeUp}>
            <Farmhouse />
          </motion.div>

          <motion.div variants={fadeUp}>
            <FourWheelers />
          </motion.div>

          <motion.div variants={fadeUp}>
            <Ristorante />
          </motion.div>

          <motion.div variants={fadeUp}>
            <WorkStation />
          </motion.div>

          <motion.div variants={fadeUp}>
            <LegalSolution />
          </motion.div>

          <motion.div variants={fadeUp}>
            <Reveal />
          </motion.div>

          <motion.div variants={fadeUp}>
            <Marvel />
          </motion.div>

          <motion.div variants={fadeUp}>
            <G3Architects />
          </motion.div>

          <motion.div variants={fadeUp}>
            <Candidus />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AllWorksHome;