# Known Issues - Mentari Mod

## Firefox Compatibility Issues

### 1. Button "Jalankan Token" Tidak Responsif
**Status**: Known Issue  
**Affected**: Firefox only  
**Description**: Button "Jalankan Token" di popup my.unpam.ac.id tidak dapat diklik di Firefox.

**Penyebab Kemungkinan**:
- Script presensi.js ter-obfuscate dan mungkin menggunakan API yang berbeda implementasinya di Firefox
- Event listener tidak ter-attach dengan benar
- CSP (Content Security Policy) Firefox lebih ketat

**Workaround Sementara**:
- Gunakan Chrome/Edge/Brave untuk fitur presensi dan token
- Atau tunggu update yang men-debug script presensi.js

**Fix yang Direncanakan**:
- Refactor dan de-obfuscate presensi.js
- Test secara spesifik untuk Firefox API compatibility
- Tambahkan fallback untuk Firefox

### 2. Temporary Add-on di Firefox
**Status**: By Design (Firefox limitation)  
**Description**: Extension yang di-load melalui "Load Temporary Add-on" akan hilang setelah browser ditutup.

**Solusi**:
- Untuk development: Acceptable, load ulang setiap kali
- Untuk production: Extension harus di-sign melalui addons.mozilla.org
- Alternatif: Gunakan Firefox Developer Edition dengan signature checking disabled

### 3. Styling Differences
**Status**: Minor  
**Description**: Beberapa elemen UI mungkin terlihat sedikit berbeda di Firefox dibanding Chrome.

**Penyebab**:
- Perbedaan CSS rendering engine
- Font fallback yang berbeda

**Impact**: Cosmetic only, tidak mempengaruhi functionality

## Chrome/Edge/Brave Issues

### 1. Blank Page di my.unpam.ac.id setelah domain confirmation
**Status**: FIXED (v2.0.2)  
**Description**: Halaman my.unpam.ac.id jadi blank putih setelah redirect dari satu.unpam.ac.id/domain-confirm

**Penyebab**:
- Script presensi.js dijalankan di halaman domain-confirm
- Script mencari token yang tidak ada di halaman redirect
- Menyebabkan error dan halaman jadi blank

**Fix**:
- Added `run_at: "document_idle"` untuk menunggu halaman full load
- Exclude satu.unpam.ac.id dari content script injection
- Script hanya dijalankan di halaman my.unpam.ac.id yang sudah fully loaded

**Versi**: Fixed di v2.0.2+

## General Issues

### API Key Gemini Not Working
**Solution**:
1. Pastikan API key valid dari https://makersuite.google.com/app/apikey
2. Pastikan ada koneksi internet
3. Check host_permissions di manifest sudah include generativelanguage.googleapis.com
4. Cek console untuk error messages

## Reporting New Issues

Jika Anda menemukan bug baru, silakan report di:
https://github.com/Syefdi/Mentari-Unpam/issues

Include informasi berikut:
- Browser dan versi
- Extension version
- Steps to reproduce
- Screenshot jika memungkinkan
- Console errors jika ada
