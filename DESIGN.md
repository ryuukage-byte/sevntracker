# 🎨 SevnTracker Design System (DESIGN.md)

Dokumentasi resmi identitas visual, sistem desain (*design tokens*), palet warna (*colour palette*), tipografi, dan komponen UI untuk **SevnTracker v9**.

---

## ⛩️ 1. Filosofi Desain: *"Washi & Aizome" Neumorphism*

Desain SevnTracker mengadopsi konsep **"Washi & Aizome" Soft-Touch Neumorphism**:
- **Single-Surface Sculpting**: Kartu, tombol, dan elemen UI dipahat langsung dari material latar belakang yang sama menggunakan bayangan ganda (*dual shadows: highlight & shadow*), bukan garis batas (*border*) kaku atau gradien mencolok.
- **Color Restraint (Minimalis Berwarna Makna)**: Warna netral mendominasi antarmuka agar tenang di mata. Warna fungsional hanya digunakan untuk:
  - **Aizome (Indigo)**: Warna aksen navigasi, identitas, dan aksi utama.
  - **Hanko (Red)**: Pengeluaran (*expense*), aksi destruktif/hapus, dan peringatan kritis.
  - **Matcha (Green)**: Pemasukan (*income*), status sukses, dan rasio aman.
  - **Kinako (Gold/Warm Amber)**: Peringatan (*warning*), saldo kekayaan (*net worth*), dan limit mendekati batas.
- **Tactile Feedback**: Interaksi terasa nyata dengan transisi antara efek timbul (*extruded / neu-out*) saat idle, dan efek cekung (*pressed / inset / neu-in*) saat ditekan atau aktif.

---

## 🌓 2. Palet Warna (Colour Palette Tokens)

SevnTracker mendukung tema **Dark Mode** (default) dan **Light Mode** yang dikontrol via atribut HTML `data-theme="dark"` dan `data-theme="light"`.

### 2.1 Perbandingan Token Warna Utama

| Token CSS | Dark Mode (`:root`) | Light Mode (`[data-theme="light"]`) | Deskripsi & Peran |
| :--- | :--- | :--- | :--- |
| `--bg` | `#1b1f29` (Deep Charcoal Blue) | `#eae7de` (Washi Warm Sand) | Latar belakang dasar kanvas aplikasi |
| `--bg2` | `#1b1f29` | `#eae7de` | Latar belakang sekunder / scroll track |
| `--bg3` | `#191d26` (Deep Recessed Base) | `#e3e0d6` (Darker Washi Sand) | Latar belakang bidang cekung (*inset containers*, bar input, nav) |
| `--surface` | `#1b1f29` | `#eae7de` | Permukaan kartu (*card surface*), modal, dan tombol |
| `--surface2` | `#212632` (Elevated Slate) | `#f1efe8` (Soft Bone Surface) | Permukaan layer sekunder (*chips*, dropdown, dialog popin) |
| `--text` | `#edf0f6` (Crisp Off-White) | `#262420` (Sumi Ink / Dark Charcoal) | Teks utama (*headings*, nilai nominal, label dominan) |
| `--text2` | `#8b93a6` (Muted Slate Grey) | `#6e6a60` (Muted Stone Brown) | Teks sekunder (sub-label, tanggal, meta info) |
| `--text3` | `#545c70` (Subtle Low-Contrast) | `#a39d8e` (Light Sand Wash) | Teks tersier (placeholder, divider icon, hint) |
| `--accent` | `#6f93cf` (Aizome Sky Indigo) | `#2f4d78` (Deep Aizome Navy) | Warna aksen utama (*primary button, active tab, highlight*) |
| `--accent2` | `#97b5e0` (Light Slate Indigo) | `#4f6fa0` (Medium Indigo) | Warna aksen sekunder / badge recurring / link hover |
| `--accent-glow` | `rgba(111, 147, 207, 0.35)` | `rgba(47, 77, 120, 0.22)` | Efek pendaran tombol utama & fokus input |
| `--accent-bg` | `rgba(111, 147, 207, 0.12)` | `rgba(47, 77, 120, 0.09)` | Latar belakang transparan badge atau chip aktif |
| `--success` | `#4fae86` (Matcha Green) | `#3c7a5c` (Forest Matcha) | Pemasukan (*income*), progres budget aman, notifikasi sukses |
| `--warning` | `#d9a54a` (Kinako Gold) | `#a97a2f` (Deep Ochre Amber) | Peringatan batas budget, kartu Net Worth, indikator manual rate |
| `--danger` | `#e2555b` (Hanko Coral Red) | `#b7282e` (Hanko Crimson) | Pengeluaran (*expense*), hapus transaksi, budget jebol, error |
| `--border` | `rgba(255, 255, 255, 0.06)` | `rgba(60, 55, 40, 0.08)` | Garis pemisah halus (*subtle dividers*) |
| `--border2` | `rgba(255, 255, 255, 0.10)` | `rgba(60, 55, 40, 0.14)` | Garis batas struktural / outline elemen fokus |

