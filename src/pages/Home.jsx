import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import PinkBlob, { MiniBlob } from "../components/PinkBlob";

const socialLinks = [
  { Icon: BiLogoGmail, href: "mailto:mominazd12@gmail.com", label: "gmail" },
  { Icon: IoLogoLinkedin, href: "https://www.linkedin.com/in/mominazahidd", label: "linkedin" },
  { Icon: BsGithub, href: "https://github.com/MominaZahid10", label: "github" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden" id="home">
      {/* 3D Blob - pushed further right */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[35%] h-[60%] opacity-50 hidden lg:block z-20">
        <PinkBlob />
      </div>

      {/* Small blobs to the left of the main blob */}
      <div className="absolute right-[28%] top-[25%] w-20 h-20 opacity-40 hidden lg:block z-20">
        <MiniBlob scale={0.35} />
      </div>
      <div className="absolute right-[35%] top-[60%] w-16 h-16 opacity-30 hidden lg:block z-20">
        <MiniBlob scale={0.25} />
      </div>
      <div className="absolute right-[22%] bottom-[20%] w-14 h-14 opacity-25 hidden lg:block z-20">
        <MiniBlob scale={0.2} />
      </div>

      {/* Pink ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-pink-hot/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="px-5 lg:px-28 w-full relative z-10">
        <motion.div
          className="lg:w-[60%]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="space-y-3 lg:space-y-5">
            <h1 className="text-4xl lg:text-7xl font-bubble tracking-wide">
              <span className="text-white">Hello,</span>
              <br />
              <span className="gradient-text glow-text">
                <TypeAnimation
                  sequence={[
                    'I\'m Momina Zahid',
                    2000,
                    'I build AI systems',
                    2000,
                    'I craft ML solutions',
                    2000,
                  ]}
                  speed={10}
                  repeat={Infinity}
                />
              </span>
            </h1>

            <h2 className="text-3xl lg:text-5xl font-grotesk font-bold tracking-tight text-white">
              AI{" "}
              <span className="gradient-text">Developer</span>
            </h2>

            <p className="text-zinc-400 text-lg font-grotesk font-medium">
              Based in <span className="text-white font-semibold">Pakistan</span>
            </p>
          </div>

          <motion.p
            className="text-zinc-400 text-sm lg:text-base mt-8 leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Building intelligent systems with ML & Deep Learning. I specialize in training ML models,data analysis, and building web apps that integrate AI in meaningful ways.
          </motion.p>

        </motion.div>
      </div>
    </div>
  );
}
