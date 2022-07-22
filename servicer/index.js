const mysql = require('mysql');
const express = require("express");
const { query } = require('express');
const app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'w888888',
  database : 'node'
});
connection.connect();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
// post方式监听/login请求
app.post("/login", express.json(), (req, res) => {
  const {account,passWord} = req.body;
	let  sql = "SELECT * FROM user WHERE account='"+ account +"'";
    connection.query(sql,function (err, result) {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    }
    console.log("JSON.stringify(result)",JSON.stringify(result))
    if(JSON.stringify(result) != '[]' ){
      let user = result[0];
      if(passWord == user.passWord){
        let obj = {
          code:200,
          message:'登录成功',
          data:{
            id:user.id,
            nickName:user.nickName,
            phone:user.phone,
            avatar:user.avatar
          }
        }
        res.send(obj)
      }else{
        res.send({code:201,message:'密码错误'})
      }
    }else{
      res.send({code:202,message:'用户名不存在'})
    }
})
// connection.end();
})
// 博客发布  /publish
app.post("/publish", express.json(), (req, res) => {
  const timeStamp = Date.now();
  const {title,type,content,author,avatar,coverImg,userId} = req.body;
  let addSql = "INSERT INTO article(title,type,content,author,avatar,timeStamp,coverImg,userId) VALUES(?,?,?,?,?,?,?,?);";
  let addSqlParams = [title,type,content,author,avatar,timeStamp,coverImg,userId];
  // console.log(addSqlParams)
    connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         res.send({code:201,message:'发布失败'}) 
         return;
        }              
       console.log('INSERT ID:',result);  
       res.send({code:200,message:'发布成功'})      
});
})
// 查询博文  /getBlog
app.post("/getBlog",express.json(),(req, res) => {
  const {bid} = req.body;
  console.log(req.query)
  let  sql = bid ? `SELECT * FROM article WHERE bid=${bid};` : "SELECT * FROM article"
  connection.query(sql,function (err, result) {
  if(err){
    console.log('[SELECT ERROR] - ',err.message);
    res.send({code:201,message:'查询失败'}) 
    return;
  }
  res.send({code:200,message:'查询成功',data:result})   
});
})
// 查询用户  /getUser
app.post("/getUser",express.json(),(req, res) => {
  const {userId} = req.body;
  console.log(req.query)
  let  sql = `SELECT * FROM user WHERE id=${userId};`
  connection.query(sql,function (err, result) {
  if(err){
    console.log('[SELECT ERROR] - ',err.message);
    res.send({code:201,message:'查询失败'}) 
    return;
  }
  let user = result[0];
  Reflect.deleteProperty(user, 'passWord');
  Reflect.deleteProperty(user, 'account')
  res.send({code:200,message:'查询成功',data:user})   
});
})
 





// 监听3300端口
app.listen(3300, () => {
    console.log('服务器运行在3300');
})




