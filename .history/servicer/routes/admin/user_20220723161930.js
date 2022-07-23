const express=require('express');
const router = express.Router();   //可使用 express.Router 类创建模块化、可挂载的路由句柄
const mysql = require('mysql')
const db = require('../../configdb');

// 查询用户  http://localhost:3001/admin/user/getUser
router.post("/getUser",express.json(),(req, res) => {
  const {userId} = req.body;
  let conn = mysql.createConnection(db)
  let  sql = `SELECT * FROM user WHERE id=${userId};`
  conn.query(sql,function (err, result) {
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
conn.end();
})

// 用户注册  http://localhost:3001/admin/user/register
router.post("/register",express.json(),(req, res) => {
  const {nickName,avatar,account,passWord} = req.body;
  let conn = mysql.createConnection(db)
  let  sql = "SELECT * FROM user WHERE account='"+ account +"'";
  conn.query(sql,function (err, result) {
  if(err){
    console.log('[SELECT ERROR] - ',err.message);
    res.send({code:201,message:'注册失败'}) 
    return;
  }
  if(JSON.stringify(result) == '[]'){
    let addSql = "INSERT INTO user(nickName,avatar,account,passWord) VALUES(?,?,?,?);";
    let addSqlParams = [nickName,avatar,account,passWord];
      conn.query(addSql,addSqlParams,function (err, result) {
          if(err){
           console.log('[INSERT ERROR] - ',err.message);
           res.send({code:200201,message:'注册失败'}) 
           return;
          }              
         res.send({code:200,message:'注册成功'})      
  });
  conn.end();
  }else{
    res.send({code:202,message:'用户名已存在'})  
    conn.end();
  } 
});

})

// 用户登录
router.post("/login", express.json(), (req, res) => {
	const {account,passWord} = req.body;
	let conn = mysql.createConnection(db)
	let  sql = "SELECT * FROM user WHERE account='"+ account +"'";
    conn.query(sql,function (err, result) {
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
conn.end();
})


// http://localhost:3001/admin/user
router.get('/',function(req,res){
    res.send('/');
	
});
 
module.exports = router;   //暴露这个 router模块