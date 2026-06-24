"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import Lightbox from "./Lightbox";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {images.map((image, index) => (
          <motion.button
            key={image.id}
            className={`group relative overflow-hidden rounded-md ${
              index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedIndex(index)}
            aria-label={`Lihat ${image.caption}`}
          >
            <div
              className={`relative overflow-hidden ${
                index === 0 ? "aspect-[4/3] lg:aspect-[16/10]" : "aspect-square"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes={
                  index === 0
                    ? "(max-width: 1024px) 100vw, 66vw"
                    : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                }
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-arang-900/0 transition-colors duration-300 group-hover:bg-arang-900/30" />

              {/* Expand Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="rounded-full bg-kabut-50/90 p-2">
                  <Expand className="h-5 w-5 text-arang-900" />
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-arang-900/80 to-transparent p-3 sm:p-4">
              <p className="text-caption font-medium text-kabut-50 sm:text-sm">
                {image.caption}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <Lightbox
          images={images}
          initialIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </>
  );
}
