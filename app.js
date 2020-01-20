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

app.get('/', function (req, res) {
  res.send("For Futurama quotes, visit '/futurama'");
});

app.get('/futurama', function (req, res) {
  res.send(futurama.newQuote());
});

app.listen(port, function(){
  console.log(`Server is running on port ${port}`);
});
