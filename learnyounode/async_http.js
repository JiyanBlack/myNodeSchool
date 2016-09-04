var http = require('http');
var contents = [];
var completed = 0;

function get_content(i) {
  let index = i + 2;
  let this_content = [];
  http.get(process.argv[index], function(response) {
    response.on('data', data => this_content.push(data));
    response.on('end', function() {
      completed++;
      contents[i] = this_content;
      if (completed == 3) print_all();
    });
  })
}

function print_all() {
  contents.forEach(x => console.log(x.join('')));
}

for (let i = 0; i < 3; i++) {
  get_content(i);
}
