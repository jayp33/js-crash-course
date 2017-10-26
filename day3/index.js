const fs = require('fs');

const text1 = fs.readFile('./files/1.txt', 'utf8');
const text2 = fs.readFile('./files/2.txt', 'utf8');
const text3 = fs.readFile('./files/3.txt', 'utf8');

console.log(text1, text2, text3);
