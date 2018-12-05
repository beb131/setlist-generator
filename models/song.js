const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Name can not be blank"
  },
  duration: String,
  bpm: Number,
  preferredOpener: {
    type: Boolean,
    default: false
  },
  preferredCloser: {
    type: Boolean,
    default: false
  },
  mood: {
    type: Array
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  isCover: Boolean
});

module.exports = mongoose.model("Song", songSchema);
