//jshint esversion:6

const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const futurama = require("./futuramaQuotes");

//use cors
app.use(cors());

//allow OPTIONS on all resources
app.options('*', cors());

//set public folder
//app.use(express.static("public"));

//set path to client-build (front end) file
app.use(express.static("public"));

//serve home route
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/routes/home.html");
});

//serve game route
app.get("/playgame", function(req, res) {
  res.sendFile(__dirname + "/routes/game.html");
});

//random quote route
app.get('/futurama', function (req, res) {
  res.send(futurama.newQuote());
});

//all quotes route - array of objects
app.get('/allquotes', function (req, res) {
  res.send(futurama.allQuotes());
});

//quotes matrix route for game
app.get('/quotesforgame', function (req, res) {
  res.send(futurama.quotesforgame);
})


app.listen(port, function(){
  console.log(`Server is running on port ${port}`);
});
