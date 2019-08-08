


//  作为 vue  react angular 项目的后端 文件

var express = require('express');

var app = express();   // 得到express 所有的方法集合    包含 Router()  {Router:fn}

var hostname = "0.0.0.0";

var port = 3300;

app.use(express.json());   // 处理 ajax post  $.post 提交的 body 数据  提交post 参数  req.post 
app.use(express.urlencoded({ extended: false }));  // form 表单 method=post 接收 post 参数 

// 处理跨域方法 jsonp  CROS 处理方式 
app.all('*',function(req,res,next){
    // res.header("Access-Control-Allow-Headers","Access-Control-Allow-Headers")
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    next();
});

var vue = require('./vue');

app.use("/vue",vue);

app.get("/",(req,res)=>{
    res.send("这是我的项目的服务器 根 地址")
});

app.all("/all",(req,res)=>{
    res.send("这是任何格式的请求都可以访问");
});

app.get("/message",(req,res)=>{
    res.send("wh1805 daydayup！！！" + req.query.msg);
})


app.listen(port,hostname,()=>{
    console.log(`my app server is running at http://${hostname}:${port}`);
})