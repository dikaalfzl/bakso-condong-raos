# Bakso Condong Raos 234 - Food Menu Website

Sebuah Single Page Application (SPA) untuk website menu makanan dengan fitur pemesanan langsung via WhatsApp.

## 🚀 Fitur Utama

- **Menu Interaktif**: Filter kategori dan pencarian real-time
- **Pemesanan WhatsApp**: Order langsung dengan pesan otomatis terformat
- **Mobile-First Design**: Responsive dan touch-friendly
- **Animasi Halus**: Menggunakan Framer Motion untuk UX yang menarik
- **Performa Tinggi**: Lazy loading gambar dan optimasi React
- **SEO Friendly**: Meta tags lengkap dan JSON-LD schema

## 🛠️ Tech Stack

- **React 18** - Framework utama
- **Vite** - Build tool dan dev server
- **Tailwind CSS** - Styling dan responsive design
- **Framer Motion** - Animasi dan micro-interactions
- **Lucide React** - Icon library
- **JavaScript murni** - Tanpa TypeScript

## 📁 Struktur Project

```
├── src/
│   ├── components/          # Komponen React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── CategoryFilters.jsx
│   │   ├── SearchBar.jsx
│   │   ├── MenuGrid.jsx
│   │   ├── MenuCard.jsx
│   │   ├── WhatsAppFAB.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── menu.json        # Data menu makanan
│   ├── utils/
│   │   └── format.js        # Utility functions
│   ├── App.jsx              # Komponen utama
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # Template HTML
├── tailwind.config.js       # Konfigurasi Tailwind
└── package.json
```

## 🚀 Cara Menjalankan

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Jalankan development server**
   ```bash
   npm run dev
   ```

3. **Build untuk production**
   ```bash
   npm run build
   ```

## ⚙️ Konfigurasi

### Mengubah Informasi Brand
Edit konstanta di `src/App.jsx`:
```javascript
const BRAND = 'Bakso Condong Raos 234';
const PHONE_WA = '6281234567890'; // Format: 62XXXXXXXXX
```

### Menambah/Edit Menu
Edit file `src/data/menu.json` untuk menambah atau mengubah menu.

### Styling
Semua styling menggunakan Tailwind CSS. Konfigurasi warna brand ada di `tailwind.config.js`.

## 📱 Fitur WhatsApp Integration

Setiap tombol "Order" akan membuka WhatsApp dengan pesan terformat:
```
Halo Bakso Condong Raos 234!
Saya ingin pesan:
- Bakso Urat x2
Perkiraan total: Rp36.000
Nama: -
Metode Ambil: Dine-in
Catatan: -
```

## 🎨 Design System

- **Primary Color**: Green (#10B981)
- **Typography**: Inter font family
- **Spacing**: 8px grid system
- **Breakpoints**: Mobile-first responsive
- **Shadows**: Subtle elevations

## 🔧 Utils

### formatRupiah(number)
Format angka menjadi format rupiah Indonesia.

### buildWaUrl(options)
Membuat URL WhatsApp dengan pesan terformat untuk pemesanan.

## 📄 License

© 2025 Bakso Condong Raos 234. All rights reserved.