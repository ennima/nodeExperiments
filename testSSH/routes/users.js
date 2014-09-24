var express = require('express');
var router = express.Router();

/* GET users listing. */

/*
router.get('/users:name', function(req, res) {
  //res.render('users', { title: "downList.length", conten: "downList" });
  res.send("<p>valor de sesion <a href='/name'>here<a/></p>");
});*/


router.get('/users', function(req, res) {
  res.render('users', { title: "downList.length", conten: "downList" });
  //res.send(req.session.name);
});
module.exports = router;
