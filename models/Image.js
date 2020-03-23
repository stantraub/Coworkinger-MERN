const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  url: {
    type: String,
    required: false
  }
//   description: {
//     type: String,
//     required: false
//   }
});

module.exports = ImageSchema;
