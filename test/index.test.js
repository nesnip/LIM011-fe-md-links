const myFunctions = require('../src/index');

const {
  isAbsolute, toAbsolute, isDirectory, isMdFile,
} = myFunctions;

describe('isAbsolute', () => {
  it('Debería de ser una función', () => {
    expect(typeof isAbsolute).toBe('function');
  });
  it('Es una función que determina cuando una ruta es absoluta', () => {
    const input = '/LIM011-fe-md-links/';
    const output = true;
    expect(isAbsolute(input)).toEqual(output);
  });
  it('Es una función que determina cuando una ruta NO es absoluta', () => {
    const input = '../src/index.js';
    const output = false;
    expect(isAbsolute(input)).toEqual(output);
  });
});

describe('toAbsolute', () => {
  it('Debería de ser una función', () => {
    expect(typeof toAbsolute).toBe('function');
  });
  it('Es una función que convierte una ruta realtiva en absoluta', () => {
    const input = './baz';
    const output = '/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/baz';
    expect(toAbsolute(input)).toEqual(output);
  });
});

describe('isDirectory', () => {
  it('Debería de ser una función', () => {
    expect(typeof isDirectory).toBe('function');
  });
  it('Es una función que determina cuando una ruta es un directorio', () => {
    const input = '/home/marines/Escritorio/Laboratoria';
    const output = true;
    expect(isDirectory(input)).toEqual(output);
  });
  it('Es una función que determina cuando una ruta NO es un directorio', () => {
    const input = '/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/src/index.js';
    const output = false;
    expect(isDirectory(input)).toEqual(output);
  });
});

describe('isMdFile', () => {
  it('Debería de ser una función', () => {
    expect(typeof isMdFile).toBe('function');
  });
  it('Es una función que determina si el archivo tiene formato .md', () => {
    const input = 'README.md';
    const output = true;
    expect(isMdFile(input)).toEqual(output);
  });
  it('Es una función que determina si el archivo NO tiene formato .md', () => {
    const input = 'index.js';
    const output = false;
    expect(isMdFile(input)).toEqual(output);
  });
});
