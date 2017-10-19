console.log('Hello World');

const add = (num1, num2) => num1 + num2;

const mult = (num1, num2) => num1 * num2;

const output_add = add(3, 5);
const output_mult = mult(3, 5);

console.log('Add: ' + output_add);
console.log('Mult: ' + output_mult);

module.exports = { add:add, mult:mult };