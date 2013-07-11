var http = require("http"),
// And mysql module you've just installed.
   fs = require("fs");
 
// Create the http server.
http.createServer(function (request, response) {
   // Attach listener on end event.
   request.on("end", function () {
      // Read the file.
      fs.readFile("/home/op/bash_proj/test.txt", 'utf-8', function (error, data) {
         // Write headers.
         // Increment the number obtained from file.
         // Write incremented number to file.
         // End response with some nice message.
	  
      });
   });
// Listen on the 8080 port.
}).listen(8080);
