const Song = require('../models/Song');
const {mongooseToObject, mutipleMongoooseToObject} = require("../../util/mongoose");
const { Promise } = require('mongoose');

class MeController {

  //[GET] me/stored/song
  storedSongs(req, res, next) {

    Promise.all([Song.find({}),Song.countDocumentsDeleted({})])
      .then(([songs,deletedCount]) => {
        res.render('me/stored-songs',{
          deletedCount,
          songs : mutipleMongoooseToObject(songs)
        }) 
      })
      .catch(next);

    // Song.countDocumentsDeleted({})
    // .then((deletedCount) => {
    //   console.log(deletedCount);
    // })
    // .catch(() => {});


    // Song.find({})
    //   .then(songs => res.render('me/stored-songs',{
    //       songs : mutipleMongoooseToObject(songs)
    //   } 
    //   ))
    //   .catch(next);
  }

  //[GET] me/trash/song
  trashSongs(req, res, next) {
    Song.findDeleted({})
      .then(songs => res.render('me/trash-songs',{
          songs : mutipleMongoooseToObject(songs)
      } 
      ))
      .catch(next);
  }
}

module.exports = new MeController;
