"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Lightbulb } from "lucide-react";

interface FactCarouselProps {
  facts: string[];
}

export default function FactCarousel({ facts }: FactCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    const threshold = 50;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    if (offset < -threshold || velocity < -500) {
      // Swipe left - next
      goToNext();
    } else if (offset > threshold || velocity > 500) {
      // Swipe right - previous
      goToPrevious();
    } else {
      // Snap back
      animate(x, 0, { type: "spring", stiffness: 300, damping: 30 });
    }
  };

  const goToNext = () => {
    if (currentIndex < facts.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      animate(x, 0, { type: "spring", stiffness: 300, damping: 30 });
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      animate(x, 0, { type: "spring", stiffness: 300, damping: 30 });
    }
  };

  const progress = ((currentIndex + 1) / facts.length) * 100;

  return (
    <section className="bg-kabut-100 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-caption font-medium uppercase tracking-widest text-danau-500">
            Tahukah Kamu?
          </p>
          <h2 className="mt-2 font-serif text-2xl font-semibold text-arang-900 sm:text-3xl">
            Fakta Unik Kawah Putih
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative mt-8 sm:mt-10" ref={containerRef}>
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4"
              drag="x"
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              style={{ x }}
            >
              {facts.map((fact, index) => (
                <motion.div
                  key={index}
                  className={`w-full flex-shrink-0 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)] ${
                    index === currentIndex ? "" : "hidden sm:block"
                  }`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0.5,
                    scale: index === currentIndex ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="rounded-md border border-kabut-100 bg-kabut-50 p-6 sm:p-8">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-belerang-400/10">
                        <Lightbulb className="h-5 w-5 text-belerang-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-body leading-relaxed text-arang-900">
                          {fact}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-32 overflow-hidden rounded-full bg-kabut-abu/20">
              <motion.div
                className="h-full rounded-full bg-danau-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Navigation Dots - Mobile */}
          <div className="mt-4 flex justify-center gap-2 sm:hidden">
            {facts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? "bg-danau-500" : "bg-kabut-abu/30"
                }`}
                aria-label={`Fakta ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
