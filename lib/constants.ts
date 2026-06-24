// Design Tokens for Folklor Kawah Putih

export const COLORS = {
  kabut: {
    50: "#F7F5F1",
    100: "#EDE8E0",
  },
  danau: {
    500: "#3F6B66",
    700: "#274A47",
  },
  belerang: {
    400: "#D9B26C",
  },
  kabutAbu: "#A8A296",
  arang: {
    900: "#211F1C",
  },
  pucatBiru: "#C7D9D6",
} as const;

export const NAVIGATION = [
  { label: "Beranda", href: "/" },
  { label: "Sejarah", href: "/sejarah" },
  { label: "Domba Lukutan", href: "/domba-lukutan" },
  { label: "Gunung Patuha", href: "/gunung-patuha" },
  { label: "Kisah Karuhun", href: "/kisah-karuhun" },
  { label: "Sunan Ibu", href: "/sunan-ibu" },
  { label: "Galeri", href: "/galeri" },
] as const;

export const FOOTER_TEXT = {
  description:
    "Terima kasih telah menjelajahi folklor Kawah Putih. Semoga setiap cerita yang Anda baca menjadi pengingat bahwa keindahan alam dan budaya adalah warisan yang harus dijaga bersama.",
  copyright: `© ${new Date().getFullYear()} Folklor Kawah Putih`,
} as const;

export const HERO_CONTENT = {
  headline: "Menjelajah Kawah Putih, Menyelami Cerita di Balik Kabut Putih.",
  description:
    "Kawah Putih bukan hanya destinasi wisata alam yang memukau, tetapi juga menyimpan cerita, legenda, dan kearifan lokal yang diwariskan dari generasi ke generasi. Mari jelajahi setiap kisah yang hidup di balik keindahan Gunung Patuha.",
  cta: "Jelajahi Folklor",
} as const;

export const STORY_PAGES = [
  {
    id: "sejarah",
    number: "01",
    title: "Sejarah Kawah Putih",
    eyebrow: "Asal Mula",
    href: "/sejarah",
  },
  {
    id: "domba-lukutan",
    number: "02",
    title: "Domba Lukutan",
    eyebrow: "Penjaga Kawasan",
    href: "/domba-lukutan",
  },
  {
    id: "gunung-patuha",
    number: "03",
    title: "Gunung Patuha",
    eyebrow: "Asal Nama & Tempat Sakral",
    href: "/gunung-patuha",
  },
  {
    id: "kisah-karuhun",
    number: "04",
    title: "Kisah Karuhun",
    eyebrow: "Kearifan Leluhur",
    href: "/kisah-karuhun",
  },
  {
    id: "sunan-ibu",
    number: "05",
    title: "Sunan Ibu",
    eyebrow: "Kebijaksanaan & Harmoni",
    href: "/sunan-ibu",
  },
] as const;

export const FACTS = [
  "Warna air Kawah Putih dapat berubah-ubah karena kandungan belerang dan kondisi cuaca.",
  "Kawah Putih mulai dikenal luas sejak penelitian Franz Wilhelm Junghuhn pada tahun 1837.",
  "Domba Lukutan dipercaya sebagai penjaga sakral kawasan Gunung Patuha.",
  'Nama "Patuha" berasal dari "Pak Tua" — sesepuh yang dihormati.',
  "Gunung Patuha memiliki ketinggian sekitar 2.434 meter di atas permukaan laut.",
  "Karuhun dipercaya menjaga keseimbangan antara alam dan kehidupan manusia.",
] as const;

export const MAP_MARKERS = [
  {
    id: "kawah-putih",
    name: "Kawah Putih",
    description: "Danau kawah vulkanik dengan warna air yang berubah-ubah",
    position: { lat: -7.1661, lng: 107.4024 },
  },
  {
    id: "domba-lukutan",
    name: "Patung Domba Lukutan",
    description: "Patung penjaga sakral kawasan Gunung Patuha",
    position: { lat: -7.1655, lng: 107.4018 },
  },
  {
    id: "sunan-ibu",
    name: "Sunrise Point Sunan Ibu",
    description: "Lokasi terbaik untuk menyaksikan matahari terbit",
    position: { lat: -7.167, lng: 107.403 },
  },
] as const;
