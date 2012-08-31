var http = require("http");
var url  = require("url");
var fs   = require("fs");

//CRServer - Conditional Routed Server
//Simple server with various routers given a condition

function CRServer(){
   var _routers = [];
   var _drouter = fallback;

   var _server = http.createServer(function(request, response){
         //Read path
         var path = url.parse(request.url).pathname;

         //Search in possible routers
         var found = false;
         for(var i=0, n=_routers.length; i < n && !found; i++){
            if(_routers[i].condition(path)){
               found = true;
               _routers[i].action(path, response);
            }
         }
         //Default
         if(!found){
            _drouter(path, response);
         }
   });

   this.listen = function(port){
      _server.listen(port);
   }
   this.addRouter = function(action, condition){
      if(condition == undefined)
         _drouter = action;
      else
         _routers.push({"condition": condition, "action": action});
   }
}

function fallback(path, response){
   response.writeHead(404, {"Content-Type": "text/html"});
   response.write("<h1>Server not exists</h1><p>Not found: " + path + "</p>");
   response.end();
}

exports.CRServer = CRServer;
