# Website "Folklor Kawah Putih"

---

## 0. PERAN & KONTEKS

Kamu bertindak sebagai **Senior Frontend Developer sekaligus UI/UX Designer** yang berpengalaman membangun *digital heritage interpretation site* — bukan website SaaS, bukan landing page produk, bukan template wisata generik.

Proyek ini adalah **media interpretasi digital folklor Kawah Putih**, diakses pengunjung melalui **QR Code** saat berada di lokasi wisata. Karena itu, prioritas tertinggi adalah: cepat dibuka di HP, terasa premium, dan ceritanya hidup — bukan cuma "informatif".

Kerjakan proyek ini **per task secara berurutan**. Jangan lompat ke task berikutnya sebelum task sebelumnya selesai, lolos acceptance criteria, dan sudah di-commit + push ke GitHub.

---

## 1. ATURAN WAJIB — BACA DULU SEBELUM MENGERJAKAN APAPUN

> ⚠️ **WAJIB: Sebelum mengerjakan satu baris kode UI pun, kamu HARUS menggunakan skill `ui-ux-pro-max-skill`.**
> Ini bukan opsional. Setiap task di bawah yang menyentuh tampilan/komponen visual, baca dan terapkan `ui-ux-pro-max-skill` terlebih dahulu sebelum menulis kode. Jika skill ini tidak tersedia di environment kamu, **STOP dan informasikan ke user**, jangan lanjut mengerjakan dengan asumsi default styling.

Aturan desain non-negosiasi (berlaku di SEMUA task, tanpa kecuali):

1. **Dilarang membuat tampilan "AI design slop"** — pola template SaaS generik: hero terpusat + 3 feature card simetris + tombol CTA gradient besar + ikon di lingkaran pastel. Pola ini DILARANG KERAS.
2. **Dilarang menggunakan gradient** di background, button, card, atau elemen apapun. Gunakan warna solid/flat dengan layering (overlay foto, shadow halus, border tipis) untuk kedalaman visual.
3. **Dilarang border-radius berlebihan.** Maksimal radius kecil (4–8px) untuk elemen interaktif kecil (button, badge). Card besar, image container, dan section TIDAK boleh memakai radius besar/penuh (hindari kesan "bubbly app generik"). Pertimbangkan radius 0 pada elemen editorial besar untuk kesan tegas dan "destination showcase".
4. **Dilarang emoji sebagai elemen UI.** Gunakan icon library (Lucide React atau Phosphor Icons) untuk semua kebutuhan ikon — navigasi, callout box, kategori galeri, dsb. Emoji hanya boleh muncul jika eksplisit diminta di teks naratif (dan brief ini meminta TIDAK berlebihan, jadi default-nya: **ikon, bukan emoji**).
5. **Wajib menggunakan Framer Motion** untuk seluruh animasi: scroll-reveal, parallax foto, transisi antar halaman, micro-interaction hover, swipe gesture galeri/fakta unik, dan animasi kabut bergerak di hero.
6. **Gaya desain: "Destination Showcase Design"** — definisi kerja yang harus dipegang:
   - Tipografi besar dan editorial (bukan UI kecil rapi ala dashboard)
   - Foto/ilustrasi full-bleed, dominan, jadi "pahlawan" di setiap section — bukan thumbnail kecil di pojok
   - Layout asimetris, white space yang lega, bukan grid kotak-kotak rapi simetris ala SaaS
   - Storytelling berbasis scroll (tiap scroll = membuka chapter baru), bukan stack card monoton
   - Rasakan seperti website editorial majalah travel premium (referensi rasa: National Geographic Travel, Kinfolk, Atlas Obscura) — bukan rasa "template Webflow wisata"
7. **Website harus terasa "hidup"** — bukan statis. Setiap section minimal punya satu elemen yang bergerak/merespons: parallax foto saat scroll, teks yang fade-in bertahap (bukan sekali muncul instan), kabut tipis yang melayang halus, hover state yang terasa "bernyawa" (scale halus + shadow, bukan cuma ganti warna).
8. **Tipografi harus dipikirkan serius, bukan default font.** Gunakan pairing dua typeface: satu **serif editorial** untuk judul/heading (kesan heritage, bercerita) dan satu **sans-serif humanis** untuk body text (kemudahan baca di HP). Jangan pakai default Inter/Geist tanpa pertimbangan — pilih dan justifikasi typeface, lalu load via `next/font`.
9. **Palet warna harus menarik dan punya identitas**, bukan biru-putih generik SaaS. Lihat Bagian 3.5 untuk palet wajib.
10. Setelah **setiap task selesai**, jalankan `git add . && git commit -m "..."` dengan pesan commit deskriptif, lalu `git push`. Satu task = satu (atau beberapa) commit logis, jangan menumpuk banyak task jadi satu commit besar.

