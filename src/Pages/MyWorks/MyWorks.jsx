/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import Farmhouse from "./Farmhouse";
import FourWheelers from "./FourWheelers";
import Ristorante from "./Ristorante";

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

const MyWorks = () => {
  return (
    <section
      id="works"
      className="relative overflow-hidden bg-[#070707] px-6 py-24"
    >
      {/* Background Glow */}
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

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Featured Projects
          </p>

          <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Selected Works &
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Creative Solutions
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-400 md:text-lg">
            A collection of modern web applications and full-stack solutions
            crafted with performance, scalability, and exceptional user
            experience in mind.
          </p>
        </motion.div>

        {/* Top CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mb-14 flex justify-center"
        >
          <motion.a
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            href="#"
            className="
              group inline-flex items-center gap-3
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
            <span>Explore All Projects</span>

            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="space-y-12"
        >
          {/* Individual Project Components */}
          <motion.div variants={fadeUp}>
            <Farmhouse />
          </motion.div>

          <motion.div variants={fadeUp}>
            <FourWheelers />
          </motion.div>

          <motion.div variants={fadeUp}>
            <Ristorante />
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mt-20 flex justify-center"
        >
          <motion.a
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            href="#"
            className="
              group relative inline-flex items-center gap-3
              overflow-hidden rounded-2xl
              bg-gradient-to-r from-cyan-500 to-blue-600
              px-8 py-4
              font-semibold text-white
              transition-all duration-300
              hover:shadow-[0_0_35px_rgba(6,182,212,0.35)]
            "
          >
            <span className="relative z-10">View More Projects</span>

            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default MyWorks;
