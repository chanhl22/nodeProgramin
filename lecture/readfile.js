// const fs = require('fs'); //fs라는 모듈이 있다.

// fs.readFile('./readme.txt', (err, data) => {
//     f
// }) //콜백형식을 가지고 있다. 노드에서는 항상 콜백함수가 err, data형식


// const fs = require('fs');

// fs.readFile('./readme.txt', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data);
//     console.log(data.toString());
// });

const fs = require('fs').promises;

fs.readFile('./readme.txt')
    .then((data) => {
        console.log(data);
        console.log(data.toString());
    })
    .catch((err) => {
        throw err;
    });