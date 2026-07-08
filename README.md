<div align="center">
  <img src="https://github.com/user-attachments/assets/bc206a62-4b37-4064-a1af-872e7a157463" width="200" alt="MENTARI Logo">
  
  # MENTARI MOD
  ### *Manajemen Terpadu Pembelajaran Daring*
  
  [![GitHub issues](https://img.shields.io/github/issues/Lukman754/mentari-unpam?color=green&style=for-the-badge)](https://github.com/Lukman754/mentari-unpam/issues)
  [![GitHub stars](https://img.shields.io/github/stars/Lukman754/mentari-unpam?style=for-the-badge)](https://github.com/Lukman754/mentari-unpam/stargazers)
  [![GitHub license](https://img.shields.io/github/license/Lukman754/mentari-unpam?style=for-the-badge)](https://github.com/Lukman754/mentari-unpam)
</div>

## Tentang MENTARI

**MENTARI** (*Manajemen Terpadu Pembelajaran Daring*) adalah platform pembelajaran digital modern yang dirancang untuk menggantikan [e-learning.unpam.ac.id](https://e-learning.unpam.ac.id). Platform ini menawarkan pengalaman belajar yang lebih intuitif, efisien, dan menyenangkan bagi civitas akademika Universitas Pamulang.

**MENTARI MOD** hadir sebagai ekstensi browser yang memperkaya platform ini dengan berbagai fitur tambahan untuk memaksimalkan produktivitas dalam pembelajaran daring.

<div align="center">
  <img width="1920" height="887" alt="{9292697D-E7C6-449D-839F-CCAC2C95D736}" src="https://github.com/user-attachments/assets/44c82042-ae47-447c-aef1-ab86b9926409" />
</div>

## 📦 Download

<p align="center">
   <a href="https://github.com/Syefdi/Mentari-Unpam/archive/refs/heads/main.zip" style="display: block; margin-bottom: 10px;">
    <img src="https://img.shields.io/badge/⬇%20Download-Chrome/Edge/Brave-00C853?style=for-the-badge&logo=googlechrome&logoColor=white"/>
  </a>
  <br>
  <a href="https://github.com/Syefdi/Mentari-Unpam/archive/refs/heads/main.zip">
    <img src="https://img.shields.io/badge/⬇%20Download-Firefox-FF7139?style=for-the-badge&logo=firefox&logoColor=white"/>
  </a>
</p>

Atau clone dengan Git:
```bash
git clone https://github.com/Syefdi/Mentari-Unpam.git
```


## Cara Instalasi

### Chrome, Edge, Brave (Chromium-based)
```
1️. Download dan ekstrak file zip dari button di atas
2️. Buka terminal di folder hasil ekstrak, jalankan:
   npm install
   npm run build:chrome
   (Atau jalankan build-firefox.bat di Windows)
3️. Buka browser Chromium (Chrome/Edge/Brave)
4️. Ketik chrome://extensions/ di address bar
5️. Aktifkan "Mode Pengembang" (toggle di pojok kanan)
6️. Klik "Load unpacked" dan pilih folder build/chrome
7️. Ekstensi siap digunakan! 
```

### Firefox
```
1️. Download dan ekstrak file zip dari button di atas
2️. Buka terminal di folder hasil ekstrak, jalankan:
   npm install
   npm run build:firefox
   (Atau jalankan build-firefox.bat di Windows / ./build-firefox.sh di Linux/Mac)
3️. Buka Firefox
4️. Ketik about:debugging di address bar
5️. Klik "This Firefox" di sidebar
6️. Klik "Load Temporary Add-on"
7️. PENTING: Masuk ke folder build/firefox, lalu pilih file "manifest.json" 
   (JANGAN pilih folder, pilih FILE manifest.json di dalam folder build/firefox)
8️. Ekstensi siap digunakan!

CATATAN PENTING untuk Firefox:
- Di Firefox, ekstensi yang di-load temporary akan hilang setelah browser ditutup.
- Untuk instalasi permanen, ekstensi perlu di-sign oleh Mozilla atau gunakan Firefox Developer Edition.
- Beberapa fitur mungkin memiliki perbedaan kecil dengan versi Chrome karena perbedaan API browser.
- Jika ada fitur yang tidak berfungsi, coba reload extension dari about:debugging atau restart Firefox.
```

### Mises Browser (iOS/Android)
```
1️. Download Mises Browser (AppStore/PlayStore)
2️. Buka Mises Browser di perangkat Anda
3️. Ketuk menu (tiga titik) di pojok kanan atas
4️. Pilih "Extensions"
5️. Aktifkan "Developer Mode"
6️. Klik "+ (from .zip/.crx/.user.js)"
7️. Pilih file Mentari Mod.zip
8️. Refresh halaman MENTARI 
```

## FAQ
> [!IMPORTANT]
> **Apakah Extension ini aman?**
> Ya, extension ini hanya membantu mahasiswa untuk melacak forum diskusi yang sedang berjalan tanpa mencarinya satu-persatu dan mempermudah penggunaan mentari dengan berbagai shortcut

> **Apakah bisa digunakan di Firefox?**
> Ya! Mentari Mod v2.0 sudah mendukung Firefox. Download versi Firefox dan ikuti panduan instalasi di atas.

> **Apakah berfungsi di semua browser Chromium?**
> Ya, extension ini kompatibel dengan Chrome, Edge, Brave, dan browser berbasis Chromium lainnya.

> **Bagaimana cara mendapatkan API Key Gemini?**
> 1. Kunjungi https://makersuite.google.com/app/apikey
> 2. Login dengan akun Google
> 3. Klik "Create API Key"
> 4. Copy API key dan paste di popup extension

> **Extension tidak muncul setelah instalasi?**
> Pastikan Developer Mode aktif dan folder yang dipilih benar. Coba restart browser.

> **Fitur AI tidak bekerja?**
> Pastikan API key Gemini sudah diisi dengan benar di popup extension.

## 🤝 Contributing

Kontribusi sangat diterima! Lihat [CONTRIBUTING.md](CONTRIBUTING.md) untuk panduan berkontribusi.

## 📚 Dokumentasi

- [QUICK_START.md](QUICK_START.md) - Panduan memulai cepat
- [CHANGELOG.md](CHANGELOG.md) - Riwayat perubahan versi
- [FIREFOX_COMPATIBILITY.md](FIREFOX_COMPATIBILITY.md) - Panduan kompatibilitas Firefox
- [TESTING.md](TESTING.md) - Panduan testing
- [CONTRIBUTING.md](CONTRIBUTING.md) - Panduan kontribusi

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE) - lihat file LICENSE untuk detail lebih lanjut.

---

<div align="center">
  <p>Dibuat dengan ❤️ untuk mahasiswa UNPAM</p>

  [![GitHub](https://img.shields.io/badge/Follow-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/lukman754)
  [![Instagram](https://img.shields.io/badge/Follow-Instagram-E4405F?style=for-the-badge&logo=instagram)](https://instagram.com/_.chopin)
  [![Support Me](https://img.shields.io/badge/Support_with_Coffee-FF813F?style=for-the-badge&logo=buymeacoffee&logoColor=white)](https://saweria.co/chopin)

  <p>© 2025 <a href="https://instagram.com/_.chopin">Lukman Muludin</a>. All Rights Reserved.</p>
</div>

