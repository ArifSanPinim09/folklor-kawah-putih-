"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { STORY_PAGES } from "@/lib/constants";
import { IMAGE_MAPPING } from "@/lib/image-mapping";

const storyImages = [
  IMAGE_MAPPING.sejarah,
  IMAGE_MAPPING.dombaLukutan,
  IMAGE_MAPPING.gunungPatuha,
  IMAGE_MAPPING.kisahKaruhun,
  IMAGE_MAPPING.sunanIbu,
];

export default function StoryPreview() {
  return (
    <section id="story-preview" className="bg-kabut-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-caption font-medium uppercase tracking-widest text-danau-500">
            Jelajahi Cerita
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-arang-900 sm:text-4xl">
            Lima Kisah di Balik Kabut
          </h2>
          <p className="mt-4 text-body-lg text-kabut-abu">
            Setiap cerita membawa Anda lebih dalam memahami kearifan lokal dan
            keindahan alam Kawah Putih.
          </p>
        </motion.div>

        {/* Story Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:mt-16">
          {STORY_PAGES.slice(0, 3).map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={story.href}
                className="group block overflow-hidden rounded-md border border-kabut-100 bg-kabut-50 transition-all duration-300 hover:border-danau-500/20 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={storyImages[index].src}
                    alt={storyImages[index].alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <p className="text-caption font-medium uppercase tracking-widest text-danau-500">
                    {story.number} — {story.eyebrow}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-arang-900 sm:text-2xl">
                    {story.title}
                  </h3>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-danau-500 transition-colors duration-200 group-hover:text-danau-700">
                    Baca cerita
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Remaining Stories - Compact */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {STORY_PAGES.slice(3).map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Link
                href={story.href}
                className="group flex items-center gap-4 rounded-md border border-kabut-100 bg-kabut-50 p-4 transition-all duration-300 hover:border-danau-500/20 hover:shadow-md sm:p-5"
              >
                {/* Thumbnail */}
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md sm:h-20 sm:w-20">
                  <Image
                    src={storyImages[index + 3].src}
                    alt={storyImages[index + 3].alt}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-caption font-medium uppercase tracking-widest text-danau-500">
                    {story.number} — {story.eyebrow}
                  </p>
                  <h3 className="mt-1 font-serif text-lg font-semibold text-arang-900 truncate sm:text-xl">
                    {story.title}
                  </h3>
                </div>

                {/* Arrow */}
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-danau-500 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
