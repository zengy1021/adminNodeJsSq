

//  vue 项目的路由文件  


var express = require("express");

var router = express.Router();

var {conn} = require("./db");

router.get('/',(req,res)=>{
    res.json({
        msg:"vue 项目路由",
        code:'success'
    })
})

router.get("/index",(req,res)=>{
    console.log(req.query.title);
    res.send("这是 vue 后端接口地址  " + req.query.title); 
})

router.get("/msg",(req,res)=>{
    res.send("vue so easy");
});


router.post("/register",(req,res)=>{
    var body  = req.body;
    console.log(body);
    console.log(req.query);
    res.json({
        msg:"注册成功",
        code:'10001'
    })
});

router.get("/movie",(req,res)=>{
    conn((err,db)=>{
        db.collection("movie").find({},{year:1,title:1,id:1,genres:1,_id:0})
        .toArray((err,result)=>{
            if(err) throw err;
            res.json(result);
            db.close();
        })
    })
})

module.exports = router;

