var fs   = require("fs");
var mime = require("mime");

//PFRouter - Plain File Router
//Simply serve the file as is (with mime type)

function route(htdocs){
   var routefunc = function(path, response){
      //Default file
      if(path[path.length - 1] == '/'){
         path += "index.html";
      }
      var mimetype = mime.lookup(path);
      fs.readFile(htdocs + path, mime.charsets.lookup(mimetype), function(err, data){
            var code = 200;
            if(err){
               mimetype = "text/html"
               code = 404;
               data = "<h1>File not found</h1><p>Not found: " + path + "</p>";
            }
            response.writeHead(code, {"Content-Type": mimetype});
            response.write(data);
            response.end();
      });
   };
   return routefunc;
}

exports.route = route;
