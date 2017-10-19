const red = require('ansi-red');
const Person = require('./person');
const Database = require('./database');

console.log(red('Hello World'));

const jan = new Person('Jan', 39);
const gandalf = new Person('Gandalf', 99);

const persons = [ jan, gandalf ];

Database.save(persons);
const fileContents = Database.load('./data.json');

console.log(fileContents[0].age);