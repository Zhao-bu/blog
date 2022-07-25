var express=require('express');
var router = express.Router();   //可使用 express.Router 类创建模块化、可挂载的路由句柄
const mysql = require('mysql')
const db = require('../../configdb');

var updateUserInfo = function(){
  let sql = 'Update article,user set article.avatar= user.avatar,article.author = user.nickName where article.userId = user.id';
  const conn = mysql.createConnection(db)
  conn.query(sql,function (err, result) {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    } 
  });
  conn.end();
}

// 查询博文  http://localhost:3001/admin/article/getBlog
router.post("/getBlog",express.json(),(req, res) => {
  const {bid} = req.body;
  const conn = mysql.createConnection(db)
  let updateSql = 'Update article,user set article.avatar= user.avatar,article.author = user.nickName where article.userId = user.id';
  conn.query(updateSql,function (err, result) {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    } 
  });

  console.log(req.query)
  let  sql = bid ? `SELECT * FROM article WHERE bid=${bid};` : "SELECT * FROM article"
  conn.query(sql,function (err, result) {
  if(err){
    console.log('[SELECT ERROR] - ',err.message);
    res.send({code:201,message:'查询失败'}) 
    return;
  }
  res.send({code:200,message:'查询成功',data:result})   
});
conn.end();
})

// 博客发布  http://localhost:3001/admin/article/publish
router.post("/publish", express.json(), (req, res) => {
  const timeStamp = Date.now();
  const conn = mysql.createConnection(db)
  const {title,type,content,author,avatar,coverImg,userId} = req.body;
  let addSql = "INSERT INTO article(title,type,content,author,avatar,timeStamp,coverImg,userId) VALUES(?,?,?,?,?,?,?,?);";
  let addSqlParams = [title,type,content,author,avatar,timeStamp,coverImg,userId];
    conn.query(addSql,addSqlParams,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         res.send({code:201,message:'发布失败'}) 
         return;
        }              
       console.log('INSERT ID:',result);  
       res.send({code:200,message:'发布成功'})      
});
conn.end();
})



// http://localhost:3001/admin/article
router.get('/',function(req,res){
    res.send('/');
});
 
 
module.exports = router;   //暴露这个 router模块