---

### 2.2 Token Neumorphism & Bayangan (Shadow Physics)

Neumorphism membutuhkan sepasang bayangan (*dual shadows*): sisi gelap (*dark shadow*) dan sisi terang (*light highlight*).

| Token CSS | Dark Mode | Light Mode | Penggunaan |
| :--- | :--- | :--- | :--- |
| `--neu-d` | `rgba(0, 0, 0, 0.55)` | `rgba(94, 86, 64, 0.30)` | Bayangan gelap penopang kedalaman |
| `--neu-l` | `rgba(255, 255, 255, 0.045)` | `rgba(255, 255, 255, 0.90)` | Pendaran cahaya atas (*top-left highlight*) |
| `--neu-out` | `6px 6px 13px var(--neu-d), -6px -6px 13px var(--neu-l)` | Sama (via var) | Kartu utama (*Card, Hero Card, Dialog Box*) |
| `--neu-out-sm` | `4px 4px 9px var(--neu-d), -4px -4px 9px var(--neu-l)` | Sama (via var) | Tombol, icon-btn, chips, daftar item transaksi |
| `--neu-in` | `inset 3px 3px 7px var(--neu-d), inset -3px -3px 7px var(--neu-l)` | Sama (via var) | Area cekung kontainer besar (*well container*) |
| `--neu-in-sm` | `inset 2px 2px 5px var(--neu-d), inset -2px -2px 5px var(--neu-l)` | Sama (via var) | Form input, kolom pencarian, tombol saat ditekan (*active*) |
| `--shadow` | `0 8px 36px rgba(0, 0, 0, 0.55)` | `0 4px 24px rgba(60, 55, 40, 0.14)` | Elevation mengambang (*floating modal sheet*) |
| `--shadow-sm` | `0 2px 14px rgba(0, 0, 0, 0.40)` | `0 2px 10px rgba(60, 55, 40, 0.10)` | Floating tooltip / toast elevation |
| `--overlay-bg` | `rgba(0, 0, 0, 0.55)` | `rgba(55, 48, 38, 0.35)` | Backdrop modal dialog & OCR camera scanner |
| `--speed-dial-overlay-bg` | `rgba(10, 13, 18, 0.50)` | `rgba(55, 48, 38, 0.28)` | Backdrop overlay saat Speed Dial FAB terbuka |

---

### 2.3 Palet Kategori Pengeluaran (*Expense Categories*)

Setiap kategori memiliki warna identitas unik untuk grafik donat (*doughnut chart*), dot kategori, dan visual tagging:

