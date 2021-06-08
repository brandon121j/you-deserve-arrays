const prompt = require('prompt-sync')();
let arr = prompt('Enter an array: ');
array = JSON.parse(arr);

const fir = array[0];
const num = typeof fir == 'number';

console.log(num);