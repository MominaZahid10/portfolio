import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin } from 'react-icons/io5';
import { IoMdMail } from "react-icons/io";
import { MiniBlob } from './PinkBlob';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const socialLinks = [
    { Icon: BiLogoGmail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=mominazd12@gmail.com", label: "gmail" },
    { Icon: IoLogoLinkedin, href: "https://www.linkedin.com/in/mominazahidd", label: "linkedin" },
    { Icon: BsGithub, href: "https://github.com/MominaZahid10", label: "github" },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='py-20 lg:py-28 px-5 lg:px-28 relative'
      id='contact'
    >
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-hot/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Mini blobs */}
      <div className="absolute top-10 right-10 w-28 h-28 opacity-40 hidden lg:block">
        <MiniBlob scale={0.4} />
      </div>
      <div className="absolute bottom-16 left-8 w-20 h-20 opacity-30 hidden lg:block">
        <MiniBlob scale={0.25} />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14 lg:mb-16"
        >
          <h2 className='text-3xl lg:text-5xl font-bold'>
            Let's <span className='gradient-text'>Connect</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex flex-col lg:flex-row justify-between items-start gap-12'
        >
          <div className="lg:w-1/2 space-y-6">
            <p className='text-zinc-400 text-sm/7 lg:text-base/8 max-w-lg'>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of something <span className="text-pink-hot">amazing</span>. Let's build something cool together.
            </p>

            <motion.a
              whileHover={{ x: 5 }}
              className='flex items-center gap-3 group text-zinc-400 hover:text-pink-hot transition-colors duration-300'
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mominazd12@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className='glass-card group-hover:border-pink-hot/30 rounded-full p-2.5 transition-all duration-300'>
                <IoMdMail className="w-5 h-5" />
              </span>
              <span className="font-mono text-sm">mominazd12@gmail.com</span>
            </motion.a>
          </div>

          <div className="space-y-6">
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mominazd12@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className='inline-block bg-pink-hot text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-pink-hot/25 transition-all duration-300'
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              get_in_touch( )
            </motion.a>

            <div className='flex items-center gap-x-3 mt-6'>
              {socialLinks.map(({ Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 rounded-xl text-zinc-500 hover:text-pink-hot transition-all duration-300 group relative"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-mono text-[9px] text-pink-hot/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    {label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
