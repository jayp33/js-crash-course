const fs = require('fs');

exports.save = (people, cb) => {
    fs.writeFile('./data.json', JSON.stringify(people), cb)
    console.log('Saved');
}

exports.load = (file) => {
    return JSON.parse(fs.readFile(file, 'utf8'));
}