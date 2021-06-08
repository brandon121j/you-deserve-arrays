const prompt = require('prompt-sync')();
let arr = prompt('Enter an array: ');
array = JSON.parse(arr);

if (array.length >= 10) {
    console.log('true')
}

else {
    console.log('false')
}