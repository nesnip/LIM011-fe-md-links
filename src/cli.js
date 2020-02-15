#!/usr/bin/env node

// Grab provided args.
const [,, ...args] = process.argv;
console.log(process.argv);

// Print hello world provided args.
console.log(`Hello world ${args}`);
