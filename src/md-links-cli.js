const mdLinks = require('./md-links');
const stats = require('./stats');

const cli = (path, options) => {
  if (options === '--validate') {
    return mdLinks(path, { validate: true }).then((res) => {
      let validar = '';
      res.forEach((element) => {
        validar += `${element.file} ${element.href} ${element.text} ${element.status} ${element.message} \n`;
      });
      return validar;
    });
  }
};
