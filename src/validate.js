const fetch = require('node-fetch');
const indexFunctions = require('./index.js');

const { getLinks } = indexFunctions;

const validate = (ruta) => {
  const arr = [];
  getLinks(ruta).forEach((el) => {
    const obj = { ...el };
    arr.push(fetch(el.href)
      .then((res) => {
        if (res.status >= 200 && res.status <= 399) {
          obj.status = res.status;
          obj.message = res.statusText;
          return obj;
        }
        obj.status = res.status;
        obj.message = 'fail';
        return obj;
      })
      .catch(() => {
        obj.status = 'this file does not have status';
        obj.message = 'fail';
        return obj;
      }));
  });
  return Promise.all(arr);
};

module.exports = { validate };
