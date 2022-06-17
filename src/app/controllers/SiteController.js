const Song = require('../models/Song');
const {mongooseToObject, mutipleMongoooseToObject} = require("../../util/mongoose");

class SiteController {
  //[GET] news
  index(req, res , next) {
    //(CallBack)
    // Song.find({},function(err,songs){
    //   if(!err) {
    //     res.json(songs);
    //     return;
    //   }
    //   res.status(400).json({error : 'ERROR'});  //có lỗi chạy thằng này
    // });

    //(Promise)
    Song.find({})
      .then (songs => {
        res.render('home',{
          songs : mutipleMongoooseToObject(songs)
        });
      })
      .catch (next);
  }
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController;
