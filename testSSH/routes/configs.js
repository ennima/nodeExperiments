var express = require('express');
var router = express.Router();
var fs = require('fs');
var Connection = require('ssh2');


var jsonWorker = require('ennimaBackup/jsonWorks')
var estado = "";


var jsonCfgPath = "json/config.json";


function callRead(msg,res){
	console.log("readed json");
	//res.render('configs', { title: "Configuraciones", content: "Json Loaded" });
	//res.render('configs', { title: "Configuraciones", content: "Json Loaded" });
	console.log(msg);
	//console.log(res);
}
/* GET users listing. */
router.get('/configs', function(req, res) {
	
	//res.render('configs', { title: "Configuraciones", content: "Configuración de parametros de backup" });
	console.log("######RENDER:");
	
	console.log("message");
	console.log(jsonCfg);

	try{
		var jsonCfg = JSON.parse(fs.readFileSync(jsonCfgPath));
		
	}catch(err){
		console.error(err);
	}
	try{
		var servers = JSON.parse(fs.readFileSync("json/servers.json"));
	}catch(err){
		console.error(err);
	}
	console.log(jsonCfg);
	res.render('configs', { 
										title: "Configuraciones", 
										content: "Configuración de parametros de backup",
										origin: jsonCfg.origin,
										serversList: servers,
										destination: jsonCfg.destination, 
									    flow: jsonCfg.flow, 
									    brute: jsonCfg.brute,
									    discard: jsonCfg.discard, 
									    inteligent: jsonCfg.inteligent, 
									    daemons: jsonCfg.daemons

									});
	var name = "server2";
	var k;
	for(k = 0; k < servers.length; ++k)
	{
		if(servers[k].name == name)
		{
			console.log("encontrado");
			
			//break;
		}
		//console.log("next "+k);
	}

});

router.post('/configs',function(req, res){
	res.send("Bonito: "+JSON.stringify(req.body));
	var confObj = {};
	confObj.origin = req.body.origin;
	confObj.destination = req.body.destination;
	confObj.flow = req.body.flow;
	confObj.brute = req.body.brute;

	confObj.discard = req.body.discard;
	confObj.inteligent = req.body.inteligent;
	confObj.daemons = req.body.daemons;
	console.log("FIle svang...");
	console.log(JSON.stringify(confObj,null,4));
	fs.writeFile(jsonCfgPath,JSON.stringify(confObj,null,4),function(err){
		if(err){
			console.log(err);
		}else {
			console.log("JSON saved to"+ jsonCfgPath);
		}
	});

})

router.post('/configs/ajax', function(req, res) {
	console.log(req.body.svr_name);
	var data = req.body;
	data.consultado = "ok";
	console.log(data);
	//res.send(data);
	res.send("Chevere");
	

});
module.exports = router;
