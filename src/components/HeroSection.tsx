"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { MouseEvent, useRef } from "react";
import { ArrowRight, Github } from "lucide-react";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax for the background light beams
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Cursor glow trail: updates global CSS variables
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 100;
    const y = (clientY / window.innerHeight) * 100;
    document.documentElement.style.setProperty("--cursor-x", `${x}%`);
    document.documentElement.style.setProperty("--cursor-y", `${y}%`);
  };

  const neonClass =
    "font-title text-[9vw] md:text-8xl lg:text-9xl tracking-tighter uppercase text-electricCyan text-shadow-neon-cyan";

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="hero-section relative h-[100vh] flex flex-col items-center justify-center p-4 overflow-hidden"
    >
      {/* Background Effect: Radial Gradient and Parallax Light Beams */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0, 245, 255, 0.1) 0%, #0C2233 70%)",
        }}
      >
        {/* Parallax Light Beams (Requires a /public/art/light-beams.svg placeholder) */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-[url('/art/light-beams.svg')] bg-cover bg-center opacity-30"
        />
      </div>

      {/* Subtle floating cassette device render in the background (glowing cyan/amber) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute w-60 h-60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-30 pointer-events-none"
      >
        {/* Placeholder for cassette render image */}
        <div className="w-full h-full bg-deepNavy border border-electricCyan/50 rounded-lg shadow-glow-cyan/50 animate-pulse"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center flex flex-col items-center">
        {/* Large animated title: “Re:Play” */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={neonClass}
        >
          Re:Play
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-xl md:text-2xl mt-4 max-w-lg text-amberGold/90"
        >
          Conversations in Analog Futures.
        </motion.p>

        {/* CTA Buttons - Hover = holographic sheen + glow */}
        <div className="mt-12 flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #00F5FF" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-6 py-3 border border-electricCyan bg-electricCyan/10 text-electricCyan text-lg font-title uppercase transition-all duration-300 shadow-glow-cyan/50 hover:bg-electricCyan hover:text-deepNavy"
          >
            Try on Expo Go <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #FFDD57" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-6 py-3 border border-amberGold bg-deepNavy/50 text-amberGold text-lg font-title uppercase transition-all duration-300 hover:bg-amberGold/10"
          >
            <Github className="w-5 h-5" /> View on GitHub
          </motion.button>
        </div>
      </div>

      {/* Global Cursor Glow Trail Style */}
      <style jsx global>{`
        :root {
          --cursor-x: 50%;
          --cursor-y: 50%;
        }
        .hero-section::after {
          content: "";
          position: fixed; /* Fixed so it moves with the cursor across the viewport */
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: radial-gradient(
            circle at center,
            rgba(0, 245, 255, 0.4) 0%,
            transparent 70%
          );
          left: var(--cursor-x);
          top: var(--cursor-y);
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 50;
          transition: transform 0.1s linear, left 0.1s linear, top 0.1s linear;
          filter: blur(5px);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
