// We are inking our routes to a series of data sources
// This data source holds an array of friends

var friendsData = require("../data/friends");

// ROUTING
module.exports = function (app) {
    // When a user visits (localhost:8080/api/friends)
    // they are shown a JSON of the data in friends.js
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // This handles when a user submits the form to the server.
    // The JSON  is pushed  to the friendsArray
    app.post("/api/friends", function (req, res) {
        friendsData.push(req.body);

        // Compatiblity code goes here and is then sent back
        // to the user on the survey.html page



        res.json(true);
    });
}