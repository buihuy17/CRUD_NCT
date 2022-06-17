const newsRouter = require("./news");
const siteRouter = require("./site");
const songRouter = require("./songs");

function route(app) {
  
  //news
  app.use("/news", newsRouter);

  
  //songs
  app.use("/songs",songRouter);

  //home+search
  app.use("/", siteRouter);

}

//nhớ export ra
module.exports = route;
