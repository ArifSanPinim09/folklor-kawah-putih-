"use client";

import { StoryHero, StorySection } from "@/components/sections";
import { CalloutBox, StoryImageGallery } from "@/components/ui";
import { useLanguage } from "@/lib/language-context";
import { IMAGE_MAPPING } from "@/lib/image-mapping";

export default function DombaLukutanPage() {
  const { t, tArray } = useLanguage();

  const paragraphsArray = tArray("stories.dombaLukutan.paragraphs");
  const captionsArray = tArray("stories.dombaLukutan.imageCaptions");

  const ritualImages = [
    {
      src: IMAGE_MAPPING.ritualDomba.src,
      alt: IMAGE_MAPPING.ritualDomba.alt,
      caption: captionsArray[0] || "",
    },
    {
      src: IMAGE_MAPPING.ritual2.src,
      alt: IMAGE_MAPPING.ritual2.alt,
      caption: captionsArray[1] || "",
    },
  ];

  return (
    <>
      <StoryHero
        imageSrc={IMAGE_MAPPING.dombaLukutan.src}
        imageAlt={IMAGE_MAPPING.dombaLukutan.alt}
        title={t("stories.dombaLukutan.title")}
        eyebrow={t("stories.dombaLukutan.eyebrow")}
      />

      <StorySection
        imageSrc={IMAGE_MAPPING.dombaLukutan.src}
        imageAlt={IMAGE_MAPPING.dombaLukutan.alt}
        imagePosition="right"
        paragraphs={paragraphsArray}
      />

      <StoryImageGallery images={ritualImages} layout="duo" />

      <section className="bg-kabut-50 pb-12 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <CalloutBox variant="nilai">
            {t("stories.dombaLukutan.callout")}
          </CalloutBox>
        </div>
      </section>
    </>
  );
}
