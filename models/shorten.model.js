const mongoose = require("mongoose");

let shortenSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      require: [true, "link is required"],
    },
    link: {
      type: String,
      require: [true, "link is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("shorten", shortenSchema);
