const path = require('path');
const mdCli = require('../src/md-links-cli.js');

const { cli } = mdCli;

describe('cli', () => {
  it('Debería ser una función', () => {
    expect(typeof cli).toBe('function');
  });
  it('Es una función que retorna la validación de links', (done) => {
    const input = './src/carpeta/archivo.md';
    const options = '--validate';
    const output = `${path.resolve(__dirname, '../src/carpeta/archivo.md')} https://nodejs.org/en/ OK 200 Node.js 
${path.resolve(__dirname, '../src/carpeta/archivo.md')} https://httpbin.org/status/ fail 404 error 
${path.resolve(__dirname, '../src/carpeta/archivo.md')} https://carlosazaustre.com/manejando-la-asincronia-en-javascript/ fail this file does not have status Asincronía 
`;
    cli(input, options).then((res) => {
      expect(res).toEqual(output);
      done();
    });
  });
  it('Es una función que retorna las estadísticas de los links', (done) => {
    const input = './src/carpeta/archivo.md';
    const options = '--stats';
    const output = 'Total: 3\nUnique: 3';
    cli(input, options).then((res) => {
      expect(res).toEqual(output);
      done();
    });
  });
  it('Es una función que retorna las estadísticas y validación de los links', (done) => {
    const input = './src/carpeta/archivo.md';
    const options = '--stats --validate';
    const output = 'Total: 3\nUnique: 3\nBroken: 2';
    cli(input, options).then((res) => {
      expect(res).toEqual(output);
      done();
    });
  });
  it('Es una función que retorna links sin validar', (done) => {
    const input = './src/carpeta/archivo.md';
    const options = '';
    const output = `${path.resolve(__dirname, '../src/carpeta/archivo.md')} https://nodejs.org/en/ Node.js
${path.resolve(__dirname, '../src/carpeta/archivo.md')} https://httpbin.org/status/ error
${path.resolve(__dirname, '../src/carpeta/archivo.md')} https://carlosazaustre.com/manejando-la-asincronia-en-javascript/ Asincronía
`;
    cli(input, options).then((res) => {
      expect(res).toEqual(output);
      done();
    });
  });
});
