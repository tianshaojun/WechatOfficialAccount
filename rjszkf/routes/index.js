var express = require('express');
var router = express.Router();
var UserModel = require('../db/models/UserModel');
var sha1 = require('sha1');
var { sign } = require('../utils/sign.js')
// import { sign } from '../utils/sign.js'

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//验证token
router.get('/auth', function (req, res) {
  let { signature, timestamp, nonce, echostr } = req.query;
  //let timestamp = '1409304348';
  //let nonce = '872345';
  let token = 'szkf2022jszxqdxztsj';
  let array = [timestamp, nonce, token];
  array.sort();  //字典排序
  let str = array.join('');
  let resultStr = sha1(str);  //对字符串进行sha1加密
  if (resultStr == signature) {
    //res.set('Content-Type', 'text/plain')
    res.set('Content-Type', "application/json;charset=UTF-8");
    res.send(echostr);
  } else {
    res.send('Error!!!!!');
  }
});

//jsapi接口
router.get('/jsapi', async function (req, res) {
  let url = decodeURIComponent(req.query.url);
  let conf = await sign(url);
  // console.log('conf', conf);
  res.send(conf);
})


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

module.exports = router


