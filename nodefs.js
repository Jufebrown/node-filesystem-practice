#!/usr/bin/env node

const {readFileSync} = require('fs')

const fileArg = process.argv[2]

if (fileArg) {
  try {
    const data = readFileSync(fileArg, "")
    process.stdout.write(data)
  } catch(e) {
    // statements
    console.log('error:', e.stack);
  }
} else {
  return;
}

console.log('This is the synchronous version.')
