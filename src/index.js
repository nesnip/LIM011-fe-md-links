const path = require('path');
const fs = require('fs');
const marked = require('marked');

const isAbsolute = (str) => path.isAbsolute(str);

const toAbsolute = (relative) => path.resolve(relative);

const isFile = (str) => fs.statSync(str).isFile();

const isMdFile = (str) => path.extname(str) === '.md';

const getAllPaths = (str) => fs.readdirSync(str).map((file) => path.resolve(str, file));

const recursion = (ruta) => {
  let arr = [];
  if (isFile(ruta)) {
    if (isMdFile(ruta)) {
      arr = arr.concat(ruta);
      return arr;
    }
    return [];
  }
  getAllPaths(ruta).forEach((el) => {
    arr = arr.concat(recursion(el));
  });
  return arr;
};

const readFile = (str) => fs.readFileSync(str, 'utf8');
// console.log(readFile('/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/README.md'));

const getLinks = (mdFile) => {
  const renderer = new marked.Renderer();
  const links = [];
  renderer.link = (href, title, text) => {
    links.push(`${href}, ${text}, '/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/README.md'`);
  };
  marked(mdFile, { renderer });
  return links;
};
console.log(getLinks(readFile('/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/README.md')));

module.exports = {
  isAbsolute,
  toAbsolute,
  isFile,
  isMdFile,
  getAllPaths,
  recursion,
};
