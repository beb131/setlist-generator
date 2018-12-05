const mongoose = require("mongoose");

const setlistSchema = new mongoose.Schema({
  bandName: {
    type: String,
    default: "The Schwam"
  },
  venue: {
    type: String,
    required: "Venue name cannot be blank"
  },
  date: {
    type: String,
    required: "Date cannot be blank"
  },
  songList: Array,
  sets: Number,
  setDuration: Number
});

module.exports = mongoose.model("Setlist", setlistSchema);
