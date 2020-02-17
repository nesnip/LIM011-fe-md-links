const statsFunction = require('../src/stats.js');

const { total, unique, broken } = statsFunction;

const input = [{
  href: 'https://nodejs.org/en/',
  text: 'Node.js',
  file: '/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/src/carpeta/archivo.md',
  status: 200,
  message: 'OK',
},
{
  href: 'https://httpbin.org/status/',
  text: 'error',
  file: '/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/src/carpeta/archivo.md',
  status: 404,
  message: 'fail',
},
{
  href: 'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
  text: 'Asincronía',
  file: '/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/src/carpeta/archivo.md',
  status: 'this file does not have status',
  message: 'fail',
}];

describe('total', () => {
  it('Debería ser una función', () => {
    expect(typeof total).toBe('function');
  });
  it('Es una función que retorna la cantidad de links', () => {
    const output = 3;
    expect(total(input)).toEqual(output);
  });
});

describe('unique', () => {
  it('Debería ser una función', () => {
    expect(typeof unique).toBe('function');
  });
  it('Es una función que retorna la cantidad de links', () => {
    const output = 3;
    expect(unique(input)).toEqual(output);
  });
});

describe('broken', () => {
  it('Debería ser una función', () => {
    expect(typeof broken).toBe('function');
  });
  it('Es una función que retorna la cantidad de links', () => {
    const output = 2;
    expect(broken(input)).toEqual(output);
  });
});
