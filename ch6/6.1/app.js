const express = require('express');
const path = require('path');

const app = express();

app.set('port',process.env.PORT || 3000);

app.use((req,res,next) => {
    console.log("모든 요청에 실행하고 싶어요");
    next();
// },(req,res)=> {
//     throw new Error('에러가 났어요');
})


// app.use((req,res,next) => {
//     console.log("1모든 요청에 실행하고 싶어요");
//     next();
// },(req,res,next) => {
//     console.log("2모든 요청에 실행하고 싶어요");
//     next();
// },(req,res,next) => {
//     console.log("3모든 요청에 실행하고 싶어요");
//     next();
// })

// app.use('/about',(req,res,next) => {
//     console.log("모든 요청에 실행하고 싶어요");
//     next();
// })

app. get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./index.html'));
})

app. post('/', (req, res) => {
    res.send('hello express');
})

app. get('/about', (req, res) => {
    res.send('hello express');
})

// app. get('/category/:name', (req, res) => {
//     res.send(`hello ${req.params.name}`);
// })

app. get('/category/JAVAscript', (req, res) => {
    res.send('hello JAVAscripirt');
})

// app. get('/category/Node', (req, res) => {
//     res.send('hello Node');
// })

// app. get('/category/React', (req, res) => {
//     res.send('hello React');
// })

// app. get('/category/:name', (req, res) => {
//     res.send(`hello wildcard`);
// })

// app. get('*', (req, res) => {
//     res.send(`hello everybody`);
// })

app. use((req, res, next) => {
    res.status(404).send('404지롱');
})

app.use((err,req,res,next) => {
    console.error(err);
    res.send('에러났지롱. 근데 안알려주지롱');
})

app.listen(app.get('port'), () => {
    console.log('익스프레스 서버 실행');
});