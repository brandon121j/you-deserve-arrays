const prompt = require('prompt-sync')();
let arr = prompt('Enter an array: ');
let last = arr[arr.length - 1];
array = JSON.parse(arr);

if (arr.length >= 4) {
    console.log(array[3]);
}

else {
    console.log(array[array.length - 1]);
}