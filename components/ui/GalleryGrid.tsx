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
      {/* Masonry layout — kartu menyesuaikan tinggi gambar */}
      <div className="columns-2 gap-3 sm:gap-4 lg:columns-3">
        {images.map((image, index) => (
          <motion.button
            key={image.id}
            className="group relative mb-3 block w-full overflow-hidden rounded-md sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            onClick={() => setSelectedIndex(index)}
            aria-label={`Lihat ${image.caption}`}
          >
            {/* Gambar mengikuti rasio aslinya */}
            <div className="relative overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
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
