"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

interface LightboxProps {
  images: LightboxImage[];
  initialIndex: number;
  onClose: () => void;
}

export default function Lightbox({
  images,
  initialIndex,
  onClose,
}: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, goToNext, goToPrevious]);

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-arang-900/90 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-kabut-50/10 p-2 text-kabut-50 transition-colors duration-200 hover:bg-kabut-50/20 sm:right-6 sm:top-6"
          aria-label="Tutup lightbox"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-kabut-50/10 p-2 text-kabut-50 transition-colors duration-200 hover:bg-kabut-50/20 sm:left-6"
          aria-label="Foto sebelumnya"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-kabut-50/10 p-2 text-kabut-50 transition-colors duration-200 hover:bg-kabut-50/20 sm:right-6"
          aria-label="Foto berikutnya"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Image Container */}
        <div className="relative z-10 mx-4 max-h-[80vh] max-w-[90vw] sm:mx-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                width={1200}
                height={800}
                className="max-h-[80vh] w-auto object-contain"
                sizes="(max-width: 768px) 90vw, 80vw"
              />

              {/* Caption */}
              <div className="mt-4 text-center">
                <p className="text-body text-kabut-50">
                  {currentImage.caption}
                </p>
                <p className="mt-1 text-caption text-kabut-50/60">
                  {currentIndex + 1} / {images.length}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
