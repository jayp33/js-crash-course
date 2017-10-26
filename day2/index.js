const red = require('ansi-red');
const Person = require('./person');
const Database = require('./database');

console.log(red('Hello World'));

const jan = new Person('Jan', 39);
const gandalf = new Person('Gandalf', 99);

jan.sayName();

const persons = [ jan, gandalf ];

Database.save(persons);
const fileContents = Database.load('./data.json');

const firstPerson = new Person(fileContents[0].name, fileContents[0].age);

const secondPerson = Person.create(fileContents[1]);

const convertedPersons = fileContents.map(Person.create);

convertedPersons[0].sayName();
convertedPersons[1].sayName();

//console.log(fileContents[0].age);