const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// PRE DB

const band = "The Schwam";

const setlists = [
  {
    venue: "Tommy Fox's",
    date: "2018"
  }
];

const songs = [
  {
    title: "Smile"
  }
];

// HOME - Will be a band directory. Like asana "Teams"
app.get("/", function(req, res) {
  res.render("index");
});

// SETLIST INDEX
app.get("/setlists", function(req, res) {
  res.render("setlists", { setlists: setlists, band: band });
});

app.post("/setlists", function(req, res) {
  const venue = req.body.venue;
  const date = req.body.date;
  const newSetlist = { venue: venue, date: date };
  setlists.push(newSetlist);
  res.redirect("/setlists");
});

app.get("/new-setlist", function(req, res) {
  res.render("new-setlist", { band: band });
});

// SONG INDEX
app.get("/songs", function(req, res) {
  res.render("songs", { songs: songs, band: band });
});

app.post("/songs", function(req, res) {
  const title = req.body.title;
  const newSong = { title: title };
  songs.push(newSong);
  res.redirect("/songs");
});

app.get("/new-song", function(req, res) {
  res.render("new-song");
});

app.listen(3000, process.env.IP, function() {
  console.log("Server started");
});
