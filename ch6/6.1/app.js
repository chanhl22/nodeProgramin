const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer');

const app = express();

app.set('port',process.env.PORT || 3000);

app.use(morgan('dev'));
app.use('요청경로', express.static(path.join(__dirname, '실제경로')));
app.use('/',express.static(path.join(__dirname, 'public')));
//app.use(cookieParser());
//app.use(cookieParser('chanhleepw'));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session());
app.use(multer().array());
app.use(sessoin({
    resave: true,
    saveUinitialize: true,
    //secret: 'chanhleepw',
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
    },
    //name: connect.sid,
}));


app.use((req,res,next) => {
    console.log("모든 요청에 실행하고 싶어요");
    next();
// },(req,res)=> {
//     throw new Error('에러가 났어요');
    // try{
    //     console.log(에러야);
    // }
    // catch(error){
    //     next(error);
    // }
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
    req.cookies //{ mycookie: 'test' }
    req.signedCookies;
    // 'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    res.cookie('name', encodeURIComponent(name), {
        expires: new Date(),
        httpOnly: true,
        path: '/',
    })
    res.clearCookie('name', encodeURIComponent(name), {
        httpOnly: true,
        path: '/',
    })
    res.sendFile(path.join(__dirname,'./index.html'));
    // res.send('hello express');
    // res.json({hello : 'zero'});
})

app. post('/', (req, res) => {
    res.send('hello express');
    //console.log('에러야');
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

// app. use((req, res, next) => {
//     res.status(404).send('404지롱');
// })

app.use((err,req,res,next) => {
    console.error(err);
    res.send('에러났지롱. 근데 안알려주지롱');
})

app.listen(app.get('port'), () => {
    console.log('익스프레스 서버 실행');
});