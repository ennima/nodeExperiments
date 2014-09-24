var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/backup', function(req, res) {
  res.render('backup', { title: "downList.length", conten: "downList" });

});

module.exports = router;