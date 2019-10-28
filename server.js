// Dependencies

var express = require("express");
var path = require("path");

// Configuration

var app = express();
var PORT = process.env.PORT || 8080;

// Set up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing

const dirPath = path.join(__dirname, "/app/routing/");
console.log(dirPath);

app.get("/", function (req, res){
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});



//require(dirPath + "apiRoutes")(app);
//require(dirPath + "htmlRoutes")(app);

// Listener

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});