// var http = require("http");


// http.createServer((req, res) => {
//   res.setHeader("Content-type", "text/html");
//   res.writeHead(200);

//   res.write(messages);
//   res.end();
// }).listen(8080);
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var app = express();

app.use(express.static(__dirname + "/www"));
app.use(methodOverride());

//如果是angular的话可用app.get("*")
app.get("/", (req, res) => {
  res.sendFile("./www/index.html");
  // myLog(req, res);
})
app.listen(2000);
