"use client";

import { StoryHero, StorySection } from "@/components/sections";
import { CalloutBox, StoryImageGallery, Timeline } from "@/components/ui";
import { useLanguage } from "@/lib/language-context";
import { IMAGE_MAPPING } from "@/lib/image-mapping";

export default function GunungPatuhaPage() {
  const { t, tArray, tTimeline } = useLanguage();

  const paragraphsArray = tArray("stories.gunungPatuha.paragraphs");
  const captionsArray = tArray("stories.gunungPatuha.imageCaptions");
  const timelineArray = tTimeline("stories.gunungPatuha.timeline.items");

  const patuhaImages = [
    {
      src: IMAGE_MAPPING.sejarah.src,
      alt: "Kawah Putih dari ketinggian Gunung Patuha",
      caption: captionsArray[0] || "",
    },
    {
      src: "/images/IMG_8977.jpg",
      alt: "Hutan pegunungan di kawasan Gunung Patuha",
      caption: captionsArray[1] || "",
    },
  ];

  return (
    <>
      <StoryHero
        imageSrc={IMAGE_MAPPING.gunungPatuha.src}
        imageAlt={IMAGE_MAPPING.gunungPatuha.alt}
        title={t("stories.gunungPatuha.title")}
        eyebrow={t("stories.gunungPatuha.eyebrow")}
      />

      <StorySection
        imageSrc={IMAGE_MAPPING.gunungPatuha.src}
        imageAlt={IMAGE_MAPPING.gunungPatuha.alt}
        imagePosition="left"
        paragraphs={paragraphsArray}
      />

      <StoryImageGallery images={patuhaImages} layout="duo" />

      <section className="bg-kabut-50 pb-12 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <CalloutBox variant="trivia">
            {t("stories.gunungPatuha.callout")}
          </CalloutBox>
        </div>
      </section>

      <section className="bg-kabut-100 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center font-serif text-2xl font-semibold text-arang-900 sm:mb-12 sm:text-3xl">
            {t("stories.gunungPatuha.timeline.title")}
          </h2>
          <Timeline items={timelineArray} />
        </div>
      </section>
    </>
  );
}
