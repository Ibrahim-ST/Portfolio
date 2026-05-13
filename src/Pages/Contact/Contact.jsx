/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
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

const Contact = () => {
  const form = useRef();

  const { register, reset } = useForm();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8xmq0fn",
        "template_8bgskbj",
        form.current,
        "0A0i2fzPNsSCSDYpE",
      )
      .then(
        () => {
          alert("Message Sent Successfully.");
          reset();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

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
      id="contact"
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
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Let's Build Something
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Exceptional
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-400 md:text-lg">
            Have an idea, project, or opportunity in mind? Let's collaborate and
            create scalable, modern, and impactful digital experiences.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Left Side */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-cyan-400">
                Get In Touch
              </p>

              <h3 className="text-4xl font-bold leading-tight text-white">
                Let's turn your ideas into reality.
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                I'm always interested in discussing innovative projects,
                software engineering opportunities, and modern web technologies.
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-10 space-y-5">
              {[
                {
                  icon: <FaPhoneAlt />,
                  title: "Phone",
                  value: "+8801836-406502",
                },
                {
                  icon: <FaEnvelope />,
                  title: "Email",
                  value: "ibrahim.siddiqueee@gmail.com",
                },
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Location",
                  value: "Bangladesh",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  className="
                    flex items-center gap-4 rounded-2xl
                    border border-white/10
                    bg-white/[0.03]
                    p-4
                    transition-all duration-300
                    hover:border-cyan-400/30
                    hover:bg-cyan-400/5
                  "
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">{item.title}</p>
                    <p className="text-white">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Icons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="mt-10 flex items-center gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    group flex h-12 w-12 items-center justify-center
                    rounded-full border border-white/10
                    bg-white/5 text-gray-300
                    transition-all duration-300
                    hover:border-cyan-400/40
                    hover:bg-cyan-400/10
                    hover:text-cyan-400
                  "
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  {...register("name", {
                    required: true,
                    maxLength: 120,
                  })}
                  className="
                    h-14 w-full rounded-2xl
                    border border-white/10
                    bg-white/[0.03]
                    px-5 text-white
                    outline-none
                    transition-all duration-300
                    placeholder:text-gray-500
                    focus:border-cyan-400/40
                    focus:bg-cyan-400/[0.03]
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="example@email.com"
                  {...register("email", {
                    required: true,
                    maxLength: 120,
                  })}
                  className="
                    h-14 w-full rounded-2xl
                    border border-white/10
                    bg-white/[0.03]
                    px-5 text-white
                    outline-none
                    transition-all duration-300
                    placeholder:text-gray-500
                    focus:border-cyan-400/40
                    focus:bg-cyan-400/[0.03]
                  "
                />
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project Discussion"
                  {...register("subject", {
                    required: true,
                    maxLength: 120,
                  })}
                  className="
                    h-14 w-full rounded-2xl
                    border border-white/10
                    bg-white/[0.03]
                    px-5 text-white
                    outline-none
                    transition-all duration-300
                    placeholder:text-gray-500
                    focus:border-cyan-400/40
                    focus:bg-cyan-400/[0.03]
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  {...register("message", {
                    required: true,
                    maxLength: 600,
                  })}
                  className="
                    w-full rounded-2xl
                    border border-white/10
                    bg-white/[0.03]
                    p-5 text-white
                    outline-none
                    transition-all duration-300
                    placeholder:text-gray-500
                    focus:border-cyan-400/40
                    focus:bg-cyan-400/[0.03]
                  "
                />
              </div>

              {/* Button */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                type="submit"
                className="
                  relative inline-flex h-14 items-center justify-center
                  overflow-hidden rounded-2xl
                  bg-gradient-to-r from-cyan-500 to-blue-600
                  px-8 font-semibold text-white
                  transition-all duration-300
                  hover:shadow-[0_0_30px_rgba(6,182,212,0.35)]
                "
              >
                <span className="relative z-10">Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
