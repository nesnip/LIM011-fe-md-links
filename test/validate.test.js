const path = require('path');
const validateFunction = require('../src/validate');

const { validate } = validateFunction;

describe('validate', () => {
  it('Debería ser una función', () => {
    expect(typeof validate).toBe('function');
  });
  it('Es una función que valida links', (done) => {
    const input = path.resolve(__dirname, '../src/carpeta/archivo.md');
    const output = [{
      href: 'https://nodejs.org/en/',
      text: 'Node.js',
      file:
       '/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/src/carpeta/archivo.md',
      status: 200,
      message: 'OK',
    },
    {
      href: 'https://httpbin.org/status/',
      text: 'error',
      file:
       '/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/src/carpeta/archivo.md',
      status: 404,
      message: 'fail',
    },
    {
      href:
        'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
      text: 'Asincronía',
      file:
        '/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/src/carpeta/archivo.md',
      status: 'this file does not have status',
      message: 'fail',
    }];
    validate(input).then((res) => {
      expect(res).toEqual(output);
      done();
    });
  });
});
