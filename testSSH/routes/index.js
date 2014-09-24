var express = require('express');
var router = express.Router();
var async = require('async');
var Connection = require('ssh2');

var respuesta;
var titulo;
function sshCon(conn,res){
	var resultado = "";
	//var conn = new Connection();
	console.log("conectando");
	

	conn.on("ready",function(){
		console.log("Connection Ready");

		conn.exec('python ftpFlow/ojs.py',function(err, stream){

			if(err) throw err;

			stream.on('exit',function(code, signal){

				console.log('Stream :: exit :: code '+code+', signal: '+signal);
				//downList = JSON.parse(respuesta);
				//console.log(downList);
				//titulo = respuesta
				res.render('index', { title: "downList.length", conten: "downList" });


			}).on('close',function(){
				console.log("Stream :: close");
				conn.end();
				//res.render('index', { title: 'pepepe' });
				

			}).on('data',function(data){
				//console.log("SDTDOUT: "+data);
				console.log("Data");
				resultado +=data;
				respuesta = resultado; 	

			}).stderr.on('data',function(data){
					console.log("STDERR: "+data);
				});
		});
	}).connect({
		host: '192.168.196.74',
		port:22,
		username:'Noticias',
		password:'adminGV'
	});
	

	console.log("Resultado: "+ resultado);
	
}

/* GET home page. */
router.get('/', function(req, res) {
  respuesta = res;
  
  var conn = new Connection();
  var tt = sshCon(conn,res);
  console.log("-----"+tt);
  //res.render('index', { title: titulo });

});


router.post('/',function(req,res){
	console.log(req.body.user.name);
	console.log(req.body);
	res.render('index', { title: "downList.length", conten: req.body});
});

router.post('/ajax',function(req,res){
	//console.log(req.body.user.name);
	console.log(req.body);
	res.send(req.body);
});
router.put('/',function(req,res){
	console.log("PUT");
	//res.render('index', { title: "downList.length", conten: req.body.user.name });
});
module.exports = router;
