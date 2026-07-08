# Firefox Compatibility Guide

## Overview
Mentari Mod telah dikembangkan agar kompatibel dengan Firefox menggunakan Manifest V3. Firefox mendukung Manifest V3 sejak versi 109.

## Perbedaan antara Chrome dan Firefox

### 1. Browser Specific Settings
Firefox memerlukan field tambahan `browser_specific_settings` di manifest untuk:
- Extension ID yang unik
- Versi minimal Firefox yang didukung

```json
"browser_specific_settings": {
  "gecko": {
    "id": "mentari-mod@unpam.ac.id",
    "strict_min_version": "109.0"
  }
}
```

### 2. API Compatibility
Semua API yang digunakan dalam ekstensi ini kompatibel dengan Firefox:
- `chrome.scripting` - Supported
- `chrome.tabs` - Supported
- `chrome.storage` - Supported
- Content Scripts - Fully supported
- Web Accessible Resources - Supported

### 3. Build Process

#### Untuk Development:
```bash
# Linux/macOS
./build-firefox.sh

# Windows
build-firefox.bat
```

#### Untuk Production (Signed):
```bash
# Install web-ext tool
npm install -g web-ext

# Build dan sign
cd build/firefox
web-ext build
web-ext sign --api-key=YOUR_KEY --api-secret=YOUR_SECRET
```

## Installation Guide

### Temporary Installation (Development)
1. Open Firefox
2. Navigate to `about:debugging`
3. Click "This Firefox"
4. Click "Load Temporary Add-on"
5. Select `manifest.json` from build/firefox folder
6. Extension will be active until Firefox restart

### Permanent Installation
1. Get extension signed at [addons.mozilla.org](https://addons.mozilla.org)
2. Or use Firefox Developer Edition/Nightly with `xpinstall.signatures.required` set to false

## Testing Checklist

- [ ] Content scripts load properly on mentari.unpam.ac.id
- [ ] Popup opens and displays correctly
- [ ] API calls to Gemini work
- [ ] Forum tracking functionality works
- [ ] Quiz helper functions properly
- [ ] Attendance management works
- [ ] Auto-login features work
- [ ] Icons display correctly
- [ ] No console errors

## Known Limitations

1. Temporary add-ons are removed when Firefox closes
2. Self-distributed extensions must be signed or require Developer Edition
3. Some CSS styling may differ slightly from Chrome

## Support

Minimum Firefox version: 109.0
Recommended version: Latest stable Firefox

## References

- [Firefox Extension Workshop](https://extensionworkshop.com/)
- [MDN WebExtensions API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
- [Manifest V3 Migration Guide](https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/)