---

## 2. TECH STACK & SETUP AWAL

| Komponen | Pilihan |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v19 |
| Animasi | Framer Motion (motion/react) |
| Icon | lucide-react |
| Font | next/font (Google Fonts atau local font, lihat Bagian 3.4) |
| Deployment | Vercel |
| Version Control | Git + GitHub, push setiap selesai 1 task |
| Maps | Google Maps Embed (iframe) atau `@vis.gl/react-google-maps` jika butuh multi-marker custom |
| Gallery Lightbox | Buat custom dengan Framer Motion (hindari library lightbox bergaya default bootstrap) |

**Setup awal yang harus dilakukan di Task 0:**
- Inisialisasi project `create-next-app` dengan TypeScript, App Router, Tailwind CSS v19.
- Setup ESLint + Prettier dasar.
- Buat struktur folder:
  ```
  /app
    /sejarah
    /domba-lukutan
    /gunung-patuha
    /kisah-karuhun
    /sunan-ibu
    /galeri
    /peta
  /components
    /ui          → button, badge, callout-box, dll (atomic)
    /sections    → hero, story-section, timeline, fact-carousel, dll
    /layout      → navbar, footer
  /lib           → konstanta warna, data konten, helper
  /public/images
  ```
- Inisialisasi git repo, buat repo GitHub (atau pastikan remote sudah ada), commit pertama: `chore: initial project setup with Next.js 16 + Tailwind v19`.

---

## 3. FILOSOFI & SPESIFIKASI DESAIN

### 3.1 Typography
- **Heading/Display font**: serif editorial dengan karakter kuat — pertimbangkan **Fraunces** atau **Lora** (via `next/font/google`). Gunakan untuk H1–H3, jargon hero, judul cerita.
- **Body font**: sans-serif humanis, mudah dibaca di mobile — pertimbangkan **Inter Tight**, **Plus Jakarta Sans**, atau **Manrope**. Gunakan untuk paragraf cerita, navigasi, label.
- Skala tipografi: definisikan minimal 6 tingkat ukuran (display, h1, h2, h3, body-lg, body, caption) di Tailwind config sebagai custom font-size scale, jangan andalkan default Tailwind text-sm/text-lg begitu saja.
- Line-height generus untuk body text cerita (1.6–1.8) agar nyaman dibaca di HP sambil jalan.
- Letter-spacing sedikit lebih lebar (tracking-wide) untuk label kecil (kategori, eyebrow text) agar terasa editorial.

### 3.2 Icon, bukan Emoji
- Semua ikon navigasi, kategori callout, kategori galeri, tombol sosial → pakai `lucide-react`.
- Mapping ikon yang disarankan:
  - Trivia/"Tahukah Kamu?" → `Lightbulb` atau `Sparkles`
  - Nilai Budaya → `Leaf` atau `HandHeart`
  - Pesan/Kutipan → `Quote`
  - Lokasi/Peta → `MapPin`
  - Galeri → `Image` / `Expand` (untuk fullscreen)
  - Menu hamburger → `Menu` / `X` saat terbuka
  - Navigasi next section → `ChevronDown` / `ArrowRight`

### 3.3 Animasi (Framer Motion) — Prinsip Wajib
- **Scroll reveal**: gunakan `whileInView` dengan `viewport={{ once: true }}` untuk fade-up halus pada teks dan gambar tiap section (bukan muncul instan).
- **Parallax foto**: gunakan `useScroll` + `useTransform` untuk efek foto hero bergerak lebih lambat dari scroll (depth effect).
- **Kabut bergerak**: buat layer SVG/PNG kabut transparan yang bergerak perlahan secara looping (`animate` dengan `repeat: Infinity`, durasi panjang 15–25s, easing linear) di hero landing page dan optional di hero tiap story page.
- **Transisi antar halaman**: gunakan `AnimatePresence` pada layout untuk transisi fade/slide halus saat pindah route.
- **Micro-interaction**: hover pada card/button → scale 1.02–1.03 + shadow naik halus, JANGAN cuma ganti warna background.
- **Swipe gesture**: pada Fakta Unik carousel dan galeri mobile, gunakan `drag="x"` dengan `dragConstraints` agar terasa native swipe, bukan tombol next/prev kaku.

