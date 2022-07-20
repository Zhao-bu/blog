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
// get方式监听/login请求
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
 
 
// 监听3300端口
app.listen(3300, () => {
    console.log('服务器运行在3300');
})




