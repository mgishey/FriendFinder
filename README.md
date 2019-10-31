# FriendFinder

FriendFinder is an application intended to mimic a simple dating app.  The application is run using a Node.js and express server which can be accessed by a web browser.

The user is given a survey of 10 questions and answers according to a scale from 1 (Strongly Disagree) to 5 (Strongly Agree).  When the survey is submitted the app looks for the best match among existing stored entries which is then returned via a popup.  The closest match is determined by the lowest absolute difference between the user and existing profiles for all ten questions combined.
