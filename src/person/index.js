class Person {
    constructor(name, age, gender, interests) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this. interests = interests;
    }
    bio() {
        return `My name is ${this.name}. I'm ${this.age} years old. I like ${this.interests}.`
    }
    greeting () {
        return `Hello! I'm ${this.name}`;
    }
}

module.exports = Person;