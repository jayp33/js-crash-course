const fs = require('fs');

const filenames = [1,2,3].map(number => `./files/${number}.txt`);

console.log(filenames);

// const text1 = fs.readFile('./files/1.txt', 'utf8');
// const text2 = fs.readFile('./files/2.txt', 'utf8');
// const text3 = fs.readFile('./files/3.txt', 'utf8');

// console.log(text1, text2, text3);
