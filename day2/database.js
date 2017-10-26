const fs = require('fs');

exports.save = (people) => {
    fs.writeFile('./data.json', JSON.stringify(people))
    console.log('Saved');
}

exports.load = (file) => {
    return JSON.parse(fs.readFile(file, 'utf8'));
}