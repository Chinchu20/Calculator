//jshint esversion:6

const express = require("express");  //Require express in your calculator.js
const bodyParser = require("body-parser"); //Require body-parser package

const app = express();   //Setup express
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){   //Create a root route get method with app.get()
  res.sendFile(__dirname + "/index.html");      //Send the words Hello World from the root route as the response
});   //__dirname gives current directory/path location of file

app.post("/",function(req,res){
  var num1 = Number( req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result is " + result);
});

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (height * height);
  res.send("Your BMI is " + bmi);
});

app.listen(3000,function(){
  console.log("Server started on port 3000");
});      //Spin up our server on port 3000 with app.listen
