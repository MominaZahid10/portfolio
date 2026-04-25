import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPython, FaReact, FaDocker, FaGitAlt } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoFlask } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiTensorflow, SiTypescript, SiScikitlearn, SiCplusplus, SiPandas } from "react-icons/si";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "Python", icon: <FaPython size={36} /> },
    { id: 2, name: "TensorFlow", icon: <SiTensorflow size={36} /> },
    { id: 3, name: "Scikit-learn", icon: <SiScikitlearn size={36} /> },
    { id: 4, name: "React", icon: <FaReact size={36} /> },
    { id: 5, name: "Next.js", icon: <RiNextjsFill size={36} /> },
    { id: 6, name: "TypeScript", icon: <SiTypescript size={36} /> },
    { id: 7, name: "C++", icon: <SiCplusplus size={36} /> },
    { id: 8, name: "Docker", icon: <FaDocker size={36} /> },
    { id: 9, name: "PostgreSQL", icon: <BiLogoPostgresql size={36} /> },
    { id: 10, name: "Flask", icon: <BiLogoFlask size={36} /> },
    { id: 11, name: "Pandas", icon: <SiPandas size={36} /> },
    { id: 12, name: "Git", icon: <FaGitAlt size={36} /> },
  ]);

  return (
    <div className="py-20 lg:py-28 relative" id="skills">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-hot/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="px-5 lg:px-28 relative z-10">
        <motion.div
          className="mb-14 lg:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="rounded-2xl p-5 h-28 lg:h-36 flex flex-col items-center justify-center gap-3 group cursor-pointer bg-[#151515] border border-[#2a2a2a] hover:border-pink-hot/40 hover:bg-[#1a1a1a] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <span className="text-zinc-300 group-hover:text-pink-hot transition-colors duration-300">
                {skill.icon}
              </span>
              <p className="text-xs font-mono text-zinc-400 group-hover:text-white transition-colors duration-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
