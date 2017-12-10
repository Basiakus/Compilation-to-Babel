var fs = require('fs');
var http = require('http');
var server = http.createServer();

server.on('request', function(request, response) {
	response.setHeader("Content-Type", "text/html; charset=utf-8");

	if (request.method === 'GET' && request.url === '/') {

		fs.readFile('./index.html', function(err, html) {
			if (err) throw err;
			response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
			response.write(html);
			response.end();
		});
	} else {
		response.statusCode = 404;
		response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
		response.write('Nie połączyłeś się!');
		response.end();
	}
});
server.listen(9000);