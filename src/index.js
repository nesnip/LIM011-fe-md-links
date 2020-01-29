const path = require('path');
const fs = require('fs');

const currentPath = path.resolve();

const isAbsolute = (str) => path.isAbsolute(str);

const toAbsolute = (relative) => path.resolve(relative);

const isDirectory = (str) => fs.statSync(str).isDirectory();

const isMdFile = (str) => path.extname(str) === '.md';

const allPaths = (str) => fs.readdir(str, (err, files) => {
  if (err) {
    console.log(`Unable to scan directory: ${err}`);
  }

  files.forEach((file) => (fs.statSync(file).isFile());
});

console.log(currentPath);
console.log(isDirectory(currentPath));
console.log(allPaths(currentPath));

console.log(fs.readdirSync('/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links'));

module.exports = {
  isAbsolute,
  toAbsolute,
  isDirectory,
  isMdFile,
};
