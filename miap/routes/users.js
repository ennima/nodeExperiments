var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res) {
  res.send('respond with a resource');
  //res.render('index', { title: listaFiles });
});

module.exports = router;
