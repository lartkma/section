var CRServer    = require("./server/CRServer").CRServer;
var PlainRouter = require("./server/PFRouter");

var server = new CRServer("http");
server.addRouter(PlainRouter.route("./http"));
server.listen(8000);
