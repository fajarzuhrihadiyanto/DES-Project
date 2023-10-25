const DES = require('./des.js')
// const utils = require('./utils.js')
const dat = new DES.DES("loremips")

// const plaintext = 'fajar zuhri hadiyanto'
// const ciphertext = dat.encrypt(plaintext)
const replain = dat.decrypt('04 e5 57 f0 23 ec f9 55 43 de 52 86 f2 51 ea a2 ab bc 52 93 cd 78 08 9a')

// console.log(plaintext)
// console.log(ciphertext)
console.log(replain)