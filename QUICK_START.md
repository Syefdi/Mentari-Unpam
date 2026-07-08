# Quick Start Guide - Mentari Mod

Panduan cepat untuk mulai menggunakan dan mengembangkan Mentari Mod.

## Untuk Pengguna

### Chrome/Edge/Brave

1. **Download**
   - Download `Mentari-Unpam-v2.0.zip` dari [Releases](https://github.com/Syefdi/Mentari-Unpam/releases)
   - Ekstrak file zip

2. **Install**
   - Buka `chrome://extensions/` di browser
   - Aktifkan "Developer mode" (toggle di pojok kanan atas)
   - Klik "Load unpacked"
   - Pilih folder hasil ekstraksi
   - Extension siap digunakan!

3. **Setup API Key Gemini (Opsional)**
   - Klik icon extension di toolbar
   - Klik "Settings" atau "Configure"
   - Masukkan Gemini API key
   - Kunjungi [Google AI Studio](https://makersuite.google.com/app/apikey) untuk mendapatkan API key gratis

### Firefox

1. **Download**
   - Download `Mentari-Unpam-Firefox-v2.0.zip` dari [Releases](https://github.com/Syefdi/Mentari-Unpam/releases)
   - Ekstrak file zip

2. **Install**
   - Buka Firefox
   - Ketik `about:debugging` di address bar
   - Klik "This Firefox" di sidebar
   - Klik "Load Temporary Add-on"
   - Pilih file `manifest.json` di folder hasil ekstraksi
   
   > Catatan: Temporary add-on akan hilang setelah Firefox ditutup. Untuk instalasi permanen, gunakan Firefox Developer Edition atau extension yang sudah di-sign.

3. **Setup API Key** (sama seperti Chrome)

## Untuk Developer

### Prerequisites

- Node.js (v14 atau lebih baru)
- npm atau yarn
- Git
- Chrome/Edge/Brave atau Firefox

### Clone Repository

```bash
git clone https://github.com/Syefdi/Mentari-Unpam.git
cd Mentari-Unpam
```

### Install Dependencies

```bash
npm install
```

Dependencies yang akan terinstall:
- `web-ext` - Tool untuk testing dan building Firefox extensions

### Build Extension

#### Build untuk Chrome
```bash
npm run build:chrome
```
Output: `build/chrome/`

#### Build untuk Firefox
```bash
npm run build:firefox
```
Output: `build/firefox/`

#### Build untuk semua browser
```bash
npm run build:all
```

### Development Workflow

#### 1. Edit Code
File utama yang sering diedit:
- `src/content/` - Content scripts untuk berbagai halaman
- `src/popup/` - UI popup extension
- `manifest.json` - Chrome manifest
- `manifest.firefox.json` - Firefox manifest

#### 2. Test di Chrome
```bash
# Build
npm run build:chrome

# Load extension
# - Buka chrome://extensions/
# - Load unpacked > pilih build/chrome
# - Setiap kali edit code, klik reload di chrome://extensions/
```

#### 3. Test di Firefox
```bash
# Build
npm run build:firefox

# Automatic reload dengan web-ext
npm run dev:firefox

# Atau manual load
# - Buka about:debugging
# - Load Temporary Add-on
# - Pilih build/firefox/manifest.json
```

#### 4. Validate
```bash
# Validate manifest files
npm run validate

# Lint Firefox extension
npm run test:firefox
```

### Project Structure

```
Mentari-Unpam/
├── src/
│   ├── content/              # Content scripts
│   │   ├── content.js        # Main content script
│   │   ├── quiz.js           # Quiz helper
│   │   ├── discus.js         # Discussion enhancement
│   │   ├── presensi.js       # Attendance management
│   │   ├── gemini.js         # AI assistant
│   │   └── ...
│   ├── popup/                # Extension popup
│   │   ├── popup.html
│   │   └── script.js
│   └── assets/               # Images and icons
│       ├── icon.png
│       └── background.png
├── scripts/                  # Build scripts
│   ├── build-chrome.js
│   ├── build-firefox.js
│   ├── validate-manifest.js
│   └── clean.js
├── manifest.json             # Chrome/Edge manifest
├── manifest.firefox.json     # Firefox manifest
├── package.json              # NPM config
└── build/                    # Build output (gitignored)
    ├── chrome/
    └── firefox/
```

### Common Tasks

#### Add New Content Script

1. Create file in `src/content/newfeature.js`
2. Write your code
3. Add to `manifest.json`:
```json
{
  "matches": ["https://mentari.unpam.ac.id/your-page/*"],
  "js": ["src/content/newfeature.js"]
}
```
4. Add to `manifest.firefox.json` (same entry)
5. Build and test

#### Modify Popup

1. Edit `src/popup/popup.html` for HTML structure
2. Edit `src/popup/script.js` for logic
3. Test by opening popup (click extension icon)

#### Update Permissions

1. Edit both `manifest.json` and `manifest.firefox.json`
2. Add permission to `permissions` or `host_permissions` array
3. Validate: `npm run validate`
4. Rebuild and reload extension

#### Clean Build Files

```bash
npm run clean
```

### Debug Tips

#### Chrome DevTools
```javascript
// In content script
console.log('Debug message');

// View in:
// - Right click page > Inspect > Console
// - Look for "content script" context
```

#### Firefox DevTools
```javascript
// Same as Chrome
console.log('Debug message');

// View in:
// - Right click page > Inspect Element > Console
// - Or about:debugging > Inspect
```

#### Common Issues

**Extension not loading:**
- Check manifest syntax with `npm run validate`
- Check console errors in chrome://extensions or about:debugging
- Make sure all file paths in manifest exist

**Content script not injecting:**
- Check URL matches pattern in manifest
- Check exclude_matches isn't blocking
- Check permissions are granted
- Refresh the page after loading extension

**API not working:**
- Check host_permissions include API domain
- Check CORS headers
- Check API key is valid
- Check network tab for errors

### Testing

Run comprehensive tests:
```bash
# Validate manifests
npm run validate

# Lint Firefox extension
npm run test:firefox

# Manual testing checklist
# See TESTING.md for full checklist
```

### Commit Changes

```bash
git add .
git commit -m "Add: description of changes"
git push origin your-branch
```

Follow [conventional commits](https://www.conventionalcommits.org/):
- `Add:` new feature
- `Fix:` bug fix
- `Update:` modify existing feature
- `Refactor:` code refactoring
- `Docs:` documentation only

### Create Pull Request

1. Push your branch
2. Go to GitHub repository
3. Click "New Pull Request"
4. Fill description
5. Wait for review

## Resources

### Documentation
- [README.md](README.md) - Main documentation
- [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guidelines
- [TESTING.md](TESTING.md) - Testing guide
- [FIREFOX_COMPATIBILITY.md](FIREFOX_COMPATIBILITY.md) - Firefox compatibility info
- [CHANGELOG.md](CHANGELOG.md) - Version history

### External Resources
- [Chrome Extension Docs](https://developer.chrome.com/docs/extensions/)
- [Firefox Extension Docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
- [Manifest V3 Guide](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [web-ext Tool](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/)

### API References
- [Chrome Extension APIs](https://developer.chrome.com/docs/extensions/reference/)
- [WebExtensions API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API)
- [Gemini API](https://ai.google.dev/docs)

## Support

- GitHub Issues: [Report bugs or request features](https://github.com/Syefdi/Mentari-Unpam/issues)
- Instagram: [@_.chopin](https://instagram.com/_.chopin)

## License

MIT License - See [LICENSE](LICENSE)

---

Happy coding! Jika ada pertanyaan, jangan ragu untuk membuat issue.
