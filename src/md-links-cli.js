const mdLinksFunction = require('./md-links');
const statsFunctions = require('./stats');

const { mdLinks } = mdLinksFunction;
const { total, unique, broken } = statsFunctions;

const cli = (path, options) => {
  if (path === undefined) {
    return console.log('Enter a valid path');
  } if (options === '--validate') {
    return mdLinks(path, { validate: true }).then((res) => {
      let validLinks = '';
      res.forEach((el) => {
        validLinks += `${el.file} ${el.href} ${el.message} ${el.status} ${el.text} \n`;
      });
      return validLinks;
    });
  } if (options === '--stats') {
    return mdLinks(path, { validate: true }).then((res) => {
      const statsValue = `Total: ${total(res)}\nUnique: ${unique(res)}`;
      return statsValue;
    });
  } if (options === '--stats --validate' || options === '--validate --stats') {
    return mdLinks(path, { validate: true }).then((res) => {
      const validStats = `Total: ${total(res)}\nUnique: ${unique(res)}\nBroken: ${broken(res)}`;
      return validStats;
    });
  }
  return mdLinks(path, { validate: false }).then((res) => {
    let links = '';
    res.forEach((el) => {
      links += `${el.file} ${el.href} ${el.text}\n`;
    });
    return links;
  });
};

module.exports = { cli };
