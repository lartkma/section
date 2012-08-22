var http = require("http");

function PlainServer(){
   var _server = http.createServer(function(request, response){
         response.writeHead(200, {"Content-Type": "text/html"});
         response.write("Hola mundo!");
         response.end();
   });
   this.listen = function(port){
      _server.listen(port);
   }
}

exports.PlainServer = PlainServer;
