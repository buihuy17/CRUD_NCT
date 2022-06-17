const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

// [GET] /news/:slug
router.get("/:slug",newsController.show);

//newsController.index: tuyền đường match đầu tiên thì sẽ phải để cuối cùng
router.get("/", newsController.index);

module.exports = router;
