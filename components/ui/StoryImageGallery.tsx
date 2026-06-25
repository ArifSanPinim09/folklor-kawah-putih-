"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface StoryImageGalleryProps {
  images: GalleryImage[];
  layout?: "single" | "duo";
}

export default function StoryImageGallery({
  images,
  layout = "duo",
}: StoryImageGalleryProps) {
  return (
    <section className="bg-kabut-50 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid gap-4 sm:gap-6 ${
            layout === "duo" && images.length >= 2
              ? "sm:grid-cols-2"
              : "grid-cols-1"
          }`}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div
                className={`relative overflow-hidden ${
                  layout === "single" ? "aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={
                    layout === "single"
                      ? "100vw"
                      : "(max-width: 640px) 100vw, 50vw"
                  }
                />
              </div>
              {image.caption && (
                <p className="mt-3 text-sm text-kabut-abu italic">
                  {image.caption}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
