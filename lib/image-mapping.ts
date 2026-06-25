// Image Mapping for Folklor Kawah Putih
// Map gambar files to content based on client revision

export const IMAGE_MAPPING = {
  // Landing Page Hero - panorama Kawah Putih
  hero: {
    src: "/images/gambar1.jpeg",
    alt: "Panorama Kawah Putih dengan kabut yang menyelimuti",
    priority: true,
  },

  // Sejarah Kawah Putih (pembuka, bukan bagian dari 4 kisah)
  sejarah: {
    src: "/images/kawah putih.jpg",
    alt: "Kawah Putih dari sudut pandang berbeda",
    priority: false,
  },

  // Domba Lukutan (01)
  dombaLukutan: {
    src: "/images/domba lukutan.jpg",
    alt: "Patung Domba Lukutan",
    priority: false,
  },

  // Gunung Patuha (02)
  gunungPatuha: {
    src: "/images/gunung patuha.jpg",
    alt: "Gunung Patuha",
    priority: false,
  },

  // Kisah Karuhun (03)
  kisahKaruhun: {
    src: "/images/kisah karuhun.png",
    alt: "Ilustrasi Kisah Karuhun",
    priority: false,
  },

  // Sunan Ibu (04)
  sunanIbu: {
    src: "/images/sunan ibu.JPG",
    alt: "Area Sunan Ibu / Sunrise Point",
    priority: false,
  },

  // Ritual Pelepasan Domba Putih (untuk halaman Domba Lukutan)
  ritualDomba: {
    src: "/images/ritual pelepasan domba putih.PNG",
    alt: "Ritual pelepasan domba putih",
    priority: false,
  },

  // Ritual tambahan
  ritual2: {
    src: "/images/ritual 2.PNG",
    alt: "Ritual tradisional masyarakat sekitar Kawah Putih",
    priority: false,
  },

  // Gallery Images
  gallery: [
    {
      id: "kawah-putih-1",
      src: "/images/kawah putih.jpg",
      alt: "Kawah Putih - pemandangan danau",
      caption: "Danau Kawah Putih",
    },
    {
      id: "domba-lukutan",
      src: "/images/domba lukutan.jpg",
      alt: "Patung Domba Lukutan dari dekat",
      caption: "Patung Domba Lukutan",
    },
    {
      id: "gunung-patuha",
      src: "/images/gunung patuha.jpg",
      alt: "Gunung Patuha dari kejauhan",
      caption: "Gunung Patuha",
    },
    {
      id: "kisah-karuhun",
      src: "/images/kisah karuhun.png",
      alt: "Ilustrasi Kisah Karuhun",
      caption: "Kisah Karuhun",
    },
    {
      id: "sunan-ibu",
      src: "/images/sunan ibu.JPG",
      alt: "Area Sunan Ibu",
      caption: "Sunan Ibu",
    },
    {
      id: "ritual-domba",
      src: "/images/ritual pelepasan domba putih.PNG",
      alt: "Ritual pelepasan domba putih",
      caption: "Ritual Pelepasan Domba Putih",
    },
    {
      id: "sejarah",
      src: "/images/sejarah.jpg",
      alt: "Sejarah Kawah Putih",
      caption: "Sejarah Kawah Putih",
    },
    {
      id: "ritual-2",
      src: "/images/ritual 2.PNG",
      alt: "Ritual tradisional",
      caption: "Ritual Tradisional",
    },
    {
      id: "foto-tambahan-1",
      src: "/images/IMG_8977.jpg",
      alt: "Pemandangan Kawah Putih",
      caption: "Pemandangan Alam",
    },
    {
      id: "foto-tambahan-2",
      src: "/images/IMG_8978.jpg",
      alt: "Suasana Kawah Putih",
      caption: "Suasana Kawah Putih",
    },
  ],
} as const;

// Helper to get image by page
export function getPageImage(page: keyof typeof IMAGE_MAPPING) {
  return IMAGE_MAPPING[page];
}

// Helper to get gallery images
export function getGalleryImages() {
  return IMAGE_MAPPING.gallery;
}
