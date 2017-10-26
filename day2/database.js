const fs = require('fs');

exports.save = (people, cb) => {
    setTimeout(() => {
        fs.writeFile('./data.json', JSON.stringify(people), cb)
        console.log('Saved');
    }, 5000);
}

exports.load = (file) => {
    return JSON.parse(fs.readFile(file, 'utf8'));
}