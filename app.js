const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  Song = require("./models/song"),
  Setlist = require("./models/setlist");

mongoose.connect(
  "mongodb://localhost/setlist_generator",
  { useNewUrlParser: true }
);
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// PRE DB

const band = "The Schwam";

// HOME - Will be a band directory. Like asana "Teams"
app.get("/", function(req, res) {
  res.render("index", { band, band });
});

// SETLIST INDEX
app.get("/setlists", function(req, res) {
  Setlist.find({}, function(err, setlists) {
    if (err) {
      console.log(err);
    } else {
      res.render("setlists", { setlists: setlists, band: band });
    }
  });
});

app.post("/setlists", function(req, res) {
  const venue = req.body.venue;
  const date = req.body.date;
  const newSetlist = { venue: venue, date: date };
  Setlist.create(newSetlist, function(err, setlist) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/setlists");
    }
  });
});

app.get("/setlists/:id", function(req, res) {
  Setlist.findById(req.params.id, function(err, setlist) {
    if (err) {
      console.log(err);
    } else {
      res.render("setlist", { setlist, setlist });
    }
  });
});

app.get("/new-setlist", function(req, res) {
  res.render("new-setlist", { band: band });
});

// SONG INDEX
app.get("/songs", function(req, res) {
  Song.find({}, function(err, songs) {
    if (err) {
      console.log(err);
    } else {
      res.render("songs", { songs: songs, band: band });
    }
  });
});

app.post("/songs", function(req, res) {
  const title = req.body.title;
  const newSong = { title: title };
  Song.create(newSong, function(err, song) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/songs");
    }
  });
});

app.get("/songs/:id", function(req, res) {
  Song.findById(req.params.id, function(err, song) {
    if (err) {
      console.log(err);
    } else {
      res.render("song", { song, song });
    }
  });
});

app.get("/new-song", function(req, res) {
  res.render("new-song");
});

app.listen(3000, process.env.IP, function() {
  console.log("Server started");
});
