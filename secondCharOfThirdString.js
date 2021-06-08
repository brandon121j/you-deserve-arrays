const prompt = require('prompt-sync')();
let arr = prompt('Enter an array: ');

const third = arr[3];
const second = third[2];
console.log(second);