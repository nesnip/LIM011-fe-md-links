const myFunctions = require('../src/index');

const {
  isAbsolute, toAbsolute, isFile, isMdFile, getAllPaths, recursion,
} = myFunctions;

describe('isAbsolute', () => {
  it('Debería ser una función', () => {
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
  it('Debería ser una función', () => {
    expect(typeof toAbsolute).toBe('function');
  });
  it('Es una función que convierte una ruta realtiva en absoluta', () => {
    const input = './baz';
    const output = '/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/baz';
    expect(toAbsolute(input)).toEqual(output);
  });
});

describe('isFile', () => {
  it('Debería ser una función', () => {
    expect(typeof isFile).toBe('function');
  });
  it('Es una función que determina cuando una ruta es un directorio', () => {
    const input = '/home/marines/Escritorio/Laboratoria';
    const output = false;
    expect(isFile(input)).toEqual(output);
  });
  it('Es una función que determina cuando una ruta NO es un directorio', () => {
    const input = '/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/src/index.js';
    const output = true;
    expect(isFile(input)).toEqual(output);
  });
});

describe('isMdFile', () => {
  it('Debería ser una función', () => {
    expect(typeof isMdFile).toBe('function');
  });
  it('Es una función que determina si el archivo tiene formato .md', () => {
    const input = '/home/README.md';
    const output = true;
    expect(isMdFile(input)).toEqual(output);
  });
  it('Es una función que determina si el archivo NO tiene formato .md', () => {
    const input = '/home/index.js';
    const output = false;
    expect(isMdFile(input)).toEqual(output);
  });
});

describe('getAllPaths', () => {
  it('Debería ser una función', () => {
    expect(typeof getAllPaths).toBe('function');
  });
  it('Es una función que obtiene las rutas absolutas de cada archivo de un directorio', () => {
    const input = '/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/src';
    const output = ['/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/src/example.md', '/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/src/index.js'];
    expect(getAllPaths(input)).toEqual(output);
  });
});

describe('recursion', () => {
  it('Debería ser una función', () => {
    expect(typeof recursion).toBe('function');
  });
  it('Es una función que retorna las rutas absolutas de archivos Markdown', () => {
    const input = '/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/src';
    const output = ['/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/src/example.md'];
    expect(recursion(input)).toEqual(output);
  });
});
