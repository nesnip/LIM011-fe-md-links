const isAbsolute = require('../src/index');

describe('isAbsolute', () => {
  it('Debería ser una función', () => {
    expect(typeof isAbsolute).toBe('function');
  });
  it('Es una función que determina cuando una ruta es absoluta', () => {
    const input = '';
    const output = true;
    expect(isAbsolute(input)).toEqual(output);
  });
  it('Es una función que determina cuando una ruta no es absoluta', () => {
    const input = '../src/index.js';
    const output = false;
    expect(isAbsolute(input)).toEqual(output);
  });
});
