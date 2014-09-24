var express = require('express');
var router = express.Router();
var Ftp = require("jsftp");
var Step = require('step');
var async = require('async');
var fs = require('fs');

var ftp = new Ftp({
	host:"192.168.196.139",
	user:"mxfmovie",
	port:"21",
	pass:" ",
	debugMode:true
});

var remotePath = "/test.txt";

var data ='this is a test String';
var listaFiles = [];

/* GET home page. */
router.get('/', function(req, res) {
	var titulo = "nada";
  
	async.series([
		function first(done){
			console.log("uno");
			/*ftp.list("V:/MXF",function(err, res){
				res.forEach(function(file){
					console.log(file.name);
					listaFiles.push(file.name);

				});
				//done(null,listaFiles);
				console.log(res[0]);
				console.log(err);
				done(null,"uno")
			});*/
				jsonPath = "Z:\\Noticias\\ftpFlow\\DownloadList.json";
				fs.readFile(jsonPath,'utf8',function(err,data){
					if(err){
						return console.log(err);

					}
					newData = JSON.parse(data);
					console.log(newData[0].path);
				});
			
			//});
			done(null,"uno")
			
		},
		function second(done){
			console.log("dos");
			console.log(listaFiles[2]);
			res.render('index', { title: listaFiles });
			done(null,'second');
		}
	]);
	
	

	
});

module.exports = router;
