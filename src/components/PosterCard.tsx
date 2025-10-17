"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PosterCard({
  poster,
  index,
}: {
  poster: { id: string; image: string; title: string; subtitle: string };
  index: number;
}) {
  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.3 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(255,221,87,0.25)] hover:shadow-[0_0_120px_rgba(255,221,87,0.4)] transition-all duration-700"
        whileHover={{ scale: 1.03, rotateX: 2 }}
      >
        <Image
          src={poster.image}
          alt={poster.title}
          width={1000}
          height={1500}
          className="object-cover w-full h-auto"
        />
      </motion.div>

      <p className="mt-6 text-amber-200/80 text-sm tracking-wide uppercase">
        {poster.subtitle}
      </p>
    </motion.div>
  );
}
