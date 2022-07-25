const express = require("express");
const multer = require("multer");
const router = express.Router(); //可使用 express.Router 类创建模块化、可挂载的路由句柄
const mysql = require("mysql");
const db = require("../../configdb");
var fs = require("fs");

// 查询用户  http://localhost:3001/admin/user/getUser
router.post("/getUser", express.json(), (req, res) => {
  const { userId } = req.body;
  let conn = mysql.createConnection(db);
  let sql = `SELECT * FROM user WHERE id=${userId};`;
  conn.query(sql, function(err, result) {
    if (err) {
      console.log("[SELECT ERROR] - ", err.message);
      res.send({ code: 201, message: "查询失败" });
      return;
    }
    let user = result[0];
    Reflect.deleteProperty(user, "passWord");
    Reflect.deleteProperty(user, "account");
    res.send({ code: 200, message: "查询成功", data: user });
  });
  conn.end();
});

// 用户注册  http://localhost:3001/admin/user/register
router.post("/register", express.json(), (req, res) => {
  const { nickName, avatar, account, passWord } = req.body;
  let conn = mysql.createConnection(db);
  let sql = "SELECT * FROM user WHERE account='" + account + "'";
  conn.query(sql, function(err, result) {
    if (err) {
      console.log("[SELECT ERROR] - ", err.message);
      res.send({ code: 201, message: "注册失败" });
      return;
    }
    if (JSON.stringify(result) == "[]") {
      let addSql =
        "INSERT INTO user(nickName,avatar,account,passWord) VALUES(?,?,?,?);";
      let addSqlParams = [nickName, avatar, account, passWord];
      conn.query(addSql, addSqlParams, function(err, result) {
        if (err) {
          console.log("[INSERT ERROR] - ", err.message);
          res.send({ code: 200201, message: "注册失败" });
          return;
        }
        res.send({ code: 200, message: "注册成功" });
      });
      conn.end();
    } else {
      res.send({ code: 202, message: "用户名已存在" });
      conn.end();
    }
  });
});

//图片上传
router.post(
  "/upload",
  multer({
    //设置文件存储路径
    dest: "public/img"
  }).array("file", 1),
  (req, res) => {
    let files = req.files;
    let file = files[0];
    let fileInfo = {};
    let path = "public/img/" + Date.now().toString() + "_" + file.originalname;
    fs.renameSync("./public/img/" + file.filename, path);
    //获取文件基本信息
    fileInfo.type = file.mimetype;
    fileInfo.name = file.originalname;
    fileInfo.size = file.size;
    fileInfo.path = path;
    res.json({
      code: 0,
      message: "OK",
      data: fileInfo
    });
  }
);

// 编辑个人信息
router.post("/userEdit", express.json(), (req, res) => {
  const { nickName, synopsis, avatar, uid } = req.body;
  let conn = mysql.createConnection(db);
  let sql = `UPDATE user SET nickName=?,synopsis=?,avatar=? WHERE id=?;`;
  conn.query(sql, [nickName, synopsis, avatar, uid], function(err, result) {
    if (err) {
      console.log("修改失败");
      return;
    }
    let data;
    if (result.affectedRows === 1) {
      data = {
        code: 200,
        message: "修改成功"
      };
    } else {
      data = {
        code: 201,
        message: "修改失败"
      };
    }
    res.send(data);
  });
  conn.end();
});

//修改密码
router.post("/revisePass", express.json(), (req, res) => {
  const { uid, newPass, oldPass } = req.body;
  let conn = mysql.createConnection(db);
  let sql = `SELECT * FROM user WHERE id=${uid};`;
  let sqlPass = "";
  conn.query(sql, function(err, result) {
    if (err) {
      console.log("[SELECT ERROR] - ", err.message);
      res.send({ code: 201, message: "修改失败" });
      conn.end();
      return;
    }
    let user = result[0];
    sqlPass = user.passWord;
    if (sqlPass == oldPass) {
      let addSql = `UPDATE user SET passWord=? WHERE id=?;`;
      let addSqlParams = [newPass,uid];
      conn.query(addSql, addSqlParams, function(err, result) {
        if (err) {
          console.log("[INSERT ERROR] - ", err.message);
          res.send({ code: 200201, message: "修改失败" });
          return;
        }
        res.send({ code: 200, message: "修改成功" });
      });
      conn.end();
    } else {
      res.send({ code: 202, message: "旧密码错误" });
      conn.end();
    }
  });
});

// 用户登录
router.post("/login", express.json(), (req, res) => {
  const { account, passWord } = req.body;
  let conn = mysql.createConnection(db);
  let sql = "SELECT * FROM user WHERE account='" + account + "'";
  conn.query(sql, function(err, result) {
    if (err) {
      console.log("[SELECT ERROR] - ", err.message);
      return;
    }
    console.log("JSON.stringify(result)", JSON.stringify(result));
    if (JSON.stringify(result) != "[]") {
      let user = result[0];
      if (passWord == user.passWord) {
        Reflect.deleteProperty(user, "passWord");
        Reflect.deleteProperty(user, "account");
        res.send({ code: 200, message: "查询成功", data: user });
      } else {
        res.send({ code: 201, message: "密码错误" });
      }
    } else {
      res.send({ code: 202, message: "用户名不存在" });
    }
  });
  conn.end();
});

// http://localhost:3001/admin/user
router.get("/", function(req, res) {
  res.send("/");
});

module.exports = router; //暴露这个 router模块
