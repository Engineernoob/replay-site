"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import GallerySection from "@/components/GallerySection";

export default function HomePage() {
  return (
    <main className="relative w-full overflow-hidden bg-replay-bg text-white">
      {/* ─────────────── HERO SECTION ─────────────── */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center px-6 overflow-hidden">
        {/* Neon background grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00F5FF15_0%,transparent_70%)]" />

        {/* Hero text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="z-10 flex flex-col items-center"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-orbitron bg-clip-text text-transparent bg-replay-gradient drop-shadow-[0_0_10px_#00F5FF]"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Re:Play
          </motion.h1>

          <motion.p
            className="mt-4 text-xl font-plex text-replay-amber/90"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Rewind the Future.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="mt-12 flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a
              href="https://expo.dev"
              target="_blank"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-replay-gradient text-black font-plex font-semibold transition-transform duration-200 hover:scale-105"
            >
              <Play className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              Try on Expo Go
            </a>

            <a
              href="https://github.com/engineernoob/replay"
              target="_blank"
              className="px-6 py-3 border border-replay-cyan text-replay-cyan rounded-lg font-plex font-semibold hover:bg-replay-cyan/10 transition-colors"
            >
              View on GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* Floating cassette glow */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,#FF4E9C15_0%,transparent_70%)]"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
      </section>

      {/* ─────────────── GALLERY SECTION ─────────────── */}
      <GallerySection />

      {/* ─────────────── OUTRO / FOOTER ─────────────── */}
      <footer className="flex flex-col items-center justify-center py-24 bg-black/80 text-replay-amber text-sm">
        <p className="tracking-widest uppercase opacity-80">
          Re:Play — Conversations never really end.
        </p>
        <div className="mt-6 h-[1px] w-32 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
      </footer>
    </main>
  );
}
