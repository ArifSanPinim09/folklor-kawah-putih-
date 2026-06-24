import { StoryHero, StorySection } from "@/components/sections";
import { CalloutBox, Timeline } from "@/components/ui";
import { IMAGE_MAPPING } from "@/lib/image-mapping";

const paragraphs = [
  "Gunung Patuha adalah gunung berapi yang terletak di bagian selatan Kabupaten Bandung dengan ketinggian sekitar 2.434 meter di atas permukaan laut.",
  'Nama "Patuha" berasal dari istilah "Pak Tua", yang berarti orang tua atau sesepuh yang dihormati. Masyarakat setempat meyakini bahwa gunung ini memiliki nilai spiritual yang kuat dan berkaitan dengan keberadaan para leluhur.',
  "Selain menjadi lokasi terbentuknya Kawah Putih, Gunung Patuha juga memiliki kekayaan alam berupa hutan pegunungan, sumber panas bumi, serta beragam flora dan fauna yang hidup di kawasan tersebut.",
];

const timelineItems = [
  {
    title: "Pak Tua",
    description: "Asal nilai spiritual & nama",
  },
  {
    title: "Gunung Patuha",
    description: "Gunung berapi yang dihormati",
  },
  {
    title: "Kawah Putih",
    description: "Terbentuk dari letusan",
  },
  {
    title: "Hutan, Panas Bumi & Flora-Fauna",
    description: "Kekayaan alam kawasan",
  },
];

export default function GunungPatuhaPage() {
  return (
    <>
      <StoryHero
        imageSrc={IMAGE_MAPPING.gunungPatuha.src}
        imageAlt={IMAGE_MAPPING.gunungPatuha.alt}
        title="Gunung Patuha"
        eyebrow="03 — Asal Nama & Tempat Sakral"
      />

      <StorySection
        imageSrc={IMAGE_MAPPING.gunungPatuha.src}
        imageAlt={IMAGE_MAPPING.gunungPatuha.alt}
        imagePosition="left"
        paragraphs={paragraphs}
      />

      <section className="bg-kabut-50 pb-12 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <CalloutBox variant="trivia">
            Nama &quot;Patuha&quot; berasal dari istilah &quot;Pak Tua&quot; —
            sesepuh yang dihormati masyarakat sekitar.
          </CalloutBox>
        </div>
      </section>

      <section className="bg-kabut-100 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center font-serif text-2xl font-semibold text-arang-900 sm:mb-12 sm:text-3xl">
            Alur Sejarah
          </h2>
          <Timeline items={timelineItems} />
        </div>
      </section>
    </>
  );
}
