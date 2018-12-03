var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("Heyo");
});
app.listen(3000, process.env.IP, function() {
  console.log("Server started");
});
