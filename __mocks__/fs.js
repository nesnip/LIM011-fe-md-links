const nodeFetch = jest.requireActual('node-fetch');
const fetchMock = require('fetch-mock').sandbox();

Object.assign(fetchMock.config, {
  fetch: nodeFetch,
});

fetchMock
  .mock('https://nodejs.org/en/', 200)
  .mock('https://httpbin.org/status/400', 404)
  .mock('https://carlosazaustre.com/manejando-la-asincronia-en-javascript/', 400);
