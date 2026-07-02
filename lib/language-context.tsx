"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
  tTimeline: (key: string) => { title: string; description: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language") as Language;
      if (saved && (saved === "id" || saved === "en")) {
        return saved;
      }
    }
    return "id";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  };

  const resolve = (key: string): unknown => {
    const keys = key.split(".");
    let value: unknown = translations[language];
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return undefined;
      }
    }
    return value;
  };

  const t = (key: string): string => {
    const value = resolve(key);
    return typeof value === "string" ? value : key;
  };

  const tArray = (key: string): string[] => {
    const value = resolve(key);
    return Array.isArray(value) ? (value as string[]) : [key];
  };

  const tTimeline = (key: string): { title: string; description: string }[] => {
    const value = resolve(key);
    if (Array.isArray(value)) {
      return value as { title: string; description: string }[];
    }
    return [];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tArray, tTimeline }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

const translations = {
  id: {
    nav: {
      beranda: "Beranda",
      sejarah: "Sejarah",
      dombaLukutan: "Domba Lukutan",
      gunungPatuha: "Gunung Patuha",
      kisahKaruhun: "Kisah Karuhun",
      sunanIbu: "Sunan Ibu",
      galeri: "Galeri",
      exploreFolklor: "Jelajahi folklor Kawah Putih",
    },
    hero: {
      eyebrow: "Folklor Kawah Putih",
      headline: "Menjelajah Kawah Putih, Menyelami Cerita di Balik Kabut Putih.",
      description: "Kawah Putih bukan hanya destinasi wisata alam yang memukau, tetapi juga menyimpan cerita, legenda, dan kearifan lokal yang diwariskan dari generasi ke generasi. Mari jelajahi setiap kisah yang hidup di balik keindahan Gunung Patuha.",
      cta: "Jelajahi Folklor",
    },
    storyPreview: {
      eyebrow: "Jelajahi Cerita",
      title: "Empat Kisah di Balik Kabut",
      description: "Setiap cerita membawa Anda lebih dalam memahami kearifan lokal dan keindahan alam Kawah Putih.",
      readStory: "Baca cerita",
    },
    factCarousel: {
      eyebrow: "Tahukah Kamu?",
      title: "Fakta Unik Kawah Putih",
      facts: [
        "Warna air Kawah Putih dapat berubah-ubah karena kandungan belerang dan kondisi cuaca.",
        "Kawah Putih mulai dikenal luas sejak penelitian Franz Wilhelm Junghuhn pada tahun 1837.",
        "Domba Lukutan dipercaya sebagai penjaga sakral kawasan Gunung Patuha.",
        "Nama \"Patuha\" berasal dari \"Pak Tua\" — sesepuh yang dihormati.",
        "Gunung Patuha memiliki ketinggian sekitar 2.434 meter di atas permukaan laut.",
        "Karuhun dipercaya menjaga keseimbangan antara alam dan kehidupan manusia.",
      ],
      factLabel: "Fakta",
    },
    map: {
      eyebrow: "Peta Lokasi",
      title: "Jelajahi Kawasan Kawah Putih",
      description: "Tiga lokasi penting di kawasan Gunung Patuha yang wajib dikunjungi.",
      mapTitle: "Peta Kawah Putih",
      viewInfo: "Lihat info",
      closeInfo: "Tutup info",
      markers: {
        kawahPutih: {
          name: "Kawah Putih",
          description: "Danau kawah vulkanik dengan warna air yang berubah-ubah",
        },
        dombaLukutan: {
          name: "Patung Domba Lukutan",
          description: "Patung penjaga sakral kawasan Gunung Patuha",
        },
        sunanIbu: {
          name: "Sunrise Point Sunan Ibu",
          description: "Lokasi terbaik untuk menyaksikan matahari terbit",
        },
      },
    },
    footer: {
      description: "Terima kasih telah menjelajahi folklor Kawah Putih. Semoga setiap cerita yang Anda baca menjadi pengingat bahwa keindahan alam dan budaya adalah warisan yang harus dijaga bersama.",
      copyright: `© ${new Date().getFullYear()} Folklor Kawah Putih`,
    },
    gallery: {
      eyebrow: "Galeri Foto",
      title: "Keindahan Kawah Putih",
      description: "Koleksi foto yang menangkap keindahan alam dan keunikan kawasan Kawah Putih.",
      viewImage: "Lihat",
      close: "Tutup",
      previous: "Foto sebelumnya",
      next: "Foto berikutnya",
    },
    stories: {
      sejarah: {
        title: "Sejarah Kawah Putih",
        eyebrow: "Asal Mula",
        paragraphs: [
          "Kawah Putih merupakan salah satu destinasi wisata alam terkenal di Kabupaten Bandung yang berada di kawasan Gunung Patuha. Kawah ini terbentuk akibat letusan Gunung Patuha yang menghasilkan cekungan besar yang kemudian menjadi danau kawah.",
          "Keunikan Kawah Putih terletak pada warna airnya yang dapat berubah-ubah, mulai dari putih kehijauan hingga kebiruan. Perubahan warna tersebut dipengaruhi oleh kandungan belerang serta kondisi cuaca di sekitarnya.",
          "Kawah Putih mulai dikenal luas setelah seorang ahli botani asal Belanda, Franz Wilhelm Junghuhn, melakukan penelitian di kawasan tersebut pada tahun 1837. Sejak saat itu, Kawah Putih menjadi salah satu objek wisata alam yang menarik perhatian karena keindahan lanskapnya serta fenomena alam yang unik.",
        ],
        callout: "Kawah Putih mulai dikenal luas berkat penelitian Franz Wilhelm Junghuhn, ahli botani Belanda, pada tahun 1837.",
        timelineTitle: "Alur Sejarah",
      },
      dombaLukutan: {
        title: "Domba Lukutan",
        eyebrow: "01 — Penjaga Kawasan",
        paragraphs: [
          "Domba Lukutan merupakan tokoh dalam cerita rakyat yang berkembang di sekitar Kawah Putih dan Gunung Patuha. Domba ini dipercaya sebagai hewan sakral yang memiliki hubungan erat dengan leluhur masyarakat setempat.",
          "Dalam cerita yang diwariskan secara turun-temurun, Domba Lukutan digambarkan sebagai penjaga kawasan Gunung Patuha yang memiliki kekuatan istimewa. Kehadirannya menjadi simbol perlindungan, keseimbangan alam, dan hubungan harmonis antara manusia dengan lingkungan.",
          "Hingga saat ini, kisah Domba Lukutan masih dikenal sebagai salah satu folklor khas Kawah Putih yang menjadi bagian dari identitas budaya masyarakat sekitar.",
        ],
        callout: "Kehadirannya menjadi simbol perlindungan, keseimbangan alam, dan hubungan harmonis antara manusia dengan lingkungan.",
        imageCaptions: [
          "Ritual pelepasan domba putih di kawasan Kawah Putih",
          "Suasana ritual tradisional masyarakat sekitar",
        ],
      },
      gunungPatuha: {
        title: "Gunung Patuha",
        eyebrow: "02 — Asal Nama & Tempat Sakral",
        paragraphs: [
          "Gunung Patuha adalah gunung berapi yang terletak di bagian selatan Kabupaten Bandung dengan ketinggian sekitar 2.434 meter di atas permukaan laut.",
          "Nama \"Patuha\" berasal dari istilah \"Pak Tua\", yang berarti orang tua atau sesepuh yang dihormati. Masyarakat setempat meyakini bahwa gunung ini memiliki nilai spiritual yang kuat dan berkaitan dengan keberadaan para leluhur.",
          "Selain menjadi lokasi terbentuknya Kawah Putih, Gunung Patuha juga memiliki kekayaan alam berupa hutan pegunungan, sumber panas bumi, serta beragam flora dan fauna yang hidup di kawasan tersebut.",
        ],
        callout: "Nama \"Patuha\" berasal dari istilah \"Pak Tua\" — sesepuh yang dihormati masyarakat sekitar.",
        timeline: {
          title: "Alur Sejarah",
          items: [
            { title: "Pak Tua", description: "Asal nilai spiritual & nama" },
            { title: "Gunung Patuha", description: "Gunung berapi yang dihormati" },
            { title: "Kawah Putih", description: "Terbentuk dari letusan" },
            { title: "Hutan, Panas Bumi & Flora-Fauna", description: "Kekayaan alam kawasan" },
          ],
        },
        imageCaptions: [
          "Danau Kawah Putih dilihat dari kawasan Gunung Patuha",
          "Hutan pegunungan yang menjadi kawasan Gunung Patuha",
        ],
      },
      kisahKaruhun: {
        title: "Kisah Karuhun",
        eyebrow: "03 — Kearifan Leluhur",
        paragraphs: [
          "Dalam budaya Sunda, karuhun merupakan sebutan bagi leluhur atau nenek moyang yang dihormati. Masyarakat sekitar Gunung Patuha percaya bahwa para karuhun memiliki peran penting dalam menjaga keseimbangan antara alam dan kehidupan manusia.",
          "Berbagai cerita, tradisi, dan kepercayaan yang berkembang di kawasan Kawah Putih sering dikaitkan dengan keberadaan karuhun sebagai sumber nilai, petuah, serta kearifan lokal.",
          "Kisah-kisah tersebut diwariskan dari generasi ke generasi dan menjadi bagian penting dari identitas budaya masyarakat Sunda hingga saat ini.",
        ],
        callout: "\"Karuhun memiliki peran penting dalam menjaga keseimbangan antara alam dan kehidupan manusia.\"",
        imageCaptions: [
          "Kawasan Gunung Patuha — tempat kearifan leluhur bersemi",
          "Alam yang dijaga oleh para karuhun",
        ],
      },
      sunanIbu: {
        title: "Sunan Ibu",
        eyebrow: "04 — Kebijaksanaan & Harmoni",
        paragraphs: [
          "Sunan Ibu merupakan sosok yang dihormati dalam cerita rakyat masyarakat sekitar Gunung Patuha. Beliau dikenal sebagai tokoh yang memiliki kebijaksanaan serta kekuatan spiritual yang tinggi.",
          "Dalam berbagai kisah yang berkembang, Sunan Ibu sering dikaitkan dengan penjagaan kawasan Gunung Patuha dan hubungan harmonis antara manusia dengan alam.",
          "Masyarakat meyakini bahwa nilai-nilai yang diwariskan oleh Sunan Ibu mengajarkan pentingnya menghormati lingkungan, sesama manusia, serta menjaga warisan budaya leluhur. Kisah Sunan Ibu menjadi salah satu bagian penting dari folklor yang memperkaya sejarah, budaya, dan nilai-nilai kehidupan yang berkembang di kawasan Kawah Putih.",
        ],
        callout: "Nilai-nilai Sunan Ibu mengajarkan pentingnya menghormati lingkungan, sesama manusia, dan warisan budaya leluhur.",
        imageCaptions: [
          "Sunrise Point di kawasan Sunan Ibu",
          "Keindahan alam yang dijaga oleh nilai-nilai Sunan Ibu",
        ],
      },
    },
    accessibility: {
      skipToContent: "Langsung ke konten utama",
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
      scrollToBottom: "Scroll ke bawah",
    },
    lightbox: {
      close: "Tutup lightbox",
      previous: "Foto sebelumnya",
      next: "Foto berikutnya",
    },
  },
  en: {
    nav: {
      beranda: "Home",
      sejarah: "History",
      dombaLukutan: "Domba Lukutan",
      gunungPatuha: "Mount Patuha",
      kisahKaruhun: "Karuhun Story",
      sunanIbu: "Sunan Ibu",
      galeri: "Gallery",
      exploreFolklor: "Explore Kawah Putih Folklore",
    },
    hero: {
      eyebrow: "Kawah Putih Folklore",
      headline: "Exploring Kawah Putih, Diving into Stories Behind the White Mist.",
      description: "Kawah Putih is not just a stunning natural tourist destination, but also holds stories, legends, and local wisdom passed down from generation to generation. Let's explore every story that lives behind the beauty of Mount Patuha.",
      cta: "Explore Folklore",
    },
    storyPreview: {
      eyebrow: "Explore Stories",
      title: "Four Tales Behind the Mist",
      description: "Each story takes you deeper into understanding the local wisdom and natural beauty of Kawah Putih.",
      readStory: "Read story",
    },
    factCarousel: {
      eyebrow: "Did You Know?",
      title: "Unique Facts About Kawah Putih",
      facts: [
        "The color of Kawah Putih's water can change due to sulfur content and weather conditions.",
        "Kawah Putih became widely known since Franz Wilhelm Junghuhn's research in 1837.",
        "Domba Lukutan is believed to be the sacred guardian of the Mount Patuha area.",
        "The name \"Patuha\" comes from \"Pak Tua\" — a respected elder.",
        "Mount Patuha has an elevation of approximately 2,434 meters above sea level.",
        "Karuhun is believed to maintain the balance between nature and human life.",
      ],
      factLabel: "Fact",
    },
    map: {
      eyebrow: "Location Map",
      title: "Explore the Kawah Putih Area",
      description: "Three important locations in the Mount Patuha area that are worth visiting.",
      mapTitle: "Kawah Putih Map",
      viewInfo: "View info",
      closeInfo: "Close info",
      markers: {
        kawahPutih: {
          name: "Kawah Putih",
          description: "Volcanic crater lake with changing water colors",
        },
        dombaLukutan: {
          name: "Domba Lukutan Statue",
          description: "Sacred guardian statue of Mount Patuha area",
        },
        sunanIbu: {
          name: "Sunan Ibu Sunrise Point",
          description: "Best location to watch the sunrise",
        },
      },
    },
    footer: {
      description: "Thank you for exploring the folklore of Kawah Putih. May every story you read serve as a reminder that the beauty of nature and culture is a heritage that must be preserved together.",
      copyright: `© ${new Date().getFullYear()} Kawah Putih Folklore`,
    },
    gallery: {
      eyebrow: "Photo Gallery",
      title: "The Beauty of Kawah Putih",
      description: "A collection of photos capturing the natural beauty and uniqueness of the Kawah Putih area.",
      viewImage: "View",
      close: "Close",
      previous: "Previous photo",
      next: "Next photo",
    },
    stories: {
      sejarah: {
        title: "History of Kawah Putih",
        eyebrow: "Origins",
        paragraphs: [
          "Kawah Putih is one of the famous natural tourist destinations in Bandung Regency, located in the Mount Patuha area. This crater was formed by the eruption of Mount Patuha, which created a large basin that later became a crater lake.",
          "The uniqueness of Kawah Putih lies in its water color, which can change from greenish-white to bluish. The color change is influenced by sulfur content and surrounding weather conditions.",
          "Kawah Putih became widely known after a Dutch botanist, Franz Wilhelm Junghuhn, conducted research in the area in 1837. Since then, Kawah Putih has become one of the natural tourist attractions that draws attention for the beauty of its landscape and unique natural phenomena.",
        ],
        callout: "Kawah Putih became widely known thanks to the research of Franz Wilhelm Junghuhn, a Dutch botanist, in 1837.",
        timelineTitle: "Historical Timeline",
      },
      dombaLukutan: {
        title: "Domba Lukutan",
        eyebrow: "01 — Area Guardian",
        paragraphs: [
          "Domba Lukutan is a character in folklore that developed around Kawah Putih and Mount Patuha. This sheep is believed to be a sacred animal that has a close connection with the ancestors of the local community.",
          "In stories passed down through generations, Domba Lukutan is described as the guardian of the Mount Patuha area with extraordinary powers. Its presence symbolizes protection, ecological balance, and harmonious relationships between humans and the environment.",
          "To this day, the story of Domba Lukutan remains known as one of the distinctive folklores of Kawah Putih that is part of the cultural identity of the surrounding community.",
        ],
        callout: "Its presence symbolizes protection, ecological balance, and harmonious relationships between humans and the environment.",
        imageCaptions: [
          "White sheep release ceremony at Kawah Putih area",
          "Traditional ritual atmosphere of the local community",
        ],
      },
      gunungPatuha: {
        title: "Mount Patuha",
        eyebrow: "02 — Name Origin & Sacred Place",
        paragraphs: [
          "Mount Patuha is a volcano located in the southern part of Bandung Regency at an elevation of approximately 2,434 meters above sea level.",
          "The name \"Patuha\" comes from the term \"Pak Tua\", which means an elder or respected figure. The local community believes that this mountain has strong spiritual values connected to the presence of ancestors.",
          "Besides being the location where Kawah Putih was formed, Mount Patuha also has natural wealth in the form of mountain forests, geothermal sources, and various flora and fauna that inhabit the area.",
        ],
        callout: "The name \"Patuha\" comes from the term \"Pak Tua\" — a respected elder in the surrounding community.",
        timeline: {
          title: "Historical Timeline",
          items: [
            { title: "Pak Tua", description: "Origin of spiritual values & name" },
            { title: "Mount Patuha", description: "A revered volcano" },
            { title: "Kawah Putih", description: "Formed from eruption" },
            { title: "Forest, Geothermal & Flora-Fauna", description: "Natural wealth of the area" },
          ],
        },
        imageCaptions: [
          "Kawah Putih lake viewed from Mount Patuha area",
          "Mountain forests that make up the Mount Patuha area",
        ],
      },
      kisahKaruhun: {
        title: "Karuhun Story",
        eyebrow: "03 — Ancestral Wisdom",
        paragraphs: [
          "In Sundanese culture, karuhun is a term for ancestors or forefathers who are respected. The community around Mount Patuha believes that karuhun plays an important role in maintaining the balance between nature and human life.",
          "Various stories, traditions, and beliefs that developed in the Kawah Putih area are often associated with the existence of karuhun as a source of values, advice, and local wisdom.",
          "These stories are passed down from generation to generation and become an important part of Sundanese cultural identity to this day.",
        ],
        callout: "\"Karuhun plays an important role in maintaining the balance between nature and human life.\"",
        imageCaptions: [
          "Mount Patuha area — where ancestral wisdom flourishes",
          "Nature preserved by the karuhun",
        ],
      },
      sunanIbu: {
        title: "Sunan Ibu",
        eyebrow: "04 — Wisdom & Harmony",
        paragraphs: [
          "Sunan Ibu is a respected figure in the folklore of the community around Mount Patuha. Known as a figure who possesses wisdom and high spiritual power.",
          "In various stories that developed, Sunan Ibu is often associated with the guardianship of the Mount Patuha area and harmonious relationships between humans and nature.",
          "The community believes that the values passed down by Sunan Ibu teach the importance of respecting the environment, fellow humans, and preserving ancestral cultural heritage. The story of Sunan Ibu is an important part of folklore that enriches the history, culture, and life values developed in the Kawah Putih area.",
        ],
        callout: "Sunan Ibu's values teach the importance of respecting the environment, fellow humans, and ancestral cultural heritage.",
        imageCaptions: [
          "Sunrise Point at Sunan Ibu area",
          "Natural beauty preserved by Sunan Ibu's values",
        ],
      },
    },
    accessibility: {
      skipToContent: "Skip to main content",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      scrollToBottom: "Scroll to bottom",
    },
    lightbox: {
      close: "Close lightbox",
      previous: "Previous photo",
      next: "Next photo",
    },
  },
} as const;
