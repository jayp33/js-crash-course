const red = require('ansi-red');
const Person = require('./person');

console.log(red('Hello World'));

const jan = new Person('Jan', 39);
const gandalf = new Person('Gandalf', 99);

const persons = [ jan, gandalf ];

console.log(persons);