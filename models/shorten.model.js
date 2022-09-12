const mongoose = require("mongoose");

let shortenSchema = mongoose.Schema(
  {
    link: {
      type: String,
      require: [true, "link is required"],
    },
    shortenName: {
      type: String,
      require: [true, "Nama shorten harus diisi"],
    },
    noRekening: {
      type: String,
      require: [true, "Nomor rekening shorten harus diisi"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("shorten", shortenSchema);
