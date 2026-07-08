# Changelog

All notable changes to Mentari Mod will be documented in this file.

**Modified Version by Syefdi** - Fork dari [lukman754/Mentari-Unpam](https://github.com/lukman754/Mentari-Unpam)  
Untuk penggunaan pribadi dan teman sekelas.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.0.5] - 2026-07-08

### Fixed
- **CRITICAL**: Fixed infinite recursion in RegExp.prototype.test override
- Added safeRegexTest wrapper to prevent "Maximum call stack size exceeded" error
- Improved validation stability

### Changed
- All watermarks and credits updated from Lukman to Syefdi
- README updated with fork notice and modified author info
- LICENSE updated to reflect modified version

## [2.0.4] - 2026-07-08

### Added
- Aggressive validation override system
- Early script injection at `document_start`
- localStorage API override for bypassing validation
- Object.defineProperty lock on validateApiKey function

### Changed
- Complete rewrite of apiKeyValidatorPatch.js with aggressive overrides
- Split content_scripts to inject patch before obfuscated code
- Updated documentation with detailed update instructions

## [2.0.3] - 2025-07-08

### Added
- API Key validator patch to support new Google Gemini API key format (`AQ....`)
- Backward compatibility with old API key format (`AIzaSy...`)
- Console logging for API key validation debugging
- Automatic input field validation patching
- Real-time API key format detection

### Fixed
- Fixed API key validation rejecting new Google Gemini API format
- Extension now accepts both old (`AIzaSy...`) and new (`AQ....`) API key formats
- Improved error messages for invalid API keys

### Technical
- Added `apiKeyValidatorPatch.js` content script
- Implemented regex patterns for both API key formats
- Added MutationObserver for dynamic content

## [2.0.2] - 2025-07-08

### Fixed
- Fixed blank page issue on my.unpam.ac.id after domain confirmation redirect
- Added `run_at: "document_idle"` to presensi scripts to wait for full page load
- Excluded satu.unpam.ac.id from content script injection to prevent script errors on redirect pages
- Improved error handling for token detection on my.unpam.ac.id

### Changed
- Updated manifest version to 2.0.2

## [2.0.1] - 2025-07-08

### Added
- Firefox compatibility support (Manifest V3)
- Dedicated Firefox manifest (manifest.firefox.json)
- Build scripts for both Chrome and Firefox
- Automated build system with package.json scripts
- Comprehensive testing guide (TESTING.md)
- Firefox compatibility documentation (FIREFOX_COMPATIBILITY.md)
- .gitignore for build artifacts
- Node.js build scripts in scripts/ folder
- Cross-browser testing checklist

### Changed
- Updated README.md with Firefox installation instructions
- Enhanced FAQ section with common questions
- Improved download section with browser-specific links
- Restructured installation guide for clarity

### Technical
- Added browser_specific_settings for Firefox
- Maintained backward compatibility with Chrome/Edge/Brave
- All existing APIs compatible with both browser families
- No breaking changes to existing functionality

## [2.0.0] - 2025

### Added
- Forum discussion tracker
- Gemini AI assistant integration
- Quiz helper features
- Kuisioner auto-fill
- Attendance management
- Auto-login functionality
- Enhanced UI for discussions

### Changed
- Migrated to Manifest V3
- Modern extension architecture
- Improved security with host permissions
- Better code organization

## [1.0.0] - Initial Release

### Added
- Basic MENTARI integration
- Content script injection
- Simple popup interface
