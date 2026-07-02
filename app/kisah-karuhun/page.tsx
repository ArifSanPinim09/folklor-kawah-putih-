"use client";

import { StoryHero, StorySection } from "@/components/sections";
import { CalloutBox, StoryImageGallery } from "@/components/ui";
import { useLanguage } from "@/lib/language-context";
import { IMAGE_MAPPING } from "@/lib/image-mapping";

export default function KisahKaruhunPage() {
  const { t, tArray } = useLanguage();

  const paragraphsArray = tArray("stories.kisahKaruhun.paragraphs");
  const captionsArray = tArray("stories.kisahKaruhun.imageCaptions");

  const karuhunImages = [
    {
      src: "/images/IMG_8978.jpg",
      alt: "Suasana kawasan Gunung Patuha yang sakral",
      caption: captionsArray[0] || "",
    },
    {
      src: "/images/sejarah.jpg",
      alt: "Pemandangan alam kawasan Kawah Putih",
      caption: captionsArray[1] || "",
    },
  ];

  return (
    <>
      <StoryHero
        imageSrc={IMAGE_MAPPING.kisahKaruhun.src}
        imageAlt={IMAGE_MAPPING.kisahKaruhun.alt}
        title={t("stories.kisahKaruhun.title")}
        eyebrow={t("stories.kisahKaruhun.eyebrow")}
      />

      <StorySection
        imageSrc={IMAGE_MAPPING.kisahKaruhun.src}
        imageAlt={IMAGE_MAPPING.kisahKaruhun.alt}
        imagePosition="right"
        paragraphs={paragraphsArray}
      />

      <StoryImageGallery images={karuhunImages} layout="duo" />

      <section className="bg-kabut-50 pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <CalloutBox variant="pesan">
            {t("stories.kisahKaruhun.callout")}
          </CalloutBox>
        </div>
      </section>
    </>
  );
}
