Person = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.interests = [];
        this.friends = [];
    }

    sayName() {
        console.log(this.name);
    }

    makeFriendsWith(person) {
        this.friends.push(person);
        person.friends.push(this);
    }
}

person7 = new Person('Someone',33);
person8 = new Person('Sometwo',22);

instructors = [person7, person8];

printName = person => person.sayName();

instructors.forEach(printName);

person7.makeFriendsWith(person8);
