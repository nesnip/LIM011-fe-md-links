/* eslint-disable max-len */
const indexFunctions = require('../src/index');

const {
  isAbsolute, toAbsolute, getLinks, validate,
} = indexFunctions;

const mdLinks = (route, options) => {
  const absRoute = isAbsolute(route) ? route : toAbsolute(route);
  if (options.validate === false) {
    return Promise.resolve(getLinks(absRoute));
  }
  return validate(absRoute);
};

// console.log(mdLinks('/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/src/carpeta/archivo.md', true));
mdLinks('/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/src/carpeta', { validate: true }).then((res) => console.log(res));

module.exports = { mdLinks };
