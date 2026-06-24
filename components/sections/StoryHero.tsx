"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface StoryHeroProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  eyebrow: string;
}

export default function StoryHero({
  imageSrc,
  imageAlt,
  title,
  eyebrow,
}: StoryHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[70vh] min-h-[500px] overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(33, 31, 28, 0.3) 0%, rgba(247, 245, 241, 0.9) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-end px-4 pb-12 sm:pb-16"
        style={{ opacity }}
      >
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <motion.p
            className="mb-3 text-caption font-medium uppercase tracking-widest text-danau-500 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {eyebrow}
          </motion.p>

          {/* Title */}
          <motion.h1
            className="font-serif text-4xl font-semibold leading-tight tracking-tight text-arang-900 sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {title}
          </motion.h1>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full border border-arang-900/20 text-arang-900/60"
              aria-label="Scroll ke bawah"
            >
              <ChevronDown className="h-5 w-5" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
