var http = require('http');

http.createServer(function(request, response) {
  let url_info = require('url').parse(request.url, true);
  let origin_date = new Date(url_info.query.iso);
  if (url_info.pathname == '/api/parsetime') {
    let result = {
      'hour': origin_date.getHours(),
      'minute': origin_date.getMinutes(),
      'second': origin_date.getSeconds()
    };
    response.writeHead(200, {
      'Content-Type': 'application/json'
    });
    response.end(JSON.stringify(result));
  } else if (url_info.pathname == '/api/unixtime') {
    let result = {
      'unixtime': origin_date.getTime()
    }
    response.writeHead(200, {
      'Content-Type': 'application/json'
    });
    response.end(JSON.stringify(result));
  } else {
    response.end();
  }
}).listen(process.argv[2]);
