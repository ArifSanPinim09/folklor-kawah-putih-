import { StoryHero, StorySection } from "@/components/sections";
import { CalloutBox } from "@/components/ui";
import { IMAGE_MAPPING } from "@/lib/image-mapping";

const paragraphs = [
  "Dalam budaya Sunda, karuhun merupakan sebutan bagi leluhur atau nenek moyang yang dihormati. Masyarakat sekitar Gunung Patuha percaya bahwa para karuhun memiliki peran penting dalam menjaga keseimbangan antara alam dan kehidupan manusia.",
  "Berbagai cerita, tradisi, dan kepercayaan yang berkembang di kawasan Kawah Putih sering dikaitkan dengan keberadaan karuhun sebagai sumber nilai, petuah, serta kearifan lokal.",
  "Kisah-kisah tersebut diwariskan dari generasi ke generasi dan menjadi bagian penting dari identitas budaya masyarakat Sunda hingga saat ini.",
];

export default function KisahKaruhunPage() {
  return (
    <>
      <StoryHero
        imageSrc={IMAGE_MAPPING.kisahKaruhun.src}
        imageAlt={IMAGE_MAPPING.kisahKaruhun.alt}
        title="Kisah Karuhun"
        eyebrow="03 — Kearifan Leluhur"
      />

      <StorySection
        imageSrc={IMAGE_MAPPING.kisahKaruhun.src}
        imageAlt={IMAGE_MAPPING.kisahKaruhun.alt}
        imagePosition="right"
        paragraphs={paragraphs}
      />

      <section className="bg-kabut-50 pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <CalloutBox variant="pesan">
            &ldquo;Karuhun memiliki peran penting dalam menjaga keseimbangan
            antara alam dan kehidupan manusia.&rdquo;
          </CalloutBox>
        </div>
      </section>
    </>
  );
}
