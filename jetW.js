var fs = require('fs');
var fileName = __dirname + '/kas.txt';

// Create the test file (this is sync on purpose)
fs.writeFileSync(fileName, 'initial test text', 'utf8');


console.log("Starting...");

// Read async
fs.readFile(fileName, 'utf8', function(err, data) {
    var msg = "";
    if(err)
        console.log("first read returned error: ", err);
    else {
        if (data === null) 
            console.log("first read returned NULL data!");
        else if (data === "") 
            console.log("first read returned EMPTY data!");
        else
            console.log("first read returned data: ", data);
    }
});


// Write async
fs.writeFile(fileName, 'updated text', 'utf8', function(err) {
    var msg = "";
    if(err)
        console.log("write finished with error: ", err);
    else
        console.log("write finished OK");
});
