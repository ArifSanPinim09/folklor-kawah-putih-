"use client";

import { motion } from "framer-motion";
import { GalleryGrid } from "@/components/ui";
import { useLanguage } from "@/lib/language-context";
import { IMAGE_MAPPING } from "@/lib/image-mapping";

export default function GaleriPage() {
  const { t } = useLanguage();

  return (
    <section className="bg-kabut-50 py-12 pt-24 sm:py-16 sm:pt-28 lg:py-20 lg:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-caption font-medium uppercase tracking-widest text-danau-500">
            {t("gallery.eyebrow")}
          </p>
          <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-arang-900 sm:text-4xl">
            {t("gallery.title")}
          </h1>
          <p className="mt-4 text-body-lg text-kabut-abu">
            {t("gallery.description")}
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="mt-10 sm:mt-14">
          <GalleryGrid images={[...IMAGE_MAPPING.gallery]} />
        </div>
      </div>
    </section>
  );
}
