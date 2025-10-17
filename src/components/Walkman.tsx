"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Play, Pause } from "lucide-react";

const Walkman = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <section className="py-24 flex justify-center items-center relative overflow-hidden bg-deepNavy/80">
      {/* Background Scanlines (Subtle texture) */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)_1px,transparent_1px,transparent_2px)]"></div>

      <div className="w-[90%] max-w-xl relative p-6 md:p-10 border-4 border-electricCyan/50 bg-deepNavy shadow-glow-cyan/50 backdrop-blur-sm">
        {/* Cinematic Edge Glow: Ambient Lighting/Reflection */}
        <div className="absolute inset-0 mix-blend-screen opacity-20 pointer-events-none">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-electricCyan/50 blur-[50px]"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amberGold/50 blur-[50px]"></div>
        </div>

        {/* Title/Header */}
        <h3 className="font-title text-2xl uppercase tracking-wider text-amberGold mb-6 border-b border-amberGold/30 pb-2">
          AI Console
        </h3>

        {/* Walkman/Cassette Slot */}
        <div className="relative aspect-video bg-deepNavy border-4 border-deepNavy/50 overflow-hidden shadow-scanlines">
          {/* Cassette Slot / Window */}
          <div className="absolute inset-2 bg-black/70 flex items-center justify-center">
            {/* Reel 1 (Left) - Framer Motion for smooth continuous spin */}
            <motion.div
              className={`absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-softMagenta flex items-center justify-center bg-black transition-all duration-500`}
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{
                ease: "linear",
                duration: 1,
                repeat: isPlaying ? Infinity : 0,
              }}
            >
              <div className="w-4 h-4 rounded-full bg-softMagenta/80 shadow-neon-magenta"></div>
            </motion.div>

            {/* Reel 2 (Right) */}
            <motion.div
              className={`absolute right-1/4 top-1/2 translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-softMagenta flex items-center justify-center bg-black transition-all duration-500`}
              animate={{ rotate: isPlaying ? -360 : 0 }}
              transition={{
                ease: "linear",
                duration: 1,
                repeat: isPlaying ? Infinity : 0,
              }}
            >
              <div className="w-4 h-4 rounded-full bg-softMagenta/80 shadow-neon-magenta"></div>
            </motion.div>

            {/* Neon Ripple Effect (When playing) */}
            {isPlaying && (
              <motion.div
                initial={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeOut",
                }}
                className="absolute w-1/2 h-1/2 bg-softMagenta/30 rounded-full blur-xl"
              />
            )}

            {/* Simulated Cassette Label */}
            <div className="absolute top-4 left-4 right-4 text-center font-body text-xs text-electricCyan/70">
              <p className="border-b border-electricCyan/50">
                Re:Play - Track 001
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center mt-8 space-x-6">
          <motion.button
            onClick={togglePlay}
            whileHover={{
              scale: 1.1,
              boxShadow: isPlaying ? "0 0 15px #FFDD57" : "0 0 15px #00F5FF",
            }}
            whileTap={{ scale: 0.9 }}
            className={`p-4 rounded-full ${
              isPlaying
                ? "bg-amberGold text-deepNavy"
                : "bg-electricCyan text-deepNavy"
            } font-title uppercase transition-colors duration-300 shadow-xl`}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6" />
            )}
          </motion.button>

          <div className="p-4 flex flex-col justify-center">
            <p
              className={`font-body text-sm ${
                isPlaying
                  ? "text-amberGold text-shadow-neon-amber"
                  : "text-electricCyan/50"
              }`}
            >
              {isPlaying ? "TRANSMITTING..." : "STANDBY"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Walkman;
