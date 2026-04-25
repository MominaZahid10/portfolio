import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 py-20 lg:py-28 flex justify-between flex-col lg:flex-row items-center gap-14 lg:gap-24 relative" id="about">
      <div className="absolute top-0 right-0 w-80 h-80 bg-pink-hot/5 rounded-full blur-[180px] pointer-events-none" />

      <motion.div
        className="lg:w-[35%] relative z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img className="w-full h-auto object-cover rounded-2xl shadow-xl shadow-pink-hot/10" src="/assets/aboutme.jpeg" alt="About Me" />
      </motion.div>

      <motion.div
        className="lg:w-[55%] relative z-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl lg:text-5xl font-bold">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="mt-8 space-y-5">
          <p className="text-zinc-400 text-sm/7 lg:text-base/8">
            Currently in my 3rd year studying <span className="text-white">Artificial Intelligence</span>, with hands-on experience across ML model development, data analysis, and building web applications that actually deliver. I don't like projects that just sit in a Jupyter notebook,the goal has always been to build things that are <span className="text-pink-hot">functional, deployable, and genuinely useful</span>.
          </p>

          <p className="text-zinc-400 text-sm/7 lg:text-base/8">
            I think the <span className="text-white">technical depth of a system</span> and how someone experiences it are equally important. A well-engineered solution should also feel good to use,that's what I'm working toward.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
