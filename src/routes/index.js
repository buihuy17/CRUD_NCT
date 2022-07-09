const newsRouter = require("./news");
const siteRouter = require("./site");
const songRouter = require("./songs");
const meRouter = require("./me");

function route(app) {
  
  //news
  app.use("/news", newsRouter);

  
  //songs
  app.use("/songs",songRouter);

  //home+search
  app.use("/", siteRouter);

  //me
  app.use("/me",meRouter);
}

//nhớ export ra
module.exports = route;
