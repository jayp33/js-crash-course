const fs = require('fs');

const files = [1,2,3]
    .map(number => `./files/${number}.txt`)
    // .map(filename => fs.readFileSync(filename, 'utf8'))

// console.log(files);

// fs.readFile('./files/1.txt', 'utf8', (err, contents) => {
//     console.log(contents)
//     fs.readFile('./files/2.txt', 'utf8', (err, contents) => {
//         console.log(contents)
//         fs.readFile('./files/3.txt', 'utf8', (err, contents) => console.log(contents))
//     })
// })

const readFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, contents) => {
            if (err) return reject(err);

            resolve(contents);
        });
    });
}

readFile(files[0])
    .then(() => readFile(files[1]))
    .then(console.log)
    // .then(() => readFile(file3))
    .then(() => console.log('finished'))
