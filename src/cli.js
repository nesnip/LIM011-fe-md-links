#!/usr/bin/env node

const mdLinksCli = require('./md-links-cli');

const { cli } = mdLinksCli;

const path = process.argv[2];
const options = process.argv[4] === undefined ? process.argv[3] : `${process.argv[3]} ${process.argv[4]}`;

cli(path, options).then((res) => console.log(res)).catch(() => console.error('enter valid path'));
