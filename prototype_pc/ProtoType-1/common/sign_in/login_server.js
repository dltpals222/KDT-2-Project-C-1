const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app).listen(80);

app.get("/signin", function (req, res) {
  res.sendfile("signinPage.html");
});

console.log("server is running...");
