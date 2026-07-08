# Cara Update Extension ke Versi 2.0.4

## Versi 2.0.4 - Support Format API Key Baru (AQ....)

Extension ini sekarang mendukung 2 format API key Google Gemini:
- **Format Lama**: `AIzaSy...` (39 karakter)
- **Format Baru**: `AQ....` (dimulai dengan `AQ.` diikuti karakter base64)

## Langkah-Langkah Update

### 1. Download Versi Terbaru
```bash
# Jika menggunakan git:
git pull origin main

# Atau download ZIP dari GitHub
```

### 2. Hapus Extension Lama di Brave/Chrome

1. Buka Brave browser
2. Ketik di address bar: `brave://extensions/` atau `chrome://extensions/`
3. Cari extension "Mentari Mod" yang lama
4. Klik **Remove** untuk menghapus

### 3. Install Extension Baru

1. Masih di halaman `brave://extensions/`
2. Aktifkan **Developer mode** (toggle di kanan atas)
3. Klik **Load unpacked**
4. Pilih folder `Mentari-Unpam` (folder hasil download/clone)
5. Klik **Select Folder**

### 4. Verifikasi Instalasi

- Extension muncul dengan nama **Mentari Mod**
- Versi harus menampilkan **2.0.4**
- Icon extension muncul di toolbar browser

### 5. Input API Key Baru

1. Buka website: https://mentari.unpam.ac.id/
2. Extension akan meminta API key jika belum ada
3. Masukkan API key baru Anda (format `AQ....`)
4. Klik **Simpan**

### 6. Test API Key

Gunakan curl untuk test API key valid:
```bash
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent" \
  -H 'Content-Type: application/json' \
  -H 'X-goog-api-key: AQ.xxxxxxxxxxxxx' \
  -X POST \
  -d '{"contents":[{"parts":[{"text":"Say hello"}]}]}'
```

Jika berhasil, API key Anda valid.

## Troubleshooting

### Masih Muncul Error "Format API key tidak valid"

1. **Reload Extension**:
   - Buka `brave://extensions/`
   - Klik icon refresh pada extension Mentari Mod
   - Refresh halaman mentari.unpam.ac.id

2. **Clear Cache Browser**:
   - Tekan `Ctrl+Shift+Delete`
   - Pilih "Cached images and files"
   - Clear data
   - Restart browser

3. **Cek Console Log**:
   - Buka halaman mentari.unpam.ac.id
   - Tekan `F12` untuk buka Developer Tools
   - Pilih tab **Console**
   - Cari pesan `[Mentari Mod]` untuk cek apakah patch berjalan

4. **Reinstall Bersih**:
   - Hapus extension dari `brave://extensions/`
   - Restart browser
   - Install ulang extension

### API Key Masih Tidak Diterima

Pastikan API key Anda:
- Dimulai dengan `AQ.` (huruf A dan Q besar, diikuti titik)
- Minimal 23 karakter total
- Tidak ada spasi di awal atau akhir
- Copy paste langsung dari Google AI Studio

### Extension Tidak Muncul di Toolbar

1. Klik icon puzzle di toolbar Brave
2. Cari "Mentari Mod"
3. Klik icon pin untuk pin ke toolbar

## Catatan Penting

- Extension ini berjalan di background, tidak ada popup
- Hanya berfungsi di domain `mentari.unpam.ac.id` dan `my.unpam.ac.id`
- API key disimpan secara lokal di browser Anda
- Jangan share API key Anda ke orang lain

## Generate API Key Baru

Jika belum punya API key atau perlu generate baru:

1. Buka: https://aistudio.google.com/app/apikey
2. Login dengan akun Google
3. Klik **Create API Key**
4. Pilih project atau buat baru
5. Copy API key yang dihasilkan (format baru: `AQ....`)
6. Paste ke extension

## Support

Jika masih mengalami masalah:
- Buka issue di GitHub: https://github.com/Syefdi/Mentari-Unpam/issues
- Screenshot error message
- Sertakan versi extension (harus 2.0.4)
