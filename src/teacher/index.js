const Person = require('../person');

class Teacher extends Person{
    constructor(name, age, gender, interests, subject) {
        super(name, age, gender, interests);
        this.subject = subject;
    }
}

module.exports = Teacher;