const fs = require('fs');
const path = require('path');

console.log('Building Mentari Mod for Firefox...');

// Create build directory
const buildDir = path.join(__dirname, '../build/firefox');
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

// Copy files
const filesToCopy = [
  'LICENSE',
  'README.md'
];

const dirsToCopy = ['src'];

// Copy files
filesToCopy.forEach(file => {
  const src = path.join(__dirname, '..', file);
  const dest = path.join(buildDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file}`);
  }
});

// Copy Firefox-specific manifest
const firefoxManifest = path.join(__dirname, '..', 'manifest.firefox.json');
const manifestDest = path.join(buildDir, 'manifest.json');
fs.copyFileSync(firefoxManifest, manifestDest);
console.log('Copied manifest.firefox.json as manifest.json');

// Copy directories recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

dirsToCopy.forEach(dir => {
  const src = path.join(__dirname, '..', dir);
  const dest = path.join(buildDir, dir);
  copyDir(src, dest);
  console.log(`Copied ${dir}/ directory`);
});

console.log('\nFirefox build complete!');
console.log('Location: build/firefox');
console.log('\nTo install:');
console.log('1. Open Firefox');
console.log('2. Go to about:debugging');
console.log('3. Click "This Firefox"');
console.log('4. Click "Load Temporary Add-on"');
console.log('5. Select manifest.json from build/firefox folder');
console.log('\nTo test: npm run test:firefox');
console.log('To run dev mode: npm run dev:firefox');
