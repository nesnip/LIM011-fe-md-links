/* eslint-disable max-len */
const path = require('path');
const fs = require('fs');
const marked = require('marked');
const fetch = require('node-fetch');

// const currentPath = path.resolve();
// const directoryPath = path.join(__dirname);

const isAbsolute = (str) => path.isAbsolute(str);

const toAbsolute = (relative) => path.resolve(__dirname, relative);

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

const mdToString = (ruta) => {
  const arr = [];
  recursion(ruta).forEach((el) => arr.push(readFile(el)));
  return arr;
};

const getLinks = (ruta) => {
  const renderer = new marked.Renderer();
  const links = [];
  recursion(ruta).forEach((file) => {
    renderer.link = (href, title, text) => {
      links.push({ href, text, file });
    };
    marked(readFile(file), { renderer });
  });
  return links;
};

const validate = (ruta) => {
  const arr = [];
  getLinks(ruta).forEach((el) => {
    const obj = { ...el };
    arr.push(fetch(el.href)
      .then((res) => {
        if (res.status >= 200 && res.status <= 399) {
          obj.status = res.status;
          obj.ok = res.statusText;
          return obj;
        }
        obj.status = res.status;
        obj.message = 'fail';
        return obj;
      })
      .catch(() => {
        obj.status = "this file doesn't have status";
        obj.message = 'fail';
        return obj;
      }));
  });
  return Promise.all(arr);
};
// Promise.all(validate('/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/src/carpeta/archivo.md')).then((res) => console.log(res));
// validate('/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/src/carpeta/archivo.md').then((res) => console.log(res));

module.exports = {
  isAbsolute,
  toAbsolute,
  isFile,
  isMdFile,
  getAllPaths,
  recursion,
  readFile,
  mdToString,
  getLinks,
  validate,
};
