var http = require("http"),
// And mysql module you've just installed.
   fs = require("fs");
// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}
// Read the file and print its contents.
var fs = require('fs')
  , filename = process.argv[2];
/*fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  console.log(data)
});*/
 
// Create the http server.
http.createServer(function (request, response) {
   // Attach listener on end event.
   //request.on("end", function () {
      // Read the file.
      fs.readFile("kas.txt", 'utf-8', function (error, data) {
//       	 if (err) throw err;
 // console.log('OK: ' + filename);
  //console.log(data) 
	 // Write headers.
         //response.writeHead(200, {
         //   'Content-Type': 'text/plain'
         //});
         // Increment the number obtained from file.
         //data = parseInt(data) + 1;
         // Write incremented number to file.
         //fs.writeFile('kas.txt', data);
         // End response with some nice message.
         //response.end('This page was refreshed ' + data + ' times!');
      });
  // });
// Listen on the 8080 port.
}).listen(8080);
