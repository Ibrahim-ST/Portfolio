import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";

const NavBar = () => {
  const [scroll, setScroll] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    {
      name: "Home",
      href: "/",
      type: "anchor",
    },
    {
      name: "About",
      href: "#about",
      type: "anchor",
    },
    {
      name: "Services",
      href: "#services",
      type: "anchor",
    },
    {
      name: "Projects",
      href: "/allWorks",
      type: "link",
    },
    {
      name: "Contact",
      href: "#contact",
      type: "anchor",
    },
  ];

  return (
    <>
      <motion.header
        initial={{
          y: -100,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="
          fixed left-0 top-0 z-50 w-full
          px-4 py-4
        "
      >
        <div
          className={`
            mx-auto flex max-w-7xl items-center justify-between
            rounded-2xl border px-6 py-4
            transition-all duration-500
            ${
              scroll
                ? "border-white/10 bg-black/70 shadow-2xl backdrop-blur-2xl"
                : "border-transparent bg-transparent"
            }
          `}
        >
          {/* Logo */}
          <motion.a
            whileHover={{
              scale: 1.03,
            }}
            href="/"
            className="flex items-center gap-3"
          >
            {/* Logo Circle */}
            <div
              className="
                flex h-11 w-11 items-center justify-center
                rounded-xl
                bg-gradient-to-br from-cyan-400 to-blue-600
                font-bold text-white
                shadow-[0_0_25px_rgba(6,182,212,0.35)]
              "
            >
              IS
            </div>

            {/* Name */}
            <div className="hidden sm:block">
              <h2 className="text-lg font-semibold text-white">
                Ibrahim Siddiquee
              </h2>

              <p className="text-xs tracking-[0.2em] text-gray-400">
                SOFTWARE ENGINEER
              </p>
            </div>
          </motion.a>

          {/* Desktop Menu */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{
                    y: -2,
                  }}
                >
                  {item.type === "link" ? (
                    <Link
                      to={item.href}
                      className="
                        rounded-xl px-5 py-3
                        text-sm font-medium text-gray-300
                        transition-all duration-300
                        hover:bg-white/[0.05]
                        hover:text-white
                      "
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="
                        rounded-xl px-5 py-3
                        text-sm font-medium text-gray-300
                        transition-all duration-300
                        hover:bg-white/[0.05]
                        hover:text-white
                      "
                    >
                      {item.name}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Hire Me Button */}
            <motion.a
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              href="#contact"
              className="
                group hidden sm:inline-flex
                items-center gap-3
                overflow-hidden rounded-2xl
                bg-gradient-to-r from-cyan-500 to-blue-600
                px-6 py-3
                font-semibold text-white
                transition-all duration-300
                hover:shadow-[0_0_35px_rgba(6,182,212,0.35)]
              "
            >
              <span>Hire Me</span>

              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{
                scale: 0.9,
              }}
              onClick={() => setMobileMenu(!mobileMenu)}
              className="
                flex h-11 w-11 items-center justify-center
                rounded-xl border border-white/10
                bg-white/[0.03]
                text-white backdrop-blur-xl
                transition-all duration-300
                hover:border-cyan-400/30
                hover:bg-cyan-400/[0.05]
                lg:hidden
              "
            >
              {mobileMenu ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              fixed left-4 right-4 top-24 z-40
              rounded-3xl border border-white/10
              bg-black/80 p-6
              shadow-2xl backdrop-blur-2xl
              lg:hidden
            "
          >
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                >
                  {item.type === "link" ? (
                    <Link
                      to={item.href}
                      onClick={() => setMobileMenu(false)}
                      className="
                        flex items-center justify-between
                        rounded-2xl border border-white/5
                        bg-white/[0.03]
                        px-5 py-4
                        text-gray-300
                        transition-all duration-300
                        hover:border-cyan-400/20
                        hover:bg-cyan-400/[0.05]
                        hover:text-white
                      "
                    >
                      {item.name}

                      <FaArrowRight className="text-sm opacity-50" />
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setMobileMenu(false)}
                      className="
                        flex items-center justify-between
                        rounded-2xl border border-white/5
                        bg-white/[0.03]
                        px-5 py-4
                        text-gray-300
                        transition-all duration-300
                        hover:border-cyan-400/20
                        hover:bg-cyan-400/[0.05]
                        hover:text-white
                      "
                    >
                      {item.name}

                      <FaArrowRight className="text-sm opacity-50" />
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <motion.a
              whileTap={{
                scale: 0.97,
              }}
              href="#contact"
              onClick={() => setMobileMenu(false)}
              className="
                mt-5 flex items-center justify-center gap-3
                rounded-2xl
                bg-gradient-to-r from-cyan-500 to-blue-600
                px-6 py-4
                font-semibold text-white
              "
            >
              Hire Me
              <FaArrowRight />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
