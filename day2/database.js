const fs = require('fs');

exports.save = (people) => {
    fs.writeFileSync('./data.json', JSON.stringify(people))
    console.log('Saved');
}

exports.load = (file) => {
    const persons = fs.readFileSync(file, 'utf8');
    console.log(persons);
}