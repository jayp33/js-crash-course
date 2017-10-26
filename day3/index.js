const fs = require('fs');

const files = [1,2,3]
    .map(number => `./files/${number}.txt`)
    .map(filename => fs.readFileSync(filename, 'utf8'))

console.log(files);
