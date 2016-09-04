var http = require('http');

http.createServer(function(request, response) {
  if (request.method == 'POST') {

    request.on('data', function(data) {
      response.write(data.toString().toUpperCase());
    });
  }
}).listen(process.argv[2]);
