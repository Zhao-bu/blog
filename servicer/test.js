const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "w888888",
  database: "node"
});
connection.connect();

//增
function addUser(){
    var  addSql = 'INSERT INTO user(id,name) VALUES(2,?)';
    var  addSqlParams = ['哈哈哈'];
    connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }        
       console.log('--------------------------INSERT----------------------------');
       //console.log('INSERT ID:',result.insertId);        
       console.log('INSERT ID:',result);        
       console.log('-----------------------------------------------------------------\n\n');  
});
}


//删
function deleteUser(){
    var delSql = 'DELETE FROM user where id=2';
connection.query(delSql,function (err, result) {
        if(err){
          console.log('[DELETE ERROR] - ',err.message);
          return;
        }        
 
       console.log('--------------------------DELETE----------------------------');
       console.log('DELETE affectedRows',result.affectedRows);
       console.log('-----------------------------------------------------------------\n\n');  
});
}



//改
function updateUser(){
    var modSql = 'UPDATE user SET name = ? WHERE id = ?';
var modSqlParams = ['鸡根',1];
connection.query(modSql,modSqlParams,function (err, result) {
   if(err){
         console.log('[UPDATE ERROR] - ',err.message);
         return;
   }        
  console.log('--------------------------UPDATE----------------------------');
  console.log('UPDATE affectedRows',result.affectedRows);
  console.log('-----------------------------------------------------------------\n\n');
});
}


//查
function queryUser(){
    let  sql = 'SELECT * FROM user';
    connection.query(sql,function (err, result) {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    }
	data = result
   console.log('--------------------------SELECT----------------------------');
   console.log(result);
   console.log('------------------------------------------------------------\n\n');  
});
}
let  innersql = "UPDATE user SET avatar='https://avatars.githubusercontent.com/u/79249312?s=48&v=4' WHERE id='4';" 
    connection.query(innersql,function (err, result) {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    }
	data = result
   console.log('--------------------------SELECT----------------------------');
   console.log(result);
   console.log('------------------------------------------------------------\n\n');  
});

let  sql = "SELECT * FROM user"
    connection.query(sql,function (err, result) {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    }
	data = result
   console.log('--------------------------SELECT----------------------------');
   console.log(result);
   console.log('------------------------------------------------------------\n\n');  
});
connection.end();
