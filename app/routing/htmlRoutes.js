//Dependencies
//===========================
var path = require("path");

//Routing
//===========================

module.exports = function (app) {
    // HTML GET Requests
    // Get survey page or if not get the home page.

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });

}
