# Contributing to Mentari Mod

Terima kasih atas ketertarikan Anda untuk berkontribusi pada Mentari Mod! Dokumen ini berisi panduan untuk berkontribusi.

## Code of Conduct

Proyek ini dan semua yang berpartisipasi di dalamnya diatur oleh kode etik berikut:
- Hormati semua kontributor
- Gunakan bahasa yang ramah dan inklusif
- Terima kritik yang membangun
- Fokus pada yang terbaik untuk komunitas

## Cara Berkontribusi

### Melaporkan Bug

Jika Anda menemukan bug:

1. Cek [Issues](https://github.com/Syefdi/Mentari-Unpam/issues) untuk memastikan bug belum dilaporkan
2. Jika belum ada, buat issue baru dengan template berikut:
   - Deskripsi bug yang jelas
   - Langkah untuk mereproduksi
   - Behavior yang diharapkan vs actual
   - Screenshots jika applicable
   - Informasi browser dan versi

### Mengusulkan Fitur Baru

Untuk mengusulkan fitur baru:

1. Buat issue dengan label "enhancement"
2. Jelaskan fitur yang diusulkan secara detail
3. Jelaskan use case dan manfaat fitur
4. Jika mungkin, tambahkan mockup atau contoh

### Pull Request Process

1. **Fork repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Mentari-Unpam.git
   cd Mentari-Unpam
   ```

2. **Buat branch baru**
   ```bash
   git checkout -b feature/nama-fitur
   # atau
   git checkout -b fix/nama-bug
   ```

3. **Lakukan perubahan**
   - Ikuti code style yang ada
   - Tulis kode yang clean dan maintainable
   - Tambahkan komentar jika diperlukan
   - Test perubahan Anda

4. **Commit perubahan**
   ```bash
   git add .
   git commit -m "Add: deskripsi singkat perubahan"
   ```

   Format commit message:
   - `Add: ` untuk fitur baru
   - `Fix: ` untuk bug fix
   - `Update: ` untuk update fitur existing
   - `Refactor: ` untuk refactoring code
   - `Docs: ` untuk perubahan dokumentasi
   - `Test: ` untuk menambah test

5. **Push ke GitHub**
   ```bash
   git push origin feature/nama-fitur
   ```

6. **Buat Pull Request**
   - Buka repository di GitHub
   - Klik "New Pull Request"
   - Pilih branch Anda
   - Isi deskripsi PR dengan jelas
   - Link ke issue terkait jika ada

### Code Style Guidelines

#### JavaScript
```javascript
// Gunakan camelCase untuk variabel dan fungsi
const userName = 'John';
function getUserData() {}

// Gunakan PascalCase untuk class
class UserManager {}

// Gunakan UPPER_CASE untuk konstanta
const API_URL = 'https://api.example.com';

// Gunakan const by default, let jika perlu reassign
const data = [];
let counter = 0;

// Prefer arrow functions untuk callbacks
array.map(item => item.id);

// Gunakan template literals
const message = `Hello ${userName}`;

// Destructuring ketika appropriate
const { name, age } = user;

// Error handling yang proper
try {
  // code
} catch (error) {
  console.error('Error:', error);
}
```

#### HTML
```html
<!-- Gunakan indentation 2 spaces -->
<div class="container">
  <h1>Title</h1>
  <p>Content</p>
</div>

<!-- Gunakan semantic HTML -->
<header>
  <nav>
    <ul>
      <li><a href="#">Link</a></li>
    </ul>
  </nav>
</header>
```

#### CSS
```css
/* Gunakan BEM naming convention ketika appropriate */
.block {}
.block__element {}
.block--modifier {}

/* Grouping related properties */
.selector {
  /* Positioning */
  position: relative;
  top: 0;
  
  /* Display & Box Model */
  display: flex;
  width: 100%;
  padding: 10px;
  
  /* Typography */
  font-size: 16px;
  line-height: 1.5;
  
  /* Visual */
  background: #fff;
  border: 1px solid #ddd;
}
```

### Testing

Sebelum submit PR, pastikan:

1. **Manual Testing**
   - Test di Chrome/Edge/Brave
   - Test di Firefox
   - Tidak ada console errors
   - Semua fitur berfungsi

2. **Cross-browser Testing**
   ```bash
   # Build untuk kedua browser
   npm run build:all
   
   # Test Firefox
   npm run test:firefox
   ```

3. **Check manifest validity**
   - Manifest valid untuk Chrome
   - Manifest Firefox valid
   - Semua permissions necessary

### File Structure

```
Mentari-Unpam/
├── src/
│   ├── content/          # Content scripts
│   ├── popup/            # Extension popup
│   └── assets/           # Images, icons
├── scripts/              # Build scripts
├── build/                # Build output (gitignored)
├── manifest.json         # Chrome manifest
├── manifest.firefox.json # Firefox manifest
├── package.json          # NPM config
├── README.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── FIREFOX_COMPATIBILITY.md
└── TESTING.md
```

### Menambah Fitur Baru

Jika menambah content script baru:

1. Buat file di `src/content/namafitur.js`
2. Update `manifest.json`:
   ```json
   {
     "matches": ["https://mentari.unpam.ac.id/path/*"],
     "js": ["src/content/namafitur.js"]
   }
   ```
3. Update `manifest.firefox.json` juga
4. Dokumentasikan di README.md
5. Tambahkan test scenario di TESTING.md

### API Integration

Jika menambah API call:

1. Gunakan async/await
2. Implementasikan error handling
3. Tambahkan timeout
4. Log errors untuk debugging
5. Respect rate limits

```javascript
async function callAPI(endpoint) {
  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
}
```

### Security Considerations

- Jangan commit API keys atau credentials
- Validate semua user input
- Sanitize data sebelum inject ke DOM
- Gunakan CSP yang strict
- Minimize permissions yang diminta
- Hindari eval() dan inline scripts

### Documentation

Jika mengubah functionality:
- Update README.md
- Update CHANGELOG.md
- Update JSDoc comments jika ada
- Update TESTING.md dengan test case baru

### Release Process

Maintainer akan:
1. Review dan merge PR
2. Update version di manifest files
3. Update CHANGELOG.md
4. Create git tag
5. Build release artifacts
6. Create GitHub release
7. Update download links

## Questions?

Jika ada pertanyaan:
- Buat issue dengan label "question"
- Contact maintainer via Instagram: [@_.chopin](https://instagram.com/_.chopin)

## License

Dengan berkontribusi, Anda setuju bahwa kontribusi Anda akan dilisensikan di bawah MIT License yang sama dengan proyek ini.

---

Terima kasih telah berkontribusi! Setiap kontribusi, besar atau kecil, sangat berarti untuk proyek ini.