### 3.4 Anti-Pola yang Harus Dihindari
Tolak otomatis pola berikut walau terasa "lebih cepat dikerjakan":
- Hero dengan teks rata tengah + 1 tombol gradient besar di bawahnya
- Section "3 kolom fitur dengan ikon bulat pastel identik"
- Card dengan shadow besar membulat semua sisi (`rounded-2xl shadow-xl` di semua tempat tanpa variasi)
- Warna aksen biru-ungu (#6366f1 / indigo) khas template SaaS
- Spacing seragam kaku (semua section py-20 tanpa variasi rhythm)

### 3.5 Palet Warna
Palet terinspirasi alam Kawah Putih — kabut, belerang, danau, hutan. Solid, tidak gradient:

| Token | Hex (acuan) | Kegunaan |
|---|---|---|
| `kabut-50` | `#F7F5F1` | Background utama (light mode, warm white — bukan putih SaaS dingin #FFFFFF) |
| `kabut-100` | `#EDE8E0` | Background section alternatif |
| `danau-500` | `#3F6B66` | Warna utama brand — hijau danau kawah, dipakai untuk teks aksen, ikon, garis |
| `danau-700` | `#274A47` | Hover state / teks gelap aksen |
| `belerang-400` | `#D9B26C` | Warna aksen kedua — kuning belerang, dipakai untuk highlight kecil, underline, badge |
| `kabut-abu` | `#A8A296` | Teks sekunder/caption |
| `arang-900` | `#211F1C` | Teks utama body (bukan hitam pekat #000) |
| `pucat-biru` | `#C7D9D6` | Untuk overlay foto/area kabut tipis |

Gunakan warna ini sebagai Tailwind custom theme (`tailwind.config` extend colors), jangan pakai default `blue-500`/`green-500` Tailwind di mana pun untuk elemen brand.

### 3.6 Prinsip "Hidup"
Setiap halaman WAJIB memiliki minimal:
1. Satu elemen ambient motion (kabut, partikel halus, atau parallax) yang berjalan tanpa interaksi user
2. Satu elemen yang merespons scroll (reveal/parallax)
3. Satu elemen yang merespons interaksi (hover/swipe/klik) dengan transisi halus

---

## 4. ARSITEKTUR INFORMASI (SITEMAP)

```
/ (Landing Page)
├── /sejarah          → Sejarah Kawah Putih
├── /domba-lukutan     → Domba Lukutan
├── /gunung-patuha     → Gunung Patuha
├── /kisah-karuhun     → Kisah Karuhun
├── /sunan-ibu         → Sunan Ibu
├── /galeri            → Galeri Foto
├── /peta              → Peta Lokasi
└── #tentang (di footer atau section khusus, opsional — konfirmasi ke client)
```
Navigasi global (Menu hamburger di mobile, horizontal nav di desktop): **Beranda · Sejarah · Domba Lukutan · Gunung Patuha · Kisah Karuhun · Sunan Ibu · Galeri · Tentang**

---

## 5. ASET GAMBAR

Gunakan **hanya** gambar yang ada di `public/images`. Sebelum mengerjakan task apapun yang butuh gambar:

1. Scan isi folder `public/images` lebih dulu.
2. Mapping gambar ke konteks berdasarkan nama file yang paling relevan (cocokkan nama file dengan konten: kawah, domba, patuha, karuhun/hutan, sunan ibu, galeri).
3. Jika nama file tidak jelas/tidak cukup, **jangan mengganti dengan stock photo dari internet** dan **jangan membuat placeholder bergradient**. Gunakan placeholder warna solid dari palet Bagian 3.5 dengan label nama file yang dibutuhkan, lalu laporkan ke user file apa yang masih kurang.

Kebutuhan gambar minimal per halaman:

| Halaman | Kebutuhan Gambar |
|---|---|
| Landing | 1 foto/video hero panorama Kawah Putih (untuk efek kabut bergerak) |
| Sejarah | 1 foto hero panorama Kawah Putih (boleh beda angle dari landing) |
| Domba Lukutan | 1 foto patung Domba Lukutan |
| Gunung Patuha | 1 foto Gunung Patuha |
| Kisah Karuhun | 1 foto/ilustrasi hutan berkabut |
| Sunan Ibu | 1 foto area Sunan Ibu / sunrise point |
| Galeri | minimal 6 foto: Kawah Putih, Domba Lukutan, Sunrise, Gunung Patuha, Hutan, Kawah (detail) |

---

## 6. KOMPONEN REUSABLE (Buat di Task 4, dipakai berulang)

### 6.1 `<StoryHero />`
Hero per halaman cerita: foto full-bleed, judul besar (font serif), eyebrow text kategori, indikator scroll ke bawah (`ChevronDown` animasi bounce halus).

### 6.2 `<StorySection />`
Layout asimetris (foto di satu sisi, teks di sisi lain — selang-seling tiap section agar tidak monoton), menampung 2–3 paragraf cerita dengan scroll-reveal per paragraf.

### 6.3 `<CalloutBox variant="trivia" | "nilai" | "pesan" />`
Box dengan border kiri tegas (bukan box penuh berbayang), ikon sesuai variant (Bagian 3.2), teks singkat 1–2 kalimat. Style berbeda tipis antar-variant (warna garis kiri: trivia = belerang-400, nilai = danau-500, pesan = arang-900) agar masing-masing punya "rasa" sendiri.

### 6.4 `<Timeline />`
Untuk halaman Gunung Patuha — alur vertikal/horizontal dengan titik bertahap, animasi tiap titik muncul progresif saat di-scroll (bukan muncul sekaligus).

### 6.5 `<GalleryGrid />` + `<Lightbox />`
Grid foto custom (bukan grid kaku 1:1 semua — variasikan ukuran beberapa foto untuk kesan editorial), klik → buka lightbox fullscreen dengan transisi `layoutId` Framer Motion (shared element transition dari thumbnail ke fullscreen).

### 6.6 `<FactCarousel />`
Swipe card untuk Fakta Unik, drag gesture horizontal, snap per card, indikator progress kecil di bawah (bukan dots bulat generik — pertimbangkan garis tipis horizontal).

### 6.7 `<MapSection />`
Embed/peta dengan 3 marker (Kawah Putih, Domba Lukutan, Sunrise Point Sunan Ibu), info card custom saat marker diklik (bukan default Google Maps info window putih polos).

---

## 7. DATA KONTEN MASTER

> Gunakan teks di bawah ini **persis** sebagai konten utama tiap halaman. Jangan mengubah substansi, boleh memecah paragraf untuk kebutuhan layout scroll-reveal (1 paragraf = 1 reveal block).

### 7.1 Sejarah Kawah Putih
**Hero image**: foto panorama Kawah Putih
**Judul**: Sejarah Kawah Putih
**Eyebrow**: 01 — Asal Mula

**Cerita:**
> Kawah Putih merupakan salah satu destinasi wisata alam terkenal di Kabupaten Bandung yang berada di kawasan Gunung Patuha. Kawah ini terbentuk akibat letusan Gunung Patuha yang menghasilkan cekungan besar yang kemudian menjadi danau kawah.
>
> Keunikan Kawah Putih terletak pada warna airnya yang dapat berubah-ubah, mulai dari putih kehijauan hingga kebiruan. Perubahan warna tersebut dipengaruhi oleh kandungan belerang serta kondisi cuaca di sekitarnya.
>
> Kawah Putih mulai dikenal luas setelah seorang ahli botani asal Belanda, Franz Wilhelm Junghuhn, melakukan penelitian di kawasan tersebut pada tahun 1837. Sejak saat itu, Kawah Putih menjadi salah satu objek wisata alam yang menarik perhatian karena keindahan lanskapnya serta fenomena alam yang unik.

**Callout (variant trivia):** Kawah Putih mulai dikenal luas berkat penelitian Franz Wilhelm Junghuhn, ahli botani Belanda, pada tahun 1837.

---

### 7.2 Domba Lukutan
**Hero image**: foto patung Domba Lukutan
**Judul**: Domba Lukutan
**Eyebrow**: 02 — Penjaga Kawasan

**Cerita:**
> Domba Lukutan merupakan tokoh dalam cerita rakyat yang berkembang di sekitar Kawah Putih dan Gunung Patuha. Domba ini dipercaya sebagai hewan sakral yang memiliki hubungan erat dengan leluhur masyarakat setempat.
>
> Dalam cerita yang diwariskan secara turun-temurun, Domba Lukutan digambarkan sebagai penjaga kawasan Gunung Patuha yang memiliki kekuatan istimewa. Kehadirannya menjadi simbol perlindungan, keseimbangan alam, dan hubungan harmonis antara manusia dengan lingkungan.
>
> Hingga saat ini, kisah Domba Lukutan masih dikenal sebagai salah satu folklor khas Kawah Putih yang menjadi bagian dari identitas budaya masyarakat sekitar.

**Callout (variant nilai):** Kehadirannya menjadi simbol perlindungan, keseimbangan alam, dan hubungan harmonis antara manusia dengan lingkungan.

---

### 7.3 Gunung Patuha
**Hero image**: foto Gunung Patuha
**Judul**: Gunung Patuha
**Eyebrow**: 03 — Asal Nama & Tempat Sakral

**Cerita:**
> Gunung Patuha adalah gunung berapi yang terletak di bagian selatan Kabupaten Bandung dengan ketinggian sekitar 2.434 meter di atas permukaan laut.
>
> Nama "Patuha" berasal dari istilah "Pak Tua", yang berarti orang tua atau sesepuh yang dihormati. Masyarakat setempat meyakini bahwa gunung ini memiliki nilai spiritual yang kuat dan berkaitan dengan keberadaan para leluhur.
>
> Selain menjadi lokasi terbentuknya Kawah Putih, Gunung Patuha juga memiliki kekayaan alam berupa hutan pegunungan, sumber panas bumi, serta beragam flora dan fauna yang hidup di kawasan tersebut.

**Callout (variant trivia):** Nama "Patuha" berasal dari istilah "Pak Tua" — sesepuh yang dihormati masyarakat sekitar.

**Timeline (komponen khusus halaman ini):**
1. Pak Tua — asal nilai spiritual & nama
2. Gunung Patuha — gunung berapi yang dihormati
3. Kawah Putih — terbentuk dari letusan
4. Hutan, Panas Bumi & Flora-Fauna — kekayaan alam kawasan

---

### 7.4 Kisah Karuhun
**Hero image**: foto/ilustrasi hutan berkabut
**Judul**: Kisah Karuhun
**Eyebrow**: 04 — Kearifan Leluhur

**Cerita:**
> Dalam budaya Sunda, karuhun merupakan sebutan bagi leluhur atau nenek moyang yang dihormati. Masyarakat sekitar Gunung Patuha percaya bahwa para karuhun memiliki peran penting dalam menjaga keseimbangan antara alam dan kehidupan manusia.
>
> Berbagai cerita, tradisi, dan kepercayaan yang berkembang di kawasan Kawah Putih sering dikaitkan dengan keberadaan karuhun sebagai sumber nilai, petuah, serta kearifan lokal.
>
> Kisah-kisah tersebut diwariskan dari generasi ke generasi dan menjadi bagian penting dari identitas budaya masyarakat Sunda hingga saat ini.

**Callout (variant pesan, gaya kutipan):** "Karuhun memiliki peran penting dalam menjaga keseimbangan antara alam dan kehidupan manusia."

---

### 7.5 Sunan Ibu
**Hero image**: foto area Sunan Ibu / sunrise point
**Judul**: Sunan Ibu
**Eyebrow**: 05 — Kebijaksanaan & Harmoni

**Cerita:**
> Sunan Ibu merupakan sosok yang dihormati dalam cerita rakyat masyarakat sekitar Gunung Patuha. Beliau dikenal sebagai tokoh yang memiliki kebijaksanaan serta kekuatan spiritual yang tinggi.
>
> Dalam berbagai kisah yang berkembang, Sunan Ibu sering dikaitkan dengan penjagaan kawasan Gunung Patuha dan hubungan harmonis antara manusia dengan alam.
>
> Masyarakat meyakini bahwa nilai-nilai yang diwariskan oleh Sunan Ibu mengajarkan pentingnya menghormati lingkungan, sesama manusia, serta menjaga warisan budaya leluhur. Kisah Sunan Ibu menjadi salah satu bagian penting dari folklor yang memperkaya sejarah, budaya, dan nilai-nilai kehidupan yang berkembang di kawasan Kawah Putih.

**Callout (variant nilai):** Nilai-nilai Sunan Ibu mengajarkan pentingnya menghormati lingkungan, sesama manusia, dan warisan budaya leluhur.

---

### 7.6 Fakta Unik (untuk `<FactCarousel />`)
1. Warna air Kawah Putih dapat berubah-ubah karena kandungan belerang dan kondisi cuaca.
2. Kawah Putih mulai dikenal luas sejak penelitian Franz Wilhelm Junghuhn pada tahun 1837.
3. Domba Lukutan dipercaya sebagai penjaga sakral kawasan Gunung Patuha.
4. Nama "Patuha" berasal dari "Pak Tua" — sesepuh yang dihormati.
5. Gunung Patuha memiliki ketinggian sekitar 2.434 meter di atas permukaan laut.
6. Karuhun dipercaya menjaga keseimbangan antara alam dan kehidupan manusia.

### 7.7 Landing Page
**Jargon (hero headline):** "Menjelajah Kawah Putih, Menyelami Cerita di Balik Kabut Putih."
**Deskripsi singkat:**
> Kawah Putih bukan hanya destinasi wisata alam yang memukau, tetapi juga menyimpan cerita, legenda, dan kearifan lokal yang diwariskan dari generasi ke generasi. Mari jelajahi setiap kisah yang hidup di balik keindahan Gunung Patuha.

**CTA:** "Jelajahi Folklor" (ikon `Sparkles` atau `ArrowRight`, bukan emoji ✨)

### 7.8 Footer
> Terima kasih telah menjelajahi folklor Kawah Putih. Semoga setiap cerita yang Anda baca menjadi pengingat bahwa keindahan alam dan budaya adalah warisan yang harus dijaga bersama.

---

## 8. GIT WORKFLOW WAJIB

Setelah **setiap task** di Bagian 9 selesai dan lolos acceptance criteria:

```bash
git add .
git commit -m "<type>: <deskripsi singkat task>"
git push origin main
```

Gunakan conventional commit type: `feat`, `fix`, `chore`, `style`, `refactor`. Contoh: `feat: tambah landing page dengan animasi kabut hero`.

Jangan menggabungkan 2 task berbeda dalam satu commit. Jangan push kode yang belum lolos acceptance criteria task tersebut.

---

## 9. DAFTAR TASK BERURUTAN

### TASK 0 — Inisialisasi Project
- Setup Next.js 16 + TypeScript + App Router + Tailwind v19.
- Install dependencies: `framer-motion`, `lucide-react`.
- Setup struktur folder sesuai Bagian 2.
- Setup `tailwind.config` dengan custom color palette (Bagian 3.5) dan custom font-size scale (Bagian 3.1).
- Setup font via `next/font/google` (serif + sans pairing).
- **Acceptance criteria**: project running di `localhost`, palet warna & font sudah bisa dipanggil via Tailwind class custom, tidak ada warna/font default Tailwind yang masih dipakai untuk elemen brand.
- **Commit**: `chore: initial project setup with Next.js 16, Tailwind v19, custom design tokens`

### TASK 1 — Baca & Terapkan `ui-ux-pro-max-skill`
- Sebelum lanjut ke task manapun yang menyentuh UI, baca skill `ui-ux-pro-max-skill` secara penuh.
- Catat/ringkas poin-poin yang relevan dengan proyek ini (jika skill punya output berupa checklist/prinsip, simpan sebagai acuan internal untuk dicek ulang di setiap task berikutnya).
- **Acceptance criteria**: kamu bisa menjelaskan secara eksplisit bagaimana skill ini akan diterapkan di komponen-komponen Bagian 6 sebelum mulai coding.
- Task ini tidak menghasilkan kode baru, tidak perlu commit — lanjut langsung ke Task 2.

### TASK 2 — Layout Global: Navbar & Footer
- Buat `<Navbar />`: logo/teks "Kawah Putih" di kiri, menu horizontal di desktop, hamburger (`Menu`/`X` icon) dengan slide-in panel di mobile (animasi Framer Motion, bukan dropdown instan).
- Navbar transparan di atas hero, berubah jadi solid `kabut-50` dengan shadow halus saat scroll (gunakan `useScroll` Framer Motion atau scroll listener).
- Buat `<Footer />` dengan teks dari Bagian 7.8, styling tenang (background `arang-900`, teks `kabut-50`), tanpa elemen ramai.
- **Acceptance criteria**: navbar berfungsi di semua breakpoint, transisi scroll halus, footer tampil konsisten di semua halaman.
- **Commit**: `feat: tambah navbar responsif dan footer global`

### TASK 3 — Landing Page
- Hero full-screen: foto/video Kawah Putih sebagai background, layer kabut animasi melayang di atasnya (Framer Motion infinite loop, lihat Bagian 3.3).
- Headline (font serif besar) dari Bagian 7.7, deskripsi singkat di bawahnya dengan fade-up reveal saat load.
- CTA button "Jelajahi Folklor" — style solid (warna `danau-500`), bukan gradient, dengan hover scale halus.
- Indikator scroll ke bawah di bagian bawah hero (`ChevronDown` animasi bounce lambat).
- **Acceptance criteria**: hero terasa sinematik, kabut bergerak halus tanpa lag, teks dan CTA reveal bertahap (bukan muncul instan bersamaan), responsif penuh di mobile.
- **Commit**: `feat: bangun landing page dengan hero sinematik dan animasi kabut`

### TASK 4 — Komponen Reusable Story Page
- Bangun `<StoryHero />` dan `<StorySection />` sesuai spesifikasi Bagian 6.1–6.2.
- Bangun `<CalloutBox />` dengan 3 variant (trivia, nilai, pesan) sesuai Bagian 6.3.
- Pastikan layout `<StorySection />` bisa menerima prop `imagePosition="left" | "right"` agar bisa diselang-seling antar halaman (anti-monoton).
- **Acceptance criteria**: komponen reusable, type-safe (TypeScript props jelas), scroll-reveal berjalan per paragraf, callout box punya identitas visual berbeda tiap variant.
- **Commit**: `feat: bangun komponen reusable StoryHero, StorySection, dan CalloutBox`

### TASK 5 — Halaman Sejarah Kawah Putih
- Implementasikan route `/sejarah` menggunakan komponen dari Task 4 dan data Bagian 7.1.
- **Acceptance criteria**: konten sesuai 7.1 persis, hero pakai foto panorama Kawah Putih dari `public/images`, callout trivia tampil dengan ikon `Lightbulb`.
- **Commit**: `feat: tambah halaman Sejarah Kawah Putih`

### TASK 6 — Halaman Domba Lukutan
- Implementasikan route `/domba-lukutan` dengan data Bagian 7.2.
- **Acceptance criteria**: hero pakai foto patung Domba Lukutan, callout variant nilai dengan ikon `Leaf`/`HandHeart`.
- **Commit**: `feat: tambah halaman Domba Lukutan`

### TASK 7 — Halaman Gunung Patuha + Komponen Timeline
- Bangun `<Timeline />` sesuai Bagian 6.4, animasi tiap titik progresif saat di-scroll.
- Implementasikan route `/gunung-patuha` dengan data dan timeline dari Bagian 7.3.
- **Acceptance criteria**: timeline tampil jelas di mobile (vertikal) dan desktop (boleh horizontal), animasi progresif terlihat natural, bukan muncul sekaligus.
- **Commit**: `feat: tambah halaman Gunung Patuha dengan komponen timeline`

### TASK 8 — Halaman Kisah Karuhun
- Implementasikan route `/kisah-karuhun` dengan data Bagian 7.4.
- Callout variant pesan ditampilkan dengan gaya kutipan (ikon `Quote`, tipografi italic serif sedikit lebih besar dari callout lain).
- **Acceptance criteria**: hero pakai foto/ilustrasi hutan berkabut, kesan halaman ini lebih kontemplatif/tenang dibanding halaman lain (variasi rhythm spacing).
- **Commit**: `feat: tambah halaman Kisah Karuhun`

### TASK 9 — Halaman Sunan Ibu
- Implementasikan route `/sunan-ibu` dengan data Bagian 7.5.
- **Acceptance criteria**: hero pakai foto Sunan Ibu/sunrise point, callout variant nilai tampil di akhir cerita.
- **Commit**: `feat: tambah halaman Sunan Ibu`

### TASK 10 — Galeri
- Bangun `<GalleryGrid />` dan `<Lightbox />` sesuai Bagian 6.5.
- Grid 2 kolom di mobile, variasikan ukuran beberapa gambar di desktop (tidak seragam kotak semua) agar editorial.
- Klik foto → lightbox fullscreen dengan shared element transition (`layoutId`).
- Gunakan 6 foto sesuai daftar Bagian 5 (Kawah Putih, Domba Lukutan, Sunrise, Gunung Patuha, Hutan, Kawah detail).
- **Acceptance criteria**: transisi thumbnail → fullscreen halus tanpa "lompat", lightbox bisa ditutup dengan klik luar/tombol close (`X` icon), swipe antar foto di mode fullscreen pada mobile.
- **Commit**: `feat: tambah halaman galeri dengan lightbox shared transition`

### TASK 11 — Fakta Unik (Swipe Carousel)
- Bangun `<FactCarousel />` sesuai Bagian 6.6, data dari Bagian 7.6.
- Drag horizontal dengan snap, indikator progress garis tipis di bawah card.
- Tempatkan section ini di landing page (setelah hero/sebelum galeri) atau sebagai section tersendiri — pastikan terasa sebagai "interlude" ringan di antara cerita panjang.
- **Acceptance criteria**: swipe terasa natural di mobile (momentum, snap), tidak ada tombol next/prev kaku sebagai satu-satunya cara navigasi.
- **Commit**: `feat: tambah fact carousel dengan swipe gesture`

### TASK 12 — Peta Lokasi
- Bangun `<MapSection />` sesuai Bagian 6.7, route `/peta` (atau embed di landing page bagian bawah — putuskan berdasarkan kemudahan akses dari QR, sebaiknya juga ditaruh sebagai section di landing page untuk akses cepat).
- 3 marker: Kawah Putih, Patung Domba Lukutan, Sunrise Point Sunan Ibu.
- Custom info card saat marker diklik, styling konsisten dengan design system (bukan default Google Maps popup putih polos).
- **Acceptance criteria**: peta responsif, marker bisa diklik dan menampilkan info singkat tiap lokasi.
- **Commit**: `feat: tambah peta lokasi dengan custom marker`

### TASK 13 — Optimasi Performa, Responsive & Aksesibilitas
- Audit semua gambar: gunakan `next/image` dengan `priority` hanya pada hero pertama, lazy load sisanya.
- Pastikan semua animasi punya `prefers-reduced-motion` fallback (untuk aksesibilitas).
- Cek kontras warna teks vs background sesuai standar WCAG AA minimal.
- Test responsif penuh di breakpoint mobile (360px–428px), tablet (768px), desktop (1280px+) — ingat ini akan diakses via QR di lokasi wisata, mobile adalah prioritas utama.
- Pertimbangkan menambahkan PWA manifest sederhana agar halaman yang sudah dibuka bisa diakses ulang tanpa sinyal kuat (opsional, sampaikan ke user sebagai rekomendasi jika belum di-set scope-nya).
- **Acceptance criteria**: Lighthouse mobile score (Performance & Accessibility) minimal 85+, tidak ada layout shift signifikan, semua section nyaman di-scroll satu tangan di HP.
- **Commit**: `perf: optimasi gambar, responsive audit, dan aksesibilitas`

### TASK 14 — Final QA & Deploy ke Vercel
- Jalankan `next build` lokal, pastikan tidak ada error/warning kritis.
- Cek seluruh halaman: navigasi, animasi, gambar, callout, timeline, galeri, carousel, peta — semua berfungsi dan konsisten dengan design system Bagian 3.
- Deploy ke Vercel, hubungkan dengan repo GitHub yang sudah di-push.
- Generate/siapkan QR Code yang mengarah ke domain Vercel (atau domain custom jika sudah ada) untuk landing page.
- **Acceptance criteria**: website live di Vercel, dapat diakses dari HP via QR code, seluruh halaman lolos QA visual (tidak ada elemen template SaaS/gradient/emoji/radius berlebihan yang lolos tanpa sengaja).
- **Commit**: `chore: final QA dan deploy ke Vercel`

---

## 10. DEFINITION OF DONE (Checklist Akhir Proyek)

- [ ] Skill `ui-ux-pro-max-skill` sudah dibaca dan diterapkan sebelum pengerjaan UI dimulai
- [ ] Tidak ada gradient di seluruh halaman
- [ ] Tidak ada border-radius berlebihan pada card/section besar
- [ ] Tidak ada emoji sebagai elemen UI (hanya ikon dari lucide-react)
- [ ] Tipografi memakai pairing serif + sans yang sudah dipilih sadar, bukan default
- [ ] Setiap halaman punya minimal 1 ambient motion, 1 scroll-reveal, 1 micro-interaction
- [ ] Palet warna sesuai Bagian 3.5, tidak ada warna default Tailwind untuk elemen brand
- [ ] Seluruh konten sesuai Bagian 7 tanpa perubahan substansi
- [ ] Semua gambar bersumber dari `public/images`, tidak ada stock photo asing
- [ ] Setiap task sudah di-commit & push secara terpisah ke GitHub
- [ ] Website sudah live di Vercel dan teruji di mobile (prioritas utama karena akses via QR)
