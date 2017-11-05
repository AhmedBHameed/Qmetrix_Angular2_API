var express 	= require('express');
var path 	= require('path');
// var https 	= require('https');
// var fs = require('fs');
var app = express();

const port = process.env.PORT || 8080;
// const key = fs.readFileSync('./server.key'),
// 	  cert = fs.readFileSync('./server.crt');
// var httpsOptions = {
// 	ca: [key, cert],
// 	key: key,
// 	cert: cert
// }

app.set('port', port);
app.use(express.static(__dirname + '/public'));
app.get('/[^\.]+s', function(req, res){
	res.set('Content-Type', "text/html")
		.sendFile(path.join(__dirname, '/public/index.html'))
});

app.listen(app.get('port'), function(){
		console.log("Node app is running at localhost:" + app.get('port'));
});

// https.createServer(httpsOptions, app).listen(app.get('port'), function(){
// 	console.log("Node app is running at localhost:" + app.get('port'));
//  });