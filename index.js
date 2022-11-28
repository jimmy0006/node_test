const express = require("express")
const app = express();
const morgan=require("morgan")
const connect= require('./schemas');
const usersRouter = require('./router/users');
const indexRouter = require('./router')
var bodyParser = require('body-parser')

app.set('port',process.env.PORT||3000);

//morgan 설정
app.use(morgan('dev'));//로그 보기

app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}))

connect();
app.use('/',indexRouter);
app.use('/users',usersRouter);

app.use('*',(req,res,next)=>{
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    res.send("라우터가 없습니다.")
})

module.exports = app;