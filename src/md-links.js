const indexFunctions = require('../src/index');
const validate = require('./validate');

const {
  isAbsolute, toAbsolute, getLinks,
} = indexFunctions;

const mdLinks = (route, options) => new Promise((resolve) => {
  const absRoute = isAbsolute(route) ? route : toAbsolute(route);
  if (options.validate === false) {
    resolve(getLinks(absRoute));
  }
  resolve(validate.validate(absRoute));
});

module.exports = { mdLinks };
