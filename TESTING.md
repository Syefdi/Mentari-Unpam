# Testing Guide - Mentari Mod

## Pre-Testing Checklist

### Environment Setup
- [ ] Chrome/Edge/Brave installed (version 109+)
- [ ] Firefox installed (version 109+)
- [ ] Node.js installed (optional, untuk build scripts)
- [ ] Access ke mentari.unpam.ac.id
- [ ] Valid UNPAM credentials

## Build Testing

### Chrome/Edge/Brave
```bash
# Manual build (tanpa Node.js)
build-firefox.bat  # Windows
./build-firefox.sh # Linux/macOS

# Atau dengan Node.js
npm install
npm run build:chrome
```

### Firefox
```bash
# Manual build
build-firefox.bat  # Windows
./build-firefox.sh # Linux/macOS

# Atau dengan Node.js
npm install
npm run build:firefox

# Validasi Firefox
npm run test:firefox
```

## Functional Testing

### 1. Installation Testing
#### Chrome
- [ ] Extension loads without errors
- [ ] Icon appears in toolbar
- [ ] Popup opens correctly
- [ ] No console errors in chrome://extensions

#### Firefox
- [ ] Extension loads without errors
- [ ] Icon appears in toolbar
- [ ] Popup opens correctly
- [ ] No console errors in about:debugging

### 2. Core Features Testing

#### Forum Tracker
- [ ] Login ke mentari.unpam.ac.id
- [ ] Navigate ke course dengan forum
- [ ] Check if forum posts are tracked
- [ ] Verify notifications appear

#### AI Assistant (Gemini)
- [ ] Open popup
- [ ] Configure Gemini API key
- [ ] Test AI responses
- [ ] Check API call success
- [ ] Verify error handling when API key invalid

#### Quiz Helper
- [ ] Navigate to quiz page (u-courses/*/exam/*)
- [ ] Check if helper features load
- [ ] Test answer suggestions
- [ ] Verify no interference with normal quiz functionality

#### Kuisioner Helper
- [ ] Navigate to kuisioner page
- [ ] Test auto-fill features
- [ ] Verify form submission works

#### Discussion Enhancement
- [ ] Open forum discussion
- [ ] Test enhanced UI features
- [ ] Check formatting options
- [ ] Verify post submission

#### Presensi Management
- [ ] Navigate to my.unpam.ac.id
- [ ] Test attendance tracking
- [ ] Verify data accuracy
- [ ] Check export functionality

#### Auto-login
- [ ] Test on mentari.unpam.ac.id/login
- [ ] Test on my.unpam.ac.id/login
- [ ] Verify credentials are stored securely
- [ ] Check auto-fill works

### 3. Cross-Browser Compatibility

#### UI Consistency
- [ ] Popup renders correctly in both browsers
- [ ] Icons display properly
- [ ] Fonts and spacing are consistent
- [ ] Colors match across browsers

#### API Compatibility
- [ ] chrome.scripting API works in Firefox
- [ ] chrome.storage API works correctly
- [ ] Content scripts inject properly
- [ ] Web accessible resources load

### 4. Permission Testing
- [ ] Extension requests correct permissions
- [ ] Host permissions work for mentari.unpam.ac.id
- [ ] Host permissions work for generativelanguage.googleapis.com
- [ ] No unnecessary permission requests

### 5. Error Handling

#### Network Errors
- [ ] Test with no internet connection
- [ ] Test with slow connection
- [ ] Verify error messages display
- [ ] Check retry mechanisms

#### API Errors
- [ ] Test with invalid API key
- [ ] Test with expired API key
- [ ] Test with rate limit exceeded
- [ ] Verify graceful degradation

#### Page Load Errors
- [ ] Test on non-matching pages
- [ ] Test with blocked scripts
- [ ] Verify no console errors
- [ ] Check exclude_matches work

### 6. Performance Testing
- [ ] Page load time impact < 200ms
- [ ] Memory usage < 50MB
- [ ] No memory leaks after prolonged use
- [ ] Background scripts don't consume excessive CPU

### 7. Security Testing
- [ ] API keys stored securely
- [ ] No sensitive data logged to console
- [ ] XSS protection in place
- [ ] CSRF tokens handled correctly
- [ ] No mixed content warnings

## Test Data

### Test Accounts
- Create test account di mentari.unpam.ac.id
- Use non-production data only
- Never share real credentials

### Test Scenarios
1. New user installation
2. Existing user upgrade
3. Multiple courses enrolled
4. Empty course list
5. Maximum API usage
6. Minimum API usage

## Bug Reporting Template

```markdown
### Bug Description
[Clear description of the bug]

### Browser
- [ ] Chrome
- [ ] Firefox
- [ ] Edge
- [ ] Brave

### Steps to Reproduce
1. 
2. 
3. 

### Expected Behavior
[What should happen]

### Actual Behavior
[What actually happened]

### Screenshots
[If applicable]

### Console Errors
```
[Paste console errors]
```

### Extension Version
[e.g., v2.0]

### Browser Version
[e.g., Firefox 120.0]
```

## Automated Testing (Future)

### Unit Tests
- Test individual content scripts
- Mock browser APIs
- Validate manifest structure

### Integration Tests
- Test full user flows
- Validate API interactions
- Check state management

### E2E Tests
- Selenium/Playwright tests
- Full browser automation
- Real environment testing

## Regression Testing

After each update:
- [ ] Run full test suite
- [ ] Check all previous bugs are fixed
- [ ] Verify no new issues introduced
- [ ] Update version number

## Release Checklist

Before release:
- [ ] All tests pass
- [ ] No console errors
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
- [ ] Version bumped
- [ ] Build scripts work
- [ ] Both Chrome and Firefox builds tested
- [ ] Screenshots updated
- [ ] README.md accurate

## Tools

### Recommended Testing Tools
- Firefox Developer Tools
- Chrome DevTools
- web-ext (Firefox)
- Extension Reloader (Chrome)
- Postman (API testing)

### Performance Tools
- Chrome Task Manager
- Firefox about:performance
- Lighthouse
- WebPageTest

## CI/CD (Future Enhancement)

```yaml
# Potential GitHub Actions workflow
- Lint code
- Build for both browsers
- Run automated tests
- Create release artifacts
- Deploy to stores
```

## Notes

- Always test in incognito/private mode first
- Clear cache between tests
- Test with and without other extensions
- Keep browser updated
- Report browser-specific bugs separately
