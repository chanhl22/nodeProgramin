const { odd, even } = require('./var');
const checknumber = require('./func');

function checkStrindOddorEven(str) {
    if (str.length % 2) {
        return odd;
    } else {
        return even;
    }
}

console.log(checknumber(10));
console.log(checkStrindOddorEven('hello'));