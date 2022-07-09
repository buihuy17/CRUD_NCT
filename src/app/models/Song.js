//import mongoose
const mongoose = require('mongoose');
// và Schema
const Schema = mongoose.Schema;
//add plug-in 
const slug = require('mongoose-slug-generator');
//import mongoose-delete
const mongooseDelete = require('mongoose-delete');




//define Songs
const Song = new Schema({
    name: {type: String, require: true}, //Bắt buộc nhập tên
    description: {type: String,  maxlength: 600},
    image: {type: String, maxlength: 255},
    videoId: {type: String, maxlength: 255},
    kind: {type: String, maxlength: 255},
    // createdAt: {type: Date, default: Date.now},
    // updatedAt: {type: Date, default: Date.now},
    slug: {type: String, slug: 'name', unique: true}, //name là có gen từ chuỗi name, unique không cho 2 slug giống nhau
  },
    {
      //config để tự động tạo createdAt, updatedAt
      timestamps: true,
    }
  );

  mongoose.plugin(slug); //cách add cho thư viện
  Song.plugin(mongooseDelete, {
    deletedAt : true,
    overrideMethods: 'all',
  }); //cách add vào Schema

module.exports = mongoose.model('Song', Song);
