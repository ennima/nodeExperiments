var express = require('express');
var router = express.Router();
var Artist = require('../lib/artist');
/* GET users listing. */
router.get('/', function(req, res) {
	Artist.find({}, function(err, artists){
		if(err){
			return res.send(err);
		}
		//res.send('respond with a resource xxxx');
		res.render('artist/index',{artists: artists});
	})
  
});

module.exports = router;