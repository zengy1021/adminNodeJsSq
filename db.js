

var {MongoClient}  = require("mongodb");

var CONN_DB_STR = "mongodb://localhost:27017/wh1805";

function conn(callback){
    MongoClient.connect(CONN_DB_STR,(err,db)=>{
        if(err){
            console.log(err);
            callback(err,null);
        }else{
            callback(null,db);
        }
    })
}

exports.conn = conn;