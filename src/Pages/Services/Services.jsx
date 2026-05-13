import React from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import CountUp from "react-countup";

import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaArrowRight,
} from "react-icons/fa";

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

const Services = () => {
  const services = [
    {
      title: "Frontend Engineering",
      description:
        "Building modern, scalable, and high-performance interfaces using React, Tailwind CSS, and modern frontend technologies.",
      icon: <FaCode />,
      animation: "https://assets10.lottiefiles.com/packages/lf20_jtbfg2nb.json",
    },
    {
      title: "UI/UX Implementation",
      description:
        "Transforming premium UI/UX concepts into pixel-perfect digital experiences with smooth interactions and responsive layouts.",
      icon: <FaLaptopCode />,
      animation: "https://assets10.lottiefiles.com/packages/lf20_uzvwjpkq.json",
    },
    {
      title: "Responsive Web Apps",
      description:
        "Developing fully responsive and production-ready applications optimized for desktops, tablets, and mobile devices.",
      icon: <FaMobileAlt />,
      animation:
        "https://assets2.lottiefiles.com/private_files/lf30_zSGy1w.json",
    },
  ];

  const stats = [
    {
      number: 30,
      suffix: "+",
      title: "Projects Completed",
    },
    {
      number: 1,
      suffix: "+",
      title: "Years Experience",
    },
    {
      number: 17,
      suffix: "+",
      title: "Happy Clients",
    },
    {
      number: 10,
      suffix: "+",
      title: "Client Reviews",
    },
  ];

  return (
    <section
      id="services"
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
            My Specializations
          </p>

          <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Crafting Modern &
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Scalable Solutions
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-400 md:text-lg">
            I develop high-performance digital experiences focused on
            scalability, maintainability, modern UI engineering, and seamless
            user interactions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -10,
              }}
              className="
                group relative overflow-hidden
                rounded-3xl border border-white/10
                bg-white/[0.03]
                p-8 backdrop-blur-xl
                transition-all duration-500
                hover:border-cyan-400/30
                hover:bg-cyan-400/[0.03]
              "
            >
              {/* Gradient Hover */}
              <div
                className="
                  absolute inset-0 opacity-0
                  transition-opacity duration-500
                  group-hover:opacity-100
                  bg-gradient-to-br
                  from-cyan-500/[0.06]
                  via-transparent
                  to-purple-500/[0.06]
                "
              />

              {/* Icon */}
              <div
                className="
                  relative z-10 mb-6
                  flex h-16 w-16 items-center justify-center
                  rounded-2xl bg-cyan-400/10
                  text-2xl text-cyan-400
                "
              >
                {service.icon}
              </div>

              {/* Lottie */}
              <div className="relative z-10 mb-6">
                <Player
                  autoplay
                  loop
                  src={service.animation}
                  style={{
                    height: "180px",
                    width: "180px",
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {service.description}
                </p>
              </div>

              {/* Arrow */}
              <div
                className="
                  relative z-10 mt-8
                  flex items-center gap-2
                  text-cyan-400
                "
              >
                <span className="text-sm font-medium uppercase tracking-[0.2em]">
                  Learn More
                </span>

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="
            mt-20 grid gap-6
            rounded-[2rem]
            border border-white/10
            bg-white/[0.03]
            p-8 backdrop-blur-xl
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                rounded-2xl border border-white/10
                bg-white/[0.03]
                p-8 text-center
                transition-all duration-300
                hover:border-cyan-400/30
                hover:bg-cyan-400/[0.03]
              "
            >
              <h3
                className="
                  text-4xl font-bold
                  bg-gradient-to-r
                  from-cyan-400 to-blue-500
                  bg-clip-text text-transparent
                "
              >
                <CountUp
                  end={stat.number}
                  duration={4}
                  enableScrollSpy
                  scrollSpyOnce={false}
                />
                {stat.suffix}
              </h3>

              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-gray-400">
                {stat.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
