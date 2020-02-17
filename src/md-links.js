const indexFunctions = require('../src/index');
const validate = require('./validate');

const {
  isAbsolute, toAbsolute, getLinks,
} = indexFunctions;

const mdLinks = (route, options) => {
  const absRoute = isAbsolute(route) ? route : toAbsolute(route);
  if (options.validate === false) {
    return Promise.resolve(getLinks(absRoute));
  }
  return validate.validate(absRoute);
};

module.exports = { mdLinks };
