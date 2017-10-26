module.exports = class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log(this.name);
    }

    static create(obj, param2, param3) {
        console.log('what is here?', param2, param3);
        return new Person(obj.name, obj.age);
    }
}
