"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface StorySectionProps {
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  paragraphs: string[];
}

export default function StorySection({
  imageSrc,
  imageAlt,
  imagePosition = "left",
  paragraphs,
}: StorySectionProps) {
  return (
    <section className="bg-kabut-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid gap-8 lg:grid-cols-2 lg:gap-16 ${
            imagePosition === "right" ? "lg:direction-rtl" : ""
          }`}
        >
          {/* Image */}
          <motion.div
            className={`relative aspect-[4/3] overflow-hidden rounded-md lg:aspect-auto ${
              imagePosition === "right" ? "lg:order-2" : "lg:order-1"
            }`}
            initial={{ opacity: 0, x: imagePosition === "left" ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Content */}
          <div
            className={`flex flex-col justify-center ${
              imagePosition === "right" ? "lg:order-1" : "lg:order-2"
            }`}
          >
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-body-lg leading-relaxed text-arang-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {index > 0 && <span className="mt-6 block" />}
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
