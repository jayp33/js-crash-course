const red = require('ansi-red');
const Person = require('./person');

console.log(red('Hello World'));

const jan = new Person('Jan', 39);

console.log(jan);