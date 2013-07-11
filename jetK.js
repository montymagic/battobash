var PORT = 8080;
var io = require("socket.io").listen(PORT);
var fs = require("fs");

io.sockets.on('connection', function(socket) {
    console.log("Connected!");
    socket.emit('connected', { accept: true});

    console.log("Trying to send the content to a client...");
    console.log("dir", __dirname);

    fs.watch(__dirname + "/kas.txt", function(event, filename) {
        console.log("Event:", event);

        if (event == "change") {
            fs.readFile("kas.txt","UTF-8", function(err, data) {
                if (err) throw err;
                socket.emit("receiveFile", data );
                console.log("Content:", data);
            })
        }

    });

});

console.log("Application has started! Port: " + PORT);
