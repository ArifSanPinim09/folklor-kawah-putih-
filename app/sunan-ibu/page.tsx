import { StoryHero, StorySection } from "@/components/sections";
import { CalloutBox } from "@/components/ui";
import { IMAGE_MAPPING } from "@/lib/image-mapping";

const paragraphs = [
  "Sunan Ibu merupakan sosok yang dihormati dalam cerita rakyat masyarakat sekitar Gunung Patuha. Beliau dikenal sebagai tokoh yang memiliki kebijaksanaan serta kekuatan spiritual yang tinggi.",
  "Dalam berbagai kisah yang berkembang, Sunan Ibu sering dikaitkan dengan penjagaan kawasan Gunung Patuha dan hubungan harmonis antara manusia dengan alam.",
  "Masyarakat meyakini bahwa nilai-nilai yang diwariskan oleh Sunan Ibu mengajarkan pentingnya menghormati lingkungan, sesama manusia, serta menjaga warisan budaya leluhur. Kisah Sunan Ibu menjadi salah satu bagian penting dari folklor yang memperkaya sejarah, budaya, dan nilai-nilai kehidupan yang berkembang di kawasan Kawah Putih.",
];

export default function SunanIbuPage() {
  return (
    <>
      <StoryHero
        imageSrc={IMAGE_MAPPING.sunanIbu.src}
        imageAlt={IMAGE_MAPPING.sunanIbu.alt}
        title="Sunan Ibu"
        eyebrow="04 — Kebijaksanaan & Harmoni"
      />

      <StorySection
        imageSrc={IMAGE_MAPPING.sunanIbu.src}
        imageAlt={IMAGE_MAPPING.sunanIbu.alt}
        imagePosition="left"
        paragraphs={paragraphs}
      />

      <section className="bg-kabut-50 pb-12 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <CalloutBox variant="nilai">
            Nilai-nilai Sunan Ibu mengajarkan pentingnya menghormati lingkungan,
            sesama manusia, dan warisan budaya leluhur.
          </CalloutBox>
        </div>
      </section>
    </>
  );
}
