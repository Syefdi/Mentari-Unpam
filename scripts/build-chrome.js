const fs = require('fs');
const path = require('path');

console.log('Building Mentari Mod for Chrome/Chromium...');

// Create build directory
const buildDir = path.join(__dirname, '../build/chrome');
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

// Copy files
const filesToCopy = [
  'manifest.json',
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

console.log('\nChrome build complete!');
console.log('Location: build/chrome');
console.log('\nTo install:');
console.log('1. Open Chrome/Edge/Brave');
console.log('2. Go to chrome://extensions/');
console.log('3. Enable Developer mode');
console.log('4. Click "Load unpacked"');
console.log('5. Select the build/chrome folder');
