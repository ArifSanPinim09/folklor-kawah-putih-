"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { IMAGE_MAPPING } from "@/lib/image-mapping";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const { t } = useLanguage();

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[600px] overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY }}
      >
        <Image
          src={IMAGE_MAPPING.hero.src}
          alt={IMAGE_MAPPING.hero.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Fog Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Fog 1 - Top */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[40%]"
          style={{
            background: "linear-gradient(to bottom, rgba(247, 245, 241, 0.8) 0%, transparent 100%)",
          }}
          animate={{
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Fog 2 - Middle drifting */}
        <motion.div
          className="absolute top-[20%] left-[-20%] right-[-20%] h-[30%]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(199, 217, 214, 0.4) 0%, transparent 70%)",
          }}
          animate={{
            x: ["0%", "10%", "0%"],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Fog 3 - Bottom */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[50%]"
          style={{
            background: "linear-gradient(to top, rgba(247, 245, 241, 0.9) 0%, transparent 100%)",
          }}
          animate={{
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-4"
        style={{ opacity }}
      >
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <motion.p
            className="mb-4 text-caption font-medium uppercase tracking-widest text-danau-500 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("hero.eyebrow")}
          </motion.p>

          {/* Headline */}
          <motion.h1
            className="font-serif text-4xl font-semibold leading-tight tracking-tight text-arang-900 sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t("hero.headline")}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-body-lg leading-relaxed text-arang-900/80 sm:mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t("hero.description")}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="mt-8 sm:mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href="/sejarah"
              className="group inline-flex items-center gap-2 rounded-md bg-danau-500 px-6 py-3 text-body font-medium text-kabut-50 transition-all duration-200 hover:bg-danau-700 hover:scale-[1.02] active:scale-[0.98] sm:px-8 sm:py-4"
            >
              {t("hero.cta")}
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Link
            href="#story-preview"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-arang-900/20 text-arang-900/60 transition-colors duration-200 hover:border-arang-900/40 hover:text-arang-900/80"
            aria-label={t("accessibility.scrollToBottom")}
          >
            <ChevronDown className="h-6 w-6" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
