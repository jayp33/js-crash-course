const red = require('ansi-red');

console.log(red('Hello World'));

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const jan = new Person('Jan', 39);

console.log(jan);