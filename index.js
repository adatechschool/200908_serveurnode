
/*
var http = require('http');

var server = http.createServer(function(req, res) {
	console.log('requête reçue');
	res.writeHead(200);
	res.end('Coucou');
});

server.listen(8080);

*/

var http = require('http');

function requestListener(request, response) {
	response.writeHead(200);
	response.end('Coucou');

	console.log("Ceci est une requete",  request.method);

	if (request.method === 'GET') {
		console.log('requête reçue');
	} else if (request.method === 'POST') {
		console.log('no puedo');
	} else if (request.method != 'GET' && request.method != 'POST') {
		console.log('Me gusta Alya');
	}
};

var server = http.createServer(requestListener);

server.listen(8080);
