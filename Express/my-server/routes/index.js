var express = require('express');
var router = express.Router();
var UserModel = require('../db/models/UserModel');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth', function (req, res) {
  res.send('wecome to auth !!!!')
});

router.post('/reg', function (req, res) {
  console.log(req.body) //接受前端通过post提交的数据
  let { user, pwd } = req.body;
  //使用mongoose提供的方法，将user与pwd存储至数据库
  new UserModel({ //一条具体的数据
    user: user,
    pwd: pwd
  }).save().then(() => {
    res.send({ code: 1, msg: '注册成功' })
  })
});

module.exports = router;
