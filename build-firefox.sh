#!/bin/bash

# Script untuk membuat build Firefox

echo "Building Mentari Mod for Firefox..."

# Buat folder build jika belum ada
mkdir -p build/firefox

# Copy semua file ke folder build
cp -r src build/firefox/
cp LICENSE build/firefox/
cp README.md build/firefox/

# Copy manifest khusus Firefox dan rename
cp manifest.firefox.json build/firefox/manifest.json

# Buat file zip untuk Firefox
cd build/firefox
zip -r ../mentari-mod-firefox.zip .
cd ../..

echo "Build complete! File: build/mentari-mod-firefox.zip"
echo ""
echo "Cara install di Firefox:"
echo "1. Buka Firefox"
echo "2. Ketik about:debugging di address bar"
echo "3. Klik 'This Firefox'"
echo "4. Klik 'Load Temporary Add-on'"
echo "5. Pilih file manifest.json di folder build/firefox"
