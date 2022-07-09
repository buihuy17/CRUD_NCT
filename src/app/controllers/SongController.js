const Song = require("../models/Song");
const {mongooseToObject} = require("../../util/mongoose");

class SongController {
  //[GET] /songs/:slug
  show(req, res, next) {
    //sử dụng truyền param slug chính là cái name mình đặt khi ở bên song.js
    Song.findOne({ slug : req.params.slug })
    //khi trong song k có thêm tham số nào thì k cần dấu ngoặc
      .then( song => {
          res.render('songs/show', {song : mongooseToObject(song)});
      }) 
      .catch(next);
  }

  //[GET]: /songs/create
  create(req, res, next){
    res.render('songs/create');
  }

  //[POST]: /songs/store
  store(req, res, next){
    // const formData = req.body;
    // //thêm trực tiếp field vào trong data
    req.body;
    const song = new Song(req.body);
    song.save()
      .then(() =>{
        res.redirect('/me/store/songs');
      })
      .catch(error => {

      });
  }

   //[GET]: /songs/_id/edit
   edit(req, res, next){
      // res.render('song/edit');
      //use promise to render edit
      Song.findById(req.params.id)
        .then(song => res.render('songs/edit',{
          song: mongooseToObject(song)
        }))
        .catch(next)
  }

   //[PUT]: /songs/_id
   update(req, res, next){
    Song.updateOne(
      //đối số đầu tiên chính là collection
      {_id: req.params.id},
      //đối số thứ 2 chính là Object ta muốn chỉnh sửa
      req.body
      )
        .then(() =>res.redirect('/me/stored/songs'))
        .catch(next);
  }

  //[DELETE]: /songs/_id
  delete(req, res, next){
    Song.delete({
      _id: req.params.id
    })
    .then(() => res.redirect('back'))
    .catch(next);
  }

  //[DELETE]: /songs/_id/force
  forceDelete(req, res, next){
    Song.deleteOne({
      _id: req.params.id
    })
    .then(() => res.redirect('back'))
    .catch(next);
  }

   //[PATCH]: /songs/:id/restore
  restore(req, res, next){
    Song.restore({
      _id: req.params.id
    })
    .then(() => res.redirect('back'))
    .catch(next);
  }

}

module.exports = new SongController;
