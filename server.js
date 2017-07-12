var express = require("express");
var app = express();

//serve static file (index.html, images, css)
app.use(express.static(__dirname + '/app/views'));
app.use(express.static(__dirname + '/app/public'));

var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("App is runnig on http://localhost:" + port);
});