| Kategori | Emoji | Warna Hex | Makna Visual & Konteks |
| :--- | :---: | :---: | :--- |
| **Konsumsi** | 🍜 | `#fd7043` | Oranye hangat (makanan, kopi, restoran) |
| **Transport** | 🚌 | `#42a5f5` | Biru dinamis (bensin, tiket bus, kereta, ojek) |
| **Belanja** | 🛍️ | `#ec407a` | Pink magenta (pakaian, barang kebutuhan, belanja online) |
| **Hiburan** | 🎮 | `#ab47bc` | Ungu kreatif (games, bioskop, langganan streaming) |
| **Tagihan** | ⚡ | `#ffca28` | Kuning elektrik (listrik, air, pulsa, internet rumah) |
| **Kesehatan** | ⚕️ | `#26a69a` | Hijau toska medikal (obat, dokter, suplemen, gym) |
| **Lainnya** | 📦 | `#78909c` | Slate grey netral (pengeluaran serbaguna tak terduga) |
| **Transfer** | 🔁 | `#8899aa` | Muted cool steel (pindah saldo antar dompet/rekening) |

---

### 2.4 Palet Kategori Pemasukan (*Income Categories*)

| Kategori | Emoji | Warna Hex | Makna Visual & Konteks |
| :--- | :---: | :---: | :--- |
| **Gaji** | 💼 | `#26c6da` | Cyan segar (pendapatan tetap bulanan / gaji utama) |
| **Bonus** | 🎁 | `#66bb6a` | Hijau cerah (THR, insentif performa, komisi) |
| **Jualan** | 🛍️ | `#ec407a` | Pink ritel (omzet jualan barang/jasa sampingan) |
| **Investasi** | 📈 | `#42a5f5` | Biru pertumbuhan (dividen, profit reksadana, crypto) |
| **Utang/Piutang** | 🤝 | `#ffca28` | Kuning relasi (pengembalian pinjaman atau piutang) |
| **Lainnya** | 📦 | `#78909c` | Slate netral (pendapatan lain-lain) |

---

### 2.5 Palet Dompet Default (*Wallet Colors*)

| Dompet | Mata Uang | Icon | Warna Hex |
| :--- | :---: | :---: | :---: |
| **JPY Cash** | JPY (¥) | 💴 | `#7c6fe0` (Soft Lavender Indigo) |
| **GoPay** | IDR (Rp) | 💚 | `#00ae42` (GoPay Signature Green) |
| **USD Savings** | USD ($) | 💵 | `#42a5f5` (Global Blue) |

---

## 🔤 3. Tipografi (*Typography System*)

