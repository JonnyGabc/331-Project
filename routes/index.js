var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render(path.join(__dirname,'./public/images/index.pug'));
  res.render(express.static(path.join(__dirname,'./public/test2.html')));
});

module.exports = router;
