"use client";

import { StoryHero, StorySection } from "@/components/sections";
import { CalloutBox, StoryImageGallery } from "@/components/ui";
import { useLanguage } from "@/lib/language-context";
import { IMAGE_MAPPING } from "@/lib/image-mapping";

export default function SunanIbuPage() {
  const { t } = useLanguage();

  const paragraphs = t("stories.sunanIbu.paragraphs");
  const paragraphsArray = typeof paragraphs === "string" ? [paragraphs] : paragraphs;

  const imageCaptions = t("stories.sunanIbu.imageCaptions");
  const captionsArray = typeof imageCaptions === "string" ? [imageCaptions] : imageCaptions;

  const sunanIbuImages = [
    {
      src: "/images/IMG_8977.jpg",
      alt: "Pemandangan matahari terbit di kawasan Sunan Ibu",
      caption: captionsArray[0] || "",
    },
    {
      src: "/images/IMG_8978.jpg",
      alt: "Suasana alam di sekitar Gunung Patuha",
      caption: captionsArray[1] || "",
    },
  ];

  return (
    <>
      <StoryHero
        imageSrc={IMAGE_MAPPING.sunanIbu.src}
        imageAlt={IMAGE_MAPPING.sunanIbu.alt}
        title={t("stories.sunanIbu.title")}
        eyebrow={t("stories.sunanIbu.eyebrow")}
      />

      <StorySection
        imageSrc={IMAGE_MAPPING.sunanIbu.src}
        imageAlt={IMAGE_MAPPING.sunanIbu.alt}
        imagePosition="left"
        paragraphs={paragraphsArray}
      />

      <StoryImageGallery images={sunanIbuImages} layout="duo" />

      <section className="bg-kabut-50 pb-12 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <CalloutBox variant="nilai">
            {t("stories.sunanIbu.callout")}
          </CalloutBox>
        </div>
      </section>
    </>
  );
}
