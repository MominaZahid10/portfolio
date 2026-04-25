import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const size = useMotionValue(12);

  const springX = useSpring(cursorX, { stiffness: 300, damping: 25 });
  const springY = useSpring(cursorY, { stiffness: 300, damping: 25 });
  const springSize = useSpring(size, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - size.get() / 2);
      cursorY.set(e.clientY - size.get() / 2);
    };

    const handleMouseOverText = () => {
      size.set(50);
    };

    const handleMouseLeaveText = () => {
      size.set(12);
    };

    const textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, a, button, span");

    textElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseOverText);
      el.addEventListener("mouseleave", handleMouseLeaveText);
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      textElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseOverText);
        el.removeEventListener("mouseleave", handleMouseLeaveText);
      });
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{
        width: springSize,
        height: springSize,
        x: springX,
        y: springY,
        background: "#ff2e93",
      }}
    />
  );
}
