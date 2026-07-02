"use client";

import { Hero, StoryPreview } from "@/components/sections";
import { FactCarousel, MapSection } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Hero />
      <StoryPreview />
      <FactCarousel />
      <MapSection />
    </>
  );
}
