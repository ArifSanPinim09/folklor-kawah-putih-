import { StoryHero, StorySection } from "@/components/sections";
import { CalloutBox, StoryImageGallery } from "@/components/ui";
import { IMAGE_MAPPING } from "@/lib/image-mapping";

const paragraphs = [
  "Domba Lukutan merupakan tokoh dalam cerita rakyat yang berkembang di sekitar Kawah Putih dan Gunung Patuha. Domba ini dipercaya sebagai hewan sakral yang memiliki hubungan erat dengan leluhur masyarakat setempat.",
  "Dalam cerita yang diwariskan secara turun-temurun, Domba Lukutan digambarkan sebagai penjaga kawasan Gunung Patuha yang memiliki kekuatan istimewa. Kehadirannya menjadi simbol perlindungan, keseimbangan alam, dan hubungan harmonis antara manusia dengan lingkungan.",
  "Hingga saat ini, kisah Domba Lukutan masih dikenal sebagai salah satu folklor khas Kawah Putih yang menjadi bagian dari identitas budaya masyarakat sekitar.",
];

const ritualImages = [
  {
    src: IMAGE_MAPPING.ritualDomba.src,
    alt: IMAGE_MAPPING.ritualDomba.alt,
    caption: "Ritual pelepasan domba putih di kawasan Kawah Putih",
  },
  {
    src: IMAGE_MAPPING.ritual2.src,
    alt: IMAGE_MAPPING.ritual2.alt,
    caption: "Suasana ritual tradisional masyarakat sekitar",
  },
];

export default function DombaLukutanPage() {
  return (
    <>
      <StoryHero
        imageSrc={IMAGE_MAPPING.dombaLukutan.src}
        imageAlt={IMAGE_MAPPING.dombaLukutan.alt}
        title="Domba Lukutan"
        eyebrow="01 — Penjaga Kawasan"
      />

      <StorySection
        imageSrc={IMAGE_MAPPING.dombaLukutan.src}
        imageAlt={IMAGE_MAPPING.dombaLukutan.alt}
        imagePosition="right"
        paragraphs={paragraphs}
      />

      <StoryImageGallery images={ritualImages} layout="duo" />

      <section className="bg-kabut-50 pb-12 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <CalloutBox variant="nilai">
            Kehadirannya menjadi simbol perlindungan, keseimbangan alam, dan
            hubungan harmonis antara manusia dengan lingkungan.
          </CalloutBox>
        </div>
      </section>
    </>
  );
}
