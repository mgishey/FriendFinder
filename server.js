// Dependencies
//==================================================

var express = require("express");
var path = require("path");

// Express Configuration
//==================================================

var app = express();
var PORT = process.env.PORT || 8080;

// Set up the Express app to handle data parsing
//=================================================

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing
//=================================================
// Route to home page

/*
app.get("/", function (req, res){
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});
*/

//The below points our server to a series of "route" files.
require(path.join(__dirname, "/app/routing/apiRoutes"))(app);
require(path.join(__dirname, "/app/routing/htmlRoutes"))(app);


// Listener

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});