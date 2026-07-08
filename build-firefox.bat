@echo off
REM Script untuk membuat build Firefox di Windows

echo Building Mentari Mod for Firefox...

REM Buat folder build jika belum ada
if not exist "build\firefox" mkdir build\firefox

REM Copy semua file ke folder build
xcopy /E /I /Y src build\firefox\src
copy /Y LICENSE build\firefox\LICENSE
copy /Y README.md build\firefox\README.md

REM Copy manifest khusus Firefox dan rename
copy /Y manifest.firefox.json build\firefox\manifest.json

echo.
echo Build complete! Folder: build\firefox
echo.
echo Cara install di Firefox:
echo 1. Buka Firefox
echo 2. Ketik about:debugging di address bar
echo 3. Klik "This Firefox"
echo 4. Klik "Load Temporary Add-on"
echo 5. Pilih file manifest.json di folder build\firefox
echo.
echo Untuk membuat file .xpi (signed extension), gunakan web-ext:
echo npm install -g web-ext
echo cd build\firefox
echo web-ext build
pause
