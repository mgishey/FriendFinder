//Linking to the array of friends

var friendsData = require("../data/friends");

// ROUTING
module.exports = function (app) {

    // When a user visits (localhost:8080/api/friends)
    // they are shown a JSON of the data in friends.js

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body
        console.log("New Friend: " + JSON.stringify(newFriend));

        // Add a new friend to friends array
        friendsData.push(newFriend);

        // Get new friend scores
         var newScores = newFriend.scores;
        console.log("User Scores: " + newScores);

        // Compatiblity code goes here and is then sent back
        // to the user on the survey.html page
        
    



    });
}