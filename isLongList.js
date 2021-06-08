const prompt = require('prompt-sync')();
let arr = prompt('Enter an array: ');

if (arr >= 10) {
    console.log('true')
}

if (arr < 10) {
    console.log('false')
}