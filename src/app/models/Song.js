//import mongoose
const mongoose = require('mongoose');
// và Schema
const Schema = mongoose.Schema;

//define Songs
const Song = new Schema({
    name: {type: String, maxlength: 255}, //có tối thiểu 1 kí tự ,tối đa 255
    description: {type: String,  maxlength: 600},
    image: {type: String, maxlength: 255},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
  });

module.exports = mongoose.model('Song', Song);
