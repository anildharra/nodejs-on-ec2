var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Anil Kumar Panchal on Cloud'); //write a response to the client
  res.end(); //end the response
}).listen(4001); //the server object listens on port 4001
