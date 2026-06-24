import { StoryHero, StorySection } from "@/components/sections";
import { CalloutBox } from "@/components/ui";
import { IMAGE_MAPPING } from "@/lib/image-mapping";

const paragraphs = [
  "Kawah Putih merupakan salah satu destinasi wisata alam terkenal di Kabupaten Bandung yang berada di kawasan Gunung Patuha. Kawah ini terbentuk akibat letusan Gunung Patuha yang menghasilkan cekungan besar yang kemudian menjadi danau kawah.",
  "Keunikan Kawah Putih terletak pada warna airnya yang dapat berubah-ubah, mulai dari putih kehijauan hingga kebiruan. Perubahan warna tersebut dipengaruhi oleh kandungan belerang serta kondisi cuaca di sekitarnya.",
  "Kawah Putih mulai dikenal luas setelah seorang ahli botani asal Belanda, Franz Wilhelm Junghuhn, melakukan penelitian di kawasan tersebut pada tahun 1837. Sejak saat itu, Kawah Putih menjadi salah satu objek wisata alam yang menarik perhatian karena keindahan lanskapnya serta fenomena alam yang unik.",
];

export default function SejarahPage() {
  return (
    <>
      <StoryHero
        imageSrc={IMAGE_MAPPING.sejarah.src}
        imageAlt={IMAGE_MAPPING.sejarah.alt}
        title="Sejarah Kawah Putih"
        eyebrow="01 — Asal Mula"
      />

      <StorySection
        imageSrc={IMAGE_MAPPING.sejarah.src}
        imageAlt={IMAGE_MAPPING.sejarah.alt}
        imagePosition="left"
        paragraphs={paragraphs}
      />

      <section className="bg-kabut-50 pb-12 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <CalloutBox variant="trivia">
            Kawah Putih mulai dikenal luas berkat penelitian Franz Wilhelm
            Junghuhn, ahli botani Belanda, pada tahun 1837.
          </CalloutBox>
        </div>
      </section>
    </>
  );
}
