const fs = require('fs');
const path = require('path');

console.log('Validating manifest files...\n');

let hasErrors = false;

// Load both manifests
const chromeManifest = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../manifest.json'), 'utf8')
);
const firefoxManifest = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../manifest.firefox.json'), 'utf8')
);

// Required fields
const requiredFields = [
  'manifest_version',
  'name',
  'version',
  'description',
  'permissions',
  'host_permissions',
  'action',
  'content_scripts',
  'icons'
];

// Check Chrome manifest
console.log('Checking Chrome manifest (manifest.json)...');
requiredFields.forEach(field => {
  if (!chromeManifest[field]) {
    console.error(`  ERROR: Missing required field "${field}"`);
    hasErrors = true;
  } else {
    console.log(`  OK: ${field}`);
  }
});

// Check Firefox manifest
console.log('\nChecking Firefox manifest (manifest.firefox.json)...');
requiredFields.forEach(field => {
  if (!firefoxManifest[field]) {
    console.error(`  ERROR: Missing required field "${field}"`);
    hasErrors = true;
  } else {
    console.log(`  OK: ${field}`);
  }
});

// Check Firefox-specific fields
if (!firefoxManifest.browser_specific_settings) {
  console.error('  ERROR: Missing "browser_specific_settings" in Firefox manifest');
  hasErrors = true;
} else {
  console.log('  OK: browser_specific_settings');
}

// Check version consistency
console.log('\nChecking version consistency...');
if (chromeManifest.version !== firefoxManifest.version) {
  console.error(`  ERROR: Version mismatch!`);
  console.error(`    Chrome: ${chromeManifest.version}`);
  console.error(`    Firefox: ${firefoxManifest.version}`);
  hasErrors = true;
} else {
  console.log(`  OK: Both versions are ${chromeManifest.version}`);
}

// Check name consistency
console.log('\nChecking name consistency...');
if (chromeManifest.name !== firefoxManifest.name) {
  console.warn(`  WARNING: Name mismatch`);
  console.warn(`    Chrome: ${chromeManifest.name}`);
  console.warn(`    Firefox: ${firefoxManifest.name}`);
} else {
  console.log(`  OK: Both names are "${chromeManifest.name}"`);
}

// Check permissions consistency
console.log('\nChecking permissions consistency...');
const chromePerms = JSON.stringify(chromeManifest.permissions.sort());
const firefoxPerms = JSON.stringify(firefoxManifest.permissions.sort());
if (chromePerms !== firefoxPerms) {
  console.error('  ERROR: Permissions mismatch');
  console.error('    Chrome:', chromeManifest.permissions);
  console.error('    Firefox:', firefoxManifest.permissions);
  hasErrors = true;
} else {
  console.log('  OK: Permissions match');
}

// Check host_permissions consistency
console.log('\nChecking host_permissions consistency...');
const chromeHosts = JSON.stringify(chromeManifest.host_permissions.sort());
const firefoxHosts = JSON.stringify(firefoxManifest.host_permissions.sort());
if (chromeHosts !== firefoxHosts) {
  console.error('  ERROR: Host permissions mismatch');
  console.error('    Chrome:', chromeManifest.host_permissions);
  console.error('    Firefox:', firefoxManifest.host_permissions);
  hasErrors = true;
} else {
  console.log('  OK: Host permissions match');
}

// Check content_scripts consistency
console.log('\nChecking content_scripts consistency...');
if (chromeManifest.content_scripts.length !== firefoxManifest.content_scripts.length) {
  console.error('  ERROR: Different number of content scripts');
  console.error(`    Chrome: ${chromeManifest.content_scripts.length}`);
  console.error(`    Firefox: ${firefoxManifest.content_scripts.length}`);
  hasErrors = true;
} else {
  console.log(`  OK: Both have ${chromeManifest.content_scripts.length} content scripts`);
}

// Summary
console.log('\n' + '='.repeat(50));
if (hasErrors) {
  console.error('VALIDATION FAILED: Errors found in manifest files');
  process.exit(1);
} else {
  console.log('VALIDATION PASSED: All manifest files are valid');
  process.exit(0);
}
