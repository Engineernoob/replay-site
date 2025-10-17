"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function GallerySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax translation and fade
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative w-full py-32 bg-gradient-to-b from-[#0A0F1C] via-[#121829] to-[#0A0F1C] overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        style={{ opacity }}
        className="text-center text-5xl md:text-7xl font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-amber-400 to-pink-400 drop-shadow-[0_0_12px_#00F5FF]"
      >
        The Re:Play Universe
      </motion.h2>

      {/* Posters */}
      <div className="mt-24 flex flex-col items-center gap-20">
        <motion.div style={{ y: y1, opacity }} className="relative">
          <Image
            src="/art/replay-poster-1.png"
            width={700}
            height={450}
            alt="Poster 1"
            className="rounded-xl shadow-[0_0_40px_#00F5FF40]"
          />
        </motion.div>

        <motion.div style={{ y: y2, opacity }} className="relative">
          <Image
            src="/art/replay-poster-2.png"
            width={700}
            height={450}
            alt="Poster 2"
            className="rounded-xl shadow-[0_0_40px_#FF4E9C40]"
          />
        </motion.div>

        <motion.div style={{ y: y1, opacity }} className="relative">
          <Image
            src="/art/replay-poster-3.png"
            width={700}
            height={450}
            alt="Poster 3"
            className="rounded-xl shadow-[0_0_40px_#FFDD5740]"
          />
        </motion.div>
      </div>

      {/* Floating holographic overlay */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00F5FF0a_0%,transparent_70%)] pointer-events-none"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
    </section>
  );
}
