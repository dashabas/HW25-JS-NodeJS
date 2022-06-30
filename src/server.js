const Student = require('./student');
const Teacher = require('./teacher');

const student = new Student('Miroslava', 20, 'female', 'tennis');
const teacher = new Teacher('Roger', 39, 'male', 'tennis', 'history');

console.log(student);
console.log(teacher);