"use client";

import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-arang-900 text-kabut-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Logo */}
          <p className="font-serif text-2xl font-semibold text-kabut-50 sm:text-3xl">
            Kawah Putih
          </p>

          {/* Divider */}
          <div className="mx-auto my-6 h-px w-16 bg-kabut-50/20" />

          {/* Description */}
          <p className="text-body-lg leading-relaxed text-kabut-50/80">
            {t("footer.description")}
          </p>

          {/* Copyright */}
          <p className="mt-8 text-caption text-kabut-50/50">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
