import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 110,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed lg:px-28 px-5 top-0 left-0 w-full z-50 p-5 transition-all duration-300 ${
        hasShadow ? "bg-dark/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-center items-center">
        <ul className="hidden lg:flex items-center gap-x-8 font-medium text-sm tracking-wide">
          {["about", "skills", "projects", "contact"].map((section) => (
            <motion.li
              key={section}
              className="group"
              whileHover={{ scale: 1.05 }}
            >
              <button
                onClick={() => scrollToSection(section)}
                className="text-zinc-400 hover:text-white transition-colors duration-300 uppercase tracking-widest text-xs"
              >
                {section}
              </button>
              <motion.span
                className="w-0 transition-all duration-300 group-hover:w-full h-[1px] bg-gradient-to-r from-accent-pink to-accent-purple flex"
                layout
              ></motion.span>
            </motion.li>
          ))}
        </ul>

        <motion.button
          className="lg:hidden text-2xl text-white"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.2 }}
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-0 left-0 h-full w-full bg-dark/95 backdrop-blur-xl"
          >
            <button
              className="absolute top-5 right-5 text-2xl text-white"
              onClick={() => setIsOpen(false)}
            >
              <HiX />
            </button>
            <ul className="flex flex-col items-start ml-16 mt-28 h-full gap-y-8 font-medium">
              {["about", "skills", "projects", "contact"].map((section) => (
                <motion.li
                  key={section}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-zinc-400 hover:text-white transition-colors uppercase tracking-widest text-sm"
                  >
                    {section}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
