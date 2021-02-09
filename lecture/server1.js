/*const http = require('http'); //노드가 http 쉽게 만들 수 있게 제공

//서버를 만들자
http.createServer((req,res) => {
    res.write('<h1>Hello Node!</h1>');
    res.write('<P>Hello server</p>');
    res.end('<p>Hello chan</p>');
})

    .listen(8080, () => {
        console.log('8080번 포트에서 서버 대기 중입니다.');
    });*/


//에러처리
const http = require('http');

const server = http.createServer((req,res) => {
    res.write('<h1>Hello Node!</h1>');
    res.write('<P>Hello server</p>');
    res.end('<p>Hello chan</p>');
})

    .listen(8080);
    
server.on('listening',error => {
        console.log('8080번 포트에서 서버 대기 중입니다.');
})

server.on('error',error => {
    console.error(error);
})