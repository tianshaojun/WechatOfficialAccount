var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth', function (req, res) {
  res.send('wecome to auth !!!!')
})

router.post('/reg', function (req, res) {
  console.log(req.body) //接受前端通过post提交的数据
})

module.exports = router;
