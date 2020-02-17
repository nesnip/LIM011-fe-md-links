const path = require('path');
const myFunctions = require('../src/index');

const {
  isAbsolute, toAbsolute, isFile, isMdFile, getAllPaths,
  recursion, readFile, mdToString, getLinks,
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
  it('Es una función que convierte una ruta relativa en absoluta', () => {
    const input = '../baz';
    const output = path.resolve(input);
    expect(toAbsolute(input)).toEqual(output);
  });
});

describe('isFile', () => {
  it('Debería ser una función', () => {
    expect(typeof isFile).toBe('function');
  });
  it('Es una función que determina cuando una ruta es un directorio', () => {
    const input = __dirname;
    const output = false;
    expect(isFile(input)).toEqual(output);
  });
  it('Es una función que determina cuando una ruta NO es un directorio', () => {
    const input = __filename;
    const output = true;
    expect(isFile(input)).toEqual(output);
  });
});

describe('isMdFile', () => {
  it('Debería ser una función', () => {
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

describe('getAllPaths', () => {
  it('Debería ser una función', () => {
    expect(typeof getAllPaths).toBe('function');
  });
  it('Es una función que obtiene las rutas absolutas de cada archivo de un directorio', () => {
    const input = path.resolve(__dirname, '../src/carpeta');
    const output = [path.resolve(__dirname, '../src/carpeta/archivo.md')];
    expect(getAllPaths(input)).toEqual(output);
  });
});

describe('recursion', () => {
  it('Debería ser una función', () => {
    expect(typeof recursion).toBe('function');
  });
  it('Es una función que retorna las rutas absolutas de archivos Markdown', () => {
    const input = path.resolve(__dirname, '../src');
    const output = ['/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/src/carpeta/archivo.md', '/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/src/example.md'];
    expect(recursion(input)).toEqual(output);
  });
});

describe('readFile', () => {
  it('Debería ser una función', () => {
    expect(typeof readFile).toBe('function');
  });
  it('Es una función que retorna la información que hay dentro de un archivo md', () => {
    const input = path.resolve(__dirname, '../src/carpeta/archivo.md');
    const output = 'Tópicos: [Node.js](https://nodejs.org/en/),\n[error](https://httpbin.org/status/),\n[Asincronía](https://carlosazaustre.com/manejando-la-asincronia-en-javascript/)';
    expect(readFile(input)).toEqual(output);
  });
});

describe('mdToString', () => {
  it('Debería ser una función', () => {
    expect(typeof mdToString).toBe('function');
  });
  it('Es una función', () => {
    const input = path.resolve(__dirname, '../src/carpeta/archivo.md');
    const output = ['Tópicos: [Node.js](https://nodejs.org/en/),\n[error](https://httpbin.org/status/),\n[Asincronía](https://carlosazaustre.com/manejando-la-asincronia-en-javascript/)'];
    expect(mdToString(input)).toEqual(output);
  });
});

describe('getLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof getLinks).toBe('function');
  });
  it('Es una función que retorna un objeto con propiedad href, text, file por cada link', () => {
    const input = path.resolve(__dirname, '../src');
    const output = [{
      href: 'https://nodejs.org/en/',
      text: 'Node.js',
      file:
     '/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/src/carpeta/archivo.md',
    },
    {
      href: 'https://httpbin.org/status/',
      text: 'error',
      file:
     '/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/src/carpeta/archivo.md',
    },
    {
      href:
     'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
      text: 'Asincronía',
      file:
     '/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/src/carpeta/archivo.md',
    },
    {
      href: 'https://github.com/markdown-it/markdown-it',
      text: 'markdown-it',
      file:
     '/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/src/example.md',
    },
    {
      href:
     'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
      text: 'expresiones regulares (<code>RegExp</code>)',
      file:
     '/home/marines/Escritorio/Laboratoria/MD LINKS/LIM011-fe-md-links/src/example.md',
    }];
    expect(getLinks(input)).toEqual(output);
  });
});
