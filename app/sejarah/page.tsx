"use client";

import { StoryHero, StorySection } from "@/components/sections";
import { CalloutBox, StoryImageGallery } from "@/components/ui";
import { useLanguage } from "@/lib/language-context";
import { IMAGE_MAPPING } from "@/lib/image-mapping";

export default function SejarahPage() {
  const { t, tArray } = useLanguage();

  const paragraphsArray = tArray("stories.sejarah.paragraphs");

  const sejarahImages = [
    {
      src: "/images/sejarah.jpg",
      alt: "Kawah Putih dari sudut pandang berbeda",
      caption: t("stories.sejarah.eyebrow") === "Asal Mula" ? "Keindahan Kawah Putih yang telah dikenal sejak abad ke-19" : "The beauty of Kawah Putih known since the 19th century",
    },
    {
      src: "/images/IMG_8978.jpg",
      alt: "Suasana kawasan Kawah Putih",
      caption: t("stories.sejarah.eyebrow") === "Asal Mula" ? "Fenomena alam yang memukau di kawasan Gunung Patuha" : "Stunning natural phenomena in Mount Patuha area",
    },
  ];

  return (
    <>
      <StoryHero
        imageSrc={IMAGE_MAPPING.sejarah.src}
        imageAlt={IMAGE_MAPPING.sejarah.alt}
        title={t("stories.sejarah.title")}
        eyebrow={t("stories.sejarah.eyebrow")}
      />

      <StorySection
        imageSrc={IMAGE_MAPPING.sejarah.src}
        imageAlt={IMAGE_MAPPING.sejarah.alt}
        imagePosition="left"
        paragraphs={paragraphsArray}
      />

      <StoryImageGallery images={sejarahImages} layout="duo" />

      <section className="bg-kabut-50 pb-12 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <CalloutBox variant="trivia">
            {t("stories.sejarah.callout")}
          </CalloutBox>
        </div>
      </section>
    </>
  );
}