SevnTracker memadukan tiga keluarga font (*font families*) dari Google Fonts untuk memberikan karakter modern sekaligus berjiwa Jepang (*Wabi-sabi meets Cyber-minimalism*):

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600;700&family=Zen+Old+Mincho:wght@500;600;700&display=swap');
```

### 3.1 Peran Keluarga Font

1. **`Plus Jakarta Sans`, sans-serif** *(Primary UI Font)*
   - Digunakan untuk: Seluruh antarmuka umum, tombol, label formulir, navigasi, dialog teks, dan kartu.
   - Karakter: Geometris, ramah di layar mobile, bersih, dan sangat mudah dibaca (*high legibility*).
2. **`JetBrains Mono`, monospace** *(Financial & Numeric Font)*
   - Digunakan untuk: Nilai nominal uang (`hero-value`, `tx-amount`), kode mata uang (`IDR`, `JPY`, `USD`), tanggal/waktu, dan persentase budget.
   - Karakter: Monospace teknis presisi tinggi, memastikan angka selalu sejajar rapi (*tabular alignment*).
3. **`Zen Old Mincho`, serif** *(Japanese Elegance & Editorial Accents)*
   - Digunakan untuk: Judul Brand Header (`SevnTracker`), Judul Lembar Bawah (`.sheet-title`), dan Judul Bulan Kalender (`.cal-month-title`).
   - Karakter: Serif klasik Jepang berwibawa, menghadirkan estetika sastra dan ketenangan tradisi.

### 3.2 Hierarki & Ukuran Teks (*Type Scale*)

| Level / Komponen | Font Family | Size | Weight | Letter Spacing | Warna Token |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display / Hero Balance** | `JetBrains Mono` | `clamp(26px, 8vw, 34px)` | 700 | `-1.5px` | `var(--accent)` |
| **Modal / Sheet Title** | `Zen Old Mincho` | `clamp(17px, 5vw, 19px)` | 600 | `+0.2px` | `var(--text)` |
| **Brand Title** | `Zen Old Mincho` | `clamp(15px, 4vw, 17px)` | 600 | `+0.2px` | `var(--text)` |
| **Section Title** | `Plus Jakarta Sans` | `11.5px` | 800 (Caps) | `+0.8px` | `var(--text2)` |
| **Card Label / Overline** | `Plus Jakarta Sans` | `10.5px` | 700 (Caps) | `+0.9px` | `var(--text2)` |
| **Transaction Item Title** | `Plus Jakarta Sans` | `13.5px` | 700 | Normal | `var(--text)` |
| **Transaction Amount** | `JetBrains Mono` | `13.5px` | 700 | Normal | `var(--danger)` / `var(--success)` |
| **Body / Form Control** | `Plus Jakarta Sans` | `14px - 15px` | 500 | Normal | `var(--text)` |
| **Button Text** | `Plus Jakarta Sans` | `14px` | 700 | `+0.1px` | Kontras (*light/dark*) |
| **Meta / Subtitle** | `Plus Jakarta Sans` | `11px` | 500 | Normal | `var(--text2)` |
| **Micro Caption / Badge** | `JetBrains Mono` | `9.5px - 10px` | 600 - 700 | `+0.5px` | `var(--text3)` |

---

## 📐 4. Border Radius (*Corner Radii Tokens*)

Semua lengkungan sudut dirancang dengan rasio konsisten untuk memperkuat kesan lembut *washi paper*:

```css
:root {
  --radius-xs: 10px;  /* Tag, badge, tombol mini, sub-item */
  --radius-sm: 14px;  /* Form input, tombol sekunder, item navigasi */
  --radius:    18px;  /* Item transaksi, kartu shortcut, tombol utama */
  --radius-lg: 24px;  /* Kartu utama (Hero Card, Stat Card), Shell Frame */
  /* Pill / Circle: 99px - 999px (Chips, Progress bar, Toggle Switch, FAB) */
}
```

---

## ⏱️ 5. Animasi & Durasi Transisi (*Motion & Physics*)

Transisi UI mengutamakan kehalusan (*smoothness*) tanpa lag dengan memanfaatkan kurva akselerasi standar:

- **Standard Bezier**: `--trans: .2s cubic-bezier(.4, 0, .2, 1)`
- **Spring Elastic (FAB & Cards)**: `cubic-bezier(0.34, 1.56, 0.64, 1)`

### Daftar Animasi Kunci
- `@keyframes fadeUp`: Transisi pergantian halaman (translasi `12px` ke atas + fade in).
- `@keyframes sheetUp`: Luncuran Bottom Sheet modal dari bawah layar.
- `@keyframes currencyPulse`: Denyut cincin pendaran saat tombol mata uang diganti.
- `@keyframes currencySpin`: Rotasi 3D simbol mata uang pada input transaksi.
- `@keyframes scanBeam`: Sinar sensor pemindai struk belanja / OCR bon Jepang.
- `@keyframes savePulse`: Sentakan lembut saat data transaksi berhasil disimpan.

---

## 🧩 6. Spesifikasi Komponen Desain (*Component Specifications*)

### 6.1 Tombol Utama (*Primary Button*)
- **Background**: `var(--accent)`
- **Teks**: `var(--surface)` (Kontras tinggi)
- **Shadow**: `5px 5px 12px var(--neu-d), -5px -5px 12px var(--neu-l), 0 4px 14px var(--accent-glow)`
- **Pressed (`:active`)**: Skala `0.97` dengan bayangan mengecil.

### 6.2 Tombol Sekunder & Ghost (*Secondary & Ghost Button*)
- **Secondary**: Background `var(--surface2)`, bayangan `var(--neu-out-sm)`.
- **Ghost**: Background `var(--bg3)`, bayangan `var(--neu-in-sm)`, teks `var(--text2)`.
- **Danger Ghost**: Background `var(--surface)`, teks `var(--danger)`, bayangan `var(--neu-out-sm)`.

### 6.3 Input Formulir (*Form Controls*)
- **Background**: `var(--bg3)` (Cekung ke dalam kanvas)
- **Shadow**: `var(--neu-in-sm)`
- **Focus**: `var(--neu-in-sm), 0 0 0 2px var(--accent-glow)` (Pendaran fokus lembut tanpa outline kasar)
- **Border**: `none`

### 6.4 Kartu Transaksi (*Transaction Item*)
- **Struktur**: Flexbox horizontal dengan icon kategori (`.tx-cat-dot`), informasi judul & waktu (`.tx-info`), serta nilai nominal uang di sebelah kanan (`.tx-amounts`).
- **Interaksi Geser (*Swipe Action*)**: Mendukung gestur geser ke kiri (`transform: translateX(-68px)`) untuk memunculkan tombol hapus warna merah Hanko (`.tx-delete-reveal`).

### 6.5 Floating Action Button (FAB) & Speed Dial
- **FAB Utama**: Lingkaran/kotak tumpul 56×56px dengan pendaran `--accent-glow`.
- **Rotasi Ikon**: Saat menu speed dial dibuka, ikon berputar `45deg` dan FAB berubah menjadi border accent.
- **Menu Items**: Bertingkat (*staggered animation*) dengan tombol Manual, Gemini AI, dan Kamera OCR Struk.

---

## 💻 7. Tata Letak Responsif (*Responsive Layout Grid*)

SevnTracker menggunakan kontainer sentral (*App Shell*) dengan adaptasi cerdas untuk desktop dan tablet:

```css
:root                      { --shell-width: 430px;  } /* Mobile Handheld */
@media (min-width: 640px)  { --shell-width: 560px;  } /* Large Phone / Small Tablet */
@media (min-width: 900px)  { --shell-width: 1280px; } /* Desktop Multi-column */
@media (min-width: 1200px) { --shell-width: 1440px; } /* Wide Monitor Layout */
```

### Breakpoint Navigasi:
- **Mobile (< 1024px)**: Menggunakan **Bottom Navigation Bar** (`.bottom-nav`) yang melekat di dasar layar ponsel dengan penyesuaian area aman (`env(safe-area-inset-bottom)`).
- **Desktop (≥ 1024px)**: Menggunakan **Desktop Sidebar Navigation** (`.desktop-sidebar-nav`) selebar 260px di sisi kiri layar. Bottom navigation disembunyikan secara otomatis (`display: none !important`).

---

## 🛠️ 8. Panduan Penggunaan Token Baru (CSS & JS)

### Cara Membaca Warna Dinamis di JavaScript:
Gunakan fungsi bawaan `cssVar(name, alpha)` untuk mengonversi variabel CSS menjadi format `rgba` yang kompatibel dengan Canvas / Chart.js:

```javascript
// Contoh: Mengambil warna teks dinamis sesuai tema aktif
const textColor = cssVar('--text'); 

// Contoh: Mengambil warna aksen dengan transparansi 30%
const glowColor = cssVar('--accent', 0.3);
```

### Cara Membuat Komponen Baru yang Konsisten:
Pastikan selalu menggunakan token variabel yang sudah terdefinisi, jangan menggunakan *hardcoded hex color* pada komponen UI utama:

```css
/* ✅ BENAR: Mengikuti sistem Washi & Aizome */
.my-new-card {
  background: var(--surface);
  box-shadow: var(--neu-out);
  border-radius: var(--radius);
  color: var(--text);
}

.my-new-input {
  background: var(--bg3);
  box-shadow: var(--neu-in-sm);
  border-radius: var(--radius-sm);
  color: var(--text);
}

/* ❌ SALAH: Menabrak sistem desain */
.my-card-wrong {
  background: #ffffff;
  border: 1px solid #ccc;
  color: #000000;
}
```

---

*Dokumen ini merupakan referensi tunggal kebenaran (Single Source of Truth) untuk pengembangan antarmuka SevnTracker v9.*
