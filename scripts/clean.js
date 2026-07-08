const fs = require('fs');
const path = require('path');

console.log('Cleaning build directories...');

const buildDir = path.join(__dirname, '../build');

function deleteDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach(file => {
      const curPath = path.join(dirPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteDir(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dirPath);
  }
}

if (fs.existsSync(buildDir)) {
  deleteDir(buildDir);
  console.log('Build directory cleaned successfully!');
} else {
  console.log('Build directory does not exist. Nothing to clean.');
}
