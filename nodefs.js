#!/usr/bin/env node

/***************************
Blocking example
***************************/

// const {readFileSync} = require('fs')

// const fileArg = process.argv[2]

// if (fileArg) {
//   try {
//     const data = readFileSync(fileArg, "UTF8")//defaults UTF8 encoding (so we don't need UTF8 here)
//     process.stdout.write(data)
//   } catch(e) {
//     // statements
//     console.log('error:', e.stack);
//   }
// } else {
//   process.exit()
// }

// console.log('This is the synchronous version.')


/****************************
Non-blocking example
****************************/

const {readFile} = require('fs')

const fileArg = process.argv[2]

if (fileArg) {
  readFile(fileArg, (err, data) => {
    if (err) return console.error(err)
    process.stdout.write(data)
  })
} else {
  process.exit()
}

console.log('This is the async version.')
