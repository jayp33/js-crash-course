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

const readFile = async (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, contents) => {
            if (err) return reject(err);

            resolve(contents);
        });
    });
}

// readFile(files[0])
//     .then(console.log)
//     .then(() => readFile(files[1]))
//     .then(console.log)
//     .then(() => readFile(files[2]))
//     .then(console.log)
//     .then(() => console.log('finished'))

const contents1 = await readFile(files[0])
console.log(contents1)
const contents2 = await readFile(files[1])
console.log(contents2)
const contents3 = await readFile(files[2])
console.log(contents3)
