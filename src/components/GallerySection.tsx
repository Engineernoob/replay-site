'use client'
// 1. Import MotionValue and Variants types from framer-motion
import { motion, useScroll, useTransform, MotionValue, Variants } from 'framer-motion';
import { useRef } from 'react';

const POSTERS = [
  { id: 1, title: "Signal Found", color: "electricCyan", image: "/art/Signal-Found.png" },
  { id: 2, title: "Echoes of Tomorrow", color: "softMagenta", image: "/art/Echoes of Tomorrow.png" },
  { id: 3, title: "When Music Found Me", color: "amberGold", image: "/art/WhenMusicFoundMe.png" },
];

// Define a type for the component props to replace the 'any' usage
interface GalleryItemProps {
  id: number;
  title: string;
  color: string;
  image: string;
  y: MotionValue<string>; // Fix 1: Use MotionValue<string> instead of 'any'
  index: number;
}

// Corrected GalleryItem component
const GalleryItem = ({ title, color, image, y, index }: GalleryItemProps) => {

  // Fix 2: Explicitly define cardVariants as Variants
  const cardVariants: Variants = { 
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring", // Framer Motion correctly recognizes this literal
        bounce: 0.4,
        duration: 1.2,
        delay: index * 0.2, // Staggered entry
      }
    }
  };

  const glowClass = `hover:shadow-xl ${color === 'electricCyan' ? 'hover:shadow-glow-cyan' : color === 'softMagenta' ? 'hover:shadow-glow-magenta' : 'hover:shadow-glow-amber'}`;
  const borderClass = `${color === 'electricCyan' ? 'border-electricCyan/50' : color === 'softMagenta' ? 'border-softMagenta/50' : 'border-amberGold/50'}`;
  const textClass = `${color === 'electricCyan' ? 'text-electricCyan' : color === 'softMagenta' ? 'text-softMagenta' : 'text-amberGold'}`;
  
  return (
    <motion.div 
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
      className="w-full md:w-1/3 p-4"
    >
      <motion.div
        style={{ y: y }} // Parallax translation based on scroll
        variants={cardVariants} // Fix 2: Now correctly typed as Variants
        whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 1 : -1 }}
        className={`relative aspect-[4/5] bg-deepNavy/70 border-2 ${borderClass} transition-shadow duration-300 ease-out ${glowClass} overflow-hidden cursor-pointer`}
      >
        {/* Poster Image */}
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        {/* Holographic Sheen on Hover */}
        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100 mix-blend-overlay bg-gradient-to-br from-white/30 via-transparent to-white/10"></div>
      </motion.div>
      <p className={`mt-4 text-center font-title text-lg uppercase ${textClass}`}>{title}</p>
    </motion.div>
  );
};


const GallerySection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Parallax transformations for each card (staggered depth)
  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      
      {/* Background: gradient from black → navy with holographic glow */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, #0C2233 100%)',
        }}
      >
        {/* Subtle Holographic Glow Overlay (Requires a /public/art/holographic-mesh.svg placeholder) */}
        <div className="absolute inset-0 opacity-10 mix-blend-lighten bg-[url('/art/holographic-mesh.svg')]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-title text-4xl text-center mb-16 uppercase text-softMagenta text-shadow-neon-magenta">Future Broadcasts</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-stretch -m-4">
          {/* Pass the correct MotionValue<string> to the component */}
          <GalleryItem {...POSTERS[0]} y={y1} index={0} /> 
          <GalleryItem {...POSTERS[1]} y={y2} index={1} />
          <GalleryItem {...POSTERS[2]} y={y3} index={2} />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
