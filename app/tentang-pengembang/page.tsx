"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export default function AboutDeveloper() {
  const { t } = useLanguage();

  const developerInfo = {
    id: {
      eyebrow: "Tentang Pengembang",
      title: "Pengembang Website",
      name: "Nazwa Amalia Zahta",
      nim: "J0402221009",
      programStudi: "Ekowisata",
      institusi: "Sekolah Vokasi IPB University",
      description: "Website ini dikembangkan sebagai media interpretasi digital berbasis folklor Kawah Putih untuk mendukung penyampaian informasi sejarah, budaya dan kearifan lokal kepada wisatawan sebagai bagian dari penelitian skripsi.",
    },
    en: {
      eyebrow: "About the Developer",
      title: "Website Developer",
      name: "Nazwa Amalia Zahta",
      nim: "J0402221009",
      programStudi: "Ecotourism",
      institusi: "Vocational School of IPB University",
      description: "This website is developed as a digital interpretation media based on Kawah Putih folklore to support the delivery of historical, cultural and local wisdom information to tourists as part of thesis research.",
    },
  };

  const currentLang = developerInfo[useLanguage().language];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-danau-500 to-kabut-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-danau-700/30 via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.p
              className="mb-4 text-caption font-medium uppercase tracking-widest text-danau-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {currentLang.eyebrow}
            </motion.p>
            <motion.h1
              className="font-serif text-4xl font-semibold text-arang-900 sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {currentLang.title}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Developer Info Section */}
      <section className="bg-kabut-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-md border border-kabut-100 bg-white p-6 sm:p-8 md:p-10 shadow-sm">
              {/* Developer Name */}
              <div className="text-center mb-8">
                <p className="text-caption font-medium uppercase tracking-widest text-danau-500">Perancang Website</p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-arang-900 sm:text-4xl">
                  {currentLang.name}
                </h2>
              </div>

              {/* Developer Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="min-w-[140px] text-base text-kabut-abu font-medium">NIM:</span>
                  <span className="flex-1 text-lg text-arang-900">{currentLang.nim}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="min-w-[140px] text-base text-kabut-abu font-medium">Program Studi:</span>
                  <span className="flex-1 text-lg text-arang-900">{currentLang.programStudi}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="min-w-[140px] text-base text-kabut-abu font-medium">Institusi:</span>
                  <span className="flex-1 text-lg text-arang-900">{currentLang.institusi}</span>
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-kabut-100 pt-6 mt-6">
                <p className="text-body leading-relaxed text-kabut-abu text-center">
                  {currentLang.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
