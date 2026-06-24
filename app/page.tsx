import { Hero, StoryPreview } from "@/components/sections";
import { FactCarousel, MapSection } from "@/components/ui";
import { FACTS } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Hero />
      <StoryPreview />
      <FactCarousel facts={[...FACTS]} />
      <MapSection />
    </>
  );
}
