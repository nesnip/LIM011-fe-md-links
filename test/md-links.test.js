const path = require('path');
const mdLinksFunction = require('../src/md-links');

const { mdLinks } = mdLinksFunction;

describe('mdLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('Es una función que retorna los links sin validar', (done) => {
    const input = path.resolve(__dirname, '../src/carpeta');
    const options = { validate: false };
    const output = [{
      href: 'https://nodejs.org/en/',
      text: 'Node.js',
      file: path.resolve(__dirname, '../src/carpeta/archivo.md'),
    },
    {
      href: 'https://httpbin.org/status/',
      text: 'error',
      file: path.resolve(__dirname, '../src/carpeta/archivo.md'),
    },
    {
      href:
       'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
      text: 'Asincronía',
      file: path.resolve(__dirname, '../src/carpeta/archivo.md'),
    }];
    mdLinks(input, options).then((res) => {
      expect(res).toEqual(output);
      done();
    });
  });
  it('Es una función que retorna el estado de los links cuando validate es true', (done) => {
    const input = './src/carpeta';
    const options = { validate: true };
    const output = [{
      href: 'https://nodejs.org/en/',
      text: 'Node.js',
      file: path.resolve(__dirname, '../src/carpeta/archivo.md'),
      status: 200,
      message: 'OK',
    },
    {
      href: 'https://httpbin.org/status/',
      text: 'error',
      file: path.resolve(__dirname, '../src/carpeta/archivo.md'),
      status: 404,
      message: 'fail',
    },
    {
      href:
     'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
      text: 'Asincronía',
      file: path.resolve(__dirname, '../src/carpeta/archivo.md'),
      status: 'this file does not have status',
      message: 'fail',
    }];
    mdLinks(input, options).then((res) => {
      expect(res).toEqual(output);
      done();
    });
  });
});
