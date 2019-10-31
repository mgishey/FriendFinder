//Linking to the array of friends

var friendsData = require("../data/friends.js");

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

        // Get new friend scores
        var newScores = newFriend.scores;
        console.log("New Scores: " + newScores);

        // Compatiblity code goes here and is then sent back
        // to the user on the survey.html page


        // Set fakeDiff high so that the first entry's values are read
        // and subsequent values are compared to the preceding diff value.
        fakeDiff = 1000;

        // Loop through existing friends
        for (var i = 0; i < friendsData.length; i++) {
            var diff = 0;

            // Loop through new friend
            for (var j = 0; j < newScores.length; j++) {
                diff += Math.abs(friendsData[i].scores[j] - newScores[j]);
                // console.log("OF Score: " + friendsData[i].scores[j] +  "------ NF Score: " + newScores[j]);
                // console.log("diff: " + diff);
            }
            // console.log("Each score difference: " + diff);

            if (diff < fakeDiff) {
                fakeDiff = diff;
                matchName = friendsData[i].name;
                matchPhoto = friendsData[i].photo;

            }
        }
        // console.log("Match Name: " + matchName);
        // console.log("Match Photo: " + matchPhoto);

        res.json({ name: matchName, photo: matchPhoto });

        // Add new friend

        friendsData.push(newFriend);






    });
};