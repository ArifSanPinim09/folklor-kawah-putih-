// Image Mapping for Folklor Kawah Putih
// Map gambar files to content based on PRD requirements

export const IMAGE_MAPPING = {
  // Landing Page Hero - panorama Kawah Putih
  hero: {
    src: "/images/gambar1.jpeg",
    alt: "Panorama Kawah Putih dengan kabut yang menyelimuti",
    priority: true,
  },

  // Sejarah Kawah Putih
  sejarah: {
    src: "/images/gambar2.jpeg",
    alt: "Kawah Putih dari sudut pandang berbeda",
    priority: false,
  },

  // Domba Lukutan
  dombaLukutan: {
    src: "/images/gambar3.jpeg",
    alt: "Patung Domba Lukutan",
    priority: false,
  },

  // Gunung Patuha
  gunungPatuha: {
    src: "/images/gambar4.jpeg",
    alt: "Gunung Patuha",
    priority: false,
  },

  // Kisah Karuhun - hutan berkabut
  kisahKaruhun: {
    src: "/images/gambar5.jpeg",
    alt: "Hutan berkabut di kawasan Gunung Patuha",
    priority: false,
  },

  // Sunan Ibu - sunrise point
  sunanIbu: {
    src: "/images/gambar6.jpeg",
    alt: "Area Sunan Ibu / Sunrise Point",
    priority: false,
  },

  // Gallery Images
  gallery: [
    {
      id: "kawah-putih-1",
      src: "/images/gambar7.jpeg",
      alt: "Kawah Putih - pemandangan danau",
      caption: "Danau Kawah Putih",
    },
    {
      id: "domba-lukutan",
      src: "/images/gambar8.jpeg",
      alt: "Patung Domba Lukutan dari dekat",
      caption: "Patung Domba Lukutan",
    },
    {
      id: "sunrise",
      src: "/images/gambar9.jpeg",
      alt: "Sunrise di Gunung Patuha",
      caption: "Sunrise Gunung Patuha",
    },
    {
      id: "gunung-patuha",
      src: "/images/gambar10.jpeg",
      alt: "Gunung Patuha dari kejauhan",
      caption: "Gunung Patuha",
    },
    {
      id: "hutan",
      src: "/images/gambar11.jpeg",
      alt: "Hutan pegunungan di kawasan Kawah Putih",
      caption: "Hutan Pegunungan",
    },
    {
      id: "kawah-detail",
      src: "/images/gambar12.jpeg",
      alt: "Detail kawah dengan warna air yang unik",
      caption: "Detail Kawah",
    },
  ],

  // Additional images for variety
  additional: [
    "/images/gambar13.jpeg",
    "/images/gambar14.jpeg",
    "/images/gambar15.jpeg",
    "/images/gambar16.jpeg",
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
