const fs = require('fs');

const text1 = fs.readFileSync('./files/1.txt', 'utf8');

console.log(text1);
