const Song = require("../models/Song");
const {mongooseToObject} = require("../../util/mongoose");

class SongController {
  //[GET] /songs/:slug
  show(req, res, next) {
    //sử dụng truyền param slug chính là cái name mình đặt khi ở bên song.js
    Song.findOne({ slug : req.params.slug })
    //khi trong song k có thêm tham số nào thì k cần dấu ngoặc
      .then( song => {
          res.render('song/show', {song : mongooseToObject(song)});
      }) 
      .catch(next);
  }

  //[GET]: /songs/create
  create(req, res, next){
    res.render('song/create');
  }

  //[POST]: /songs/store
  store(req, res, next){
    console.log(req.body);
  }
}

module.exports = new SongController;
