"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { IMAGE_MAPPING } from "@/lib/image-mapping";

const storyImages = [
  IMAGE_MAPPING.dombaLukutan,
  IMAGE_MAPPING.gunungPatuha,
  IMAGE_MAPPING.kisahKaruhun,
  IMAGE_MAPPING.sunanIbu,
];

const STORY_ITEMS = [
  { id: "domba-lukutan", number: "01", titleKey: "stories.dombaLukutan.title", eyebrowKey: "stories.dombaLukutan.eyebrow", href: "/domba-lukutan" },
  { id: "gunung-patuha", number: "02", titleKey: "stories.gunungPatuha.title", eyebrowKey: "stories.gunungPatuha.eyebrow", href: "/gunung-patuha" },
  { id: "kisah-karuhun", number: "03", titleKey: "stories.kisahKaruhun.title", eyebrowKey: "stories.kisahKaruhun.eyebrow", href: "/kisah-karuhun" },
  { id: "sunan-ibu", number: "04", titleKey: "stories.sunanIbu.title", eyebrowKey: "stories.sunanIbu.eyebrow", href: "/sunan-ibu" },
];

export default function StoryPreview() {
  const { t } = useLanguage();

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
            {t("storyPreview.eyebrow")}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-arang-900 sm:text-4xl">
            {t("storyPreview.title")}
          </h2>
          <p className="mt-4 text-body-lg text-kabut-abu">
            {t("storyPreview.description")}
          </p>
        </motion.div>

        {/* Story Cards - 4 Kisah */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 sm:mt-16">
          {STORY_ITEMS.map((story, index) => (
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
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <p className="text-caption font-medium uppercase tracking-widest text-danau-500">
                    {story.number} — {t(story.eyebrowKey)}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-arang-900 sm:text-2xl">
                    {t(story.titleKey)}
                  </h3>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-danau-500 transition-colors duration-200 group-hover:text-danau-700">
                    {t("storyPreview.readStory")}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
